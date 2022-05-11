"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [618], {
        69247: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return j
                }
            });
            var r = t(85893),
                o = t(67294),
                i = t(5526),
                a = t(15360),
                c = t(93004),
                l = {
                    src: "/_next/static/media/github.758884ce.svg",
                    height: 16,
                    width: 16
                },
                s = t(31666),
                u = t(41664),
                f = t(25675),
                d = t(61986),
                h = t(12028);

            function p(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function v() {
                var n = p(["\n  display: flex;\n  width: 100%;\n  padding: 5px;\n  background-color: ", " !important;\n\n  box-shadow: inset 0 0 0 1px rgb(16 22 26 / 20%), 0 0 0 rgb(16 22 26 / 0%),\n    0 1px 1px rgb(16 22 26 / 40%);\n\n  .menu-button {\n    display: none;\n  }\n\n  .nav-links {\n    display: flex;\n    font-weight: 400;\n    width: 100%;\n    flex-direction: row;\n  }\n\n  .logo {\n    //display: flex;\n    //align-items: center;\n    ////border: 1px solid red;\n    //margin-right: 20px;\n    position: absolute;\n    top: 10px;\n    left: 10px;\n  }\n\n  &.hide-logo {\n    .logo {\n      display: none;\n    }\n  }\n\n  .right-links {\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin-right: 10px;\n    & > * + * {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (min-width: ", "px) {\n    &:not(.hide-logo) {\n      .nav-links {\n        margin-left: 50px;\n      }\n    }\n  }\n  @media screen and (max-width: ", "px) {\n    justify-content: flex-end;\n\n    .menu-button {\n      display: flex;\n    }\n    .nav-links {\n      margin-left: 0px;\n      background-color: ", ";\n      flex-direction: column;\n    }\n    :not(.responsive) {\n      .nav-links {\n        display: none;\n      }\n    }\n    &.responsive {\n      .menu-button {\n        position: absolute;\n      }\n    }\n    .right-links {\n      padding: 20px;\n      margin-right: 0;\n      justify-content: center;\n    }\n  }\n"]);
                return v = function() {
                    return n
                }, n
            }

            function g() {
                var n = p(["\n  display: flex;\n  align-items: center;\n  span {\n    text-transform: uppercase;\n    font-size: 12px;\n    margin-right: 5px;\n  }\n  img {\n    width: 20px;\n  }\n"]);
                return g = function() {
                    return n
                }, n
            }
            var m = "rgb(38, 50, 71)",
                x = s.Z.div(v(), m, 850, 850, m),
                b = s.Z.div(g()),
                w = function(n) {
                    var e = n.to,
                        t = n.children;
                    return (0, r.jsx)(u.default, {
                        href: e,
                        children: (0, r.jsx)("a", {
                            className: [i.gSV, i.q01, i.IRm, i.lnC].join(" "),
                            children: t
                        })
                    })
                },
                j = function() {
                    var n = (0, o.useState)(!1),
                        e = n[0],
                        t = n[1],
                        s = (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(w, {
                                to: "/",
                                children: "Home"
                            }), (0, r.jsx)(w, {
                                to: "/gallery",
                                children: "Gallery"
                            }), (0, r.jsx)(w, {
                                to: "/news",
                                children: "News"
                            }), (0, r.jsx)(w, {
                                to: "/how-to-make-a-flow-map",
                                children: "How to make a flow map"
                            }), (0, r.jsx)(w, {
                                to: "/privacy",
                                children: "Privacy"
                            }), (0, r.jsx)(w, {
                                to: "/credits",
                                children: "Credits"
                            }), (0, r.jsxs)("div", {
                                className: "right-links",
                                children: [(0, r.jsx)(c.gs, {
                                    href: "https://github.com/FlowmapBlue/flowmap.blue/discussions",
                                    children: (0, r.jsx)(b, {
                                        children: (0, r.jsx)("span", {
                                            children: "Ask a question"
                                        })
                                    })
                                }), (0, r.jsx)(c.gs, {
                                    href: "https://github.com/FlowmapBlue/flowmap.blue",
                                    children: (0, r.jsxs)(b, {
                                        children: [(0, r.jsx)("span", {
                                            children: "GitHub"
                                        }), (0, r.jsx)(f.default, {
                                            width: 20,
                                            height: 20,
                                            alt: "Flowmap.blue on GitHub",
                                            src: l
                                        })]
                                    })
                                })]
                            })]
                        });
                    return (0, r.jsxs)(x, {
                        className: [i.Pyr, e ? "responsive" : ""].join(" "),
                        children: [(0, r.jsx)("div", {
                            className: "logo",
                            children: (0, r.jsx)(h.Z, {
                                fontSize: 20,
                                showText: !1
                            })
                        }), (0, r.jsx)("div", {
                            className: ["menu-button", i.gSV, i.q01, i.IRm, i.lnC].join(" "),
                            title: "Menu",
                            onClick: function() {
                                t(!e)
                            },
                            children: (0, r.jsx)(a.JO, {
                                icon: e ? d.d.CROSS : d.d.MENU,
                                size: 22
                            })
                        }), (0, r.jsx)("div", {
                            className: "nav-links",
                            children: s
                        })]
                    })
                }
        },
        33618: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return L
                }
            });
            var r = t(85893),
                o = t(67294),
                i = t(11163),
                a = t(31606),
                c = t(12918),
                l = t(69247),
                s = t(34051),
                u = t.n(s),
                f = t(60553),
                d = t(82531),
                h = new Map,
                p = function(n) {
                    return f.$j.defaults({
                        fetch: function(n, e) {
                            var t = new Request(n, e),
                                r = "".concat(t.url),
                                o = h.get(r);
                            return o ? new Promise((function(n) {
                                return n(o.response.clone())
                            })) : (t.headers.set("Content-Type", "text/plain"), fetch(t).then((function(n) {
                                return h.set(r, {
                                    response: n.clone()
                                }), n
                            })))
                        },
                        handleResponse: function(e) {
                            if ("0" !== e.headers.get("content-length") && 204 !== e.status) {
                                var t = e.text();
                                return e.status >= 200 && e.status < 300 ? t.then((function(e) {
                                    return new Promise((function(t, r) {
                                        var o;
                                        try {
                                            switch (n) {
                                                case "json":
                                                    var i = function(n) {
                                                        var e = n.indexOf("{"),
                                                            t = n.lastIndexOf("}");
                                                        if (e >= 0 && t >= e) return JSON.parse(n.substring(e, t + 1))
                                                    }(e);
                                                    if (o = function(n) {
                                                            if (!n || !n.table || !n.table.cols || !n.table.rows) return [];
                                                            var e, t, r = n.table.cols.length,
                                                                o = function(n) {
                                                                    if (null != n && (null != n.v || null != n.f)) return "".concat(null != n.v ? n.v : n.f).trim()
                                                                };
                                                            n.table.cols.find((function(n) {
                                                                return null != n.label && n.label.length > 0
                                                            })) ? (e = n.table.rows, t = n.table.cols.map((function(n) {
                                                                var e = n.label;
                                                                return "".concat(e).trim()
                                                            }))) : (e = n.table.rows.slice(1), t = n.table.rows[0].c.map(o));
                                                            return e.map((function(n) {
                                                                for (var e = {}, i = 0; i < r; i++) try {
                                                                    var a = "".concat(t[i]).trim();
                                                                    if (n.c && n.c[i]) {
                                                                        var c = o(n.c[i]);
                                                                        if (null != c && x(c)) {
                                                                            var l = b(c);
                                                                            l ? e[a] = l : (console.warn("Couldn't parse date ".concat(c)), e[a] = c)
                                                                        } else e[a] = c
                                                                    }
                                                                } catch (s) {
                                                                    console.warn("Couldn't parse row ".concat(i, " from sheet"))
                                                                }
                                                                return e
                                                            }))
                                                        }(i), "ok" !== i.status) throw new Error("Error loading data from Google Sheets");
                                                    break;
                                                case "csv":
                                                    o = (0, d.ue)(e)
                                            }
                                            t(o)
                                        } catch (a) {
                                            console.error(a), r(a)
                                        }
                                    }))
                                })) : t.then((function(n) {
                                    return Promise.reject(new Error(n))
                                }))
                            }
                        }
                    })
                },
                v = "https://docs.google.com/spreadsheets/d",
                g = function(n, e, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "json";
                    return "".concat(v, "/").concat(n, "/gviz/tq?tq=").concat(encodeURI("".concat(t, " OPTIONS no_format")), "&tqx=out:").concat(r, "&sheet=").concat(encodeURIComponent(e))
                };
            var m = /^Date\((\d{4}),(\d+),(\d+),(\d+),(\d+),(\d+)\)$/;

            function x(n) {
                return null != n && n.startsWith("Date") && m.test(n)
            }

            function b(n) {
                if (null != n) {
                    var e = m.exec(n);
                    if (e) return new Date(+e[1], +e[2], +e[3], +e[4], +e[5], +e[6])
                }
            }
            var w = t(93004),
                j = t(9008);

            function y(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function O(n, e, t, r) {
                if ("ga" in window) try {
                    var o = globalThis.ga.getAll()[0];
                    o && o.send("event", function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(t);
                            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                return Object.getOwnPropertyDescriptor(t, n).enumerable
                            })))), r.forEach((function(e) {
                                y(n, e, t[e])
                            }))
                        }
                        return n
                    }({
                        eventCategory: n,
                        eventAction: e,
                        eventLabel: t
                    }, null != r && {
                        eventValue: r
                    }))
                } catch (i) {
                    console.error("Failed sending ga event", i)
                }
            }
            var S = t(78269),
                k = t(2609),
                E = t(61986),
                P = t(46508);

            function C(n, e, t, r, o, i, a) {
                try {
                    var l = n[i](a),
                        s = l.value
                } catch (c) {
                    return void t(c)
                }
                l.done ? e(s) : Promise.resolve(s).then(r, o)
            }

            function N(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function T(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        N(n, e, t[e])
                    }))
                }
                return n
            }

            function F() {
                var n, e, t = (n = ["\n  font-size: 12px;\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return F = function() {
                    return t
                }, t
            }
            var I = t(31666).Z.div(F()),
                R = (0, P.qC)(p("json")((function(n) {
                    var e = n.spreadSheetKey,
                        t = (n.config, n.flowsSheet),
                        r = void 0 === t ? a._U : t;
                    return {
                        locationsFetch: {
                            url: g(e, "locations", "SELECT A,B,C,D", "json"),
                            then: function(n) {
                                return {
                                    value: n.map((function(n) {
                                        var e = n.id,
                                            t = n.name,
                                            r = n.lon,
                                            o = n.lat;
                                        return {
                                            id: "".concat(e),
                                            name: null !== t && void 0 !== t ? t : e,
                                            lon: +r,
                                            lat: +o
                                        }
                                    }))
                                }
                            }
                        },
                        flowsFetch: {
                            url: g(e, r, "SELECT *", "json"),
                            refreshing: !0,
                            then: function(n) {
                                return {
                                    value: (0, w.NG)(n)
                                }
                            }
                        }
                    }
                })), (0, P.vl)((function(n) {
                    return {
                        locationsFetch: T({}, n.locationsFetch, {
                            loading: n.locationsFetch.pending || n.locationsFetch.refreshing
                        }),
                        flowsFetch: T({}, n.flowsFetch, {
                            loading: n.flowsFetch.pending || n.flowsFetch.refreshing
                        })
                    }
                })))(w.ZP),
                q = function(n) {
                    var e, t, c = n.spreadSheetKey,
                        l = n.flowsSheetKey,
                        s = n.embed,
                        f = g(c, "properties", "SELECT A,B", "csv"),
                        h = (0, o.useState)(),
                        p = h[0],
                        v = h[1],
                        m = (0, i.useRouter)(),
                        x = function(n, e) {
                            e && m.replace((0, a.Ap)(c, n, s, m.query)), v(n)
                        },
                        b = (0, S.Z)((t = u().mark((function n() {
                            var e, t, r, o, i, s, h, p, v, g, m;
                            return u().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, fetch(f);
                                    case 2:
                                        return e = n.sent, n.t0 = d.ue, n.next = 6, e.text();
                                    case 6:
                                        for (n.t1 = n.sent, t = (0, n.t0)(n.t1), r = T({}, w.g5), o = !0, i = !1, s = void 0, n.prev = 10, h = t[Symbol.iterator](); !(o = (p = h.next()).done); o = !0) null != (v = p.value).value && "".concat(v.value).length > 0 && (r[v.property] = v.value);
                                        n.next = 18;
                                        break;
                                    case 14:
                                        n.prev = 14, n.t2 = n.catch(10), i = !0, s = n.t2;
                                    case 18:
                                        n.prev = 18, n.prev = 19, o || null == h.return || h.return();
                                    case 21:
                                        if (n.prev = 21, !i) {
                                            n.next = 24;
                                            break
                                        }
                                        throw s;
                                    case 24:
                                        return n.finish(21);
                                    case 25:
                                        return n.finish(18);
                                    case 26:
                                        return O("".concat(c, ' "').concat(r[w.Vy.TITLE] || "Untitled", '"'), "Load config", 'Load config "'.concat(r[w.Vy.TITLE] || "Untitled", '"')), (g = (0, w.f3)(r)) && g.length > 0 && (m = void 0, l && (m = g.find((function(n) {
                                            return (0, a.m1)(n) === l
                                        }))), m || (m = g[0]), null != m && x(m, g.length > 1)), n.abrupt("return", r);
                                    case 30:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [10, 14, 18, 26],
                                [19, , 21, 25]
                            ])
                        })), function() {
                            var n = this,
                                e = arguments;
                            return new Promise((function(r, o) {
                                var i = t.apply(n, e);

                                function a(n) {
                                    C(i, r, o, a, c, "next", n)
                                }

                                function c(n) {
                                    C(i, r, o, a, c, "throw", n)
                                }
                                a(void 0)
                            }))
                        }), [f]);
                    return (0, o.useEffect)((function() {
                        b.error && w.RV.show({
                            intent: k.S.WARNING,
                            icon: E.d.WARNING_SIGN,
                            timeout: 0,
                            message: (0, r.jsxs)(I, {
                                children: ["Oops\u2026 The properties sheet could not be loaded:", (0, r.jsx)("br", {}), b.error.message]
                            })
                        })
                    }), [b.error]), (0, r.jsxs)(w.h_, {
                        embed: s,
                        children: [b.loading ? (0, r.jsx)(w.TK, {}) : (0, r.jsx)(R, {
                            spreadSheetKey: c,
                            embed: s,
                            config: b.value ? b.value : w.g5,
                            flowsSheet: p,
                            onSetFlowsSheet: function(n) {
                                return x(n, !0)
                            }
                        }), b.value && b.value[w.Vy.TITLE] && (0, r.jsxs)(j.default, {
                            children: [(0, r.jsx)("title", {
                                children: "".concat(b.value[w.Vy.TITLE], " - Flowmap.blue")
                            }), (null === (e = b.value[w.Vy.DESCRIPTION]) || void 0 === e ? void 0 : e.trim()) && (0, r.jsx)("meta", {
                                name: "description",
                                content: b.value[w.Vy.DESCRIPTION]
                            }), (0, r.jsx)("link", {
                                href: "https://flowmap.blue/".concat(c),
                                rel: "canonical"
                            })]
                        })]
                    })
                },
                L = function(n) {
                    var e = n.embed,
                        t = (0, i.useRouter)().query,
                        o = t.id,
                        s = t.sheet,
                        u = o ? "".concat(o) : null;
                    return u && !new RegExp(a.t6).test(u) ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Z, {}), (0, r.jsx)(c.default, {
                            statusCode: 404
                        })]
                    }) : u ? (0, r.jsx)(q, {
                        spreadSheetKey: u,
                        flowsSheetKey: "".concat(null !== s && void 0 !== s ? s : ""),
                        embed: !!e
                    }) : null
                }
        }
    }
]);