'use strict';

const assert = require('assert');
const WhooTS = require('whoots-js');
const Coordinate = require('../geo/coordinate');

class TileCoord {
    constructor(z, x, y, w) {
        assert(!isNaN(z) && z >= 0 && z % 1 === 0);
        assert(!isNaN(x) && x >= 0 && x % 1 === 0);
        assert(!isNaN(y) && y >= 0 && y % 1 === 0);

        if (isNaN(w)) w = 0;

        this.z = +z;
        this.x = +x;
        this.y = +y;
        this.w = +w;

        // calculate id
        w *= 2;
        if (w < 0) w = w * -1 - 1;
        const dim = 1 << this.z;
        this.id = ((dim * dim * w + dim * this.y + this.x) * 32) + this.z;

        // for caching pos matrix calculation when rendering
        this.posMatrix = null;
    }

    toString() {
        return `${this.z}/${this.x}/${this.y}`;
    }

    toCoordinate(sourceMaxZoom) {
        const zoom = Math.min(this.z, sourceMaxZoom === undefined ? this.z : sourceMaxZoom);
        const tileScale = Math.pow(2, zoom);
        const row = this.y;
        const column = this.x + tileScale * this.w;
        return new Coordinate(column, row, zoom);
    }

    // given a list of urls, choose a url template and return a tile URL
    url(urls, sourceMaxZoom, scheme) {
        const bbox = WhooTS.getTileBBox(this.x, this.y, this.z);
        const quadkey = getQuadkey(this.z, this.x, this.y);

        return urls[(this.x + this.y) % urls.length]
            .replace('{prefix}', (this.x % 16).toString(16) + (this.y % 16).toString(16))
            .replace('{z}', Math.min(this.z, sourceMaxZoom || this.z))
            .replace('{x}', this.x)
            .replace('{y}', scheme === 'tms' ? (Math.pow(2, this.z) - this.y - 1) : this.y)
            .replace('{quadkey}', quadkey)
            .replace('{bbox-epsg-3857}', bbox);
    }

    // Return the coordinate of the parent tile
    parent(sourceMaxZoom) {
        if (this.z === 0) return null;

        // the id represents an overscaled tile, return the same coordinates with a lower z
        if (this.z > sourceMaxZoom) {
            return new TileCoord(this.z - 1, this.x, this.y, this.w);
        }

        return new TileCoord(this.z - 1, Math.floor(this.x / 2), Math.floor(this.y / 2), this.w);
    }

    wrapped() {
        return new TileCoord(this.z, this.x, this.y, 0);
    }

    // Return the coordinates of the tile's children
    children(sourceMaxZoom) {

        if (this.z >= sourceMaxZoom) {
            // return a single tile coord representing a an overscaled tile
            return [new TileCoord(this.z + 1, this.x, this.y, this.w)];
        }

        const z = this.z + 1;
        const x = this.x * 2;
        const y = this.y * 2;
        return [
            new TileCoord(z, x, y, this.w),
            new TileCoord(z, x + 1, y, this.w),
            new TileCoord(z, x, y + 1, this.w),
            new TileCoord(z, x + 1, y + 1, this.w)
        ];
    }
}

// Taken from polymaps src/Layer.js
// https://github.com/simplegeo/polymaps/blob/master/src/Layer.js#L333-L383

function edge(a, b) {
    if (a.row > b.row) {
        const t = a;
        a = b;
        b = t;
    }
    return {
        x0: a.column,
        y0: a.row,
        x1: b.column,
        y1: b.row,
        dx: b.column - a.column,
        dy: b.row - a.row
    };
}

function scanSpans(e0, e1, ymin, ymax, scanLine) {
    const y0 = Math.max(ymin, Math.floor(e1.y0));
    const y1 = Math.min(ymax, Math.ceil(e1.y1));

    // sort edges by x-coordinate
    if ((e0.x0 === e1.x0 && e0.y0 === e1.y0) ?
        (e0.x0 + e1.dy / e0.dy * e0.dx < e1.x1) :
        (e0.x1 - e1.dy / e0.dy * e0.dx < e1.x0)) {
        const t = e0;
        e0 = e1;
        e1 = t;
    }

    // scan lines!
    const m0 = e0.dx / e0.dy;
    const m1 = e1.dx / e1.dy;
    const d0 = e0.dx > 0; // use y + 1 to compute x0
    const d1 = e1.dx < 0; // use y + 1 to compute x1
    for (let y = y0; y < y1; y++) {
        const x0 = m0 * Math.max(0, Math.min(e0.dy, y + d0 - e0.y0)) + e0.x0;
        const x1 = m1 * Math.max(0, Math.min(e1.dy, y + d1 - e1.y0)) + e1.x0;
        scanLine(Math.floor(x1), Math.ceil(x0), y);
    }
}

function scanTriangle(a, b, c, ymin, ymax, scanLine) {
    let ab = edge(a, b),
        bc = edge(b, c),
        ca = edge(c, a);

    let t;

    // sort edges by y-length
    if (ab.dy > bc.dy) {
        t = ab;
        ab = bc;
        bc = t;
    }
    if (ab.dy > ca.dy) {
        t = ab;
        ab = ca;
        ca = t;
    }
    if (bc.dy > ca.dy) {
        t = bc;
        bc = ca;
        ca = t;
    }

    // scan span! scan span!
    if (ab.dy) scanSpans(ca, ab, ymin, ymax, scanLine);
    if (bc.dy) scanSpans(ca, bc, ymin, ymax, scanLine);
}

TileCoord.cover = function(z, bounds, actualZ, renderWorldCopies) {
    if (renderWorldCopies === undefined) {
        renderWorldCopies = true;
    }
    const tiles = 1 << z;
    const t = {};

    function scanLine(x0, x1, y) {
        let x, w, wx, coord;
        if (y >= 0 && y <= tiles) {
            for (x = x0; x < x1; x++) {
                w = Math.floor(x / tiles);
                wx = (x % tiles + tiles) % tiles;
                if (w === 0 || renderWorldCopies === true) {
                    coord = new TileCoord(actualZ, wx, y, w);
                    t[coord.id] = coord;
                }
            }
        }
    }

    // Divide the screen up in two triangles and scan each of them:
    // +---/
    // | / |
    // /---+
    scanTriangle(bounds[0], bounds[1], bounds[2], 0, tiles, scanLine);
    scanTriangle(bounds[2], bounds[3], bounds[0], 0, tiles, scanLine);

    return Object.keys(t).map((id) => {
        return t[id];
    });
};

// Parse a packed integer id into a TileCoord object
TileCoord.fromID = function(id) {
    const z = id % 32,
        dim = 1 << z;
    const xy = ((id - z) / 32);
    const x = xy % dim,
        y = ((xy - x) / dim) % dim;
    let w = Math.floor(xy / (dim * dim));
    if (w % 2 !== 0) w = w * -1 - 1;
    w /= 2;
    return new TileCoord(z, x, y, w);
};

function getQuadkey(z, x, y) {
    let quadkey = '',
        mask;
    for (let i = z; i > 0; i--) {
        mask = 1 << (i - 1);
        quadkey += ((x & mask ? 1 : 0) + (y & mask ? 2 : 0));
    }
    return quadkey;
}

module.exports = TileCoord;