(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        45301: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(71462)
            }])
        },
        59502: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return w
                }
            });
            var i = t(85893),
                r = t(93004),
                s = {
                    src: "/_next/static/media/TL-Horizontal-Black.59912c57.svg",
                    height: 200,
                    width: 1206
                },
                a = {
                    src: "/_next/static/media/mapbox-logo-black.9fec41d0.svg",
                    height: 180,
                    width: 800
                },
                l = {
                    src: "/_next/static/media/ucf-logo.7adba104.svg",
                    height: 154,
                    width: 995
                },
                o = {
                    src: "/_next/static/media/linux-foundation-hztl-white.fa14b44e.svg",
                    height: 28,
                    width: 475
                },
                c = (t(67294), t(31666)),
                d = t(25675);

            function h(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function u() {
                var e = h(["\n  margin-top: 1.5em;\n  display: flex;\n  justify-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function x() {
                var e = h(["\n  filter: grayscale(80%);\n  transition: filter 0.5s;\n  &:hover {\n    filter: grayscale(20%);\n  }\n"]);
                return x = function() {
                    return e
                }, e
            }

            function p() {
                var e = h(["\n  position: relative;\n  margin-top: 20px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n  //top: 0.14em;\n  transition: opacity 0.2s;\n  opacity: 0.6;\n  //margin: 0 22px;\n  &:hover {\n    opacity: 1;\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var m = c.Z.p(u()),
                f = c.Z.img(x()),
                j = c.Z.a(p()),
                g = function(e) {
                    var n = e.name,
                        t = e.src,
                        r = e.href;
                    return (0, i.jsx)(j, {
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, i.jsx)(d.default, {
                            alt: "Supported by ".concat(n),
                            src: t,
                            height: 25,
                            width: 200,
                            placeholder: "blur",
                            blurDataURL: t
                        })
                    })
                },
                w = function(e) {
                    e = null !== e ? e : function(e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("section", {
                            children: [(0, i.jsxs)("p", {
                                children: ["Developed by ", (0, i.jsx)(r.gs, {
                                    href: "https://ilya.boyandin.me",
                                    children: "Ilya Boyandin"
                                }), " using ", " ", (0, i.jsx)(r.gs, {
                                    href: "https://github.com/teralytics/flowmap.gl",
                                    children: "flowmap.gl"
                                }), ",", " ", (0, i.jsx)(r.gs, {
                                    href: "http://deck.gl",
                                    children: "deck.gl"
                                }), ",", " ", (0, i.jsx)(r.gs, {
                                    href: "https://github.com/mapbox/mapbox-gl-js",
                                    children: "mapbox"
                                }), ",", " ", (0, i.jsx)(r.gs, {
                                    href: "https://d3js.org/",
                                    children: "d3"
                                }), ",", " ", (0, i.jsx)(r.gs, {
                                    href: "https://blueprintjs.com/",
                                    children: "blueprint"
                                }), ",", " ", (0, i.jsx)(r.gs, {
                                    href: "https://github.com/CartoDB/cartocolor",
                                    children: "CARTOColors"
                                }), "."]
                            }), (0, i.jsx)("p", {
                                children: "With kind support from"
                            }), (0, i.jsxs)(m, {
                                children: [(0, i.jsx)(g, {
                                    name: "Teralytics",
                                    href: "https://www.teralytics.net",
                                    src: s
                                }), (0, i.jsx)(g, {
                                    name: "Mapbox",
                                    href: "https://www.mapbox.com",
                                    src: a
                                }), (0, i.jsx)(g, {
                                    name: "Urban Computing Foundation",
                                    href: "https://uc.foundation",
                                    src: l
                                }), (0, i.jsx)(g, {
                                    name: "Linux Foundation",
                                    href: "https://www.linuxfoundation.org",
                                    src: o
                                })]
                            })]
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("h2", {
                                id: "awards",
                                children: "Awards"
                            }), (0, i.jsx)(r.gs, {
                                href: "https://www.informationisbeautifulawards.com/showcase/3815",
                                children: (0, i.jsx)(f, {
                                    alt: "Flowmap.blue \u2013 Kantar Information is Beautiful Award",
                                    width: 100,
                                    src: "https://infobawards.s3.amazonaws.com/2019/badges/w-2019.png"
                                })
                            })]
                        })]
                    })
                }
        },
        20806: function(e, n, t) {
            "use strict";
            var i = t(85893),
                r = t(41664),
                s = t(93004),
                a = t(67294),
                l = t(31666),
                o = t(65746),
                c = t(15360),
                d = t(61986);

            function h(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function u() {
                var e = h(["\n  display: flex;\n  flex-direction: column;\n  & > * + * {\n    margin-top: 0.75rem;\n  }\n"]);
                return u = function() {
                    return e
                }, e
            }

            function x() {
                var e = h(["\n  color: ", ";\n  font-size: small;\n  min-width: 100px;\n"]);
                return x = function() {
                    return e
                }, e
            }

            function p() {
                var e = h(["\n  display: block;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function m() {
                var e = h(["\n  display: flex;\n  align-items: center;\n"]);
                return m = function() {
                    return e
                }, e
            }
            var f = l.Z.div(u()),
                j = l.Z.div(x(), o.wL.GRAY3),
                g = l.Z.div(p()),
                w = l.Z.div(m()),
                b = [(0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Sep 01, 2021"
                    }), (0, i.jsx)(g, {
                        children: (0, i.jsx)(s.gs, {
                            href: "https://www.mapbox.com/showcase/flowmap-blue",
                            children: "Featured in Mapbox showcase"
                        })
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Feb 25, 2021"
                    }), (0, i.jsx)(g, {
                        children: (0, i.jsx)(s.gs, {
                            href: "https://www.producthunt.com/posts/flowmap-blue",
                            children: "Flowmap.blue featured on ProductHunt"
                        })
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Jul 01, 2020"
                    }), (0, i.jsx)(g, {
                        children: (0, i.jsx)(s.gs, {
                            href: "https://github.com/FlowmapBlue/flowmapblue.R",
                            children: "Flowmap.blue R widget released"
                        })
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Apr 26, 2020"
                    }), (0, i.jsx)(g, {
                        children: (0, i.jsx)(s.gs, {
                            href: "https://tinyletter.com/flowmap-blue/letters/flowmap-blue-news-april-2020-timeline-support",
                            children: "Timeline support, splitting datasets in parts, customising tooltips, fetching data from another server"
                        })
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Feb 17, 2020"
                    }), (0, i.jsx)(g, {
                        children: (0, i.jsx)(s.gs, {
                            href: "https://tinyletter.com/flowmap-blue/letters/flowmap-blue-news-feb-2020-new-features",
                            children: "Lasso selection, camera rotation and tilting, new location/flow filtering modes"
                        })
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Jan 06, 2020"
                    }), (0, i.jsxs)(g, {
                        children: ["The flow thickness and color scales now", " ", (0, i.jsx)(s.gs, {
                            href: "https://twitter.com/ilyabo/status/1213968896182669312",
                            children: "automatically adapt to the viewport"
                        })]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Dec 25, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Added support for ", (0, i.jsx)(r.default, {
                            href: "/videos/sharing.mp4",
                            children: "sharing and embedding"
                        }), "."]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Nov 20, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Flowmap.blue", " ", (0, i.jsx)(s.gs, {
                            href: "https://twitter.com/infobeautyaward/status/1197248080640380929",
                            children: "won Bronze at the Information is Beautiful Awards"
                        })]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Nov 11, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Added the ", (0, i.jsx)(r.default, {
                            href: "/in-browser",
                            children: "In-browser flow map"
                        })]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Nov 10, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Added the ", (0, i.jsx)(r.default, {
                            href: "/geocoding",
                            children: "Geocoding"
                        }), " data preparation helper tool"]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Nov 08, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Added the ", (0, i.jsx)(r.default, {
                            href: "/od-matrix-converter",
                            children: "OD-matrix converter"
                        }), " data preparation helper tool"]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Nov 05, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Talk", " ", (0, i.jsx)(s.gs, {
                            href: "https://ilya.boyandin.me/talks/2019-11-05-on-data-and-design/",
                            children: "\u201cVisualizing mobility\u201d"
                        }), " ", "at the", " ", (0, i.jsx)(s.gs, {
                            href: "https://www.meetup.com/ondataanddesign-Switzerland/events/265947767/",
                            children: "\u201cOn data and design\u201d meetup"
                        }), " ", "in Basel"]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Oct 28, 2019"
                    }), (0, i.jsx)(g, {
                        children: "Added the fade slider to manually adjust the brightness of the arrows for better map visibility"
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Oct 26, 2019"
                    }), (0, i.jsx)(g, {
                        children: "The dark mode is now enabled by default. Changed the home page appearance."
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Oct 16, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Flowmap.blue", " ", (0, i.jsx)(s.gs, {
                            href: "http://informationisbeautifulawards.com/showcase/3815-flowmap-blue",
                            children: "made it to the shortlist"
                        }), " ", "of the Information is Beautiful Awards"]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Oct 13, 2019"
                    }), (0, i.jsxs)(g, {
                        children: ["Talk", " ", (0, i.jsx)(s.gs, {
                            href: "https://ilya.boyandin.me/talks/2019-10-11-urban-mobility-symp/",
                            children: "\u201cScalability of OD-data visualizations\u201d"
                        }), " ", "about Flowmap.blue and", " ", (0, i.jsx)(s.gs, {
                            href: "https://github.com/teralytics/flowmap.query",
                            children: "flowmap.query"
                        }), " at the", " ", (0, i.jsx)(s.gs, {
                            href: "https://www.citylab-berlin.org/events/mobilitysymposium_en/",
                            children: "Urban Mobility Symposium"
                        }), " ", "in Berlin"]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Sep 15, 2019"
                    }), (0, i.jsx)(g, {
                        children: "Added color scheme and dark mode support"
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Mar 26, 2019"
                    }), (0, i.jsx)(g, {
                        children: "Adding support for map styles"
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Mar 24, 2019"
                    }), (0, i.jsx)(g, {
                        children: "Automatic clustering"
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Mar 03, 2019"
                    }), (0, i.jsxs)(g, {
                        children: [(0, i.jsx)(s.gs, {
                            href: "https://ilya.boyandin.me/talks/2019-03-03-clisel/",
                            children: "Talk about Flowmap.blue"
                        }), " ", "at the workshop on", " ", (0, i.jsx)(s.gs, {
                            href: "https://clisel.eu/Ascona",
                            children: "Environmental Changes and Human Mobility"
                        }), " in Ascona"]
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Feb 08, 2019"
                    }), (0, i.jsx)(g, {
                        children: "Added animation toggle"
                    })]
                }), (0, i.jsxs)(w, {
                    children: [(0, i.jsx)(j, {
                        children: "Jan 03, 2019"
                    }), (0, i.jsx)(g, {
                        children: "First published online"
                    })]
                })];
            n.Z = function(e) {
                var n = e.maxCount,
                    t = n ? b.slice(0, n) : b;
                return (0, i.jsxs)(f, {
                    children: [t.map((function(e, n) {
                        return (0, i.jsx)(a.Fragment, {
                            children: e
                        }, n)
                    })), t.length < b.length ? (0, i.jsx)(w, {
                        children: (0, i.jsx)(r.default, {
                            href: "/news",
                            children: (0, i.jsxs)("a", {
                                children: [(0, i.jsx)(c.JO, {
                                    icon: d.d.ARROW_RIGHT
                                }), " \xa0 Older news"]
                            })
                        })
                    }) : null]
                })
            }
        },
        71462: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return G
                }
            });
            var i = t(85893),
                r = (t(67294), t(41664)),
                s = t(25675),
                a = t(31666),
                l = t(93004),
                o = "/_next/static/media/nyc-citi-bike-new-4-1000.022855c4.webp",
                c = t(65746),
                d = t(15360),
                h = t(2609),
                u = t(5526),
                x = t(20806),
                p = t(22004),
                m = t(80897),
                f = [{
                    name: "MTA",
                    img: {
                        src: "/_next/static/media/mta-logo.c511ac73.svg",
                        height: 51,
                        width: 47
                    },
                    url: "https://new.mta.info",
                    width: 50
                }, {
                    name: "Tfl",
                    img: {
                        src: "/_next/static/media/Tfl-logo.abd1bd5b.svg",
                        height: 250,
                        width: 817
                    },
                    url: "https://tfl.gov.uk"
                }, {
                    name: "Aecom",
                    img: {
                        src: "/_next/static/media/aecom-logo-light.af49a5d6.svg",
                        height: 54,
                        width: 240
                    },
                    url: "https://aecom.com"
                }, {
                    name: "Eurocontrol",
                    img: {
                        src: "/_next/static/media/eurocontrol-logo.984d6365.svg",
                        height: 202,
                        width: 200
                    },
                    url: "https://ansperformance.eu/study/daily_country_flows_2020/",
                    width: 50
                }, {
                    name: "ElPaso",
                    img: {
                        src: "/_next/static/media/city-of-el-paso-eptx.08a27e4d.png",
                        height: 75,
                        width: 84,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAb0lEQVR42g3IIQrCABSA4XcAszfwClaTYBAULzBRUEzmRYtZLJZFg2CzeQODBsO8iIO1jz1++MMXGpW72s5AiPB38HByVgq98HRJGtmYuJlF7mrunTC2EKGw0tda2iskbK2V+aOhqYSfr0/2UqtEB/EkUT6Iu4TmAAAAAElFTkSuQmCC"
                    },
                    url: "https://www.elpasotexas.gov",
                    width: 50
                }, {
                    name: "Horrocks Engineers",
                    img: {
                        src: "/_next/static/media/horrocks-logo.76be0375.svg",
                        height: 37,
                        width: 42
                    },
                    url: "https://www.horrocksengineers.com/",
                    width: 30
                }, {
                    name: "OpenDataZuerich",
                    img: {
                        src: "/_next/static/media/stadtzurich-opendata-logo.6bc55a44.svg",
                        height: 82,
                        width: 250
                    },
                    url: "https://data.stadt-zuerich.ch"
                }, {
                    name: "Udd",
                    img: {
                        src: "/_next/static/media/logo-udd-blanco.1ce2434c.svg",
                        height: 45,
                        width: 264
                    },
                    url: "http://datagramas.cl/2015/03/run-run-inferencia-y-visualizaci%C3%B3n-de-uso-de-modos-de-transporte-en-la-ciudad-2015-presente/"
                }, {
                    name: "GreaterAuckland",
                    img: {
                        src: "/_next/static/media/greater-auckland-logo.20bc2b76.svg",
                        height: 47,
                        width: 154
                    },
                    url: "https://www.greaterauckland.org.nz/2020/08/11/2018-census-commuting-data/"
                }],
                j = t(36785),
                g = t(59502);

            function w(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function b() {
                var e = w(["\n  margin-bottom: 1em;\n"]);
                return b = function() {
                    return e
                }, e
            }

            function v() {
                var e = w(["\n  display: flex;\n  // border-radius: 6px;\n  // background-color: ", ";\n  flex-wrap: wrap;\n  list-style-type: none;\n  padding: 0.5em 1em;\n  margin: 1em 0;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function y() {
                var e = w(["\n  margin: 5px;\n"]);
                return y = function() {
                    return e
                }, e
            }

            function A() {
                var e = w(["\n  margin-bottom: 20px;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function k() {
                var e = w(["\n  width: 100%;\n  margin-bottom: 20px;\n  max-width: 500px;\n  display: inline-block;\n  @media (min-width: 800px) {\n    float: right;\n    margin-left: 20px;\n  }\n"]);
                return k = function() {
                    return e
                }, e
            }

            function _() {
                var e = w(["\n  position: relative;\n  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function O() {
                var e = w(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid ", ";\n"]);
                return O = function() {
                    return e
                }, e
            }

            function z() {
                var e = w(["\n  font-size: 9pt;\n  color: ", ";\n"]);
                return z = function() {
                    return e
                }, e
            }

            function F() {
                var e = w(["\n  justify-self: flex-end;\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  button {\n    white-space: nowrap;\n  }\n  input {\n    width: 270px;\n  }\n  @media (max-width: 800px) {\n    input {\n      width: 200px;\n    }\n    margin-bottom: 2rem;\n  }\n"]);
                return F = function() {
                    return e
                }, e
            }

            function T() {
                var e = w(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  & > * > img {\n    max-width: 100px;\n    height: 50px;\n  }\n  & > * {\n    padding: 1em;\n    opacity: 0.5;\n    transition: opacity 0.2s;\n    &:hover {\n      opacity: 1;\n    }\n  }\n  padding: 1em;\n"]);
                return T = function() {
                    return e
                }, e
            }

            function Z() {
                var e = w(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: center;\n  @media (max-width: 800px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]);
                return Z = function() {
                    return e
                }, e
            }
            var C = a.Z.h1(b()),
                B = a.Z.div(v(), c.wL.DARK_GRAY3),
                E = (0, a.Z)((function(e) {
                    var n = e.className,
                        t = e.children;
                    return (0, i.jsx)(d.Vp, {
                        className: n,
                        minimal: !0,
                        round: !0,
                        interactive: !1,
                        intent: h.S.NONE,
                        children: t
                    })
                }))(y()),
                R = a.Z.div(A()),
                S = a.Z.div(k()),
                N = a.Z.div(_()),
                L = (0, a.Z)(p.Z)(O(), c.wL.GRAY1),
                M = a.Z.div(z(), c.wL.GRAY4),
                U = a.Z.div(F()),
                I = a.Z.div(T()),
                D = a.Z.div(Z()),
                G = function() {
                    return (0, i.jsxs)(m.Z, {
                        children: [(0, i.jsxs)(D, {
                            children: [(0, i.jsx)(C, {
                                children: (0, i.jsx)(l.TR, {
                                    fontSize: 35,
                                    collapseWidth: 300
                                })
                            }), (0, i.jsx)(U, {
                                children: (0, i.jsx)("form", {
                                    action: "https://tinyletter.com/flowmap-blue",
                                    method: "post",
                                    target: "_blank",
                                    children: (0, i.jsxs)(l.sg, {
                                        spacing: 10,
                                        children: [(0, i.jsxs)(l.X2, {
                                            spacing: 10,
                                            children: [(0, i.jsx)("input", {
                                                className: u.O4S,
                                                type: "text",
                                                name: "email",
                                                id: "tlemail",
                                                placeholder: "Enter your@email.address here"
                                            }), (0, i.jsx)("input", {
                                                type: "hidden",
                                                defaultValue: 1,
                                                name: "embed"
                                            }), (0, i.jsx)(d.zx, {
                                                type: "submit",
                                                text: "Subscribe"
                                            })]
                                        }), (0, i.jsxs)(M, {
                                            children: ["Subscribe to the newsletter to learn about", " ", (0, i.jsx)(l.gs, {
                                                href: "https://tinyletter.com/flowmap-blue/archive",
                                                children: "updates and new features"
                                            }), "."]
                                        })]
                                    })
                                })
                            })]
                        }), (0, i.jsx)(S, {
                            children: (0, i.jsx)(N, {
                                children: (0, i.jsx)(L, {
                                    url: "https://vimeo.com/378757494",
                                    light: o,
                                    width: "100%",
                                    height: "100%",
                                    controls: !0,
                                    loop: !0,
                                    playing: !0
                                })
                            })
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("p", {
                                children: "Create geographic flow maps representing numbers of movements between locations."
                            }), (0, i.jsx)("p", {
                                children: "Visualize your own origin-destination data published in Google Sheets."
                            }), (0, i.jsx)("p", {
                                children: "Explore the data interactively."
                            })]
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("h2", {
                                children: "What is it for?"
                            }), (0, i.jsxs)("div", {
                                children: ["Flowmap.blue is used to visualize various real-world phenomena in which pairs of locations are involved:", (0, i.jsxs)(B, {
                                    children: [(0, i.jsx)(E, {
                                        children: "Urban mobility"
                                    }), (0, i.jsx)(E, {
                                        children: "Commuters"
                                    }), (0, i.jsx)(E, {
                                        children: "Pedestrian movement"
                                    }), (0, i.jsx)(E, {
                                        children: "Bus travels "
                                    }), (0, i.jsx)(E, {
                                        children: "Metro rides"
                                    }), (0, i.jsx)(E, {
                                        children: "Train rides"
                                    }), (0, i.jsx)(E, {
                                        children: "Air travels"
                                    }), (0, i.jsx)(E, {
                                        children: "Marine traffic"
                                    }), (0, i.jsx)(E, {
                                        children: "Bicycle sharing"
                                    }), (0, i.jsx)(E, {
                                        children: "Scooter sharing"
                                    }), (0, i.jsx)(E, {
                                        children: "Car ride sharing "
                                    }), (0, i.jsx)(E, {
                                        children: "Taxi rides"
                                    }), (0, i.jsx)(E, {
                                        children: "Internal migration"
                                    }), (0, i.jsx)(E, {
                                        children: "International migration"
                                    }), (0, i.jsx)(E, {
                                        children: "Refugees"
                                    }), (0, i.jsx)(E, {
                                        children: "Human trafficking "
                                    }), (0, i.jsx)(E, {
                                        children: "Drug flows "
                                    }), (0, i.jsx)(E, {
                                        children: "Freight transportation "
                                    }), (0, i.jsx)(E, {
                                        children: "Material flows"
                                    }), (0, i.jsx)(E, {
                                        children: "Trade "
                                    }), (0, i.jsx)(E, {
                                        children: "Bird migrations "
                                    }), (0, i.jsx)(E, {
                                        children: "Livestock movements "
                                    }), (0, i.jsx)(E, {
                                        children: "Plant migration"
                                    }), (0, i.jsx)(E, {
                                        children: "Urban infrastructure"
                                    }), (0, i.jsx)(E, {
                                        children: "Sewage flows"
                                    }), (0, i.jsx)(E, {
                                        children: "Waste management"
                                    }), (0, i.jsx)(E, {
                                        children: "Supply chain "
                                    }), (0, i.jsx)(E, {
                                        children: "Epidemiology"
                                    }), (0, i.jsx)(E, {
                                        children: "Historical journeys "
                                    }), (0, i.jsx)(E, {
                                        children: "Scientific collaborations"
                                    })]
                                })]
                            }), (0, i.jsx)(R, {
                                children: (0, i.jsx)(j.Z, {
                                    maxCount: 6
                                })
                            })]
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("h2", {
                                children: "Who is using it?"
                            }), (0, i.jsx)(I, {
                                children: f.map((function(e) {
                                    var n = e.url,
                                        t = e.name,
                                        r = e.img,
                                        a = e.width,
                                        o = void 0 === a ? 120 : a;
                                    return (0, i.jsx)(l.gs, {
                                        href: n,
                                        children: (0, i.jsx)(s.default, {
                                            alt: t,
                                            width: o,
                                            height: "50",
                                            src: r,
                                            placeholder: "blur",
                                            blurDataURL: r,
                                            objectFit: "contain"
                                        })
                                    }, t)
                                }))
                            })]
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("h2", {
                                id: "how-to",
                                children: "How to make a flow map?"
                            }), (0, i.jsxs)("p", {
                                children: ["Follow the steps ", (0, i.jsx)(r.default, {
                                    href: "/how-to-make-a-flow-map",
                                    children: "described on this page"
                                }), "."]
                            })]
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("h2", {
                                id: "news",
                                children: "Latest news"
                            }), (0, i.jsx)(x.Z, {
                                maxCount: 5
                            })]
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("h2", {
                                id: "open-source",
                                children: "Open source"
                            }), (0, i.jsxs)("p", {
                                children: ["The source code of Flowmap.blue ", (0, i.jsx)(l.gs, {
                                    href: "https://github.com/FlowmapBlue/flowmap.blue",
                                    children: "is freely available"
                                }), " under the  ", (0, i.jsx)(l.gs, {
                                    href: "https://github.com/FlowmapBlue/flowmap.blue/blob/master/LICENSE",
                                    children: "MIT license"
                                }), "."]
                            }), (0, i.jsx)("p", {
                                children: "Make sure to include a proper attribution (URL of Flowmap.blue, the original author) if you use it in a different project."
                            })]
                        }), (0, i.jsxs)("section", {
                            children: [(0, i.jsx)("h2", {
                                children: "Credits"
                            }), (0, i.jsx)(g.Z, {})]
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [634, 715, 398, 675, 4, 910, 147, 774, 888, 179], (function() {
            return n = 45301, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);