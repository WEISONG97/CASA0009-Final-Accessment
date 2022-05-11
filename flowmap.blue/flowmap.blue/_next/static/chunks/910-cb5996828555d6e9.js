(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [910], {
        31606: function(e, n, t) {
            "use strict";
            t.d(n, {
                _U: function() {
                    return c
                },
                t6: function() {
                    return l
                },
                m1: function() {
                    return u
                },
                Ap: function() {
                    return s
                }
            });
            var r = t(99560),
                o = t.n(r);

            function i(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        i(e, n, t[n])
                    }))
                }
                return e
            }
            var c = "flows",
                l = "[a-zA-Z0-9-_]{44}",
                u = function(e) {
                    return o()(e).substr(0, 7)
                },
                s = function(e, n, t, r) {
                    var o = n && n !== c ? u(n) : void 0;
                    return {
                        pathname: o ? "/[id]/[sheet]".concat(t ? "/embed" : "") : "/[id]".concat(t ? "/embed" : ""),
                        query: a({}, r, {
                            id: e
                        }, o ? {
                            sheet: o
                        } : {})
                    }
                }
        },
        51664: function(e, n, t) {
            "use strict";
            t.d(n, {
                sg: function() {
                    return s
                },
                X2: function() {
                    return f
                },
                e2: function() {
                    return d
                },
                Do: function() {
                    return v
                },
                xu: function() {
                    return p
                },
                kS: function() {
                    return m
                },
                Dx: function() {
                    return g
                },
                dk: function() {
                    return y
                },
                Vw: function() {
                    return b
                },
                fI: function() {
                    return E
                }
            });
            var r = t(31666),
                o = t(65746);

            function i(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function a() {
                var e = i(["\n  font-weight: bold;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]);
                return a = function() {
                    return e
                }, e
            }

            function c() {
                var e = i(["\n  max-height: 155px;\n  overflow: auto;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function l() {
                var e = i(["\n  font-weight: bold;\n  font-size: 13px;\n"]);
                return l = function() {
                    return e
                }, e
            }

            function u() {
                var e = i(["\n  font-size: 12px;\n"]);
                return u = function() {
                    return e
                }, e
            }
            var s = r.Z.div((function(e) {
                    var n, t = e.spacing,
                        r = void 0 === t ? 0 : t,
                        o = e.padding,
                        i = void 0 === o ? 0 : o;
                    return "\n  display: flex;\n  flex-direction: column;\n  padding: ".concat((n = i, "number" === typeof n ? "".concat(i, "px") : i), ";\n  & > * + * { margin-top: ").concat(r, "px; }\n")
                })),
                f = r.Z.div((function(e) {
                    var n = e.spacing;
                    return "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  & > * + * { margin-left: ".concat(void 0 === n ? 0 : n, "px; }\n")
                })),
                d = r.Z.div((function(e) {
                    var n = e.top,
                        t = e.left,
                        r = e.right,
                        o = e.bottom;
                    return "\n  position: absolute;\n  ".concat(null != n ? "top: ".concat(n, "px;") : "", "\n  ").concat(null != t ? "left: ".concat(t, "px;") : "", "\n  ").concat(null != r ? "right: ".concat(r, "px;") : "", "\n  ").concat(null != o ? "bottom: ".concat(o, "px;") : "", "\n")
                })),
                h = function(e) {
                    return "\n  background: ".concat(e.darkMode ? o.wL.DARK_GRAY5 : "rgba(255, 255, 255, 0.9)", ";\n  border-radius: 4px;\n  font-size: 11px;\n  box-shadow: 0 0 5px #aaa; \n")
                },
                v = r.Z.div(h),
                p = (0, r.Z)(d)(h),
                m = (0, r.Z)(p)((function(e) {
                    var n = e.darkMode;
                    return "\n  line-height: 1.3;\n  font-size: 13px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  a,\n  a:visited {\n    color: ".concat(n ? o.wL.GRAY5 : o.wL.GRAY2, ";\n  }\n")
                })),
                g = r.Z.div(a()),
                y = r.Z.div(c()),
                b = r.Z.div(l()),
                E = r.Z.div(u())
        },
        12028: function(e, n, t) {
            "use strict";
            var r = t(85893),
                o = t(52885),
                i = t(41664),
                a = (t(67294), t(31666)),
                c = t(51664);
            var l = o.eL.primary,
                u = a.Z.div((function(e) {
                    var n, t, r, o = e.fontSize,
                        i = e.collapseWidth;
                    return n = {
                        fontSize: o,
                        color: "#fff",
                        fontWeight: "bold",
                        textShadow: "1px -1px 1px ".concat(l, ", \n    1px 1px 1px ").concat(l, ", \n    -1px -1px 1px ").concat(l, ", \n    -1px 1px 1px ").concat(l)
                    }, t = "@media (max-width: ".concat(i, "px)"), r = {
                        display: "none"
                    }, t in n ? Object.defineProperty(n, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[t] = r, n
                }));
            n.Z = function(e) {
                var n = e.fontSize,
                    t = void 0 === n ? 25 : n,
                    o = e.collapseWidth,
                    a = void 0 === o ? 525 : o,
                    l = e.embed,
                    s = e.showText,
                    f = void 0 === s || s,
                    d = Math.ceil(1.5 * t),
                    h = (0, r.jsxs)(c.X2, {
                        spacing: t / 5,
                        children: [(0, r.jsx)("svg", {
                            width: d,
                            height: d,
                            viewBox: "-20 -20 432 432",
                            children: (0, r.jsxs)("g", {
                                transform: "translate(1 1)",
                                stroke: "none",
                                strokeWidth: 1,
                                fill: "none",
                                fillRule: "evenodd",
                                children: [(0, r.jsx)("circle", {
                                    stroke: "#979797",
                                    fill: "#1A70A7",
                                    cx: 200,
                                    cy: 200,
                                    r: 200
                                }), (0, r.jsx)("path", {
                                    d: "M265.5 199.045h42.545L216.5 320.411V84.5h49v114.545zM135.5 202.955H92.955L184.5 81.589V317.5h-49V202.955z",
                                    strokeOpacity: .937273551,
                                    stroke: "#FFF",
                                    strokeWidth: 13,
                                    strokeLinejoin: "round"
                                })]
                            })
                        }), f ? (0, r.jsx)(u, {
                            collapseWidth: a,
                            fontSize: t,
                            children: "flowmap.blue"
                        }) : null]
                    });
                return l ? (0, r.jsx)("a", {
                    href: "https://flowmap.blue",
                    style: {
                        textDecoration: "none"
                    },
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: h
                }) : (0, r.jsx)(i.default, {
                    href: "/",
                    children: (0, r.jsx)("div", {
                        style: {
                            textDecoration: "none",
                            cursor: "pointer"
                        },
                        children: h
                    })
                })
            }
        },
        52885: function(e, n, t) {
            "use strict";
            t.d(n, {
                eL: function() {
                    return r
                },
                bT: function() {
                    return C
                },
                R: function() {
                    return M
                },
                Nt: function() {
                    return N
                },
                ZP: function() {
                    return k
                }
            });
            var r, o = t(40403),
                i = t(57237),
                a = t(83267),
                c = t(42320),
                l = t(35369),
                u = t(44359),
                s = t(70590),
                f = t(87799),
                d = t(41225),
                h = t(11250),
                v = t(21961),
                p = t(42109),
                m = t(16009),
                g = t(8634),
                y = t(82588),
                b = t(46610),
                E = t(78628),
                x = t(74636),
                O = t(89661),
                T = t(47302),
                w = t(34893),
                S = t(74250),
                A = t(55128),
                j = t(88124),
                L = t(80241),
                _ = function(e) {
                    return e[e.length - 1]
                };
            ! function(e) {
                e.primary = "#137CBD"
            }(r || (r = {}));
            var R = "rgba(240,240,240,0.5)",
                C = [R, r.primary],
                I = function(e) {
                    return (0, w.Z)(0, 21).map((function(n) {
                        return e(n / 20)
                    })).reverse()
                },
                M = {
                    Default: C,
                    Blues: _(o.r),
                    BluGrn: ["#c4e6c3", "#96d2a4", "#6dbc90", "#4da284", "#36877a", "#266b6e", "#1d4f60"],
                    BluYl: ["#f7feae", "#b7e6a5", "#7ccba2", "#46aea0", "#089099", "#00718b", "#045275"],
                    BrwnYl: ["#ede5cf", "#e0c2a2", "#d39c83", "#c1766f", "#a65461", "#813753", "#541f3f"],
                    BuGn: _(i.r),
                    BuPu: _(a.r),
                    Burg: ["#ffc6c4", "#f4a3a8", "#e38191", "#cc607d", "#ad466c", "#8b3058", "#672044"],
                    BurgYl: ["#fbe6c5", "#f5ba98", "#ee8a82", "#dc7176", "#c8586c", "#9c3f5d", "#70284a"],
                    Cool: I(c.H7),
                    DarkMint: ["#d2fbd4", "#a5dbc2", "#7bbcb0", "#559c9e", "#3a7c89", "#235d72", "#123f5a"],
                    Emrld: ["#d3f2a3", "#97e196", "#6cc08b", "#4c9b82", "#217a79", "#105965", "#074050"],
                    GnBu: _(l.r),
                    Greens: _(u.r),
                    Greys: _(s.r),
                    Inferno: I(f.yy),
                    Magenta: ["#f3cbd3", "#eaa9bd", "#dd88ac", "#ca699d", "#b14d8e", "#91357d", "#6c2167"],
                    Magma: I(f.uX),
                    Mint: ["#e4f1e1", "#b4d9cc", "#89c0b6", "#63a6a0", "#448c8a", "#287274", "#0d585f"],
                    Oranges: _(d.r),
                    OrRd: _(h.r),
                    OrYel: ["#ecda9a", "#efc47e", "#f3ad6a", "#f7945d", "#f97b57", "#f66356", "#ee4d5a"],
                    Peach: ["#fde0c5", "#facba6", "#f8b58b", "#f59e72", "#f2855d", "#ef6a4c", "#eb4a40"],
                    Plasma: I(f.zD),
                    PinkYl: ["#fef6b5", "#ffdd9a", "#ffc285", "#ffa679", "#fa8a76", "#f16d7a", "#e15383"],
                    PuBu: _(v.r),
                    PuBuGn: _(p.r),
                    PuRd: _(m.r),
                    Purp: ["#f3e0f7", "#e4c7f1", "#d1afe8", "#b998dd", "#9f82ce", "#826dba", "#63589f"],
                    Purples: _(g.r),
                    PurpOr: ["#f9ddda", "#f2b9c4", "#e597b9", "#ce78b3", "#ad5fad", "#834ba0", "#573b88"],
                    RdPu: _(y.r),
                    RedOr: ["#f6d2a9", "#f5b78e", "#f19c7c", "#ea8171", "#dd686c", "#ca5268", "#b13f64"],
                    Reds: _(b.r),
                    Sunset: ["#f3e79b", "#fac484", "#f8a07e", "#eb7f86", "#ce6693", "#a059a0", "#5c53a5"],
                    SunsetDark: ["#fcde9c", "#faa476", "#f0746e", "#e34f6f", "#dc3977", "#b9257a", "#7c1d6f"],
                    Teal: ["#d1eeea", "#a8dbd9", "#85c4c9", "#68abb8", "#4f90a6", "#3b738f", "#2a5674"],
                    TealGrn: ["#b0f2bc", "#89e8ac", "#67dba5", "#4cc8a3", "#38b2a3", "#2c98a0", "#257d98"],
                    Viridis: I(f.ZP),
                    Warm: I(c.s7),
                    YlGn: _(E.r),
                    YlGnBu: _(x.r),
                    YlOrBr: _(O.r),
                    YlOrRd: _(T.r)
                },
                N = Object.keys(M),
                P = {
                    negative: {
                        flows: {
                            scheme: [R, "#17a5be"]
                        }
                    },
                    positive: {
                        flows: {
                            scheme: [R, "#f52020"]
                        }
                    },
                    locationAreas: {
                        outline: "rgba(92,112,128,0.5)",
                        normal: "rgba(220,220,220,0.5)"
                    },
                    outlineColor: "rgb(230,233,237)"
                };

            function k(e, n, t, r, o, i, a) {
                if (n) return P;
                var c = t && M[t] || C;
                r && (c = c.slice().reverse());
                var l = (0, w.Z)(0, Math.max(10, c.length)),
                    u = l.length - 1,
                    s = (0, S.ZP)((0, j.hD)(c)).domain([0, u]);
                if (o && 0 !== i) {
                    var f = (0, A.ZP)().exponent(1.5).domain([u, 0]).range([0, (a ? 2.5 : 2) * i / 100]);
                    c = l.map((function(e, n) {
                        var t = s(n),
                            o = f(n);
                        if (null == t || null == o) return "#000";
                        var i = (0, L.Uc)(t);
                        return i.l = r ? i.l - i.l * o : i.l + (100 - i.l) * o, i.c = i.c - i.c * (o / 4), i.toString()
                    }))
                } else c = l.map((function(e, n) {
                    return s(n)
                }));
                return {
                    flows: {
                        scheme: c
                    },
                    locationCircles: {
                        outgoing: r ? "#000" : "#fff"
                    },
                    outlineColor: r ? "#000" : "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        93004: function(e, n, t) {
            "use strict";
            t.d(n, {
                RV: function() {
                    return ar.Z
                },
                gs: function() {
                    return Pn
                },
                eL: function() {
                    return Pe.eL
                },
                sg: function() {
                    return y.sg
                },
                Vy: function() {
                    return r
                },
                g5: function() {
                    return Ie
                },
                NY: function() {
                    return li
                },
                TK: function() {
                    return Ee
                },
                TR: function() {
                    return ri.Z
                },
                h_: function() {
                    return ci
                },
                X2: function() {
                    return y.X2
                },
                ZP: function() {
                    return ui
                },
                f3: function() {
                    return $t
                },
                NG: function() {
                    return ti
                }
            });
            var r, o = t(85893),
                i = t(45668),
                a = t(17413),
                c = t(22260),
                l = t(67294),
                u = t(36377),
                s = t(38105),
                f = t(86242),
                d = t(65746),
                h = t(2609),
                v = t(5526),
                p = t(15360),
                m = t(11740),
                g = t(78866),
                y = t(51664);
            ! function(e) {
                e.TITLE = "title", e.DESCRIPTION = "description", e.AUTHOR_NAME = "createdBy.name", e.AUTHOR_URL = "createdBy.url", e.SOURCE_NAME = "source.name", e.SOURCE_URL = "source.url", e.MAP_BBOX = "map.bbox", e.IGNORE_ERRORS = "ignore.errors", e.MAPBOX_ACCESS_TOKEN = "mapbox.accessToken", e.MAPBOX_MAP_STYLE = "mapbox.mapStyle", e.COLORS_SCHEME = "colors.scheme", e.COLORS_DARK_MODE = "colors.darkMode", e.ANIMATE_FLOWS = "animate.flows", e.FADE_AMOUNT = "fadeAmount", e.BASE_MAP_OPACITY = "baseMapOpacity", e.CLUSTER_ON_ZOOM = "clustering", e.HIDE_DATA_LINK = "dataLink.hide", e.FLOWS_SHEETS = "flows.sheets"
            }(r || (r = {}));
            var b = function(e) {
                    return e.time
                },
                E = function(e) {
                    return +e.count || 0
                },
                x = function(e) {
                    return e.origin
                },
                O = function(e) {
                    return e.dest
                },
                T = function(e) {
                    return e.id
                },
                w = function(e) {
                    return S(e) ? e.centroid : [e.lon, e.lat]
                };

            function S(e) {
                return void 0 !== e.zoom
            }
            var A = t(31666),
                j = t(42957);

            function L(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function _() {
                var e = L(["\n  font-weight: bold;\n  margin-bottom: 5px;\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function R() {
                var e = L(["\n  font-size: 9px;\n  opacity: 0.3;\n  margin-top: 0.75em;\n  text-align: center;\n"]);
                return R = function() {
                    return e
                }, e
            }

            function C() {
                var e = L(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);
                return C = function() {
                    return e
                }, e
            }

            function I() {
                var e = L(["\n  display: flex;\n  flex-grow: 1;\n  opacity: 0.7;\n  margin-right: 10px;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function M() {
                var e = L(["\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-end;\n"]);
                return M = function() {
                    return e
                }, e
            }
            var N = A.Z.div((function(e) {
                    var n = e.width;
                    return "\n  font-size: 10px;\n  width: ".concat(n, "px;\n  display: flex;\n  flex-direction: column;\n  & > * + * {\n    margin-top: 2px;    \n  }\n")
                })),
                P = A.Z.div(_()),
                k = A.Z.div(R()),
                D = A.Z.div(C()),
                Z = A.Z.div(I()),
                F = A.Z.div(M()),
                G = j.WU(",.0f"),
                B = function(e) {
                    var n = e.locationInfo,
                        t = e.isSelected,
                        r = e.isSelectionEmpty,
                        i = e.config,
                        a = n.object,
                        c = n.totalIn,
                        l = n.totalOut,
                        u = n.totalWithin;
                    return (0, o.jsxs)(N, {
                        width: 150,
                        children: [(0, o.jsx)(P, {
                            children: a.name || a.id
                        }), (0, o.jsxs)(D, {
                            children: [(0, o.jsx)(Z, {
                                children: i["msg.locationTooltip.incoming"]
                            }), (0, o.jsx)(F, {
                                children: G(c)
                            })]
                        }), (0, o.jsxs)(D, {
                            children: [(0, o.jsx)(Z, {
                                children: i["msg.locationTooltip.outgoing"]
                            }), (0, o.jsx)(F, {
                                children: G(l)
                            })]
                        }), (0, o.jsxs)(D, {
                            children: [(0, o.jsx)(Z, {
                                children: i["msg.locationTooltip.internal"]
                            }), (0, o.jsx)(F, {
                                children: G(u)
                            })]
                        }), (0, o.jsx)(k, {
                            children: t ? "Click to remove from selection" : r ? "Click to select this location" : "Shift+click to add to selection"
                        })]
                    })
                },
                z = function(e) {
                    var n = e.flow,
                        t = e.origin,
                        r = e.dest,
                        i = e.config;
                    return (0, o.jsxs)(N, {
                        width: 150,
                        children: [(0, o.jsxs)(P, {
                            children: [t.name || t.id, " \u2192 ", r.name || r.id]
                        }), (0, o.jsxs)(D, {
                            children: [(0, o.jsx)(Z, {
                                children: i["msg.flowTooltip.numOfTrips"]
                            }), (0, o.jsx)(F, {
                                children: G(E(n))
                            })]
                        })]
                    })
                },
                U = t(32281);

            function H(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Y() {
                var e, n, t = (e = ["\n  pointer-events: none;\n  background: #224455;\n  color: #fff;\n  border-radius: 5px;\n  padding: 7px;\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return Y = function() {
                    return t
                }, t
            }
            var W = function() {
                    function e(n) {
                        ! function(e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.target = n
                    }
                    var n, t, r;
                    return n = e, (t = [{
                        key: "getBoundingClientRect",
                        value: function() {
                            var e = this.target,
                                n = e.left,
                                t = e.top,
                                r = e.width,
                                o = e.height;
                            return {
                                top: t,
                                left: n,
                                bottom: t + o,
                                right: n + r,
                                width: r,
                                height: o
                            }
                        }
                    }, {
                        key: "clientWidth",
                        get: function() {
                            return this.target.width
                        }
                    }, {
                        key: "clientHeight",
                        get: function() {
                            return this.target.height
                        }
                    }]) && H(n.prototype, t), r && H(n, r), e
                }(),
                V = A.Z.div(Y()),
                K = function(e) {
                    var n = e.target,
                        t = e.content,
                        r = e.placement;
                    return (0, o.jsx)(U.ZP, {
                        placement: r,
                        referenceElement: new W(n),
                        children: function(e) {
                            var n = e.ref,
                                r = e.style,
                                i = e.placement,
                                a = e.arrowProps;
                            return (0, o.jsxs)(V, {
                                ref: n,
                                style: r,
                                "data-placement": i,
                                children: [t, (0, o.jsx)("div", {
                                    ref: a.ref,
                                    style: a.style
                                })]
                            })
                        }
                    })
                },
                $ = t(41664);

            function X(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function q(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Q(e) {
                return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function J(e, n) {
                return !n || "object" !== te(n) && "function" !== typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function ee(e, n) {
                return (ee = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }
            var ne, te = function(e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function re(e) {
                var n = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = Q(e);
                    if (n) {
                        var o = Q(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return J(this, t)
                }
            }

            function oe() {
                var e, n, t = (e = ["\n  display: flex;\n  justify-items: center;\n  flex-direction: row;\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return oe = function() {
                    return t
                }, t
            }! function(e) {
                e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT"
            }(ne || (ne = {}));
            var ie = A.Z.div(oe()),
                ae = A.Z.div((function(e) {
                    var n = e.direction,
                        t = e.collapsed,
                        r = e.width;
                    return "\n  order: ".concat(n === ne.LEFT ? 2 : 1, ";\n  overflow: hidden;\n  max-width: ").concat(t ? 0 : "".concat(r, "px"), ";\n  transition: max-width 0.15s ease-out;  \n")
                })),
                ce = A.Z.div((function(e) {
                    e.direction;
                    var n = e.width;
                    return "\n  width: ".concat(n, "px;\n")
                })),
                le = A.Z.div((function(e) {
                    var n = e.degrees;
                    return "\n  transform-origin: center;\n  transform: rotate(".concat(n, "deg);\n  transition: transform 0.15s ease-out;  \n")
                })),
                ue = A.Z.button((function(e) {
                    var n = e.collapsed,
                        t = e.direction,
                        r = e.darkMode;
                    return "\n  display: flex;\n  order: ".concat(t === ne.LEFT ? 1 : 2, ";  \n  border: none;\n  cursor: pointer;\n  align-items: center;\n  font-size: 20px;\n  padding: 0 4px;\n  background-color: ").concat(r ? d.wL.DARK_GRAY4 : d.wL.LIGHT_GRAY5, ";\n  color: #ccc;\n  border-radius: ").concat(n ? 4 : 0, "px;\n  transition: background-color 0.25s, border-radius 0.15s;  \n  &:hover {\n    background-color: ").concat(r ? d.wL.DARK_GRAY3 : d.wL.LIGHT_GRAY4, ";\n  }\n")
                })),
                se = function(e) {
                    ! function(e, n) {
                        if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), n && ee(e, n)
                    }(a, e);
                    var n, t, r, i = re(a);

                    function a() {
                        var e;
                        return X(this, a), (e = i.apply(this, arguments)).state = {
                            collapsed: null != e.props.initialCollapsed ? e.props.initialCollapsed : a.defaultProps.initialCollapsed
                        }, e.bodyRef = l.createRef(), e.handleClick = function() {
                            e.setState((function(e) {
                                return {
                                    collapsed: !e.collapsed
                                }
                            }))
                        }, e.getArrow = function() {
                            var n = e.props.direction,
                                t = e.state.collapsed;
                            switch (n) {
                                case ne.LEFT:
                                    return (0, o.jsx)(le, {
                                        degrees: t ? 180 : 360,
                                        children: "<"
                                    });
                                case ne.RIGHT:
                                    return (0, o.jsx)(le, {
                                        degrees: t ? 180 : 360,
                                        children: ">"
                                    })
                            }
                        }, e
                    }
                    return n = a, (t = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                n = e.width,
                                t = e.direction,
                                r = e.darkMode,
                                i = e.children,
                                a = this.state.collapsed;
                            return (0, o.jsxs)(ie, {
                                children: [(0, o.jsx)(ae, {
                                    ref: this.bodyRef,
                                    width: n,
                                    direction: t,
                                    collapsed: a,
                                    children: (0, o.jsx)(ce, {
                                        width: n,
                                        direction: t,
                                        children: i
                                    })
                                }), (0, o.jsxs)(ue, {
                                    darkMode: r,
                                    collapsed: a,
                                    direction: t,
                                    onClick: this.handleClick,
                                    children: [" ", this.getArrow()]
                                })]
                            })
                        }
                    }]) && q(n.prototype, t), r && q(n, r), a
                }(l.Component);
            se.defaultProps = {
                initialCollapsed: !1
            };
            var fe = t(64063),
                de = t.n(fe);

            function he() {
                var e, n, t = (e = ["\n  padding: 1em;\n  margin-top: 50px;\n  color: #fff;\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return he = function() {
                    return t
                }, t
            }
            var ve = A.Z.div(he());

            function pe(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function me() {
                var e = pe(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  height: 100%;\n  width: 100%;\n"]);
                return me = function() {
                    return e
                }, e
            }

            function ge() {
                var e = pe(["\n  margin: auto auto;\n  width: 40px;\n  height: 40px;\n"]);
                return ge = function() {
                    return e
                }, e
            }
            var ye = A.Z.div(me()),
                be = A.Z.svg(ge()),
                Ee = function() {
                    return (0, o.jsx)(ye, {
                        children: (0, o.jsx)(be, {
                            width: "402px",
                            height: "402px",
                            viewBox: "0 0 602 602",
                            children: (0, o.jsxs)("g", {
                                transform: "translate(100 100)",
                                stroke: "none",
                                strokeWidth: 1,
                                fill: "none",
                                children: [(0, o.jsx)("circle", {
                                    stroke: "#fff",
                                    fill: "#fff",
                                    opacity: .5,
                                    strokeWidth: 0,
                                    cx: 200,
                                    cy: 200,
                                    r: 300
                                }), (0, o.jsx)("circle", {
                                    stroke: "#fff",
                                    fill: "#1A70A7",
                                    strokeWidth: 0,
                                    cx: 200,
                                    cy: 200,
                                    r: 200
                                }), (0, o.jsxs)("g", {
                                    strokeOpacity: .937273551,
                                    stroke: "#FFF",
                                    strokeWidth: 23,
                                    strokeLinejoin: "round",
                                    fill: "#fff",
                                    children: [(0, o.jsx)("path", {
                                        d: "M265.5 199.045h42.545L216.5 320.411V84.5h49v114.545z",
                                        children: (0, o.jsx)("animateTransform", {
                                            attributeName: "transform",
                                            type: "translate",
                                            from: "0 -400",
                                            to: "0 400",
                                            begin: "0s",
                                            dur: "1s",
                                            repeatCount: "indefinite"
                                        })
                                    }), (0, o.jsx)("path", {
                                        d: "M135.5 202.955H92.955L184.5 81.589V317.5h-49V202.955z",
                                        children: (0, o.jsx)("animateTransform", {
                                            attributeName: "transform",
                                            type: "translate",
                                            from: "0 400",
                                            to: "0 -400",
                                            begin: "0s",
                                            dur: "1s",
                                            repeatCount: "indefinite"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                };

            function xe() {
                var e, n, t = (e = ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return xe = function() {
                    return t
                }, t
            }
            var Oe = A.Z.div(xe()),
                Te = t(61986),
                we = t(55581),
                Se = t(22222),
                Ae = (0, Se.PW)((function(e) {
                    return e.toLowerCase().match(/([^\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\s]+)/g)
                }));
            var je = t(53766),
                Le = t(29101),
                _e = t(43911);

            function Re(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            var Ce, Ie = (Re(Ce = {}, r.MAPBOX_ACCESS_TOKEN, "pk.eyJ1IjoiaWx5YWJvIiwiYSI6ImNqcXdrcThpbjAwODQ0M3FqbHg0OHR6aTQifQ.pg_UKPa08PeDU8mDBCnfRg"), Re(Ce, "msg.locationTooltip.incoming", "Incoming trips"), Re(Ce, "msg.locationTooltip.outgoing", "Outgoing trips"), Re(Ce, "msg.locationTooltip.internal", "Internal & round trips"), Re(Ce, "msg.flowTooltip.numOfTrips", "Number of trips"), Re(Ce, "msg.totalCount.allTrips", "{0} trips"), Re(Ce, "msg.totalCount.countOfTrips", "{0} of {1} trips"), Ce);

            function Me(e) {
                if (null != e) {
                    var n = e.toLowerCase();
                    if ("yes" === n || "true" === n || "1" === n) return !0
                }
                return !1
            }

            function Ne(e, n) {
                if (null != e) {
                    var t = +e;
                    if (isFinite(t)) return t
                }
                return n
            }
            var Pe = t(52885),
                ke = t(82531),
                De = t(68716),
                Ze = t(72108);

            function Fe(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ge(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function Be(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        Ge(e, n, t[n])
                    }))
                }
                return e
            }

            function ze(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || He(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ue(e) {
                return function(e) {
                    if (Array.isArray(e)) return Fe(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || He(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function He(e, n) {
                if (e) {
                    if ("string" === typeof e) return Fe(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Fe(e, n) : void 0
                }
            }
            var Ye, We, Ve, Ke = 20,
                $e = "%Y%m%dT%H%M%S",
                Xe = (0, Ze.i$)($e),
                qe = (0, Ze.Z1)($e);

            function Qe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
                return {
                    transitionDuration: e,
                    transitionInterpolator: new s.FlyToInterpolator,
                    transitionEasing: De.tw
                }
            }! function(e) {
                e.LOCATION = "location", e.FLOW = "flow"
            }(Ye || (Ye = {})),
            function(e) {
                e.ALL = "ALL", e.INCOMING = "INCOMING", e.OUTGOING = "OUTGOING", e.BETWEEN = "BETWEEN"
            }(We || (We = {})),
            function(e) {
                e.SET_VIEWPORT = "SET_VIEWPORT", e.ZOOM_IN = "ZOOM_IN", e.ZOOM_OUT = "ZOOM_OUT", e.RESET_BEARING_PITCH = "RESET_BEARING_PITCH", e.SET_HIGHLIGHT = "SET_HIGHLIGHT", e.SET_TOOLTIP = "SET_TOOLTIP", e.CLEAR_SELECTION = "CLEAR_SELECTION", e.SELECT_LOCATION = "SELECT_LOCATION", e.SET_SELECTED_LOCATIONS = "SET_SELECTED_LOCATIONS", e.SET_LOCATION_FILTER_MODE = "SET_LOCATION_FILTER_MODE", e.SET_TIME_RANGE = "SET_TIME_RANGE", e.SET_CLUSTERING_ENABLED = "SET_CLUSTERING_ENABLED", e.SET_CLUSTERING_AUTO = "SET_CLUSTERING_AUTO", e.SET_MANUAL_CLUSTER_ZOOM = "SET_MANUAL_CLUSTER_ZOOM", e.SET_ANIMATION_ENABLED = "SET_ANIMATION_ENABLED", e.SET_LOCATION_TOTALS_ENABLED = "SET_LOCATION_TOTALS_ENABLED", e.SET_ADAPTIVE_SCALES_ENABLED = "SET_ADAPTIVE_SCALES_ENABLED", e.SET_DARK_MODE = "SET_DARK_MODE", e.SET_FADE_ENABLED = "SET_FADE_ENABLED", e.SET_BASE_MAP_ENABLED = "SET_BASE_MAP_ENABLED", e.SET_FADE_AMOUNT = "SET_FADE_AMOUNT", e.SET_BASE_MAP_OPACITY = "SET_BASE_MAP_OPACITY", e.SET_COLOR_SCHEME = "SET_COLOR_SCHEME"
            }(Ve || (Ve = {}));
            var Je = function(e, n) {
                return function(e, n) {
                    switch (n.type) {
                        case Ve.SET_VIEWPORT:
                            var t = n.viewport,
                                r = n.adjustViewportToLocations;
                            return Be({}, e, {
                                viewport: Be({}, t, {
                                    zoom: Math.min(Ke, Math.max(0, t.zoom))
                                }),
                                tooltip: void 0,
                                highlight: void 0
                            }, null != r && {
                                adjustViewportToLocations: !1
                            });
                        case Ve.ZOOM_IN:
                            var o = e.viewport;
                            return Be({}, e, {
                                viewport: Be({}, o, {
                                    zoom: Math.min(Ke, 1.1 * o.zoom)
                                }),
                                tooltip: void 0,
                                highlight: void 0
                            });
                        case Ve.ZOOM_OUT:
                            var i = e.viewport;
                            return Be({}, e, {
                                viewport: Be({}, i, {
                                    zoom: Math.max(0, i.zoom / 1.1)
                                }),
                                tooltip: void 0,
                                highlight: void 0
                            });
                        case Ve.RESET_BEARING_PITCH:
                            return Be({}, e, {
                                viewport: Be({}, e.viewport, {
                                    bearing: 0,
                                    pitch: 0
                                }, Qe(500))
                            });
                        case Ve.SET_HIGHLIGHT:
                            return Be({}, e, {
                                highlight: n.highlight
                            });
                        case Ve.SET_TOOLTIP:
                            return Be({}, e, {
                                tooltip: n.tooltip
                            });
                        case Ve.CLEAR_SELECTION:
                            return Be({}, e, {
                                selectedLocations: void 0,
                                locationFilterMode: We.ALL,
                                highlight: void 0,
                                tooltip: void 0
                            });
                        case Ve.SET_SELECTED_LOCATIONS:
                            var a = n.selectedLocations;
                            return Be({}, e, a && 0 !== a.length ? {
                                selectedLocations: a
                            } : {
                                locationFilterMode: We.ALL,
                                selectedLocations: void 0
                            });
                        case Ve.SET_LOCATION_FILTER_MODE:
                            return Be({}, e, {
                                locationFilterMode: n.mode
                            });
                        case Ve.SET_TIME_RANGE:
                            return Be({}, e, {
                                selectedTimeRange: n.range
                            });
                        case Ve.SELECT_LOCATION:
                            var c, l = e.selectedLocations,
                                u = n.locationId,
                                s = n.incremental;
                            if (l) {
                                var f = l.findIndex((function(e) {
                                    return e === u
                                }));
                                f >= 0 ? ((c = l.slice()).splice(f, 1), 0 === c.length && (c = void 0)) : c = s ? Ue(l).concat([u]) : [u]
                            } else c = [u];
                            return Be({}, e, {
                                selectedLocations: c
                            }, !c && {
                                locationFilterMode: We.ALL
                            }, {
                                highlight: void 0,
                                tooltip: void 0
                            });
                        case Ve.SET_CLUSTERING_ENABLED:
                            return Be({}, e, {
                                clusteringEnabled: n.clusteringEnabled
                            });
                        case Ve.SET_CLUSTERING_AUTO:
                            return Be({}, e, {
                                clusteringAuto: n.clusteringAuto
                            });
                        case Ve.SET_ANIMATION_ENABLED:
                            return Be({}, e, {
                                animationEnabled: n.animationEnabled
                            });
                        case Ve.SET_LOCATION_TOTALS_ENABLED:
                            return Be({}, e, {
                                locationTotalsEnabled: n.locationTotalsEnabled
                            });
                        case Ve.SET_ADAPTIVE_SCALES_ENABLED:
                            return Be({}, e, {
                                adaptiveScalesEnabled: n.adaptiveScalesEnabled
                            });
                        case Ve.SET_DARK_MODE:
                            return Be({}, e, {
                                darkMode: n.darkMode
                            });
                        case Ve.SET_FADE_ENABLED:
                            return Be({}, e, {
                                fadeEnabled: n.fadeEnabled
                            });
                        case Ve.SET_BASE_MAP_ENABLED:
                            return Be({}, e, {
                                baseMapEnabled: n.baseMapEnabled
                            });
                        case Ve.SET_FADE_AMOUNT:
                            return Be({}, e, {
                                fadeAmount: n.fadeAmount
                            });
                        case Ve.SET_BASE_MAP_OPACITY:
                            return Be({}, e, {
                                baseMapOpacity: n.baseMapOpacity
                            });
                        case Ve.SET_MANUAL_CLUSTER_ZOOM:
                            return Be({}, e, {
                                manualClusterZoom: n.manualClusterZoom
                            });
                        case Ve.SET_COLOR_SCHEME:
                            return Be({}, e, {
                                colorSchemeKey: n.colorSchemeKey
                            })
                    }
                    return e
                }(e, n)
            };

            function en(e) {
                if ("string" === typeof e) {
                    var n = +e;
                    if (!isNaN(n) && isFinite(n)) return n
                }
            }

            function nn(e) {
                if ("1" === e || "0" === e) return "1" === e
            }

            function tn(e) {
                var n = globalThis.innerWidth,
                    t = globalThis.innerHeight,
                    r = (0, _e.P)(e, [n, t], void 0, void 0, 512, !0),
                    o = ze(r.center, 2);
                return {
                    width: n,
                    height: t,
                    longitude: o[0],
                    latitude: o[1],
                    zoom: r.zoom,
                    minZoom: 0,
                    maxZoom: Ke,
                    minPitch: 0,
                    maxPitch: 60,
                    bearing: 0,
                    pitch: 0,
                    altitude: 1.5
                }
            }
            var rn = tn([-180, -70, 180, 70]);

            function on(e, n) {
                var t = {
                        viewport: rn,
                        adjustViewportToLocations: !0,
                        selectedLocations: void 0,
                        locationTotalsEnabled: !0,
                        locationFilterMode: We.ALL,
                        baseMapEnabled: !0,
                        adaptiveScalesEnabled: !0,
                        animationEnabled: Me(e[r.ANIMATE_FLOWS]),
                        clusteringEnabled: Me(e[r.CLUSTER_ON_ZOOM] || "true"),
                        manualClusterZoom: void 0,
                        fadeEnabled: !0,
                        clusteringAuto: !0,
                        darkMode: Me(e[r.COLORS_DARK_MODE] || "true"),
                        fadeAmount: Ne(e[r.FADE_AMOUNT], 50),
                        baseMapOpacity: Ne(e[r.BASE_MAP_OPACITY], 75),
                        colorSchemeKey: e[r.COLORS_SCHEME],
                        selectedFlowsSheet: void 0,
                        selectedTimeRange: void 0
                    },
                    o = e[r.MAP_BBOX];
                if (o) {
                    var i = o.split(",").map(en).filter((function(e) {
                        return null != e
                    }));
                    4 === i.length && (t.viewport = tn(i), t.adjustViewportToLocations = !1)
                }
                return function(e, n) {
                    if ("string" === typeof n.s) {
                        var t = (0, ke.Bj)(n.s);
                        t.length > 0 && (e.selectedLocations = t[0])
                    }
                    if ("string" === typeof n.v) {
                        var r = (0, ke.Bj)(n.v);
                        if (r.length > 0) {
                            var o = ze(r[0].map(en), 5),
                                i = o[0],
                                a = o[1],
                                c = o[2],
                                l = o[3],
                                u = o[4];
                            null != i && null != a && null != c && (e.viewport = Be({}, e.viewport, {
                                latitude: i,
                                longitude: a,
                                zoom: c
                            }, null != l ? {
                                bearing: l
                            } : void 0, null != u ? {
                                pitch: u
                            } : void 0), e.adjustViewportToLocations = !1)
                        }
                    }
                    var s, f, d, h, v, p, m, g, y, b, E;
                    if (e.baseMapOpacity = null !== (s = en(n.bo)) && void 0 !== s ? s : e.baseMapOpacity, e.manualClusterZoom = null !== (f = en(n.cz)) && void 0 !== f ? f : e.manualClusterZoom, e.baseMapEnabled = null !== (d = nn(n.b)) && void 0 !== d ? d : e.baseMapEnabled, e.darkMode = null !== (h = nn(n.d)) && void 0 !== h ? h : e.darkMode, e.fadeEnabled = null !== (v = nn(n.fe)) && void 0 !== v ? v : e.fadeEnabled, e.fadeAmount = null !== (p = en(n.f)) && void 0 !== p ? p : e.fadeAmount, e.animationEnabled = null !== (m = nn(n.a)) && void 0 !== m ? m : e.animationEnabled, e.adaptiveScalesEnabled = null !== (g = nn(n.as)) && void 0 !== g ? g : e.adaptiveScalesEnabled, e.clusteringEnabled = null !== (y = nn(n.c)) && void 0 !== y ? y : e.clusteringEnabled, e.clusteringAuto = null !== (b = nn(n.ca)) && void 0 !== b ? b : e.clusteringAuto, e.locationTotalsEnabled = null !== (E = nn(n.lt)) && void 0 !== E ? E : e.locationTotalsEnabled, null != n.lfm && n.lfm in We && (e.locationFilterMode = n.lfm), "string" === typeof n.t) {
                        var x = n.t.split(","),
                            O = qe(x[0]),
                            T = qe(x[1]);
                        O && T && (e.selectedTimeRange = [O, T])
                    }
                    "string" === typeof n.col && Pe.Nt.includes(n.col) && (e.colorSchemeKey = n.col)
                }(t, n), t
            }
            var an = t(88625);

            function cn(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function ln(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function un(e) {
                return (un = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function sn(e, n) {
                return !n || "object" !== dn(n) && "function" !== typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function fn(e, n) {
                return (fn = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }
            var dn = function(e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function hn(e) {
                var n = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = un(e);
                    if (n) {
                        var o = un(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return sn(this, t)
                }
            }
            var vn = (0, o.jsx)(p.sN, {
                    disabled: !0,
                    text: "No matches."
                }),
                pn = {
                    minimal: !0,
                    usePortal: !1,
                    hoverOpenDelay: 0
                };

            function mn(e, n, t, r) {
                var o = [];
                if (!e || 0 === e.length) return o;
                var i = !0,
                    a = !1,
                    c = void 0;
                try {
                    for (var l, u = e[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) {
                        var s = l.value;
                        if (t(n, s) && o.push(s), o.length >= r) break
                    }
                } catch (f) {
                    a = !0, c = f
                } finally {
                    try {
                        i || null == u.return || u.return()
                    } finally {
                        if (a) throw c
                    }
                }
                return o
            }
            var gn = function(e) {
                ! function(e, n) {
                    if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && fn(e, n)
                }(a, e);
                var n, t, r, i = hn(a);

                function a() {
                    var e;
                    return cn(this, a), (e = i.apply(this, arguments)).state = {
                        query: ""
                    }, e.getFilteredItems = (0, Se.PW)(mn), e.handleQueryChange = function(n) {
                        e.setState({
                            query: n
                        });
                        var t = e.props.onQueryChange;
                        t && t(n)
                    }, e.handleItemRemoved = function(n, t) {
                        var r = e.props,
                            o = r.selectedItems,
                            i = r.onRemoved;
                        o && i(o[t])
                    }, e
                }
                return n = a, (t = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            n = e.items,
                            t = e.selectedItems,
                            r = e.itemRenderer,
                            i = e.placeholder,
                            a = e.tagRenderer,
                            c = e.onCleared,
                            l = e.onSelected,
                            u = e.itemPredicate,
                            s = e.maxItems,
                            f = e.locationFilterMode,
                            d = e.onLocationFilterModeChange,
                            h = this.state.query,
                            v = {
                                placeholder: i,
                                onRemove: this.handleItemRemoved,
                                leftIcon: Te.d.SEARCH,
                                rightElement: t && t.length > 0 ? (0, o.jsxs)(y.sg, {
                                    children: [(0, o.jsx)(p.zx, {
                                        icon: Te.d.CROSS,
                                        minimal: !0,
                                        onClick: c
                                    }), (0, o.jsx)(p.J2, {
                                        position: je.Ly.TOP_RIGHT,
                                        minimal: !0,
                                        usePortal: !1,
                                        hoverOpenDelay: 0,
                                        hoverCloseDelay: 0,
                                        content: (0, o.jsx)(an.ms, {
                                            children: function(e) {
                                                var n = e.css;
                                                return (0, o.jsxs)(p.v2, {
                                                    children: [(0, o.jsx)(p.R, {
                                                        title: "Filter mode"
                                                    }), [{
                                                        value: We.ALL,
                                                        label: "All"
                                                    }, {
                                                        value: We.INCOMING,
                                                        label: "Incoming to selected"
                                                    }, {
                                                        value: We.OUTGOING,
                                                        label: "Outgoing from selected"
                                                    }, {
                                                        value: We.BETWEEN,
                                                        label: "Between selected"
                                                    }].map((function(e) {
                                                        return (0, o.jsx)(p.sN, {
                                                            active: f === e.value,
                                                            icon: f === e.value ? Te.d.TICK_CIRCLE : Te.d.SMALL_TICK,
                                                            text: e.label,
                                                            onClick: function() {
                                                                return d(e.value)
                                                            },
                                                            textClassName: n({
                                                                fontSize: "11px"
                                                            })
                                                        }, e.value)
                                                    }))]
                                                })
                                            }
                                        }),
                                        children: (0, o.jsx)(p.zx, {
                                            title: "Filter mode",
                                            icon: Te.d.COG,
                                            minimal: !0
                                        })
                                    })]
                                }) : void 0
                            };
                        return (0, o.jsx)(Le.N, {
                            items: this.getFilteredItems(n, h, u, s),
                            selectedItems: t,
                            itemRenderer: r,
                            tagRenderer: a,
                            noResults: vn,
                            popoverProps: pn,
                            tagInputProps: v,
                            onItemSelect: l,
                            resetOnSelect: !0,
                            openOnKeyDown: !0,
                            onQueryChange: this.handleQueryChange
                        })
                    }
                }]) && ln(n.prototype, t), r && ln(n, r), a
            }(l.PureComponent);

            function yn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function bn(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function En(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function xn(e) {
                return (xn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function On(e, n) {
                return !n || "object" !== Sn(n) && "function" !== typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function Tn(e, n) {
                return (Tn = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }

            function wn(e) {
                return function(e) {
                    if (Array.isArray(e)) return yn(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return yn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return yn(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Sn = function(e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function An(e) {
                var n = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = xn(e);
                    if (n) {
                        var o = xn(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return On(this, t)
                }
            }

            function jn() {
                var e, n, t = (e = ["\n  & > * > .", " {\n    width: 15rem;\n  }\n  .", " {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n  .", " {\n    max-height: 150px;\n    overflow-y: auto;\n    align-items: flex-start;\n  }\n  .", " {\n    & > select {\n      font-size: small;\n    }\n  }\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return jn = function() {
                    return t
                }, t
            }
            var Ln = A.Z.div({
                    display: "flex",
                    fontSize: 10,
                    alignItems: "center",
                    "& > * + *": {
                        marginLeft: 5
                    }
                }),
                _n = function(e, n) {
                    var t = n.id,
                        r = n.name;
                    return function(e, n) {
                        var t = Ae(e);
                        if (!t || 0 === t.length) return !0;
                        var r = function(e, n) {
                                return 0 === n.indexOf(e)
                            },
                            o = Ae(n);
                        if (!o || 0 === o.length) return !1;
                        var i = function(e) {
                                var n = !0,
                                    t = !1,
                                    i = void 0;
                                try {
                                    for (var a, c = o[Symbol.iterator](); !(n = (a = c.next()).done); n = !0) {
                                        var l = a.value;
                                        if (r(e, l)) return !0
                                    }
                                } catch (u) {
                                    t = !0, i = u
                                } finally {
                                    try {
                                        n || null == c.return || c.return()
                                    } finally {
                                        if (t) throw i
                                    }
                                }
                                return !1
                            },
                            a = !0,
                            c = !1,
                            l = void 0;
                        try {
                            for (var u, s = t[Symbol.iterator](); !(a = (u = s.next()).done); a = !0)
                                if (!i(u.value)) return !1
                        } catch (f) {
                            c = !0, l = f
                        } finally {
                            try {
                                a || null == s.return || s.return()
                            } finally {
                                if (c) throw l
                            }
                        }
                        return !0
                    }(e, "".concat(t, " ").concat(r))
                };

            function Rn(e) {
                return e.slice().sort((function(e, n) {
                    var t = e.name || e.id,
                        r = n.name || n.id;
                    return t < r ? -1 : t > r ? 1 : 0
                }))
            }

            function Cn(e, n) {
                var t = function(e) {
                    if (e && 0 !== e.length) return new Set(e)
                }(n);
                if (!t) return {
                    selected: void 0,
                    unselected: e
                };
                var r = (0, we.b1)().key((function(e) {
                    return t.has(e.id) ? "selected" : "unselected"
                })).object(e);
                return {
                    selected: r.selected,
                    unselected: r.unselected
                }
            }
            var In = A.Z.div(jn(), v.abV, v.Z5q, v.VOT, v.rtP),
                Mn = A.Z.span({
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    maxWidth: 180
                }),
                Nn = function(e) {
                    ! function(e, n) {
                        if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), n && Tn(e, n)
                    }(a, e);
                    var n, t, r, i = An(a);

                    function a() {
                        var e;
                        return bn(this, a), (e = i.apply(this, arguments)).getSortedLocations = (0, Se.PW)(Rn), e.getLocationsBySelectionStatus = (0, Se.PW)(Cn), e.tagRenderer = function(n) {
                            var t = e.props.selectedLocations;
                            return t && t.find((function(e) {
                                return e === n.id
                            })) ? (0, o.jsx)(Ln, {
                                children: (0, o.jsx)(Mn, {
                                    children: n.name
                                })
                            }) : null
                        }, e.itemRenderer = function(n, t) {
                            var r = t.handleClick,
                                i = t.modifiers;
                            if (!i.matchesPredicate) return null;
                            var a = n.id,
                                c = n.name,
                                l = e.props.selectedLocations,
                                u = l && l.indexOf(a) >= 0 ? h.S.PRIMARY : h.S.NONE;
                            return (0, o.jsx)(p.sN, {
                                active: i.active,
                                text: c,
                                intent: u,
                                onClick: r
                            }, a)
                        }, e.handleSelectionCleared = function() {
                            return e.props.onSelectionChanged(void 0)
                        }, e.handleLocationSelected = function(n) {
                            var t = e.props,
                                r = t.selectedLocations,
                                o = t.onSelectionChanged,
                                i = n.id;
                            r ? r.indexOf(i) < 0 && o(wn(r).concat([i])) : o([i])
                        }, e.handleLocationRemoved = function(n) {
                            var t = e.props,
                                r = t.selectedLocations,
                                o = t.onSelectionChanged;
                            if (r) {
                                var i = n.id,
                                    a = r.indexOf(i);
                                if (a >= 0) {
                                    var c = r.slice();
                                    c.splice(a, 1), o(1 === r.length ? void 0 : c)
                                }
                            }
                        }, e
                    }
                    return n = a, (t = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                n = e.locations,
                                t = e.selectedLocations,
                                r = e.locationFilterMode,
                                i = e.onLocationFilterModeChange,
                                a = this.getLocationsBySelectionStatus(this.getSortedLocations(n), t),
                                c = a.selected,
                                l = a.unselected;
                            return (0, o.jsx)(In, {
                                children: (0, o.jsx)(gn, {
                                    placeholder: "Filter by origin and destination\u2026",
                                    items: l,
                                    selectedItems: c,
                                    maxItems: 100,
                                    itemPredicate: _n,
                                    itemRenderer: this.itemRenderer,
                                    tagRenderer: this.tagRenderer,
                                    onCleared: this.handleSelectionCleared,
                                    onRemoved: this.handleLocationRemoved,
                                    onSelected: this.handleLocationSelected,
                                    locationFilterMode: r,
                                    onLocationFilterModeChange: i
                                })
                            })
                        }
                    }]) && En(n.prototype, t), r && En(n, r), a
                }(l.PureComponent),
                Pn = function(e) {
                    var n = e.href,
                        t = e.children;
                    return (0, o.jsx)("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: t
                    })
                },
                kn = t(92324),
                Dn = t(22305),
                Zn = t(25360),
                Fn = t(47622),
                Gn = t(15086),
                Bn = t(7197),
                zn = t(42784),
                Un = t(73368),
                Hn = t(4584),
                Yn = t(22776),
                Wn = t(82209);
            var Vn, Kn = [(0, Ze.Z1)("%Y-%m-%d"), (0, Ze.Z1)("%Y-%m-%d %H:%M"), (0, Ze.Z1)("%Y-%m-%d %H:%M:%S"), (0, Ze.Z1)("%Y"), (0, Ze.Z1)("%Y-%m")];

            function $n(e) {
                if (null != e) {
                    if (c = e, null != (l = Date) && "undefined" !== typeof Symbol && l[Symbol.hasInstance] ? l[Symbol.hasInstance](c) : c instanceof l) return e;
                    var n = !0,
                        t = !1,
                        r = void 0;
                    try {
                        for (var o, i = Kn[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                            var a = (0, o.value)(e);
                            if (a) return a
                        }
                    } catch (u) {
                        t = !0, r = u
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                }
                var c, l
            }! function(e) {
                e.SECOND = "SECOND", e.MINUTE = "MINUTE", e.HOUR = "HOUR", e.DAY = "DAY", e.MONTH = "MONTH", e.YEAR = "YEAR"
            }(Vn || (Vn = {}));
            var Xn = (0, Ze.i$)(".%L"),
                qn = (0, Ze.i$)(":%S"),
                Qn = (0, Ze.i$)("%I:%M"),
                Jn = (0, Ze.i$)("%I %p"),
                et = (0, Ze.i$)("%a %d"),
                nt = (0, Ze.i$)("%b %d"),
                tt = (0, Ze.i$)("%b"),
                rt = (0, Ze.i$)("%Y");

            function ot(e) {
                return ((0, Gn.Z)(e) < e ? Xn : (0, Bn.Z)(e) < e ? qn : (0, zn.Z)(e) < e ? Qn : (0, Un.Z)(e) < e ? Jn : (0, Hn.Z)(e) < e ? (0, Yn.OM)(e) < e ? et : nt : (0, Wn.Z)(e) < e ? tt : rt)(e)
            }
            var it = [{
                order: 0,
                key: Vn.SECOND,
                interval: Gn.Z,
                format: qn,
                formatFull: (0, Ze.i$)("%Y-%m-%d %H:%M:%S")
            }, {
                order: 1,
                key: Vn.MINUTE,
                interval: Bn.Z,
                format: Qn,
                formatFull: (0, Ze.i$)("%Y-%m-%d %H:%M")
            }, {
                order: 2,
                key: Vn.HOUR,
                interval: zn.Z,
                format: Jn,
                formatFull: (0, Ze.i$)("%a %d %b %Y, %I %p")
            }, {
                order: 3,
                key: Vn.DAY,
                interval: Un.Z,
                format: et,
                formatFull: (0, Ze.i$)("%a %d %b %Y")
            }, {
                order: 4,
                key: Vn.MONTH,
                interval: Hn.Z,
                format: tt,
                formatFull: (0, Ze.i$)("%b %Y")
            }, {
                order: 5,
                key: Vn.YEAR,
                interval: Wn.Z,
                format: rt,
                formatFull: (0, Ze.i$)("%Y")
            }];

            function at(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ct(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return at(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return at(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var lt = function(e, n) {
                    return n.flowsFetch.value
                },
                ut = function(e, n) {
                    return n.locationsFetch.value
                },
                st = function(e, n) {
                    return e.selectedLocations
                },
                ft = function(e, n) {
                    return e.locationFilterMode
                },
                dt = function(e, n) {
                    return e.clusteringEnabled
                },
                ht = function(e, n) {
                    return e.viewport.zoom
                },
                vt = function(e, n) {
                    return n.config
                },
                pt = (0, Se.P1)(ut, (function(e) {
                    if (e) {
                        var n = [],
                            t = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                                var c = i.value; - 90 <= c.lat && c.lat <= 90 && -180 <= c.lon && c.lon <= 180 || n.push(c.id)
                            }
                        } catch (l) {
                            r = !0, o = l
                        } finally {
                            try {
                                t || null == a.return || a.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return n.length > 0 ? n : void 0
                    }
                })),
                mt = (0, Se.P1)(ut, pt, (function(e, n) {
                    if (e) {
                        if (!n || 0 === n.length) return e;
                        var t = new Set(n);
                        return e.filter((function(e) {
                            return !t.has(T(e))
                        }))
                    }
                })),
                gt = (0, Se.P1)(mt, (function(e) {
                    return e ? new Set(e.map(T)) : void 0
                })),
                yt = (0, Se.P1)(st, (function(e) {
                    return e && e.length > 0 ? new Set(e) : void 0
                })),
                bt = (0, Se.P1)(lt, gt, (function(e, n) {
                    if (n && e) return e.filter((function(e) {
                        return n.has(x(e)) && n.has(O(e))
                    })).sort((function(e, n) {
                        return (0, Zn.Z)(Math.abs(E(e)), Math.abs(E(n)))
                    }))
                })),
                Et = (0, Se.P1)(bt, (function(e) {
                    if (e) {
                        var n = null,
                            t = null,
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                                var l = a.value.time;
                                l && ((null == n || n > l) && (n = l), (null == t || t < l) && (t = l))
                            }
                        } catch (u) {
                            o = !0, i = u
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        if (n && t) return [n, t]
                    }
                })),
                xt = (0, Se.P1)(bt, Et, (function(e, n) {
                    if (e && n) {
                        var t, r = (0, Fn.Z)(e, (function(e) {
                            return function(e) {
                                var n = void 0,
                                    t = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var i, a = it[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                                        var c = i.value;
                                        if ((0, c.interval)(e) < e) return n || c;
                                        n = c
                                    }
                                } catch (l) {
                                    r = !0, o = l
                                } finally {
                                    try {
                                        t || null == a.return || a.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return it[it.length - 1]
                            }(b(e)).order
                        }));
                        if (null != r) return t = r, it.find((function(e) {
                            return e.order === t
                        }))
                    }
                })),
                Ot = (0, Se.P1)(Et, xt, (function(e, n) {
                    if (e && (null === n || void 0 === n ? void 0 : n.interval)) {
                        var t = n.interval;
                        return [e[0], t.offset(t.floor(e[1]), 1)]
                    }
                })),
                Tt = (0, Se.P1)(bt, Ot, (function(e, n) {
                    return e.selectedTimeRange
                }), (function(e, n, t) {
                    if (e) return !n || !t || n[0] === t[0] && n[1] === t[1] ? e : e.filter((function(e) {
                        var n = b(e);
                        return n && t[0] <= n && n < t[1]
                    }))
                })),
                wt = (0, Se.P1)(bt, mt, (function(e, n) {
                    if (!n || !e) return n;
                    var t = new Set,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                            var l = a.value;
                            t.add(x(l)), t.add(O(l))
                        }
                    } catch (u) {
                        o = !0, i = u
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n.filter((function(e) {
                        return t.has(T(e))
                    }))
                })),
                St = (0, Se.P1)(wt, bt, (function(e, n) {
                    if (e && n) {
                        var t = kn.rO(n, {
                                getFlowOriginId: x,
                                getFlowDestId: O,
                                getFlowMagnitude: E
                            }),
                            r = kn.DR(e, {
                                getLocationId: T,
                                getLocationCentroid: w
                            }, t, {
                                maxZoom: Ke
                            }),
                            o = kn.em(r),
                            i = (0, we.b1)().key((function(e) {
                                return e.id
                            })).rollup((function(e) {
                                return ct(e, 1)[0]
                            })).object(e),
                            a = function(e) {
                                var n = i[e];
                                return n ? n.name || n.id || e : "#".concat(e)
                            },
                            c = !0,
                            l = !1,
                            u = void 0;
                        try {
                            for (var s, f = r[Symbol.iterator](); !(c = (s = f.next()).done); c = !0) {
                                var d = s.value,
                                    h = !0,
                                    v = !1,
                                    p = void 0;
                                try {
                                    for (var m, g = function(e, n) {
                                            var r = n.value;
                                            if ((0, kn.mL)(r)) {
                                                var i = o.expandCluster(r),
                                                    c = i.reduce((function(e, n) {
                                                        return !e || t(n) > t(e) ? n : e
                                                    })),
                                                    l = 2 === i.length && i.find((function(e) {
                                                        return e !== c
                                                    }));
                                                r.name = '"'.concat(a(c), '" and ').concat(l ? '"'.concat(a(l), '"') : "".concat(i.length - 1, " others"))
                                            } else r.name = a(r.id)
                                        }, y = d.nodes[Symbol.iterator](); !(h = (m = y.next()).done); h = !0) g(0, m)
                                } catch (b) {
                                    v = !0, p = b
                                } finally {
                                    try {
                                        h || null == y.return || y.return()
                                    } finally {
                                        if (v) throw p
                                    }
                                }
                            }
                        } catch (b) {
                            l = !0, u = b
                        } finally {
                            try {
                                c || null == f.return || f.return()
                            } finally {
                                if (l) throw u
                            }
                        }
                        return o
                    }
                })),
                At = (0, Se.P1)(ht, St, st, (function(e, n, t) {
                    if (n) {
                        var r = Number.POSITIVE_INFINITY,
                            o = Number.NEGATIVE_INFINITY,
                            i = function(e) {
                                var t = n.getClusterById(e);
                                if (t) o = Math.max(o, t.zoom), r = Math.min(r, t.zoom);
                                else {
                                    var i = n.getMinZoomForLocation(e);
                                    o = Math.max(o, i)
                                }
                            };
                        if (t) {
                            var a = !0,
                                c = !1,
                                l = void 0;
                            try {
                                for (var u, s = t[Symbol.iterator](); !(a = (u = s.next()).done); a = !0) {
                                    i(u.value)
                                }
                            } catch (f) {
                                c = !0, l = f
                            } finally {
                                try {
                                    a || null == s.return || s.return()
                                } finally {
                                    if (c) throw l
                                }
                            }
                        }
                        return n.availableZoomLevels.filter((function(e) {
                            return o <= e && e <= r
                        }))
                    }
                })),
                jt = (0, Se.P1)(St, ht, At, (function(e, n, t) {
                    if (e && t) return (0, kn._B)(t, n)
                }));

            function Lt(e, n) {
                if (e.clusteringEnabled) return e.clusteringAuto || null == e.manualClusterZoom ? jt(e, n) : e.manualClusterZoom
            }
            var _t = (0, Se.P1)(dt, wt, st, Lt, St, (function(e, n, t, r, o) {
                    if (n) {
                        var i = n;
                        if (e && o) {
                            var a = o.getClusterNodesFor(r);
                            a && (i = i.concat(a.filter(kn.mL)))
                        }
                        if (i && o && t) {
                            var c = [],
                                l = !0,
                                u = !1,
                                s = void 0;
                            try {
                                for (var f, d = function(e, n) {
                                        var t = n.value,
                                            r = o.getClusterById(t);
                                        r && !i.find((function(e) {
                                            return e.id === t
                                        })) && c.push(r)
                                    }, h = t[Symbol.iterator](); !(l = (f = h.next()).done); l = !0) d(0, f)
                            } catch (v) {
                                u = !0, s = v
                            } finally {
                                try {
                                    l || null == h.return || h.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                            c.length > 0 && (i = i.concat(c))
                        }
                        return i
                    }
                })),
                Rt = (0, Se.P1)(lt, (function(e) {
                    return !(!e || !e.find((function(e) {
                        return E(e) < 0
                    })))
                })),
                Ct = function(e, n) {
                    return e.darkMode
                },
                It = (0, Se.P1)(vt, Rt, (function(e, n) {
                    return e.colorSchemeKey
                }), Ct, (function(e, n) {
                    return e.fadeEnabled
                }), (function(e, n) {
                    return e.fadeAmount
                }), (function(e, n) {
                    return e.animationEnabled
                }), Pe.ZP),
                Mt = (0, Se.P1)(vt, Ct, (function(e, n) {
                    var t = e[r.MAPBOX_MAP_STYLE];
                    return t || (n ? "mapbox://styles/ilyabo/ckus6mvyd516017pjggj9ze38" : "mapbox://styles/ilyabo/ckus77cfj349o17tf9jdjm5sf")
                })),
                Nt = (0, Se.P1)(gt, lt, bt, (function(e, n, t) {
                    if (e && n && (!t || n.length !== t.length)) {
                        var r = new Set,
                            o = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var c, l = n[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                                var u = c.value;
                                e.has(x(u)) || r.add(x(u)), e.has(O(u)) || r.add(O(u))
                            }
                        } catch (s) {
                            i = !0, a = s
                        } finally {
                            try {
                                o || null == l.return || l.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return r
                    }
                }));

            function Pt(e) {
                var n = (0, we.b1)().key(x).key(O).rollup((function(e) {
                        var n = x(e[0]),
                            t = O(e[0]),
                            r = e[0].color,
                            o = {
                                origin: n,
                                dest: t,
                                count: e.reduce((function(e, n) {
                                    var t = E(n);
                                    return t && !isNaN(t) && isFinite(t) ? e + t : e
                                }), 0),
                                time: void 0
                            };
                        return r && (o.color = r), o
                    })).entries(e),
                    t = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, c = n[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                        var l = a.value.values,
                            u = !0,
                            s = !1,
                            f = void 0;
                        try {
                            for (var d, h = l[Symbol.iterator](); !(u = (d = h.next()).done); u = !0) {
                                var v = d.value.value;
                                t.push(v)
                            }
                        } catch (p) {
                            s = !0, f = p
                        } finally {
                            try {
                                u || null == h.return || h.return()
                            } finally {
                                if (s) throw f
                            }
                        }
                    }
                } catch (p) {
                    o = !0, i = p
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return t
            }
            var kt = (0, Se.P1)(St, dt, Tt, Lt, Ot, (function(e, n, t, r, o) {
                    var i;
                    if (t) return (i = n && e && null != r ? e.aggregateFlows(null != o ? Pt(t) : t, r, {
                        getFlowOriginId: x,
                        getFlowDestId: O,
                        getFlowMagnitude: E
                    }) : Pt(t)).sort((function(e, n) {
                        return (0, Zn.Z)(Math.abs(E(e)), Math.abs(E(n)))
                    })), i
                })),
                Dt = (0, Se.P1)(kt, yt, ft, (function(e, n, t) {
                    if (e) {
                        var r = void 0,
                            o = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var c, l = e[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                                var u = c.value;
                                if (x(u) !== O(u) && Xt(u, n, t)) {
                                    var s = E(u);
                                    null == r ? r = [s, s] : (s < r[0] && (r[0] = s), s > r[1] && (r[1] = s))
                                }
                            }
                        } catch (f) {
                            i = !0, a = f
                        } finally {
                            try {
                                o || null == l.return || l.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return r
                    }
                })),
                Zt = (0, Se.P1)(dt, yt, St, (function(e, n, t) {
                    if (!n || !t) return n;
                    var r = new Set,
                        o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var c, l = n[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                            var u = c.value,
                                s = t.getClusterById(u);
                            if (s) {
                                var f = t.expandCluster(s),
                                    d = !0,
                                    h = !1,
                                    v = void 0;
                                try {
                                    for (var p, m = f[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                                        var g = p.value;
                                        r.add(g)
                                    }
                                } catch (y) {
                                    h = !0, v = y
                                } finally {
                                    try {
                                        d || null == m.return || m.return()
                                    } finally {
                                        if (h) throw v
                                    }
                                }
                            } else r.add(u)
                        }
                    } catch (y) {
                        i = !0, a = y
                    } finally {
                        try {
                            o || null == l.return || l.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                })),
                Ft = (0, Se.P1)(bt, xt, Ot, Zt, ft, (function(e, n, t, r, o) {
                    if (e && n && t) {
                        var i = e.reduce((function(e, t) {
                            if (Xt(t, r, o)) {
                                var i, a = n.interval(b(t)).getTime();
                                e.set(a, (null !== (i = e.get(a)) && void 0 !== i ? i : 0) + E(t))
                            }
                            return e
                        }), new Map);
                        return Array.from(i.entries()).map((function(e) {
                            var n = ct(e, 2),
                                t = n[0],
                                r = n[1];
                            return {
                                time: new Date(t),
                                count: r
                            }
                        }))
                    }
                })),
                Gt = (0, Se.P1)((function(e, n) {
                    return e.locationTotalsEnabled
                }), (function(e) {
                    return e ? 15 : 0
                })),
                Bt = (0, Se.P1)((function(e, n) {
                    return e.viewport
                }), Gt, (function(e, n) {
                    var t = n;
                    return (0, _e.A)([e.longitude, e.latitude], e.zoom, [e.width + 2 * t, e.height + 2 * t], 512)
                })),
                zt = (0, Se.P1)(dt, wt, St, Lt, (function(e, n, t, r) {
                    return e && t ? t.getClusterNodesFor(r) : n
                })),
                Ut = (0, Se.P1)(zt, kt, yt, ft, (function(e, n, t, r) {
                    if (n) {
                        var o = new Map,
                            i = function(e, n) {
                                var t, r = null !== (t = o.get(e)) && void 0 !== t ? t : {
                                    incoming: 0,
                                    outgoing: 0,
                                    within: 0
                                };
                                return null != n.incoming && (r.incoming += n.incoming), null != n.outgoing && (r.outgoing += n.outgoing), null != n.within && (r.within += n.within), r
                            },
                            a = !0,
                            c = !1,
                            l = void 0;
                        try {
                            for (var u, s = n[Symbol.iterator](); !(a = (u = s.next()).done); a = !0) {
                                var f = u.value;
                                if (Xt(f, t, r)) {
                                    var d = x(f),
                                        h = O(f),
                                        v = E(f);
                                    d === h ? o.set(d, i(d, {
                                        within: v
                                    })) : (o.set(d, i(d, {
                                        outgoing: v
                                    })), o.set(h, i(h, {
                                        incoming: v
                                    })))
                                }
                            }
                        } catch (p) {
                            c = !0, l = p
                        } finally {
                            try {
                                a || null == s.return || s.return()
                            } finally {
                                if (c) throw l
                            }
                        }
                        return o
                    }
                })),
                Ht = (0, Se.P1)(zt, (function(e) {
                    if (e) return new Dn.Z(e, (function(e) {
                        return or(S(e) ? e.centroid[0] : e.lon)
                    }), (function(e) {
                        return ir(S(e) ? e.centroid[1] : e.lat)
                    }))
                }));

            function Yt(e, n) {
                if (e) {
                    var t = ct(n, 4),
                        r = t[0],
                        o = t[1],
                        i = t[2],
                        a = t[3],
                        c = [or(r), ir(o), or(i), ir(a)],
                        l = c[0],
                        u = c[1],
                        s = c[2],
                        f = c[3];
                    return e.range(Math.min(l, s), Math.min(u, f), Math.max(l, s), Math.max(u, f))
                }
            }
            var Wt = (0, Se.P1)(Ht, Bt, (function(e, n) {
                    var t = Yt(e, n);
                    if (t) return new Set(t.map((function(n) {
                        return e.points[n].id
                    })))
                })),
                Vt = (0, Se.wN)(Se.PW, (function(e, n, t) {
                    if (e === n) return !0;
                    if (null == e || null == n) return !1;
                    if (e.size !== n.size) return !1;
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                            var l = a.value;
                            if (!n.has(l)) return !1
                        }
                    } catch (u) {
                        o = !0, i = u
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return !0
                }))(Wt, (function(e) {
                    if (e) return e
                })),
                Kt = (0, Se.P1)(zt, Vt, (function(e, n) {
                    if (e) return n ? (n.size, e.length, e) : e
                })),
                $t = (0, Se.PW)((function(e) {
                    var n = e[r.FLOWS_SHEETS];
                    if (n) return (0, ke.Bj)(n)[0].map((function(e) {
                        return e.trim()
                    }))
                }));

            function Xt(e, n, t) {
                var r = e.origin,
                    o = e.dest;
                if (n) switch (t) {
                    case We.ALL:
                        return n.has(r) || n.has(o);
                    case We.BETWEEN:
                        return n.has(r) && n.has(o);
                    case We.INCOMING:
                        return n.has(o);
                    case We.OUTGOING:
                        return n.has(r)
                }
                return !0
            }
            var qt = (0, Se.P1)(bt, (function(e) {
                    if (e) return e.reduce((function(e, n) {
                        return e + E(n)
                    }), 0)
                })),
                Qt = (0, Se.P1)(kt, yt, ft, (function(e, n, t) {
                    if (e) return e.reduce((function(e, r) {
                        return Xt(r, n, t) ? e + E(r) : e
                    }), 0)
                }));

            function Jt(e, n) {
                if (e) {
                    var t = void 0,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, c = e.entries()[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                            var l = ct(a.value, 2),
                                u = l[0],
                                s = l[1],
                                f = s.incoming,
                                d = s.outgoing,
                                h = s.within;
                            if (null == n || n.has(u)) {
                                var v = Math.min(f + h, d + h, h),
                                    p = Math.max(f + h, d + h, h);
                                t ? (v < t[0] && (t[0] = v), p > t[1] && (t[1] = p)) : t = [v, p]
                            }
                        }
                    } catch (m) {
                        o = !0, i = m
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return t
                }
            }
            var er = (0, Se.P1)(Ut, (function(e) {
                    return Jt(e, void 0)
                })),
                nr = (0, Se.P1)(Ut, Vt, (function(e, n) {
                    return Jt(e, n)
                }));

            function tr(e, n) {
                return e.adaptiveScalesEnabled ? nr(e, n) : er(e, n)
            }
            var rr = (0, Se.P1)(kt, Vt, yt, ft, (function(e, n, t, r) {
                if (e && n) {
                    var o = [],
                        i = 0,
                        a = !0,
                        c = !1,
                        l = void 0;
                    try {
                        for (var u, s = e[Symbol.iterator](); !(a = (u = s.next()).done); a = !0) {
                            var f = u.value,
                                d = f.origin,
                                h = f.dest;
                            if (n.has(d) || n.has(h)) Xt(f, t, r) && (o.push(f), d !== h && i++);
                            if (i > 5e3) break
                        }
                    } catch (v) {
                        c = !0, l = v
                    } finally {
                        try {
                            a || null == s.return || s.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                    return o
                }
            }));

            function or(e) {
                return e / 360 + .5
            }

            function ir(e) {
                var n = Math.sin(e * Math.PI / 180),
                    t = .5 - .25 * Math.log((1 + n) / (1 - n)) / Math.PI;
                return t < 0 ? 0 : t > 1 ? 1 : t
            }
            var ar = t(36745);

            function cr(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function lr(e) {
                return function(e) {
                    if (Array.isArray(e)) return cr(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return cr(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return cr(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ur(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = (0, l.useCallback)(e, t),
                    o = (0, l.useRef)(void 0),
                    i = (0, l.useCallback)((function() {
                        o.current && (globalThis.clearTimeout(o.current), o.current = void 0)
                    }), [o]),
                    a = (0, l.useCallback)((function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        o.current && globalThis.clearTimeout(o.current), o.current = globalThis.setTimeout((function() {
                            r.apply(void 0, lr(t))
                        }), n)
                    }), [r, o, n]);
                return [a, i]
            }
            var sr = t(11163);

            function fr(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function dr() {
                var e = fr(["\n  padding: 10px 20px 10px 20px;\n  font-size: 12px;\n"]);
                return dr = function() {
                    return e
                }, e
            }

            function hr() {
                var e = fr(["\n  position: relative;\n"]);
                return hr = function() {
                    return e
                }, e
            }

            function vr() {
                var e = fr(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"]);
                return vr = function() {
                    return e
                }, e
            }
            var pr = (0, A.Z)(y.sg)(dr()),
                mr = A.Z.textarea((function(e) {
                    return "\n  @media (min-width: 500px) {\n     width: 30em;\n  }\n  width: 18em;\n  min-height: ".concat(e.multiline ? "10em;" : "6em", ";\n  overflow: hidden;\n  font-family: monospace;\n")
                })),
                gr = A.Z.div(hr()),
                yr = (0, A.Z)(p.zx)(vr()),
                br = function(e) {
                    var n = e.text,
                        t = e.embed,
                        r = l.useRef(null);
                    return (0, o.jsx)(y.sg, {
                        spacing: 5,
                        children: (0, o.jsxs)(gr, {
                            children: [(0, o.jsx)(mr, {
                                className: v.O4S,
                                ref: r,
                                readOnly: !0,
                                value: n,
                                multiline: t
                            }), (0, o.jsx)(yr, {
                                icon: Te.d.DUPLICATE,
                                title: "Copy to clipboard",
                                onClick: function() {
                                    var e = r.current;
                                    e && (e.select(), document.execCommand("copy"))
                                }
                            })]
                        })
                    })
                },
                Er = function(e) {
                    var n = e.children,
                        t = (0, sr.useRouter)(),
                        r = (0, l.useState)("url"),
                        i = r[0],
                        a = r[1],
                        c = (0, l.useState)(!1),
                        u = c[0],
                        s = c[1];
                    return (0, o.jsx)(p.J2, {
                        hoverOpenDelay: 0,
                        hoverCloseDelay: 0,
                        position: je.Ly.RIGHT_BOTTOM,
                        content: (0, o.jsxs)(pr, {
                            spacing: 15,
                            children: [(0, o.jsxs)(p.mQ, {
                                selectedTabId: i,
                                onChange: function(e) {
                                    return a("".concat(e))
                                },
                                children: [(0, o.jsx)(p.OK, {
                                    id: "url",
                                    title: "Share URL",
                                    panel: (0, o.jsx)(br, {
                                        text: "".concat(document.location.protocol, "//").concat(document.location.host) + "".concat(u ? t.asPath : "".concat(location.pathname))
                                    })
                                }), (0, o.jsx)(p.OK, {
                                    id: "embed",
                                    title: "Embed code",
                                    panel: (0, o.jsx)(br, {
                                        embed: !0,
                                        text: '<iframe width="800" height="600" ' + 'src="'.concat(document.location.protocol, "//").concat(document.location.host).concat(location.pathname, "/embed") + "".concat(u ? location.search : "", '" ') + 'frameborder="0" allowfullscreen></iframe>'
                                    })
                                })]
                            }), (0, o.jsx)(p.rs, {
                                checked: u,
                                onChange: function() {
                                    return s(!u)
                                },
                                label: "Current view of the map"
                            })]
                        }),
                        children: n
                    })
                },
                xr = t(1483),
                Or = t(74250),
                Tr = t(66871),
                wr = t(88124),
                Sr = A.Z.div({
                    width: 55,
                    fontSize: "10px",
                    textAlign: "center"
                }),
                Ar = A.Z.canvas({
                    display: "flex",
                    flexGrow: 1,
                    border: "1px solid ".concat(d.wL.DARK_GRAY5)
                }),
                jr = function(e) {
                    var n = e.colorScheme,
                        t = e.width,
                        r = void 0 === t ? 60 : t,
                        i = e.height,
                        a = void 0 === i ? 13 : i,
                        c = e.reverse,
                        u = (0, Or.ZP)((0, wr.hD)(Pe.R[n] || Pe.bT)),
                        s = (0, l.useRef)(null),
                        f = (0, l.useMemo)((function() {
                            return (0, Tr.Z)().range([0, r])
                        }), [r]);
                    return (0, l.useLayoutEffect)((function() {
                        var e = s.current;
                        if (e) {
                            var n = e.getContext("2d");
                            if (n) {
                                n.clearRect(0, 0, r, a);
                                for (var t = 0; t < r; t++) n.fillStyle = u(f.invert(t)), n.fillRect(c ? r - t - 1 : t, 0, 1, a)
                            }
                        }
                    })), (0, o.jsxs)(y.X2, {
                        children: [(0, o.jsx)(Sr, {
                            children: n
                        }), (0, o.jsx)(Ar, {
                            ref: s,
                            width: r,
                            height: a
                        })]
                    })
                },
                Lr = function(e) {
                    var n = e.selected,
                        t = void 0 === n ? "Default" : n,
                        r = e.reverse,
                        i = e.onChange,
                        a = function(e, n) {
                            var i = n.modifiers,
                                a = n.handleClick;
                            return i.matchesPredicate ? (0, o.jsx)(p.sN, {
                                active: i.active,
                                disabled: i.disabled,
                                intent: t === e ? h.S.PRIMARY : h.S.NONE,
                                onClick: a,
                                icon: (0, o.jsx)(jr, {
                                    colorScheme: e,
                                    reverse: r
                                })
                            }, e) : null
                        };
                    return (0, o.jsx)(an.ms, {
                        children: function(e) {
                            var n = e.css;
                            return (0, o.jsx)(xr.P, {
                                items: Object.keys(Pe.R),
                                filterable: !1,
                                activeItem: t,
                                itemRenderer: a,
                                popoverProps: {
                                    minimal: !0,
                                    captureDismiss: !0,
                                    usePortal: !1,
                                    fill: !0,
                                    targetClassName: n({
                                        "& > div": {
                                            flex: "1"
                                        }
                                    })
                                },
                                onItemSelect: i,
                                children: (0, o.jsx)(p.zx, {
                                    rightIcon: Te.d.CARET_DOWN,
                                    fill: !0,
                                    icon: (0, o.jsx)(jr, {
                                        colorScheme: t,
                                        reverse: r
                                    })
                                })
                            })
                        }
                    })
                };

            function _r(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function Rr() {
                var e = _r(["\n  width: 290px;\n  font-size: 12px;\n"]);
                return Rr = function() {
                    return e
                }, e
            }

            function Cr() {
                var e = _r(["\n  margin-bottom: 0;\n  align-self: flex-start;\n  white-space: nowrap;\n"]);
                return Cr = function() {
                    return e
                }, e
            }
            var Ir, Mr = A.Z.div(Rr()),
                Nr = (0, A.Z)(p.rs)(Cr()),
                Pr = function(e) {
                    var n = e.dispatch,
                        t = e.state,
                        r = e.darkMode,
                        i = e.clusterZoom,
                        a = e.availableClusterZoomLevels,
                        c = e.onChangeClusteringAuto;
                    return (0, o.jsx)(p.J2, {
                        usePortal: !1,
                        hoverOpenDelay: 0,
                        hoverCloseDelay: 0,
                        content: (0, o.jsx)(Mr, {
                            children: (0, o.jsxs)(y.sg, {
                                spacing: 10,
                                padding: "12px 20px",
                                children: [(0, o.jsx)(y.Vw, {
                                    children: "Settings"
                                }), (0, o.jsxs)(y.X2, {
                                    spacing: 5,
                                    children: [(0, o.jsx)("div", {
                                        style: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: "Color scheme"
                                    }), (0, o.jsx)(Lr, {
                                        selected: t.colorSchemeKey,
                                        reverse: r,
                                        onChange: function(e) {
                                            n({
                                                type: Ve.SET_COLOR_SCHEME,
                                                colorSchemeKey: e
                                            })
                                        }
                                    })]
                                }), (0, o.jsxs)(y.sg, {
                                    spacing: 10,
                                    children: [(0, o.jsx)(Nr, {
                                        checked: t.darkMode,
                                        label: "Dark mode",
                                        onChange: function(e) {
                                            var t = e.target.checked;
                                            n({
                                                type: Ve.SET_DARK_MODE,
                                                darkMode: t
                                            })
                                        }
                                    }), (0, o.jsxs)(y.X2, {
                                        spacing: 15,
                                        children: [(0, o.jsx)(Nr, {
                                            checked: t.fadeEnabled,
                                            label: "Fade",
                                            onChange: function(e) {
                                                var t = e.target.checked;
                                                n({
                                                    type: Ve.SET_FADE_ENABLED,
                                                    fadeEnabled: t
                                                })
                                            }
                                        }), t.fadeEnabled && (0, o.jsx)(p.iR, {
                                            value: t.fadeAmount,
                                            min: 0,
                                            max: 100,
                                            stepSize: 1,
                                            labelRenderer: !1,
                                            showTrackFill: !1,
                                            onChange: function(e) {
                                                n({
                                                    type: Ve.SET_FADE_AMOUNT,
                                                    fadeAmount: e
                                                })
                                            }
                                        })]
                                    }), (0, o.jsxs)(y.X2, {
                                        spacing: 15,
                                        children: [(0, o.jsx)(Nr, {
                                            checked: t.baseMapEnabled,
                                            label: "Base map",
                                            onChange: function(e) {
                                                var t = e.target.checked;
                                                n({
                                                    type: Ve.SET_BASE_MAP_ENABLED,
                                                    baseMapEnabled: t
                                                })
                                            }
                                        }), t.baseMapEnabled && (0, o.jsx)(p.iR, {
                                            value: t.baseMapOpacity,
                                            min: 0,
                                            max: 100,
                                            stepSize: 1,
                                            labelRenderer: !1,
                                            showTrackFill: !1,
                                            onChange: function(e) {
                                                n({
                                                    type: Ve.SET_BASE_MAP_OPACITY,
                                                    baseMapOpacity: e
                                                })
                                            }
                                        })]
                                    }), (0, o.jsx)(Nr, {
                                        checked: t.animationEnabled,
                                        label: "Animate flows",
                                        onChange: function(e) {
                                            var t = e.target.checked;
                                            n({
                                                type: Ve.SET_ANIMATION_ENABLED,
                                                animationEnabled: t
                                            })
                                        }
                                    }), (0, o.jsx)(Nr, {
                                        checked: t.adaptiveScalesEnabled,
                                        label: "Dynamic range adjustment",
                                        onChange: function(e) {
                                            var t = e.target.checked;
                                            n({
                                                type: Ve.SET_ADAPTIVE_SCALES_ENABLED,
                                                adaptiveScalesEnabled: t
                                            })
                                        }
                                    }), (0, o.jsx)(Nr, {
                                        checked: t.locationTotalsEnabled,
                                        label: "Location totals",
                                        onChange: function(e) {
                                            var t = e.target.checked;
                                            n({
                                                type: Ve.SET_LOCATION_TOTALS_ENABLED,
                                                locationTotalsEnabled: t
                                            })
                                        }
                                    }), a && (0, o.jsxs)(o.Fragment, {
                                        children: [(0, o.jsxs)(y.X2, {
                                            spacing: 15,
                                            children: [(0, o.jsx)(Nr, {
                                                checked: t.clusteringEnabled,
                                                label: "Clustering",
                                                onChange: function(e) {
                                                    var t = e.target.checked;
                                                    n({
                                                        type: Ve.SET_CLUSTERING_ENABLED,
                                                        clusteringEnabled: t
                                                    })
                                                }
                                            }), t.clusteringEnabled && (0, o.jsx)(Nr, {
                                                checked: t.clusteringAuto,
                                                innerLabel: t.clusteringAuto ? "Auto" : "Manual",
                                                onChange: function(e) {
                                                    var n = e.target.checked;
                                                    c(n)
                                                }
                                            })]
                                        }), t.clusteringEnabled && !t.clusteringAuto && (0, o.jsxs)(y.X2, {
                                            spacing: 15,
                                            children: [(0, o.jsx)("div", {
                                                style: {
                                                    whiteSpace: "nowrap",
                                                    marginLeft: 38
                                                },
                                                children: "Level"
                                            }), (0, o.jsx)(p.iR, {
                                                value: a.length - 1 - a.indexOf(null != t.manualClusterZoom ? t.manualClusterZoom : i || 0),
                                                min: 0,
                                                max: a.length - 1,
                                                stepSize: 1,
                                                labelRenderer: !1,
                                                showTrackFill: !1,
                                                onChange: function(e) {
                                                    n({
                                                        type: Ve.SET_MANUAL_CLUSTER_ZOOM,
                                                        manualClusterZoom: a ? a[a.length - 1 - e] : void 0
                                                    })
                                                }
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }),
                        children: (0, o.jsx)(p.zx, {
                            title: "Settings\u2026",
                            icon: Te.d.COG
                        })
                    })
                },
                kr = t(73772);

            function Dr(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }! function(e) {
                e.POLYGON = "POLYGON"
            }(Ir || (Ir = {}));
            var Zr, Fr, Gr, Br = (Dr(Zr = {
                    DEFAULT: d.wL.WHITE
                }, kr.RENDER_STATE.SELECTED, d.wL.BLUE3), Dr(Zr, kr.RENDER_STATE.HOVERED, d.wL.VERMILION3), Zr),
                zr = (Dr(Fr = {
                    DEFAULT: d.wL.WHITE
                }, kr.RENDER_STATE.SELECTED, d.wL.BLUE3), Dr(Fr, kr.RENDER_STATE.HOVERED, d.wL.BLUE5), Dr(Fr, kr.RENDER_STATE.INACTIVE, d.wL.GRAY2), Dr(Fr, kr.RENDER_STATE.UNCOMMITTED, d.wL.GRAY2), Fr);

            function Ur(e) {
                e.feature;
                var n = e.state;
                return {
                    stroke: Br[n] || Br.DEFAULT,
                    strokeWidth: 2,
                    fill: zr[n] || zr.DEFAULT,
                    fillOpacity: 1,
                    r: 5
                }
            }
            var Hr, Yr = (Dr(Gr = {
                    DEFAULT: d.wL.ORANGE5
                }, kr.RENDER_STATE.INACTIVE, d.wL.ORANGE5), Dr(Gr, kr.RENDER_STATE.UNCOMMITTED, d.wL.ORANGE3), Dr(Gr, kr.RENDER_STATE.CLOSING, d.wL.ORANGE3), Dr(Gr, kr.RENDER_STATE.SELECTED, d.wL.ORANGE5), Dr(Gr, kr.RENDER_STATE.HOVERED, d.wL.ORANGE5), Gr),
                Wr = (Dr(Hr = {
                    DEFAULT: d.wL.ORANGE5
                }, kr.RENDER_STATE.INACTIVE, d.wL.ORANGE5), Dr(Hr, kr.RENDER_STATE.HOVERED, d.wL.ORANGE3), Dr(Hr, kr.RENDER_STATE.SELECTED, d.wL.ORANGE5), Dr(Hr, kr.RENDER_STATE.UNCOMMITTED, d.wL.ORANGE4), Dr(Hr, kr.RENDER_STATE.CLOSING, d.wL.GRAY1), Hr);

            function Vr(e) {
                e.feature;
                var n = e.state;
                return function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })))), r.forEach((function(n) {
                            Dr(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    stroke: Yr[n] || Yr.DEFAULT,
                    strokeWidth: 2,
                    fill: Wr[n] || Wr.DEFAULT,
                    fillOpacity: .2
                }, n !== kr.RENDER_STATE.SELECTED ? {
                    strokeDasharray: "4,2"
                } : null)
            }
            var Kr = new kr.DrawPolygonMode;

            function $r(e) {
                switch (e) {
                    case Ir.POLYGON:
                        return Kr
                }
            }
            var Xr = function(e) {
                    var n = e.mapDrawingMode,
                        t = e.onFeatureDrawn,
                        r = (0, l.useCallback)((function() {
                            t(void 0)
                        }), [t]);
                    (0, l.useEffect)((function() {
                        var e = function(e) {
                            var n, t;
                            n = e, (null != (t = KeyboardEvent) && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](n) : n instanceof t) && "Escape" === e.code && r()
                        };
                        return document.addEventListener("keydown", e),
                            function() {
                                return document.removeEventListener("keydown", e)
                            }
                    }), [r]);
                    return (0, o.jsx)(kr.Editor, {
                        clickRadius: 5,
                        mode: $r(n),
                        editHandleShape: "circle",
                        onUpdate: function(e) {
                            if ("addFeature" === e.editType) {
                                var n = e.data;
                                n.length > 0 ? t(n[n.length - 1]) : t(void 0)
                            }
                        },
                        featureStyle: Vr,
                        editHandleStyle: Ur
                    })
                },
                qr = t(87592),
                Qr = t(83700),
                Jr = t(81953),
                eo = t(98823),
                no = t(23042);

            function to(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function ro(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function oo(e) {
                return (oo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function io(e, n) {
                return !n || "object" !== co(n) && "function" !== typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function ao(e, n) {
                return (ao = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }
            var co = function(e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function lo(e) {
                var n = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = oo(e);
                    if (n) {
                        var o = oo(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return io(this, t)
                }
            }
            var uo = A.Z.svg((function(e) {
                    return {
                        cursor: "pointer",
                        "& > circle": {
                            transition: "fill 0.2s",
                            fill: e.darkMode ? d.wL.GRAY4 : d.wL.WHITE
                        },
                        "&:hover": {
                            "& > circle": {
                                fill: e.darkMode ? d.wL.WHITE : d.wL.GRAY4
                            }
                        }
                    }
                })),
                so = A.Z.circle({
                    cursor: "pointer",
                    strokeWidth: 1,
                    stroke: "#000"
                }),
                fo = function(e) {
                    ! function(e, n) {
                        if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), n && ao(e, n)
                    }(a, e);
                    var n, t, r, i = lo(a);

                    function a() {
                        var e;
                        return to(this, a), (e = i.apply(this, arguments)).start = function() {
                            var n = e.props,
                                t = n.isPlaying,
                                r = n.onPlay;
                            if (!t) {
                                var o = e.props,
                                    i = o.extent,
                                    a = o.current,
                                    c = o.onAdvance;
                                r(), e.scheduleNextStep(), a >= i[1] && c(i[0])
                            }
                        }, e.stop = function() {
                            e.clearPlayTimeOut();
                            var n = e.props,
                                t = n.isPlaying,
                                r = n.onPause;
                            t && r()
                        }, e.clearPlayTimeOut = function() {
                            null != e.playTimeout && (clearTimeout(e.playTimeout), e.playTimeout = void 0)
                        }, e.scheduleNextStep = function() {
                            e.clearPlayTimeOut();
                            var n = e.props.stepDuration;
                            e.playTimeout = setTimeout(e.nextStep, n)
                        }, e.nextStep = function() {
                            var n = e.props,
                                t = n.isPlaying,
                                r = n.speed;
                            if (t) {
                                var o = e.props,
                                    i = o.interval,
                                    a = o.extent,
                                    c = o.current,
                                    l = o.onAdvance,
                                    u = i.count(a[0], a[1]),
                                    s = i.offset(c, r * Math.max(1, Math.floor(u / 60)));
                                s > a[1] ? e.stop() : (l(s), e.scheduleNextStep())
                            }
                        }, e
                    }
                    return n = a, (t = [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.clearPlayTimeOut()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, n = this,
                                t = this.props,
                                r = t.isPlaying,
                                i = t.darkMode;
                            e = r ? (0, o.jsx)("path", {
                                fill: "#000",
                                d: "M7 3H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm9 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"
                            }) : (0, o.jsx)("path", {
                                fill: "#000",
                                d: "M16 10c0-.36-.2-.67-.49-.84l.01-.01-10-6-.01.01A.991.991 0 005 3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1 .19 0 .36-.07.51-.16l.01.01 10-6-.01-.01c.29-.17.49-.48.49-.84z",
                                transform: "translate(.5)"
                            });
                            var a = .48 * Math.min(40, 40);
                            return (0, o.jsxs)(uo, {
                                darkMode: i,
                                width: 40,
                                height: 40,
                                onClick: function() {
                                    r ? n.stop() : n.start()
                                },
                                children: [(0, o.jsx)(so, {
                                    cx: 20,
                                    cy: 20,
                                    r: a
                                }), (0, o.jsx)("g", {
                                    transform: "translate(".concat(10, ",").concat(10, ")"),
                                    children: e
                                })]
                            })
                        }
                    }]) && ro(n.prototype, t), r && ro(n, r), a
                }(l.Component);
            fo.defaultProps = {
                speed: 1
            };
            var ho = fo,
                vo = t(36738),
                po = t(81640),
                mo = t(80241);

            function go(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function yo(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function bo(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        yo(e, n, t[n])
                    }))
                }
                return e
            }

            function Eo(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return go(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return go(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var xo = 30,
                Oo = 15,
                To = 25,
                wo = 25,
                So = A.Z.div({
                    display: "flex",
                    padding: "5px 20px",
                    alignItems: "center",
                    userSelect: "none",
                    "&>*+*": {
                        marginLeft: 10
                    }
                }),
                Ao = A.Z.div({
                    display: "flex",
                    flexGrow: 1,
                    overflow: "hidden"
                }),
                jo = A.Z.svg((function(e) {
                    return {
                        cursor: "pointer",
                        backgroundColor: e.darkMode ? d.wL.DARK_GRAY4 : d.wL.LIGHT_GRAY4
                    }
                })),
                Lo = A.Z.rect({
                    cursor: "crosshair",
                    fill: "rgba(255,255,255,0)",
                    stroke: "none"
                }),
                _o = A.Z.g((function(e) {
                    return {
                        cursor: "ew-resize",
                        "& > path": {
                            stroke: d.wL.DARK_GRAY1,
                            transition: "fill 0.2s",
                            fill: e.darkMode ? d.wL.GRAY4 : d.wL.WHITE
                        },
                        "&:hover path": {
                            fill: e.darkMode ? d.wL.WHITE : d.wL.GRAY4
                        }
                    }
                })),
                Ro = A.Z.path({
                    strokeWidth: 1
                }),
                Co = A.Z.rect({
                    fill: d.wL.WHITE,
                    fillOpacity: 0
                }),
                Io = A.Z.rect({
                    fill: d.wL.BLUE5,
                    cursor: "move",
                    transition: "fill-opacity 0.2s",
                    fillOpacity: .3,
                    "&:hover": {
                        fillOpacity: .4
                    }
                }),
                Mo = A.Z.path({
                    fill: "none",
                    stroke: d.wL.GRAY1,
                    shapeRendering: "crispEdges"
                }),
                No = A.Z.text((function(e) {
                    return {
                        fill: e.darkMode ? d.wL.LIGHT_GRAY1 : d.wL.DARK_GRAY1,
                        fontSize: 10,
                        textAnchor: "start"
                    }
                })),
                Po = A.Z.rect((function(e) {
                    return {
                        fill: e.darkMode ? d.wL.LIGHT_GRAY1 : Pe.eL.primary,
                        stroke: e.darkMode ? d.wL.GRAY4 : (0, mo.Uc)(Pe.eL.primary).darker().toString()
                    }
                })),
                ko = A.Z.line({
                    fill: "none",
                    stroke: d.wL.GRAY1,
                    shapeRendering: "crispEdges"
                }),
                Do = function(e) {
                    var n = e.width,
                        t = e.height,
                        r = e.side,
                        i = e.darkMode,
                        a = e.onMove,
                        c = (0, l.useRef)();
                    c.current = function(e) {
                        var n = e.center;
                        a(n.x, r)
                    };
                    var u = (0, l.useRef)(null);
                    (0, l.useEffect)((function() {
                        var e = new no.Q(u.current);
                        return c.current && (e.on("panstart", c.current), e.on("panmove", c.current), e.on("panend", c.current)),
                            function() {
                                e.destroy()
                            }
                    }), [c]);
                    var s = [n, n],
                        f = s[0],
                        d = s[1];
                    return (0, o.jsxs)(_o, {
                        darkMode: i,
                        children: [(0, o.jsx)(Ro, {
                            transform: "translate(".concat("start" === r ? 0 : n, ",0)"),
                            d: "start" === r ? "M0,".concat(d, " Q").concat(-f, ",").concat(d, " ").concat(-f, ",0 L0,0 0,").concat(t, " ").concat(-f, ",").concat(t, " Q").concat(-f, ",").concat(t - d, " 0,").concat(t - d, " z") : "M0,".concat(d, " Q").concat(f, ",").concat(d, " ").concat(f, ",0 L0,0 0,").concat(t, " ").concat(f, ",").concat(t, " Q").concat(f, ",").concat(t - d, " 0,").concat(t - d, " z")
                        }), (0, o.jsx)(Co, {
                            x: "start" === r ? -f : f,
                            ref: u,
                            height: t,
                            width: n
                        })]
                    })
                },
                Zo = function(e) {
                    var n = e.width,
                        t = e.extent,
                        r = e.selectedRange,
                        i = e.timeGranularity,
                        a = e.totalCountsByTime,
                        c = e.darkMode,
                        u = e.onChange,
                        s = n - To - wo,
                        f = (0, Jr.Z)();
                    f.domain(t), f.range([0, s]);
                    var d = (0, l.useState)(),
                        h = d[0],
                        v = d[1],
                        p = (0, l.useState)(),
                        m = p[0],
                        g = p[1],
                        y = (0, l.useRef)(null),
                        b = (0, l.useRef)(null),
                        E = (0, l.useRef)(null),
                        x = function(e) {
                            var n = y.current;
                            if (null != n) return e - n.getBoundingClientRect().left - To
                        },
                        O = function(e) {
                            var n = x(e);
                            if (null != n) return f.invert(n)
                        },
                        T = (0, l.useRef)();
                    T.current = function(e) {
                        var n = e.center;
                        if (null == h) {
                            var o = x(n.x);
                            if (null != o) {
                                var a = f(r[0]);
                                null != a && v(a - o)
                            }
                        } else {
                            var c = O(n.x + h);
                            if (c) {
                                var l = i.interval;
                                c = l.round(c);
                                var s = l.count(r[0], r[1]),
                                    d = l.offset(c, s);
                                c < t[0] && (c = t[0], d = l.offset(t[0], s)), d > t[1] && (c = l.offset(t[1], -s), d = t[1]), u([c, d])
                            }
                        }
                    };
                    var w = function(e) {
                            return T.current(e)
                        },
                        S = function(e) {
                            T.current(e), v(void 0)
                        },
                        A = (0, l.useRef)();
                    A.current = function(e) {
                        u(t)
                    };
                    var j = function(e) {
                            return A.current(e)
                        },
                        L = (0, l.useRef)();
                    L.current = function(e) {
                        var n = e.center,
                            r = O(n.x);
                        r && ((r = i.interval.round(r)) < t[0] && (r = t[0]), r > t[1] && (r = t[1]), g(r), u([r, r]))
                    };
                    var _ = function(e) {
                            return L.current(e)
                        },
                        R = (0, l.useRef)();
                    R.current = function(e) {
                        var n = e.center,
                            r = O(n.x);
                        m && r && ((r = i.interval.round(r)) < t[0] && (r = t[0]), r > t[1] && (r = t[1]), u(m < r ? [m, r] : [r, m]))
                    };
                    var C = function(e) {
                            return R.current(e)
                        },
                        I = function(e) {
                            R.current(e), g(void 0)
                        };
                    (0, l.useEffect)((function() {
                        var e = new no.Q(b.current);
                        e.on("click", j), e.on("panstart", _), e.on("panmove", C), e.on("panend", I);
                        var n = new no.Q(E.current);
                        return n.on("panstart", w), n.on("panmove", w), n.on("panend", S),
                            function() {
                                e.destroy(), n.destroy()
                            }
                    }), []);
                    var M = (0, l.useRef)();
                    M.current = function(e, n) {
                        var o = O(e);
                        null != o && ((o = i.interval.round(o)) < t[0] && (o = t[0]), o > t[1] && (o = t[1]), u("start" === n ? [o < r[1] ? o : r[1], r[1]] : [r[0], o > r[0] ? o : r[0]]))
                    };
                    var N, P = function(e, n) {
                            M.current && M.current(e, n)
                        },
                        k = f.ticks(Math.min(i.interval.count(t[0], t[1]), s / 70)),
                        D = (0, Tr.Z)().domain([0, null !== (N = (0, eo.Z)(a, (function(e) {
                            return e.count
                        }))) && void 0 !== N ? N : 0]).range([0, xo]),
                        Z = ot;
                    return (0, o.jsxs)(jo, {
                        ref: y,
                        darkMode: c,
                        width: n,
                        height: 80,
                        children: [(0, o.jsxs)("g", {
                            transform: "translate(".concat(To, ",").concat(Oo, ")"),
                            children: [k.map((function(e, n) {
                                var t = f(e);
                                return null == t ? null : (0, o.jsxs)("g", {
                                    transform: "translate(".concat(t, ",", 0, ")"),
                                    children: [(0, o.jsx)(ko, {
                                        y1: 0,
                                        y2: 50
                                    }), t < s && (0, o.jsx)(No, {
                                        darkMode: c,
                                        x: 3,
                                        y: 12,
                                        children: Z(e)
                                    })]
                                }, n)
                            })), (0, o.jsx)(Mo, {
                                d: "M0,0 ".concat(s, ",0")
                            }), (0, o.jsx)(Mo, {
                                transform: "translate(0,".concat(50, ")"),
                                d: "M0,0 ".concat(s, ",0")
                            }), (0, o.jsx)("g", {
                                transform: "translate(0,".concat(20, ")"),
                                children: a.map((function(e) {
                                    var n = e.time,
                                        t = e.count;
                                    return (0, o.jsx)(Po, {
                                        darkMode: c,
                                        x: f(n),
                                        y: xo - D(t),
                                        width: Math.max(f(i.interval.offset(n)) - f(n) - 1, 1),
                                        height: D(t)
                                    }, n.getTime())
                                }))
                            })]
                        }), (0, o.jsx)(Lo, {
                            ref: b,
                            width: n,
                            height: 80
                        }), (0, o.jsxs)("g", {
                            transform: "translate(".concat(To, ",").concat(Oo, ")"),
                            children: [(0, o.jsx)("g", {
                                transform: "translate(".concat(f(r[0]), ",0)"),
                                children: (0, o.jsx)(Io, {
                                    ref: E,
                                    height: 50,
                                    width: f(r[1]) - f(r[0])
                                })
                            }), (0, o.jsx)("g", {
                                transform: "translate(".concat(f(r[0]), ",").concat(-10, ")"),
                                children: (0, o.jsx)(Do, {
                                    darkMode: c,
                                    width: 10,
                                    height: 70,
                                    side: "start",
                                    onMove: P
                                })
                            }), (0, o.jsx)("g", {
                                transform: "translate(".concat(f(r[1]) - 10, ",").concat(-10, ")"),
                                children: (0, o.jsx)(Do, {
                                    darkMode: c,
                                    width: 10,
                                    height: 70,
                                    side: "end",
                                    onMove: P
                                })
                            })]
                        })]
                    })
                },
                Fo = function(e) {
                    var n = Eo((0, vo.Z)(), 2),
                        t = n[0],
                        r = n[1],
                        i = e.extent,
                        a = e.selectedRange,
                        c = e.timeGranularity,
                        u = e.darkMode,
                        s = e.onChange,
                        f = (0, l.useState)(a),
                        d = f[0],
                        h = f[1],
                        v = (0, po.Z)(d, 100),
                        p = (0, l.useRef)();
                    p.current = function(e) {
                        return s(e)
                    }, (0, l.useEffect)((function() {
                        var e = p.current;
                        e && e(v)
                    }), [v, p]);
                    var m, g, y = (0, l.useState)(a),
                        b = y[0],
                        E = y[1];
                    g = b, !(m = a) && !g || m && g && m[0] === g[0] && m[1] === g[1] || (h(a), E(a));
                    var x = (0, l.useState)(!1),
                        O = x[0],
                        T = x[1];
                    return (0, o.jsxs)(So, {
                        children: [(0, o.jsx)(ho, {
                            darkMode: u,
                            extent: i,
                            current: d[0],
                            interval: c.interval,
                            stepDuration: 100,
                            speed: 1,
                            isPlaying: O,
                            onPlay: function() {
                                var e = c.interval;
                                if (a[1] >= i[1]) {
                                    var n = e.count(a[0], a[1]);
                                    h([i[0], e.offset(i[0], n)])
                                }
                                T(!0)
                            },
                            onPause: function() {
                                return T(!1)
                            },
                            onAdvance: function(e) {
                                var n = c.interval,
                                    t = n.count(a[0], a[1]),
                                    r = n.offset(e, t);
                                r >= i[1] ? (T(!1), h([n.offset(r, -t), r])) : h([e, r])
                            }
                        }), (0, o.jsx)(Ao, {
                            ref: t,
                            children: r.width > 0 && (0, o.jsx)(Zo, bo({}, e, {
                                selectedRange: d,
                                width: r.width,
                                onChange: function(e) {
                                    h(e), T(!1)
                                }
                            }))
                        })]
                    })
                },
                Go = t(31606);

            function Bo(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function zo(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function Uo(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        zo(e, n, t[n])
                    }))
                }
                return e
            }

            function Ho(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return Bo(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Bo(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Yo() {
                var e, n, t = (e = ["\n  font-size: 8px;\n  padding: 10px;\n  max-height: 100px;\n  overflow: auto;\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return Yo = function() {
                    return t
                }, t
            }
            var Wo = {
                    type: a.Z,
                    doubleClickZoom: !1,
                    dragRotate: !0,
                    touchRotate: !0,
                    minZoom: 0,
                    maxZoom: Ke
                },
                Vo = A.Z.div((function(e) {
                    var n = e.cursor,
                        t = e.baseMapOpacity,
                        r = e.darkMode;
                    return "\n  & #deckgl-overlay {\n    mix-blend-mode: ".concat(r ? "screen" : "multiply", ";\n  }\n  & .mapboxgl-map {\n    opacity: ").concat(t, "\n  }\n  ").concat(null != n ? "& #view-default-view { cursor: ".concat(n, "; }") : "", ",\n")
                })),
                Ko = A.Z.div(Yo()),
                $o = (0, A.Z)(y.Do)((function(e) {
                    return {
                        display: "flex",
                        alignSelf: "center",
                        fontSize: 12,
                        padding: "5px 10px",
                        borderRadius: 5,
                        backgroundColor: e.darkMode ? d.wL.DARK_GRAY4 : d.wL.LIGHT_GRAY4,
                        textAlign: "center"
                    }
                })),
                Xo = (0, A.Z)(y.Do)({
                    minWidth: 400,
                    display: "block",
                    boxShadow: "0 0 5px #aaa",
                    borderTop: "1px solid #999"
                }),
                qo = A.Z.div((function(e) {
                    return {
                        padding: 5,
                        borderRadius: 5,
                        backgroundColor: e.darkMode ? d.wL.DARK_GRAY4 : d.wL.LIGHT_GRAY4,
                        textAlign: "center"
                    }
                })),
                Qo = 100;

            function Jo(e, n) {
                var t = n.interval,
                    r = n.formatFull,
                    o = n.order,
                    i = e[0],
                    a = e[1];
                o >= 3 && (a = t.offset(a, -1)), a <= i && (a = i);
                var c = r(i),
                    l = r(a);
                return c === l ? c : "".concat(c, " \u2013 ").concat(l)
            }
            var ei = function(e) {
                    var n, t, a = e.inBrowser,
                        b = e.embed,
                        S = e.config,
                        A = e.spreadSheetKey,
                        j = e.flowsSheet,
                        L = e.locationsFetch,
                        _ = e.flowsFetch,
                        R = (0, l.useRef)(),
                        C = (0, sr.useRouter)(),
                        I = (0, l.useMemo)((function() {
                            return on(S, C.query)
                        }), [S]),
                        M = (0, l.useRef)(null),
                        N = (0, l.useReducer)(Je, I),
                        P = N[0],
                        k = N[1],
                        D = (0, l.useState)(!1),
                        Z = D[0],
                        F = D[1],
                        U = P.selectedTimeRange,
                        H = xt(P, e),
                        Y = Ot(P, e),
                        W = Ft(P, e),
                        V = Qt(P, e),
                        X = qt(P, e);
                    (0, l.useEffect)((function() {
                        Y && (U && Y[0] <= U[0] && U[1] <= Y[1] || k({
                            type: Ve.SET_TIME_RANGE,
                            range: Y
                        }))
                    }), [Y, U]);
                    var q = Ho(ur((function() {
                        if (!a && A) {
                            var e = function(e) {
                                    var n = {},
                                        t = e.viewport,
                                        r = t.latitude,
                                        o = t.longitude,
                                        i = t.zoom,
                                        a = t.bearing,
                                        c = t.pitch,
                                        l = e.selectedLocations;
                                    return n.v = (0, ke.Jb)([
                                        [r.toFixed(6), o.toFixed(6), i.toFixed(2), a.toFixed(0), c.toFixed(0)]
                                    ]), n.a = "".concat(e.animationEnabled ? 1 : 0), n.as = "".concat(e.adaptiveScalesEnabled ? 1 : 0), n.b = "".concat(e.baseMapEnabled ? 1 : 0), n.bo = "".concat(e.baseMapOpacity), n.c = "".concat(e.clusteringEnabled ? 1 : 0), n.ca = "".concat(e.clusteringAuto ? 1 : 0), null != e.manualClusterZoom && (n.cz = "".concat(e.manualClusterZoom)), n.d = "".concat(e.darkMode ? 1 : 0), n.fe = "".concat(e.fadeEnabled ? 1 : 0), n.lt = "".concat(e.locationTotalsEnabled ? 1 : 0), n.lfm = "".concat(e.locationFilterMode), e.selectedTimeRange && (n.t = "".concat(e.selectedTimeRange.map(Xe))), null != e.colorSchemeKey && (n.col = "".concat(e.colorSchemeKey)), n.f = "".concat(e.fadeAmount), l && (n.s = "".concat(encodeURIComponent((0, ke.Jb)([l])))), n
                                }(P),
                                n = Uo({}, e, A ? {
                                    id: A
                                } : {}, j ? {
                                    sheet: (0, Go.m1)(j)
                                } : {});
                            de()(n, C.query) || C.replace((0, Go.Ap)(A, j, b, e))
                        }
                    }), 250, [P, C.asPath]), 1)[0];
                    (0, l.useEffect)(q, [C.asPath, P]);
                    var Q = P.viewport,
                        J = P.tooltip,
                        ee = P.animationEnabled,
                        te = P.baseMapEnabled,
                        re = lt(0, e),
                        oe = mt(P, e),
                        ie = wt(P, e),
                        ae = Kt(P, e),
                        ce = rr(P, e),
                        le = $t(S),
                        ue = function(e) {
                            var n, t;
                            n = e, (null != (t = KeyboardEvent) && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](n) : n instanceof t) && "Escape" === e.key && (Z ? F(!1) : (J && Be(), P.highlight && Me(void 0)))
                        };
                    (0, l.useEffect)((function() {
                        return globalThis.addEventListener("keydown", ue),
                            function() {
                                globalThis.removeEventListener("keydown", ue)
                            }
                    }));
                    var fe = (0, l.useState)(0),
                        he = fe[0],
                        pe = fe[1],
                        me = (0, l.useRef)(),
                        ge = (0, l.useCallback)((function(e) {
                            pe(e / 1e3 % 90 / 90 * 1800), me.current = requestAnimationFrame(ge)
                        }), [me, pe]);
                    (0, l.useEffect)((function() {
                        if (ee) me.current = requestAnimationFrame(ge);
                        else {
                            var e = me.current;
                            null != e && e > 0 && (globalThis.cancelAnimationFrame(e), me.current = void 0)
                        }
                        return function() {
                            null != me.current && cancelAnimationFrame(me.current)
                        }
                    }), [ee, ge]);
                    var ye = (0, l.useCallback)((function(e) {
                            "yes" !== S[r.IGNORE_ERRORS] && ar.Z.show({
                                intent: h.S.WARNING,
                                icon: Te.d.WARNING_SIGN,
                                timeout: 0,
                                message: (0, o.jsx)(y.fI, {
                                    children: e
                                })
                            })
                        }), [S]),
                        be = pt(P, e);
                    (0, l.useEffect)((function() {
                        be && ye((0, o.jsxs)(o.Fragment, {
                            children: ["Locations with the following IDs have invalid coordinates:", (0, o.jsxs)(Ko, {
                                children: [(be.length > Qo ? be.slice(0, Qo) : be).map((function(e) {
                                    return "".concat(e)
                                })).join(", "), be.length > Qo && "\u2026 and ".concat(be.length - Qo, " others")]
                            }), 'Make sure you named the columns "lat" and "lon" and did not confuse latitudes and longitudes. The coordinates must be in decimal form. If your coordinates are in degrees-minutes-seconds (DSM format) you can convert them with', " ", (0, o.jsx)(Pn, {
                                href: "https://www.latlong.net/degrees-minutes-seconds-to-decimal-degrees",
                                children: "this tool"
                            }), " ", "for example."]
                        }))
                    }), [be, ye]);
                    var xe = Nt(P, e),
                        we = bt(P, e);
                    (0, l.useEffect)((function() {
                        if (xe && we && re) {
                            var e = Array.from(xe).sort();
                            ye((0, o.jsxs)(o.Fragment, {
                                children: ["Locations with the following IDs could not be found in the locations sheet:", (0, o.jsxs)(Ko, {
                                    children: [(e.length > Qo ? e.slice(0, Qo) : e).map((function(e) {
                                        return "".concat(e)
                                    })).join(", "), e.length > Qo && "\u2026 and ".concat(e.length - Qo, " others")]
                                }), G(re.length - we.length), " flows were omitted.", 0 === we.length && (0, o.jsxs)("div", {
                                    style: {
                                        marginTop: "1em"
                                    },
                                    children: ["Make sure the columns are named header row in the flows sheet is correct. There must be ", (0, o.jsx)("b", {
                                        children: "origin"
                                    }), ", ", (0, o.jsx)("b", {
                                        children: "dest"
                                    }), ", and ", (0, o.jsx)("b", {
                                        children: "count"
                                    }), "."]
                                })]
                            }))
                        }
                    }), [xe, ye, re, we]);
                    var Se = P.adjustViewportToLocations;
                    (0, l.useEffect)((function() {
                        if (Se) {
                            var e = globalThis.innerWidth,
                                n = globalThis.innerHeight;
                            if (null != oe) {
                                var t = (0, m.Lz)(null !== ie && void 0 !== ie ? ie : oe, w, [e, n], {
                                    pad: .1
                                });
                                t.zoom || (t = {
                                    zoom: 1,
                                    latitude: 0,
                                    longitude: 0
                                }), k({
                                    type: Ve.SET_VIEWPORT,
                                    viewport: Uo({
                                        width: e,
                                        height: n
                                    }, t, {
                                        minZoom: 0,
                                        maxZoom: Ke,
                                        minPitch: 0,
                                        maxPitch: 60,
                                        bearing: 0,
                                        pitch: 0,
                                        altitude: 1.5
                                    }, Qe(500)),
                                    adjustViewportToLocations: !1
                                })
                            }
                        }
                    }), [oe, ie, Se]);
                    var Ae = St(P, e),
                        je = (0, l.useState)(b && document.fullscreenEnabled),
                        Le = je[0],
                        _e = je[1];
                    (0, l.useEffect)((function() {
                        var e = function() {
                            _e(b && document.fullscreenEnabled && !document.fullscreenElement)
                        };
                        return document.addEventListener("fullscreenchange", e),
                            function() {
                                return document.removeEventListener("fullscreenchange", e)
                            }
                    }), [_e]);
                    var Re = (0, l.useCallback)((function() {
                            var e = M.current;
                            if (e) return e.getBoundingClientRect()
                        }), [M]),
                        Ce = (0, l.useCallback)((function() {
                            var e = Re();
                            if (e) {
                                var n = e.width,
                                    t = e.height;
                                return new g.ZP(Uo({}, Q, {
                                    width: n,
                                    height: t
                                }))
                            }
                        }), [Q, Re]),
                        Ie = function(e, n) {
                            var t = Re();
                            if (t) {
                                var r = t.top,
                                    o = t.left;
                                k({
                                    type: Ve.SET_TOOLTIP,
                                    tooltip: {
                                        target: Uo({}, e, {
                                            left: o + e.left,
                                            top: r + e.top
                                        }),
                                        placement: "top",
                                        content: n
                                    }
                                })
                            }
                        },
                        Me = function(e) {
                            k({
                                type: Ve.SET_HIGHLIGHT,
                                highlight: e
                            })
                        },
                        Ne = Ho(ur(Ie, 500), 2),
                        Pe = Ne[0],
                        De = Ne[1],
                        Ze = Ho(ur(Me, 500), 2),
                        Fe = Ze[0],
                        Ge = Ze[1],
                        Be = function() {
                            k({
                                type: Ve.SET_TOOLTIP,
                                tooltip: void 0
                            }), De()
                        },
                        ze = function(e) {
                            var n = e.type,
                                t = e.object,
                                r = e.x,
                                i = e.y;
                            switch (n) {
                                case f._8.FLOW:
                                    t ? (Me({
                                        type: Ye.FLOW,
                                        flow: t
                                    }), Ge(), function(e, n) {
                                        var t = Ho(e, 2),
                                            r = {
                                                left: t[0] - 5,
                                                top: t[1] - 5,
                                                width: 10,
                                                height: 10
                                            },
                                            i = (0, o.jsx)(z, {
                                                flow: n.object,
                                                origin: n.origin,
                                                dest: n.dest,
                                                config: S
                                            });
                                        P.tooltip ? (Ie(r, i), De()) : Pe(r, i)
                                    }([r, i], e)) : (Me(void 0), Ge(), Be());
                                    break;
                                case f._8.LOCATION:
                                    t ? (Fe({
                                        type: Ye.LOCATION,
                                        locationId: T(t)
                                    }), function(e) {
                                        var n = e.object,
                                            t = e.circleRadius,
                                            r = Ce();
                                        if (r) {
                                            var i = Ho(r.project(w(n)), 2),
                                                a = i[0],
                                                c = i[1],
                                                l = t + 5,
                                                u = P.selectedLocations,
                                                s = {
                                                    left: a - l,
                                                    top: c - l,
                                                    width: 2 * l,
                                                    height: 2 * l
                                                },
                                                f = (0, o.jsx)(B, {
                                                    locationInfo: e,
                                                    isSelectionEmpty: !u,
                                                    isSelected: !(!u || !u.find((function(e) {
                                                        return e === n.id
                                                    }))),
                                                    config: S
                                                });
                                            P.tooltip ? (Ie(s, f), De()) : Pe(s, f)
                                        }
                                    }(e)) : (Me(void 0), Ge(), Be());
                                    break;
                                default:
                                    Me(void 0), Ge(), Be()
                            }
                        };
                    if (L.loading) return (0, o.jsx)(Ee, {});
                    if (L.error || _.error) return (0, o.jsx)(ve, {
                        children: A ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("p", {
                                children: ["Oops\u2026 Could not fetch data from", " ", (0, o.jsx)("a", {
                                    href: "https://docs.google.com/spreadsheets/d/".concat(A),
                                    children: "this spreadsheet"
                                }), ".", " "]
                            }), (0, o.jsxs)("p", {
                                children: ["If you are the owner of this spreadsheet, make sure you have shared it by doing the following:", (0, o.jsxs)("ol", {
                                    children: [(0, o.jsx)("li", {
                                        children: "Click the \u201cShare\u201d button in the spreadsheet"
                                    }), (0, o.jsx)("li", {
                                        children: "Change the selection from \u201cRestricted\u201d to \u201cAnyone with the link\u201d in the drop-down under \u201cGet link\u201d"
                                    })]
                                })]
                            })]
                        }) : (0, o.jsx)("p", {
                            children: "Oops\u2026 Could not fetch data"
                        })
                    });
                    var Ue = _t(P, e),
                        He = S[r.TITLE],
                        We = S[r.DESCRIPTION],
                        $e = S[r.SOURCE_URL],
                        qe = S[r.SOURCE_NAME],
                        en = S[r.AUTHOR_URL],
                        nn = S[r.AUTHOR_NAME],
                        tn = S[r.MAPBOX_ACCESS_TOKEN],
                        rn = Rt(P, e),
                        an = Ct(P),
                        cn = Mt(P, e),
                        ln = function(e, n) {
                            switch (e.type) {
                                case f._8.LOCATION:
                                case f._8.LOCATION_AREA:
                                    var t = e.object;
                                    t && k({
                                        type: Ve.SELECT_LOCATION,
                                        locationId: T(t),
                                        incremental: n.srcEvent.shiftKey
                                    })
                            }
                        },
                        un = function(e) {
                            k({
                                type: Ve.SET_SELECTED_LOCATIONS,
                                selectedLocations: e
                            })
                        },
                        sn = Ht(P, e);
                    return (0, o.jsxs)(Oe, {
                        ref: M,
                        onMouseLeave: Be,
                        className: an ? v.Pyr : void 0,
                        style: {
                            background: an ? d.wL.DARK_GRAY1 : d.wL.LIGHT_GRAY5
                        },
                        children: [(0, o.jsx)(Vo, {
                            darkMode: an,
                            baseMapOpacity: P.baseMapOpacity / 100,
                            cursor: Z ? "crosshair" : void 0,
                            children: (0, o.jsxs)(i.Z, {
                                ref: R,
                                controller: Wo,
                                viewState: Q,
                                views: [new c.Z({
                                    id: "map",
                                    repeat: !0
                                })],
                                onViewStateChange: function(e) {
                                    var n = e.viewState;
                                    k({
                                        type: Ve.SET_VIEWPORT,
                                        viewport: n
                                    })
                                },
                                layers: function() {
                                    var n = P.animationEnabled,
                                        t = P.adaptiveScalesEnabled,
                                        r = P.locationTotalsEnabled,
                                        o = P.darkMode,
                                        i = P.colorSchemeKey,
                                        a = P.fadeAmount,
                                        c = [];
                                    if (ae && ce) {
                                        var l, s = ["flow-map", n ? "animated" : "arrows", r ? "withTotals" : "", i, o ? "dark" : "light", a].join("-"),
                                            d = Ut(P, e),
                                            h = function() {
                                                var n = P.highlight,
                                                    t = P.clusteringEnabled;
                                                if (!n || !t) return n;
                                                var r = St(P, e),
                                                    o = Lt(P, e);
                                                if (r && void 0 !== o) {
                                                    var i = function(e) {
                                                        var n = r.getClusterById(e);
                                                        if (n) return n.zoom === o;
                                                        var t = r.getMinZoomForLocation(e);
                                                        return void 0 === t || o >= t
                                                    };
                                                    switch (n.type) {
                                                        case Ye.LOCATION:
                                                            return i(n.locationId) ? n : void 0;
                                                        case Ye.FLOW:
                                                            var a = n.flow,
                                                                c = a.origin,
                                                                l = a.dest;
                                                            return i(c) && i(l) ? n : void 0
                                                    }
                                                }
                                            }();
                                        c.push(new f.ZP(Uo({
                                            id: s,
                                            animate: n,
                                            animationCurrentTime: he,
                                            diffMode: Rt(P, e),
                                            colors: It(P, e),
                                            locations: ae,
                                            flows: ce,
                                            getFlowColor: function(e) {
                                                return null !== (l = e.color) && void 0 !== l ? l : void 0
                                            },
                                            showOnlyTopFlows: 5e3,
                                            getLocationCentroid: w,
                                            getFlowMagnitude: E,
                                            getFlowOriginId: x,
                                            getFlowDestId: O,
                                            getLocationId: T,
                                            getLocationTotalIn: function(e) {
                                                var n;
                                                return (null === (n = null === d || void 0 === d ? void 0 : d.get(e.id)) || void 0 === n ? void 0 : n.incoming) || 0
                                            },
                                            getLocationTotalOut: function(e) {
                                                var n;
                                                return (null === (n = null === d || void 0 === d ? void 0 : d.get(e.id)) || void 0 === n ? void 0 : n.outgoing) || 0
                                            },
                                            getLocationTotalWithin: function(e) {
                                                var n;
                                                return (null === (n = null === d || void 0 === d ? void 0 : d.get(e.id)) || void 0 === n ? void 0 : n.within) || 0
                                            },
                                            getAnimatedFlowLineStaggering: function(e) {
                                                return new u.alea("".concat(e.origin, "-").concat(e.dest))()
                                            },
                                            showTotals: !0,
                                            maxLocationCircleSize: Gt(P, e),
                                            maxFlowThickness: n ? 18 : 12
                                        }, !t && {
                                            flowMagnitudeExtent: Dt(P, e)
                                        }, {
                                            locationTotalsExtent: tr(P, e),
                                            highlightedLocationId: h && h.type === Ye.LOCATION ? h.locationId : void 0,
                                            highlightedFlow: h && h.type === Ye.FLOW ? h.flow : void 0,
                                            pickable: !0
                                        }, !Z && {
                                            onHover: ze,
                                            onClick: ln
                                        }, {
                                            visible: !0,
                                            updateTriggers: {
                                                onHover: ze,
                                                onClick: ln
                                            }
                                        })))
                                    }
                                    return c
                                }(),
                                ContextProvider: s._MapContext.Provider,
                                parameters: {
                                    clearColor: an ? [0, 0, 0, 1] : [255, 255, 255, 1]
                                },
                                children: [tn && te && (0, o.jsx)(s.StaticMap, {
                                    mapboxApiAccessToken: tn,
                                    mapStyle: cn,
                                    width: "100%",
                                    height: "100%"
                                }), Z && (0, o.jsx)(Xr, {
                                    mapDrawingMode: Ir.POLYGON,
                                    onFeatureDrawn: function(e) {
                                        if (null != e) {
                                            var n = (0, qr.Z)(e),
                                                t = function(e, n) {
                                                    if (e) return Yt(e, n).map((function(n) {
                                                        return e.points[n]
                                                    }))
                                                }(sn, n);
                                            if (t) {
                                                var r = t.filter((function(n) {
                                                    return (0, Qr.Z)(w(n), e)
                                                }));
                                                r.length > 0 ? un(r.map(T)) : un(void 0)
                                            }
                                        }
                                        F(!1), R.current && R.current.deck && (R.current.deck._lastPointerDownInfo = null)
                                    }
                                })]
                            })
                        }), Y && H && W && U && (0, o.jsx)(y.e2, {
                            bottom: 20,
                            left: 100,
                            right: 200,
                            children: (0, o.jsxs)(y.sg, {
                                spacing: 10,
                                children: [(0, o.jsx)($o, {
                                    darkMode: an,
                                    children: Jo(U, H)
                                }), (0, o.jsx)(Xo, {
                                    darkMode: an,
                                    children: (0, o.jsx)(Fo, {
                                        darkMode: an,
                                        extent: Y,
                                        selectedRange: U,
                                        timeGranularity: H,
                                        totalCountsByTime: W,
                                        onChange: function(e) {
                                            k({
                                                type: Ve.SET_TIME_RANGE,
                                                range: e
                                            })
                                        }
                                    })
                                })]
                            })
                        }), ce && (0, o.jsxs)(o.Fragment, {
                            children: [Ue && (0, o.jsx)(y.e2, {
                                top: 10,
                                right: 50,
                                children: (0, o.jsx)(y.Do, {
                                    darkMode: an,
                                    children: (0, o.jsx)(Nn, {
                                        locationFilterMode: P.locationFilterMode,
                                        locations: Ue,
                                        selectedLocations: P.selectedLocations,
                                        onSelectionChanged: un,
                                        onLocationFilterModeChange: function(e) {
                                            k({
                                                type: Ve.SET_LOCATION_FILTER_MODE,
                                                mode: e
                                            })
                                        }
                                    })
                                })
                            }), (0, o.jsx)(y.e2, {
                                top: 10,
                                right: 10,
                                children: (0, o.jsxs)(y.sg, {
                                    spacing: 10,
                                    children: [(0, o.jsxs)(p.hE, {
                                        vertical: !0,
                                        children: [(0, o.jsx)(p.zx, {
                                            title: "Zoom in",
                                            icon: Te.d.PLUS,
                                            onClick: function() {
                                                k({
                                                    type: Ve.ZOOM_IN
                                                })
                                            }
                                        }), (0, o.jsx)(p.zx, {
                                            title: "Zoom out",
                                            icon: Te.d.MINUS,
                                            onClick: function() {
                                                k({
                                                    type: Ve.ZOOM_OUT
                                                })
                                            }
                                        }), (0, o.jsx)(p.zx, {
                                            title: "Reset bearing and pitch",
                                            icon: Te.d.COMPASS,
                                            onClick: function() {
                                                k({
                                                    type: Ve.RESET_BEARING_PITCH
                                                })
                                            }
                                        })]
                                    }), (0, o.jsx)(p.hE, {
                                        vertical: !0,
                                        children: (0, o.jsx)(p.zx, {
                                            title: "Filter by drawing a polygon",
                                            icon: Te.d.POLYGON_FILTER,
                                            active: Z,
                                            onClick: function() {
                                                F(!Z)
                                            }
                                        })
                                    }), !a && !b && (0, o.jsx)(p.hE, {
                                        vertical: !0,
                                        children: (0, o.jsx)(Er, {
                                            children: (0, o.jsx)(p.zx, {
                                                title: "Share\u2026",
                                                icon: Te.d.SHARE
                                            })
                                        })
                                    })]
                                })
                            }), P.locationTotalsEnabled && !b && (0, o.jsx)(y.xu, {
                                bottom: 28,
                                right: 0,
                                darkMode: an,
                                children: (0, o.jsx)(se, {
                                    darkMode: an,
                                    width: 160,
                                    direction: ne.RIGHT,
                                    children: (0, o.jsxs)(y.sg, {
                                        spacing: 10,
                                        padding: 12,
                                        children: [(0, o.jsx)(y.Vw, {
                                            children: "Location totals"
                                        }), (0, o.jsx)(m.eU, {
                                            diff: rn,
                                            colors: It(P, e)
                                        })]
                                    })
                                })
                            })]
                        }), !b && (0, o.jsx)(y.e2, {
                            bottom: 10,
                            left: 10,
                            children: (0, o.jsx)(Pr, {
                                darkMode: an,
                                state: P,
                                dispatch: k,
                                clusterZoom: Lt(P, e),
                                availableClusterZoomLevels: At(P, e),
                                onChangeClusteringAuto: function(e) {
                                    e || Ae && null != Ae.availableZoomLevels && k({
                                        type: Ve.SET_MANUAL_CLUSTER_ZOOM,
                                        manualClusterZoom: (0, kn._B)(Ae.availableZoomLevels, Q.zoom)
                                    });
                                    k({
                                        type: Ve.SET_CLUSTERING_AUTO,
                                        clusteringAuto: e
                                    })
                                }
                            })
                        }), Le && (0, o.jsx)(y.e2, {
                            bottom: 30,
                            right: 10,
                            children: (0, o.jsx)(p.zx, {
                                title: "Open in full-screen mode",
                                onClick: function() {
                                    var e = M.current;
                                    e && (e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen())
                                },
                                icon: Te.d.FULLSCREEN
                            })
                        }), A && !b && (0, o.jsx)(y.kS, {
                            top: 52,
                            left: 0,
                            darkMode: an,
                            children: (0, o.jsx)(se, {
                                darkMode: an,
                                width: 300,
                                direction: ne.LEFT,
                                children: (0, o.jsxs)(y.sg, {
                                    spacing: 10,
                                    padding: "12px 20px",
                                    children: [He && (0, o.jsxs)("div", {
                                        children: [(0, o.jsx)(y.Dx, {
                                            children: He
                                        }), (0, o.jsx)(y.dk, {
                                            children: We
                                        })]
                                    }), le && le.length > 1 && (0, o.jsx)(p.Lu, {
                                        value: e.flowsSheet,
                                        onChange: function(n) {
                                            var t = n.currentTarget.value,
                                                r = e.onSetFlowsSheet;
                                            r && (r(t), un(void 0))
                                        },
                                        options: le.map((function(e) {
                                            return {
                                                label: e,
                                                value: e
                                            }
                                        }))
                                    }), en ? (0, o.jsxs)("div", {
                                        children: ["Created by: ", (0, o.jsx)(Pn, {
                                            href: "".concat(en.indexOf("://") < 0 ? "http://" : "").concat(en),
                                            children: nn || "Author"
                                        })]
                                    }) : nn ? (0, o.jsxs)("div", {
                                        children: ["Created by: ", nn]
                                    }) : null, qe && $e && (0, o.jsxs)("div", {
                                        children: ["Original data source: ", (0, o.jsx)(o.Fragment, {
                                            children: (0, o.jsx)(Pn, {
                                                href: "".concat($e.indexOf("://") < 0 ? "http://" : "").concat($e),
                                                children: qe
                                            })
                                        })]
                                    }), (0, o.jsx)("div", {
                                        children: "yes" !== S[r.HIDE_DATA_LINK] ? (0, o.jsxs)(o.Fragment, {
                                            children: ["Data behind this map is in ", (0, o.jsx)(Pn, {
                                                href: "https://docs.google.com/spreadsheets/d/".concat(A),
                                                children: "this spreadsheet"
                                            }), ".", " ", (0, o.jsxs)(o.Fragment, {
                                                children: ["You can ", (0, o.jsx)($.default, {
                                                    href: "/",
                                                    children: "publish your own map"
                                                }), " too."]
                                            })]
                                        }) : null
                                    }), null != V && null != X && (0, o.jsx)(qo, {
                                        darkMode: an,
                                        children: Math.round(V) === Math.round(X) ? null === (n = S["msg.totalCount.allTrips"]) || void 0 === n ? void 0 : n.replace("{0}", G(X)) : null === (t = S["msg.totalCount.countOfTrips"]) || void 0 === t ? void 0 : t.replace("{0}", G(V)).replace("{1}", G(X))
                                    })]
                                })
                            })
                        }), J && (0, o.jsx)(K, Uo({}, J)), _.loading && (0, o.jsx)(Ee, {})]
                    })
                },
                ni = t(16372);

            function ti(e) {
                var n = [],
                    t = (0, we.b1)().key((function(e) {
                        return e.origin
                    })).key((function(e) {
                        return e.dest
                    })).key((function(e) {
                        var n;
                        return (null === (n = $n(e.time)) || void 0 === n ? void 0 : n.toISOString()) || "unknown"
                    })).rollup((function(e) {
                        var t = e[0],
                            r = t.origin,
                            o = t.dest,
                            i = t.time,
                            a = t.color;
                        e.length > 1 && n.push(e[0]);
                        var c = {
                            origin: r,
                            dest: o,
                            time: $n(i),
                            count: e.reduce((function(e, n) {
                                if (null != n.count) {
                                    var t = +n.count;
                                    if (!isNaN(t) && isFinite(t)) return e + t
                                }
                                return e
                            }), 0)
                        };
                        if (a) {
                            var l = ni.ZP(a);
                            l && (c.color = l.toString())
                        }
                        return c
                    })).entries(e),
                    r = [],
                    i = !0,
                    a = !1,
                    c = void 0;
                try {
                    for (var l, u = t[Symbol.iterator](); !(i = (l = u.next()).done); i = !0) {
                        var s = l.value,
                            f = !0,
                            d = !1,
                            v = void 0;
                        try {
                            for (var p, m = s.values[Symbol.iterator](); !(f = (p = m.next()).done); f = !0) {
                                var g = p.value,
                                    b = !0,
                                    E = !1,
                                    x = void 0;
                                try {
                                    for (var O, T = g.values[Symbol.iterator](); !(b = (O = T.next()).done); b = !0) {
                                        var w = O.value.value;
                                        null != w.origin && null != w.dest && r.push(w)
                                    }
                                } catch (S) {
                                    E = !0, x = S
                                } finally {
                                    try {
                                        b || null == T.return || T.return()
                                    } finally {
                                        if (E) throw x
                                    }
                                }
                            }
                        } catch (S) {
                            d = !0, v = S
                        } finally {
                            try {
                                f || null == m.return || m.return()
                            } finally {
                                if (d) throw v
                            }
                        }
                    }
                } catch (S) {
                    a = !0, c = S
                } finally {
                    try {
                        i || null == u.return || u.return()
                    } finally {
                        if (a) throw c
                    }
                }
                return n.length > 0 && ar.Z.show({
                    intent: h.S.WARNING,
                    icon: Te.d.WARNING_SIGN,
                    timeout: 0,
                    message: (0, o.jsxs)(y.fI, {
                        children: ["The following flows (origin \u2192 dest pairs) were encountered more than once in the dataset:", (0, o.jsxs)(Ko, {
                            children: [(n.length > Qo ? n.slice(0, Qo) : n).map((function(e) {
                                var n = e.origin,
                                    t = e.dest;
                                return "".concat(n, " \u2192 ").concat(t)
                            })).join(", "), n.length > Qo && " \u2026 and ".concat(n.length - Qo, " others")]
                        }), "Their counts were summed up."]
                    })
                }), r
            }
            var ri = t(12028);

            function oi() {
                var e, n, t = (e = ["\n  filter: grayscale(1);\n  svg {\n    circle {\n      fill: #fff;\n      stroke: ", ";\n      stroke-width: 10px;\n    }\n    path {\n      fill: #000;\n      stroke-width: 10px;\n      stroke: ", ";\n    }\n  }\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return oi = function() {
                    return t
                }, t
            }
            var ii = function() {
                    try {
                        var e = document.createElement("canvas");
                        return !!globalThis.WebGLRenderingContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
                    } catch (n) {
                        return !1
                    }
                }(),
                ai = (0, A.Z)(y.e2)(oi(), Pe.eL.primary, Pe.eL.primary),
                ci = function(e) {
                    var n = e.embed,
                        t = e.children;
                    return (0, o.jsx)(Oe, {
                        children: ii ? (0, o.jsxs)(o.Fragment, {
                            children: [t, (0, o.jsx)(ai, {
                                top: 10,
                                left: 10,
                                children: (0, o.jsx)(ri.Z, {
                                    embed: n,
                                    fontSize: 20
                                })
                            })]
                        }) : (0, o.jsx)(li, {
                            children: "Sorry, but your browser does not seem to support WebGL which is required for this app."
                        })
                    })
                },
                li = function(e) {
                    var n = e.children;
                    return (0, o.jsxs)("div", {
                        className: v.Pyr,
                        style: {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [(0, o.jsx)(ri.Z, {
                            fontSize: 30
                        }), (0, o.jsx)("div", {
                            style: {
                                margin: "20px auto 0 auto",
                                maxWidth: "70%"
                            },
                            children: n
                        })]
                    })
                },
                ui = ei
        },
        9521: function() {},
        75307: function() {},
        75042: function() {}
    }
]);