(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4], {
        9996: function(e) {
            "use strict";
            var t = function(e) {
                return function(e) {
                    return !!e && "object" === typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === r
                    }(e)
                }(e)
            };
            var r = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function n(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? l((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
                var r
            }

            function o(e, t, r) {
                return e.concat(t).map((function(e) {
                    return n(e, r)
                }))
            }

            function a(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return e.propertyIsEnumerable(t)
                    })) : []
                }(e))
            }

            function i(e, t) {
                try {
                    return t in e
                } catch (r) {
                    return !1
                }
            }

            function u(e, t, r) {
                var o = {};
                return r.isMergeableObject(e) && a(e).forEach((function(t) {
                    o[t] = n(e[t], r)
                })), a(t).forEach((function(a) {
                    (function(e, t) {
                        return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, a) || (i(e, a) && r.isMergeableObject(t[a]) ? o[a] = function(e, t) {
                        if (!t.customMerge) return l;
                        var r = t.customMerge(e);
                        return "function" === typeof r ? r : l
                    }(a, r)(e[a], t[a], r) : o[a] = n(t[a], r))
                })), o
            }

            function l(e, r, a) {
                (a = a || {}).arrayMerge = a.arrayMerge || o, a.isMergeableObject = a.isMergeableObject || t, a.cloneUnlessOtherwiseSpecified = n;
                var i = Array.isArray(r);
                return i === Array.isArray(e) ? i ? a.arrayMerge(e, r, a) : u(e, r, a) : n(r, a)
            }
            l.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, r) {
                    return l(e, r, t)
                }), {})
            };
            var c = l;
            e.exports = c
        },
        49090: function(e) {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function r(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, n, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                "function" === typeof n && (o = n, n = {}), n = n || {}, o = o || function() {}, i.type = n.type || "text/javascript", i.charset = n.charset || "utf8", i.async = !("async" in n) || !!n.async, i.src = e, n.attrs && function(e, t) {
                    for (var r in t) e.setAttribute(r, t[r])
                }(i, n.attrs), n.text && (i.text = "" + n.text), ("onload" in i ? t : r)(i, o), i.onload || t(i, o), a.appendChild(i)
            }
        },
        30845: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            r.r(t), t.default = function(e, t) {
                var r;
                void 0 === t && (t = n);
                var o, a = [],
                    i = !1;
                return function() {
                    for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
                    return i && r === this && t(n, a) || (o = e.apply(this, n), i = !0, r = this, a = n), o
                }
            }
        },
        69590: function(e) {
            var t = "undefined" !== typeof Element,
                r = "function" === typeof Map,
                n = "function" === typeof Set,
                o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function a(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var u, l, c, s;
                    if (Array.isArray(e)) {
                        if ((u = e.length) != i.length) return !1;
                        for (l = u; 0 !== l--;)
                            if (!a(e[l], i[l])) return !1;
                        return !0
                    }
                    if (r && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (s = e.entries(); !(l = s.next()).done;)
                            if (!i.has(l.value[0])) return !1;
                        for (s = e.entries(); !(l = s.next()).done;)
                            if (!a(l.value[1], i.get(l.value[0]))) return !1;
                        return !0
                    }
                    if (n && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (s = e.entries(); !(l = s.next()).done;)
                            if (!i.has(l.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((u = e.length) != i.length) return !1;
                        for (l = u; 0 !== l--;)
                            if (e[l] !== i[l]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((u = (c = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (l = u; 0 !== l--;)
                        if (!Object.prototype.hasOwnProperty.call(i, c[l])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (l = u; 0 !== l--;)
                        if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !a(e[c[l]], i[c[l]])) return !1;
                    return !0
                }
                return e !== e && i !== i
            }
            e.exports = function(e, t) {
                try {
                    return a(e, t)
                } catch (r) {
                    if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw r
                }
            }
        },
        60722: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                i = (o = r(69590)) && o.__esModule ? o : {
                    default: o
                },
                u = r(85741);

            function l() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }

            function d(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? h(e) : t
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(u, e);
                var t, r, n, o = y(u);

                function u() {
                    var e;
                    s(this, u);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return v(h(e = o.call.apply(o, [this].concat(r))), "mounted", !1), v(h(e), "isReady", !1), v(h(e), "isPlaying", !1), v(h(e), "isLoading", !0), v(h(e), "loadOnReady", null), v(h(e), "startOnPlay", !0), v(h(e), "seekOnPlay", null), v(h(e), "onDurationCalled", !1), v(h(e), "handlePlayerMount", (function(t) {
                        e.player = t, e.player.load(e.props.url), e.progress()
                    })), v(h(e), "getInternalPlayer", (function(t) {
                        return e.player ? e.player[t] : null
                    })), v(h(e), "progress", (function() {
                        if (e.props.url && e.player && e.isReady) {
                            var t = e.getCurrentTime() || 0,
                                r = e.getSecondsLoaded(),
                                n = e.getDuration();
                            if (n) {
                                var o = {
                                    playedSeconds: t,
                                    played: t / n
                                };
                                null !== r && (o.loadedSeconds = r, o.loaded = r / n), o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o), e.prevPlayed = o.playedSeconds, e.prevLoaded = o.loadedSeconds
                            }
                        }
                        e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
                    })), v(h(e), "handleReady", (function() {
                        if (e.mounted) {
                            e.isReady = !0, e.isLoading = !1;
                            var t = e.props,
                                r = t.onReady,
                                n = t.playing,
                                o = t.volume,
                                a = t.muted;
                            r(), a || null === o || e.player.setVolume(o), e.loadOnReady ? (e.player.load(e.loadOnReady, !0), e.loadOnReady = null) : n && e.player.play(), e.handleDurationCheck()
                        }
                    })), v(h(e), "handlePlay", (function() {
                        e.isPlaying = !0, e.isLoading = !1;
                        var t = e.props,
                            r = t.onStart,
                            n = t.onPlay,
                            o = t.playbackRate;
                        e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o), r(), e.startOnPlay = !1), n(), e.seekOnPlay && (e.seekTo(e.seekOnPlay), e.seekOnPlay = null), e.handleDurationCheck()
                    })), v(h(e), "handlePause", (function(t) {
                        e.isPlaying = !1, e.isLoading || e.props.onPause(t)
                    })), v(h(e), "handleEnded", (function() {
                        var t = e.props,
                            r = t.activePlayer,
                            n = t.loop,
                            o = t.onEnded;
                        r.loopOnEnded && n && e.seekTo(0), n || (e.isPlaying = !1, o())
                    })), v(h(e), "handleError", (function() {
                        var t;
                        e.isLoading = !1, (t = e.props).onError.apply(t, arguments)
                    })), v(h(e), "handleDurationCheck", (function() {
                        clearTimeout(e.durationCheckTimeout);
                        var t = e.getDuration();
                        t ? e.onDurationCalled || (e.props.onDuration(t), e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
                    })), v(h(e), "handleLoaded", (function() {
                        e.isLoading = !1
                    })), e
                }
                return t = u, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        if (this.player) {
                            var r = this.props,
                                n = r.url,
                                o = r.playing,
                                a = r.volume,
                                u = r.muted,
                                l = r.playbackRate,
                                c = r.pip,
                                s = r.loop,
                                f = r.activePlayer;
                            if (!(0, i.default)(e.url, n)) {
                                if (this.isLoading && !f.forceLoad) return console.warn("ReactPlayer: the attempt to load ".concat(n, " is being deferred until the player has loaded")), void(this.loadOnReady = n);
                                this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(n, this.isReady)
                            }
                            e.playing || !o || this.isPlaying || this.player.play(), e.playing && !o && this.isPlaying && this.player.pause(), !e.pip && c && this.player.enablePIP && this.player.enablePIP(), e.pip && !c && this.player.disablePIP && this.player.disablePIP(), e.volume !== a && null !== a && this.player.setVolume(a), e.muted !== u && (u ? this.player.mute() : (this.player.unmute(), null !== a && setTimeout((function() {
                                return t.player.setVolume(a)
                            })))), e.playbackRate !== l && this.player.setPlaybackRate && this.player.setPlaybackRate(l), e.loop !== s && this.player.setLoop && this.player.setLoop(s)
                        }
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.isReady ? this.player.getDuration() : null
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.isReady ? this.player.getCurrentTime() : null
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.isReady ? this.player.getSecondsLoaded() : null
                    }
                }, {
                    key: "seekTo",
                    value: function(e, t) {
                        var r = this;
                        if (!this.isReady && 0 !== e) return this.seekOnPlay = e, void setTimeout((function() {
                            r.seekOnPlay = null
                        }), 5e3);
                        if (t ? "fraction" === t : e > 0 && e < 1) {
                            var n = this.player.getDuration();
                            return n ? void this.player.seekTo(n * e) : void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")
                        }
                        this.player.seekTo(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.activePlayer;
                        return e ? a.default.createElement(e, c({}, this.props, {
                            onMount: this.handlePlayerMount,
                            onReady: this.handleReady,
                            onPlay: this.handlePlay,
                            onPause: this.handlePause,
                            onEnded: this.handleEnded,
                            onLoaded: this.handleLoaded,
                            onError: this.handleError
                        })) : null
                    }
                }]) && f(t.prototype, r), n && f(t, n), u
            }(a.Component);
            t.default = m, v(m, "displayName", "Player"), v(m, "propTypes", u.propTypes), v(m, "defaultProps", u.defaultProps)
        },
        83855: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i]
                    }
                r.default = e, t && t.set(e, r);
                return r
            }(r(67294));

            function a() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function() {
                    return e
                }, e
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        h(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var b = "64px",
                v = {},
                m = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && s(e, t)
                    }(i, e);
                    var t, r, n, a = f(i);

                    function i() {
                        var e;
                        l(this, i);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return h(y(e = a.call.apply(a, [this].concat(r))), "mounted", !1), h(y(e), "state", {
                            image: null
                        }), h(y(e), "handleKeyPress", (function(t) {
                            "Enter" !== t.key && " " !== t.key || e.props.onClick()
                        })), e
                    }
                    return t = i, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                r = t.url,
                                n = t.light;
                            e.url === r && e.light === n || this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "fetchImage",
                        value: function(e) {
                            var t = this,
                                r = e.url,
                                n = e.light;
                            if ("string" !== typeof n) {
                                if (!v[r]) return this.setState({
                                    image: null
                                }), window.fetch("https://noembed.com/embed?url=".concat(r)).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    if (e.thumbnail_url && t.mounted) {
                                        var n = e.thumbnail_url.replace("height=100", "height=480");
                                        t.setState({
                                            image: n
                                        }), v[r] = n
                                    }
                                }));
                                this.setState({
                                    image: v[r]
                                })
                            } else this.setState({
                                image: n
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onClick,
                                r = e.playIcon,
                                n = e.previewTabIndex,
                                a = this.state.image,
                                i = {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                l = {
                                    preview: u({
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: a ? "url(".concat(a, ")") : void 0,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        cursor: "pointer"
                                    }, i),
                                    shadow: u({
                                        background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                                        borderRadius: b,
                                        width: b,
                                        height: b
                                    }, i),
                                    playIcon: {
                                        borderStyle: "solid",
                                        borderWidth: "16px 0 16px 26px",
                                        borderColor: "transparent transparent transparent white",
                                        marginLeft: "7px"
                                    }
                                },
                                c = o.default.createElement("div", {
                                    style: l.shadow,
                                    className: "react-player__shadow"
                                }, o.default.createElement("div", {
                                    style: l.playIcon,
                                    className: "react-player__play-icon"
                                }));
                            return o.default.createElement("div", {
                                style: l.preview,
                                className: "react-player__preview",
                                onClick: t,
                                tabIndex: n,
                                onKeyPress: this.handleKeyPress
                            }, r || c)
                        }
                    }]) && c(t.prototype, r), n && c(t, n), i
                }(o.Component);
            t.default = m
        },
        70390: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createReactPlayer = void 0;
            var n = _(r(67294)),
                o = s(r(9996)),
                a = s(r(30845)),
                i = s(r(69590)),
                u = r(85741),
                l = r(38045),
                c = s(r(60722));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        k(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return b(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function P(e, t) {
                return (P = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = j(e);
                    if (t) {
                        var o = j(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }

            function O(e, t) {
                return !t || "object" !== f(t) && "function" !== typeof t ? w(e) : t
            }

            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function j(e) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function k(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function S() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return S = function() {
                    return e
                }, e
            }

            function _(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== f(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = S();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                    }
                return r.default = e, t && t.set(e, r), r
            }
            var E = (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return _(r(83855))
                    }))
                })),
                D = "undefined" !== typeof window && window.document,
                T = "undefined" !== typeof r.g && r.g.window && r.g.window.document,
                R = Object.keys(u.propTypes),
                M = D || T ? n.Suspense : function() {
                    return null
                },
                A = [];
            t.createReactPlayer = function(e, t) {
                var r, s;
                return s = r = function(r) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && P(e, t)
                    }(O, r);
                    var s, f, p, b = g(O);

                    function O() {
                        var r;
                        v(this, O);
                        for (var i = arguments.length, s = new Array(i), f = 0; f < i; f++) s[f] = arguments[f];
                        return k(w(r = b.call.apply(b, [this].concat(s))), "state", {
                            showPreview: !!r.props.light
                        }), k(w(r), "references", {
                            wrapper: function(e) {
                                r.wrapper = e
                            },
                            player: function(e) {
                                r.player = e
                            }
                        }), k(w(r), "handleClickPreview", (function(e) {
                            r.setState({
                                showPreview: !1
                            }), r.props.onClickPreview(e)
                        })), k(w(r), "showPreview", (function() {
                            r.setState({
                                showPreview: !0
                            })
                        })), k(w(r), "getDuration", (function() {
                            return r.player ? r.player.getDuration() : null
                        })), k(w(r), "getCurrentTime", (function() {
                            return r.player ? r.player.getCurrentTime() : null
                        })), k(w(r), "getSecondsLoaded", (function() {
                            return r.player ? r.player.getSecondsLoaded() : null
                        })), k(w(r), "getInternalPlayer", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                            return r.player ? r.player.getInternalPlayer(e) : null
                        })), k(w(r), "seekTo", (function(e, t) {
                            if (!r.player) return null;
                            r.player.seekTo(e, t)
                        })), k(w(r), "handleReady", (function() {
                            r.props.onReady(w(r))
                        })), k(w(r), "getActivePlayer", (0, a.default)((function(r) {
                            for (var n = 0, o = [].concat(A, h(e)); n < o.length; n++) {
                                var a = o[n];
                                if (a.canPlay(r)) return a
                            }
                            return t || null
                        }))), k(w(r), "getConfig", (0, a.default)((function(e, t) {
                            var n = r.props.config;
                            return o.default.all([u.defaultProps.config, u.defaultProps.config[t] || {}, n, n[t] || {}])
                        }))), k(w(r), "getAttributes", (0, a.default)((function(e) {
                            return (0, l.omit)(r.props, R)
                        }))), k(w(r), "renderActivePlayer", (function(e) {
                            if (!e) return null;
                            var t = r.getActivePlayer(e);
                            if (!t) return null;
                            var o = r.getConfig(e, t.key);
                            return n.default.createElement(c.default, d({}, r.props, {
                                key: t.key,
                                ref: r.references.player,
                                config: o,
                                activePlayer: t.lazyPlayer || t,
                                onReady: r.handleReady
                            }))
                        })), r
                    }
                    return s = O, (f = [{
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return !(0, i.default)(this.props, e) || !(0, i.default)(this.state, t)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.light;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                    }, {
                        key: "renderPreview",
                        value: function(e) {
                            if (!e) return null;
                            var t = this.props,
                                r = t.light,
                                o = t.playIcon,
                                a = t.previewTabIndex;
                            return n.default.createElement(E, {
                                url: e,
                                light: r,
                                playIcon: o,
                                previewTabIndex: a,
                                onClick: this.handleClickPreview
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.url,
                                r = e.style,
                                o = e.width,
                                a = e.height,
                                i = e.fallback,
                                u = e.wrapper,
                                l = this.state.showPreview,
                                c = this.getAttributes(t);
                            return n.default.createElement(u, d({
                                ref: this.references.wrapper,
                                style: y(y({}, r), {}, {
                                    width: o,
                                    height: a
                                })
                            }, c), n.default.createElement(M, {
                                fallback: i
                            }, l ? this.renderPreview(t) : this.renderActivePlayer(t)))
                        }
                    }]) && m(s.prototype, f), p && m(s, p), O
                }(n.Component), k(r, "displayName", "ReactPlayer"), k(r, "propTypes", u.propTypes), k(r, "defaultProps", u.defaultProps), k(r, "addCustomPlayer", (function(e) {
                    A.push(e)
                })), k(r, "removeCustomPlayers", (function() {
                    A.length = 0
                })), k(r, "canPlay", (function(t) {
                    for (var r = 0, n = [].concat(A, h(e)); r < n.length; r++) {
                        if (n[r].canPlay(t)) return !0
                    }
                    return !1
                })), k(r, "canEnablePIP", (function(t) {
                    for (var r = 0, n = [].concat(A, h(e)); r < n.length; r++) {
                        var o = n[r];
                        if (o.canEnablePIP && o.canEnablePIP(t)) return !0
                    }
                    return !1
                })), s
            }
        },
        22004: function(e, t, r) {
            "use strict";
            t.Z = void 0;
            var n, o = (n = r(86497)) && n.__esModule ? n : {
                    default: n
                },
                a = r(70390);
            var i = o.default[o.default.length - 1],
                u = (0, a.createReactPlayer)(o.default, i);
            t.Z = u
        },
        71776: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_KALTURA = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
            var n = r(38045);

            function o(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return a(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, u = !0,
                    l = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        l = !0, i = e
                    },
                    f: function() {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var i = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
            t.MATCH_URL_YOUTUBE = i;
            var u = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
            t.MATCH_URL_SOUNDCLOUD = u;
            var l = /vimeo\.com\/.+/;
            t.MATCH_URL_VIMEO = l;
            var c = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
            t.MATCH_URL_FACEBOOK = c;
            var s = /^https?:\/\/fb\.watch\/.+$/;
            t.MATCH_URL_FACEBOOK_WATCH = s;
            var f = /streamable\.com\/([a-z0-9]+)$/;
            t.MATCH_URL_STREAMABLE = f;
            var p = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
            t.MATCH_URL_WISTIA = p;
            var y = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
            t.MATCH_URL_TWITCH_VIDEO = y;
            var d = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
            t.MATCH_URL_TWITCH_CHANNEL = d;
            var h = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
            t.MATCH_URL_DAILYMOTION = h;
            var b = /mixcloud\.com\/([^/]+\/[^/]+)/;
            t.MATCH_URL_MIXCLOUD = b;
            var v = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
            t.MATCH_URL_VIDYARD = v;
            var m = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
            t.MATCH_URL_KALTURA = m;
            var P = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
            t.AUDIO_EXTENSIONS = P;
            var g = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
            t.VIDEO_EXTENSIONS = g;
            var O = /\.(m3u8)($|\?)/i;
            t.HLS_EXTENSIONS = O;
            var w = /\.(mpd)($|\?)/i;
            t.DASH_EXTENSIONS = w;
            var j = /\.(flv)($|\?)/i;
            t.FLV_EXTENSIONS = j;
            var k = {
                youtube: function(e) {
                    return e instanceof Array ? e.every((function(e) {
                        return i.test(e)
                    })) : i.test(e)
                },
                soundcloud: function(e) {
                    return u.test(e) && !P.test(e)
                },
                vimeo: function(e) {
                    return l.test(e) && !g.test(e) && !O.test(e)
                },
                facebook: function(e) {
                    return c.test(e) || s.test(e)
                },
                streamable: function(e) {
                    return f.test(e)
                },
                wistia: function(e) {
                    return p.test(e)
                },
                twitch: function(e) {
                    return y.test(e) || d.test(e)
                },
                dailymotion: function(e) {
                    return h.test(e)
                },
                mixcloud: function(e) {
                    return b.test(e)
                },
                vidyard: function(e) {
                    return v.test(e)
                },
                kaltura: function(e) {
                    return m.test(e)
                },
                file: function e(t) {
                    if (t instanceof Array) {
                        var r, a = o(t);
                        try {
                            for (a.s(); !(r = a.n()).done;) {
                                var i = r.value;
                                if ("string" === typeof i && e(i)) return !0;
                                if (e(i.src)) return !0
                            }
                        } catch (u) {
                            a.e(u)
                        } finally {
                            a.f()
                        }
                        return !1
                    }
                    return !(!(0, n.isMediaStream)(t) && !(0, n.isBlobUrl)(t)) || (P.test(t) || g.test(t) || O.test(t) || w.test(t) || j.test(t))
                }
            };
            t.canPlay = k
        },
        36807: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        P(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function h(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }

            function b(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function P(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(l, e);
                var t, r, n, u = h(l);

                function l() {
                    var e;
                    p(this, l);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return P(v(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), P(v(e), "onDurationChange", (function() {
                        var t = e.getDuration();
                        e.props.onDuration(t)
                    })), P(v(e), "mute", (function() {
                        e.callPlayer("setMuted", !0)
                    })), P(v(e), "unmute", (function() {
                        e.callPlayer("setMuted", !1)
                    })), P(v(e), "ref", (function(t) {
                        e.container = t
                    })), e
                }
                return t = l, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this,
                            r = this.props,
                            n = r.controls,
                            o = r.config,
                            u = r.onError,
                            l = r.playing,
                            f = s(e.match(i.MATCH_URL_DAILYMOTION), 2)[1];
                        this.player ? this.player.load(f, {
                            start: (0, a.parseStartTime)(e),
                            autoplay: l
                        }) : (0, a.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", (function(e) {
                            return e.player
                        })).then((function(r) {
                            if (t.container) {
                                var i = r.player;
                                t.player = new i(t.container, {
                                    width: "100%",
                                    height: "100%",
                                    video: f,
                                    params: c({
                                        controls: n,
                                        autoplay: t.props.playing,
                                        mute: t.props.muted,
                                        start: (0, a.parseStartTime)(e),
                                        origin: window.location.origin
                                    }, o.params),
                                    events: {
                                        apiready: t.props.onReady,
                                        seeked: function() {
                                            return t.props.onSeek(t.player.currentTime)
                                        },
                                        video_end: t.props.onEnded,
                                        durationchange: t.onDurationChange,
                                        pause: t.props.onPause,
                                        playing: t.props.onPlay,
                                        waiting: t.props.onBuffer,
                                        error: function(e) {
                                            return u(e)
                                        }
                                    }
                                })
                            }
                        }), u)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seek", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.player.duration || null
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.player.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.player.bufferedTime
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            display: this.props.display
                        };
                        return o.default.createElement("div", {
                            style: e
                        }, o.default.createElement("div", {
                            ref: this.ref
                        }))
                    }
                }]) && y(t.prototype, r), n && y(t, n), l
            }(o.Component);
            t.default = g, P(g, "displayName", "DailyMotion"), P(g, "canPlay", i.canPlay.dailymotion), P(g, "loopOnEnded", !0)
        },
        31972: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function y(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? d(e) : t
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = "https://connect.facebook.net/en_US/sdk.js",
                m = "fbAsyncInit",
                P = "facebook-player-",
                g = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(u, e);
                    var t, r, n, i = p(u);

                    function u() {
                        var e;
                        c(this, u);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return b(d(e = i.call.apply(i, [this].concat(r))), "callPlayer", a.callPlayer), b(d(e), "playerID", e.props.config.playerId || "".concat(P).concat((0, a.randomString)())), b(d(e), "mute", (function() {
                            e.callPlayer("mute")
                        })), b(d(e), "unmute", (function() {
                            e.callPlayer("unmute")
                        })), e
                    }
                    return t = u, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "load",
                        value: function(e, t) {
                            var r = this;
                            t ? (0, a.getSDK)(v, "FB", m).then((function(e) {
                                return e.XFBML.parse()
                            })) : (0, a.getSDK)(v, "FB", m).then((function(e) {
                                e.init({
                                    appId: r.props.config.appId,
                                    xfbml: !0,
                                    version: r.props.config.version
                                }), e.Event.subscribe("xfbml.render", (function(e) {
                                    r.props.onLoaded()
                                })), e.Event.subscribe("xfbml.ready", (function(e) {
                                    "video" === e.type && e.id === r.playerID && (r.player = e.instance, r.player.subscribe("startedPlaying", r.props.onPlay), r.player.subscribe("paused", r.props.onPause), r.player.subscribe("finishedPlaying", r.props.onEnded), r.player.subscribe("startedBuffering", r.props.onBuffer), r.player.subscribe("finishedBuffering", r.props.onBufferEnd), r.player.subscribe("error", r.props.onError), r.props.muted ? r.callPlayer("mute") : r.callPlayer("unmute"), r.props.onReady(), document.getElementById(r.playerID).querySelector("iframe").style.visibility = "visible")
                                }))
                            }))
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.callPlayer("play")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.callPlayer("pause")
                        }
                    }, {
                        key: "stop",
                        value: function() {}
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.callPlayer("seek", e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.callPlayer("setVolume", e)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.callPlayer("getDuration")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.callPlayer("getCurrentPosition")
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.config.attributes;
                            return o.default.createElement("div", l({
                                style: {
                                    width: "100%",
                                    height: "100%"
                                },
                                id: this.playerID,
                                className: "fb-video",
                                "data-href": this.props.url,
                                "data-autoplay": this.props.playing ? "true" : "false",
                                "data-allowfullscreen": "true",
                                "data-controls": this.props.controls ? "true" : "false"
                            }, e))
                        }
                    }]) && s(t.prototype, r), n && s(t, n), u
                }(o.Component);
            t.default = g, b(g, "displayName", "Facebook"), b(g, "canPlay", i.canPlay.facebook), b(g, "loopOnEnded", !0)
        },
        14926: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function y(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? d(e) : t
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = "undefined" !== typeof navigator,
                m = v && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
                P = v && (/iPad|iPhone|iPod/.test(navigator.userAgent) || m) && !window.MSStream,
                g = /www\.dropbox\.com\/.+/,
                O = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
                w = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(y, e);
                    var t, r, n, u = p(y);

                    function y() {
                        var e;
                        c(this, y);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return b(d(e = u.call.apply(u, [this].concat(r))), "onReady", (function() {
                            var t;
                            return (t = e.props).onReady.apply(t, arguments)
                        })), b(d(e), "onPlay", (function() {
                            var t;
                            return (t = e.props).onPlay.apply(t, arguments)
                        })), b(d(e), "onBuffer", (function() {
                            var t;
                            return (t = e.props).onBuffer.apply(t, arguments)
                        })), b(d(e), "onBufferEnd", (function() {
                            var t;
                            return (t = e.props).onBufferEnd.apply(t, arguments)
                        })), b(d(e), "onPause", (function() {
                            var t;
                            return (t = e.props).onPause.apply(t, arguments)
                        })), b(d(e), "onEnded", (function() {
                            var t;
                            return (t = e.props).onEnded.apply(t, arguments)
                        })), b(d(e), "onError", (function() {
                            var t;
                            return (t = e.props).onError.apply(t, arguments)
                        })), b(d(e), "onEnablePIP", (function() {
                            var t;
                            return (t = e.props).onEnablePIP.apply(t, arguments)
                        })), b(d(e), "onDisablePIP", (function(t) {
                            var r = e.props,
                                n = r.onDisablePIP,
                                o = r.playing;
                            n(t), o && e.play()
                        })), b(d(e), "onPresentationModeChange", (function(t) {
                            if (e.player && (0, a.supportsWebKitPresentationMode)(e.player)) {
                                var r = e.player.webkitPresentationMode;
                                "picture-in-picture" === r ? e.onEnablePIP(t) : "inline" === r && e.onDisablePIP(t)
                            }
                        })), b(d(e), "onSeek", (function(t) {
                            e.props.onSeek(t.target.currentTime)
                        })), b(d(e), "mute", (function() {
                            e.player.muted = !0
                        })), b(d(e), "unmute", (function() {
                            e.player.muted = !1
                        })), b(d(e), "renderSourceElement", (function(e, t) {
                            return "string" === typeof e ? o.default.createElement("source", {
                                key: t,
                                src: e
                            }) : o.default.createElement("source", l({
                                key: t
                            }, e))
                        })), b(d(e), "renderTrack", (function(e, t) {
                            return o.default.createElement("track", l({
                                key: t
                            }, e))
                        })), b(d(e), "ref", (function(t) {
                            e.player && (e.prevPlayer = e.player), e.player = t
                        })), e
                    }
                    return t = y, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this), this.addListeners(this.player), P && this.player.load()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer, e.url), this.addListeners(this.player)), this.props.url === e.url || (0, a.isMediaStream)(this.props.url) || (this.player.srcObject = null)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeListeners(this.player), this.hls && this.hls.destroy()
                        }
                    }, {
                        key: "addListeners",
                        value: function(e) {
                            var t = this.props,
                                r = t.url,
                                n = t.playsinline;
                            e.addEventListener("play", this.onPlay), e.addEventListener("waiting", this.onBuffer), e.addEventListener("playing", this.onBufferEnd), e.addEventListener("pause", this.onPause), e.addEventListener("seeked", this.onSeek), e.addEventListener("ended", this.onEnded), e.addEventListener("error", this.onError), e.addEventListener("enterpictureinpicture", this.onEnablePIP), e.addEventListener("leavepictureinpicture", this.onDisablePIP), e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(r) || e.addEventListener("canplay", this.onReady), n && (e.setAttribute("playsinline", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("x5-playsinline", ""))
                        }
                    }, {
                        key: "removeListeners",
                        value: function(e, t) {
                            e.removeEventListener("canplay", this.onReady), e.removeEventListener("play", this.onPlay), e.removeEventListener("waiting", this.onBuffer), e.removeEventListener("playing", this.onBufferEnd), e.removeEventListener("pause", this.onPause), e.removeEventListener("seeked", this.onSeek), e.removeEventListener("ended", this.onEnded), e.removeEventListener("error", this.onError), e.removeEventListener("enterpictureinpicture", this.onEnablePIP), e.removeEventListener("leavepictureinpicture", this.onDisablePIP), e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(t) || e.removeEventListener("canplay", this.onReady)
                        }
                    }, {
                        key: "shouldUseAudio",
                        value: function(e) {
                            return !e.config.forceVideo && !e.config.attributes.poster && (i.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
                        }
                    }, {
                        key: "shouldUseHLS",
                        value: function(e) {
                            return !!this.props.config.forceHLS || !P && (i.HLS_EXTENSIONS.test(e) || O.test(e))
                        }
                    }, {
                        key: "shouldUseDASH",
                        value: function(e) {
                            return i.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
                        }
                    }, {
                        key: "shouldUseFLV",
                        value: function(e) {
                            return i.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV
                        }
                    }, {
                        key: "load",
                        value: function(e) {
                            var t = this,
                                r = this.props.config,
                                n = r.hlsVersion,
                                o = r.hlsOptions,
                                i = r.dashVersion,
                                u = r.flvVersion;
                            if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(e) && (0, a.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", n), "Hls").then((function(r) {
                                    if (t.hls = new r(o), t.hls.on(r.Events.MANIFEST_PARSED, (function() {
                                            t.props.onReady()
                                        })), t.hls.on(r.Events.ERROR, (function(e, n) {
                                            t.props.onError(e, n, t.hls, r)
                                        })), O.test(e)) {
                                        var n = e.match(O)[1];
                                        t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}", n))
                                    } else t.hls.loadSource(e);
                                    t.hls.attachMedia(t.player), t.props.onLoaded()
                                })), this.shouldUseDASH(e) && (0, a.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", i), "dashjs").then((function(r) {
                                    t.dash = r.MediaPlayer().create(), t.dash.initialize(t.player, e, t.props.playing), t.dash.on("error", t.props.onError), parseInt(i) < 3 ? t.dash.getDebug().setLogToBrowserConsole(!1) : t.dash.updateSettings({
                                        debug: {
                                            logLevel: r.Debug.LOG_LEVEL_NONE
                                        }
                                    }), t.props.onLoaded()
                                })), this.shouldUseFLV(e) && (0, a.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION", u), "flvjs").then((function(r) {
                                    t.flv = r.createPlayer({
                                        type: "flv",
                                        url: e
                                    }), t.flv.attachMediaElement(t.player), t.flv.load(), t.props.onLoaded()
                                })), e instanceof Array) this.player.load();
                            else if ((0, a.isMediaStream)(e)) try {
                                this.player.srcObject = e
                            } catch (l) {
                                this.player.src = window.URL.createObjectURL(e)
                            }
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this.player.play();
                            e && e.catch(this.props.onError)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.player.pause()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.player.removeAttribute("src"), this.dash && this.dash.reset()
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.player.currentTime = e
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.player.volume = e
                        }
                    }, {
                        key: "enablePIP",
                        value: function() {
                            this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture")
                        }
                    }, {
                        key: "disablePIP",
                        value: function() {
                            document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline")
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.player.playbackRate = e
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            if (!this.player) return null;
                            var e = this.player,
                                t = e.duration,
                                r = e.seekable;
                            return t === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : t
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.player ? this.player.currentTime : null
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            if (!this.player) return null;
                            var e = this.player.buffered;
                            if (0 === e.length) return 0;
                            var t = e.end(e.length - 1),
                                r = this.getDuration();
                            return t > r ? r : t
                        }
                    }, {
                        key: "getSource",
                        value: function(e) {
                            var t = this.shouldUseHLS(e),
                                r = this.shouldUseDASH(e),
                                n = this.shouldUseFLV(e);
                            if (!(e instanceof Array || (0, a.isMediaStream)(e) || t || r || n)) return g.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.url,
                                r = e.playing,
                                n = e.loop,
                                a = e.controls,
                                i = e.muted,
                                u = e.config,
                                c = e.width,
                                s = e.height,
                                f = this.shouldUseAudio(this.props) ? "audio" : "video",
                                p = {
                                    width: "auto" === c ? c : "100%",
                                    height: "auto" === s ? s : "100%"
                                };
                            return o.default.createElement(f, l({
                                ref: this.ref,
                                src: this.getSource(t),
                                style: p,
                                preload: "auto",
                                autoPlay: r || void 0,
                                controls: a,
                                muted: i,
                                loop: n
                            }, u.attributes), t instanceof Array && t.map(this.renderSourceElement), u.tracks.map(this.renderTrack))
                        }
                    }]) && s(t.prototype, r), n && s(t, n), y
                }(o.Component);
            t.default = w, b(w, "displayName", "FilePlayer"), b(w, "canPlay", i.canPlay.file)
        },
        73911: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(u, e);
                var t, r, n, i = f(u);

                function u() {
                    var e;
                    l(this, u);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return h(y(e = i.call.apply(i, [this].concat(r))), "callPlayer", a.callPlayer), h(y(e), "duration", null), h(y(e), "currentTime", null), h(y(e), "secondsLoaded", null), h(y(e), "mute", (function() {
                        e.callPlayer("mute")
                    })), h(y(e), "unmute", (function() {
                        e.callPlayer("unmute")
                    })), h(y(e), "ref", (function(t) {
                        e.iframe = t
                    })), e
                }
                return t = u, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function(e) {
                            t.iframe && (t.player = new e.Player(t.iframe), t.player.on("ready", (function() {
                                t.player.isReady = !0, t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seeked", t.props.onSeek), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", (function(e) {
                                    var r = e.duration,
                                        n = e.seconds;
                                    t.duration = r, t.currentTime = n
                                })), t.player.on("buffered", (function(e) {
                                    var r = e.percent;
                                    t.duration && (t.secondsLoaded = t.duration * r)
                                })), t.player.setLoop(t.props.loop), t.props.muted && t.player.mute(), setTimeout((function() {
                                    t.props.onReady()
                                }))
                            })))
                        }), this.props.onError)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("setCurrentTime", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.default.createElement("iframe", {
                            ref: this.ref,
                            src: this.props.url,
                            frameBorder: "0",
                            scrolling: "no",
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            allowFullScreen: !0,
                            allow: "encrypted-media",
                            referrerPolicy: "no-referrer-when-downgrade"
                        })
                    }
                }]) && c(t.prototype, r), n && c(t, n), u
            }(o.Component);
            t.default = b, h(b, "displayName", "Kaltura"), h(b, "canPlay", i.canPlay.kaltura)
        },
        50143: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        v(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }

            function d(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? h(e) : t
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(l, e);
                var t, r, n, u = y(l);

                function l() {
                    var e;
                    s(this, l);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return v(h(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), v(h(e), "duration", null), v(h(e), "currentTime", null), v(h(e), "secondsLoaded", null), v(h(e), "mute", (function() {})), v(h(e), "unmute", (function() {})), v(h(e), "ref", (function(t) {
                        e.iframe = t
                    })), e
                }
                return t = l, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        (0, a.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then((function(e) {
                            t.player = e.PlayerWidget(t.iframe), t.player.ready.then((function() {
                                t.player.events.play.on(t.props.onPlay), t.player.events.pause.on(t.props.onPause), t.player.events.ended.on(t.props.onEnded), t.player.events.error.on(t.props.error), t.player.events.progress.on((function(e, r) {
                                    t.currentTime = e, t.duration = r
                                })), t.props.onReady()
                            }))
                        }), this.props.onError)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seek", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {}
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.url,
                            r = e.config,
                            n = t.match(i.MATCH_URL_MIXCLOUD)[1],
                            u = (0, a.queryString)(c(c({}, r.options), {}, {
                                feed: "/".concat(n, "/")
                            }));
                        return o.default.createElement("iframe", {
                            key: n,
                            ref: this.ref,
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            src: "https://www.mixcloud.com/widget/iframe/?".concat(u),
                            frameBorder: "0"
                        })
                    }
                }]) && f(t.prototype, r), n && f(t, n), l
            }(o.Component);
            t.default = m, v(m, "displayName", "Mixcloud"), v(m, "canPlay", i.canPlay.mixcloud), v(m, "loopOnEnded", !0)
        },
        72648: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        v(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }

            function d(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? h(e) : t
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(u, e);
                var t, r, n, i = y(u);

                function u() {
                    var e;
                    s(this, u);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return v(h(e = i.call.apply(i, [this].concat(r))), "callPlayer", a.callPlayer), v(h(e), "duration", null), v(h(e), "currentTime", null), v(h(e), "fractionLoaded", null), v(h(e), "mute", (function() {
                        e.setVolume(0)
                    })), v(h(e), "unmute", (function() {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), v(h(e), "ref", (function(t) {
                        e.iframe = t
                    })), e
                }
                return t = u, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e, t) {
                        var r = this;
                        (0, a.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then((function(n) {
                            if (r.iframe) {
                                var o = n.Widget.Events,
                                    a = o.PLAY,
                                    i = o.PLAY_PROGRESS,
                                    u = o.PAUSE,
                                    l = o.FINISH,
                                    s = o.ERROR;
                                t || (r.player = n.Widget(r.iframe), r.player.bind(a, r.props.onPlay), r.player.bind(u, (function() {
                                    r.duration - r.currentTime < .05 || r.props.onPause()
                                })), r.player.bind(i, (function(e) {
                                    r.currentTime = e.currentPosition / 1e3, r.fractionLoaded = e.loadedProgress
                                })), r.player.bind(l, (function() {
                                    return r.props.onEnded()
                                })), r.player.bind(s, (function(e) {
                                    return r.props.onError(e)
                                }))), r.player.load(e, c(c({}, r.props.config.options), {}, {
                                    callback: function() {
                                        r.player.getDuration((function(e) {
                                            r.duration = e / 1e3, r.props.onReady()
                                        }))
                                    }
                                }))
                            }
                        }))
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seekTo", 1e3 * e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", 100 * e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.fractionLoaded * this.duration
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            display: this.props.display
                        };
                        return o.default.createElement("iframe", {
                            ref: this.ref,
                            src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                            style: e,
                            frameBorder: 0,
                            allow: "autoplay"
                        })
                    }
                }]) && f(t.prototype, r), n && f(t, n), u
            }(o.Component);
            t.default = m, v(m, "displayName", "SoundCloud"), v(m, "canPlay", i.canPlay.soundcloud), v(m, "loopOnEnded", !0)
        },
        50993: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }

            function p(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(p, e);
                var t, r, n, u = f(p);

                function p() {
                    var e;
                    l(this, p);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return h(y(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), h(y(e), "duration", null), h(y(e), "currentTime", null), h(y(e), "secondsLoaded", null), h(y(e), "mute", (function() {
                        e.callPlayer("mute")
                    })), h(y(e), "unmute", (function() {
                        e.callPlayer("unmute")
                    })), h(y(e), "ref", (function(t) {
                        e.iframe = t
                    })), e
                }
                return t = p, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function(e) {
                            t.iframe && (t.player = new e.Player(t.iframe), t.player.setLoop(t.props.loop), t.player.on("ready", t.props.onReady), t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seeked", t.props.onSeek), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", (function(e) {
                                var r = e.duration,
                                    n = e.seconds;
                                t.duration = r, t.currentTime = n
                            })), t.player.on("buffered", (function(e) {
                                var r = e.percent;
                                t.duration && (t.secondsLoaded = t.duration * r)
                            })), t.props.muted && t.player.mute())
                        }), this.props.onError)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("setCurrentTime", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", 100 * e)
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.url.match(i.MATCH_URL_STREAMABLE)[1];
                        return o.default.createElement("iframe", {
                            ref: this.ref,
                            src: "https://streamable.com/o/".concat(e),
                            frameBorder: "0",
                            scrolling: "no",
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            allowFullScreen: !0
                        })
                    }
                }]) && c(t.prototype, r), n && c(t, n), p
            }(o.Component);
            t.default = b, h(b, "displayName", "Streamable"), h(b, "canPlay", i.canPlay.streamable)
        },
        29482: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function y(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? d(e) : t
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = "twitch-player-",
                m = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(y, e);
                    var t, r, n, u = p(y);

                    function y() {
                        var e;
                        c(this, y);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return b(d(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), b(d(e), "playerID", e.props.config.playerId || "".concat(v).concat((0, a.randomString)())), b(d(e), "mute", (function() {
                            e.callPlayer("setMuted", !0)
                        })), b(d(e), "unmute", (function() {
                            e.callPlayer("setMuted", !1)
                        })), e
                    }
                    return t = y, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "load",
                        value: function(e, t) {
                            var r = this,
                                n = this.props,
                                o = n.playsinline,
                                u = n.onError,
                                c = n.config,
                                s = n.controls,
                                f = i.MATCH_URL_TWITCH_CHANNEL.test(e),
                                p = f ? e.match(i.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(i.MATCH_URL_TWITCH_VIDEO)[1];
                            t ? f ? this.player.setChannel(p) : this.player.setVideo("v" + p) : (0, a.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then((function(t) {
                                r.player = new t.Player(r.playerID, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? l(Object(r), !0).forEach((function(t) {
                                            b(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }))
                                    }
                                    return e
                                }({
                                    video: f ? "" : p,
                                    channel: f ? p : "",
                                    height: "100%",
                                    width: "100%",
                                    playsinline: o,
                                    autoplay: r.props.playing,
                                    muted: r.props.muted,
                                    controls: !!f || s,
                                    time: (0, a.parseStartTime)(e)
                                }, c.options));
                                var n = t.Player,
                                    i = n.READY,
                                    u = n.PLAYING,
                                    y = n.PAUSE,
                                    d = n.ENDED,
                                    h = n.ONLINE,
                                    v = n.OFFLINE;
                                r.player.addEventListener(i, r.props.onReady), r.player.addEventListener(u, r.props.onPlay), r.player.addEventListener(y, r.props.onPause), r.player.addEventListener(d, r.props.onEnded), r.player.addEventListener(h, r.props.onLoaded), r.player.addEventListener(v, r.props.onLoaded)
                            }), u)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.callPlayer("play")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.callPlayer("pause")
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.callPlayer("pause")
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.callPlayer("seek", e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.callPlayer("setVolume", e)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.callPlayer("getDuration")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.callPlayer("getCurrentTime")
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.default.createElement("div", {
                                style: {
                                    width: "100%",
                                    height: "100%"
                                },
                                id: this.playerID
                            })
                        }
                    }]) && s(t.prototype, r), n && s(t, n), y
                }(o.Component);
            t.default = m, b(m, "displayName", "Twitch"), b(m, "canPlay", i.canPlay.twitch), b(m, "loopOnEnded", !0)
        },
        36596: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function y(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? d(e) : t
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(y, e);
                var t, r, n, u = p(y);

                function y() {
                    var e;
                    c(this, y);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return b(d(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), b(d(e), "mute", (function() {
                        e.setVolume(0)
                    })), b(d(e), "unmute", (function() {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), b(d(e), "ref", (function(t) {
                        e.container = t
                    })), e
                }
                return t = y, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this,
                            r = this.props,
                            n = r.playing,
                            o = r.config,
                            u = r.onError,
                            c = r.onDuration,
                            s = e && e.match(i.MATCH_URL_VIDYARD)[1];
                        this.player && this.stop(), (0, a.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then((function(e) {
                            t.container && (e.api.addReadyListener((function(e, r) {
                                t.player = r, t.player.on("ready", t.props.onReady), t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seek", t.props.onSeek), t.player.on("playerComplete", t.props.onEnded)
                            }), s), e.api.renderPlayer(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                                        b(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }({
                                uuid: s,
                                container: t.container,
                                autoplay: n ? 1 : 0
                            }, o.options)), e.api.getPlayerMetadata(s).then((function(e) {
                                t.duration = e.length_in_seconds, c(e.length_in_seconds)
                            })))
                        }), u)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {
                        window.VidyardV4.api.destroyPlayer(this.player)
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seek", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        this.callPlayer("setPlaybackSpeed", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.callPlayer("currentTime")
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            display: this.props.display
                        };
                        return o.default.createElement("div", {
                            style: e
                        }, o.default.createElement("div", {
                            ref: this.ref
                        }))
                    }
                }]) && s(t.prototype, r), n && s(t, n), y
            }(o.Component);
            t.default = v, b(v, "displayName", "Vidyard"), b(v, "canPlay", i.canPlay.vidyard)
        },
        80868: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }

            function y(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? d(e) : t
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(u, e);
                var t, r, n, i = p(u);

                function u() {
                    var e;
                    c(this, u);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return b(d(e = i.call.apply(i, [this].concat(r))), "callPlayer", a.callPlayer), b(d(e), "duration", null), b(d(e), "currentTime", null), b(d(e), "secondsLoaded", null), b(d(e), "mute", (function() {
                        e.setVolume(0)
                    })), b(d(e), "unmute", (function() {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), b(d(e), "ref", (function(t) {
                        e.container = t
                    })), e
                }
                return t = u, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        this.duration = null, (0, a.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then((function(r) {
                            t.container && (t.player = new r.Player(t.container, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                                        b(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }({
                                url: e,
                                autoplay: t.props.playing,
                                muted: t.props.muted,
                                loop: t.props.loop,
                                playsinline: t.props.playsinline,
                                controls: t.props.controls
                            }, t.props.config.playerOptions)), t.player.ready().then((function() {
                                var e = t.container.querySelector("iframe");
                                e.style.width = "100%", e.style.height = "100%"
                            })).catch(t.props.onError), t.player.on("loaded", (function() {
                                t.props.onReady(), t.refreshDuration()
                            })), t.player.on("play", (function() {
                                t.props.onPlay(), t.refreshDuration()
                            })), t.player.on("pause", t.props.onPause), t.player.on("seeked", (function(e) {
                                return t.props.onSeek(e.seconds)
                            })), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", (function(e) {
                                var r = e.seconds;
                                t.currentTime = r
                            })), t.player.on("progress", (function(e) {
                                var r = e.seconds;
                                t.secondsLoaded = r
                            })), t.player.on("bufferstart", t.props.onBuffer), t.player.on("bufferend", t.props.onBufferEnd))
                        }), this.props.onError)
                    }
                }, {
                    key: "refreshDuration",
                    value: function() {
                        var e = this;
                        this.player.getDuration().then((function(t) {
                            e.duration = t
                        }))
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this.callPlayer("play");
                        e && e.catch(this.props.onError)
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.callPlayer("unload")
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("setCurrentTime", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        this.callPlayer("setPlaybackRate", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            display: this.props.display
                        };
                        return o.default.createElement("div", {
                            key: this.props.url,
                            ref: this.ref,
                            style: e
                        })
                    }
                }]) && s(t.prototype, r), n && s(t, n), u
            }(o.Component);
            t.default = v, b(v, "displayName", "Vimeo"), b(v, "canPlay", i.canPlay.vimeo), b(v, "forceLoad", !0)
        },
        8018: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        v(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }

            function d(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? h(e) : t
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m = "wistia-player-",
                P = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && p(e, t)
                    }(l, e);
                    var t, r, n, u = y(l);

                    function l() {
                        var e;
                        s(this, l);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return v(h(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), v(h(e), "playerID", e.props.config.playerId || "".concat(m).concat((0, a.randomString)())), v(h(e), "onPlay", (function() {
                            var t;
                            return (t = e.props).onPlay.apply(t, arguments)
                        })), v(h(e), "onPause", (function() {
                            var t;
                            return (t = e.props).onPause.apply(t, arguments)
                        })), v(h(e), "onSeek", (function() {
                            var t;
                            return (t = e.props).onSeek.apply(t, arguments)
                        })), v(h(e), "onEnded", (function() {
                            var t;
                            return (t = e.props).onEnded.apply(t, arguments)
                        })), v(h(e), "mute", (function() {
                            e.callPlayer("mute")
                        })), v(h(e), "unmute", (function() {
                            e.callPlayer("unmute")
                        })), e
                    }
                    return t = l, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "load",
                        value: function(e) {
                            var t = this,
                                r = this.props,
                                n = r.playing,
                                o = r.muted,
                                i = r.controls,
                                u = r.onReady,
                                l = r.config,
                                s = r.onError;
                            (0, a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then((function(e) {
                                l.customControls && l.customControls.forEach((function(t) {
                                    return e.defineControl(t)
                                })), window._wq = window._wq || [], window._wq.push({
                                    id: t.playerID,
                                    options: c({
                                        autoPlay: n,
                                        silentAutoPlay: "allow",
                                        muted: o,
                                        controlsVisibleOnLoad: i,
                                        fullscreenButton: i,
                                        playbar: i,
                                        playbackRateControl: i,
                                        qualityControl: i,
                                        volumeControl: i,
                                        settingsControl: i,
                                        smallPlayButton: i
                                    }, l.options),
                                    onReady: function(e) {
                                        t.player = e, t.unbind(), t.player.bind("play", t.onPlay), t.player.bind("pause", t.onPause), t.player.bind("seek", t.onSeek), t.player.bind("end", t.onEnded), u()
                                    }
                                })
                            }), s)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.callPlayer("play")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.callPlayer("pause")
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.unbind(), this.callPlayer("remove")
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.callPlayer("time", e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.callPlayer("volume", e)
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.callPlayer("playbackRate", e)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.callPlayer("duration")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.callPlayer("time")
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.url,
                                t = e && e.match(i.MATCH_URL_WISTIA)[1],
                                r = "wistia_embed wistia_async_".concat(t);
                            return o.default.createElement("div", {
                                id: this.playerID,
                                key: t,
                                className: r,
                                style: {
                                    width: "100%",
                                    height: "100%"
                                }
                            })
                        }
                    }]) && f(t.prototype, r), n && f(t, n), l
                }(o.Component);
            t.default = P, v(P, "displayName", "Wistia"), v(P, "canPlay", i.canPlay.wistia), v(P, "loopOnEnded", !0)
        },
        60356: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(r, a, i) : r[a] = e[a]
                        }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r(67294)),
                a = r(38045),
                i = r(71776);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        P(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function h(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }

            function b(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function P(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var g = "YT",
                O = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
                w = /user\/([a-zA-Z0-9_-]+)\/?/,
                j = /youtube-nocookie\.com/,
                k = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && d(e, t)
                    }(l, e);
                    var t, r, n, u = h(l);

                    function l() {
                        var e;
                        p(this, l);
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        return P(v(e = u.call.apply(u, [this].concat(r))), "callPlayer", a.callPlayer), P(v(e), "parsePlaylist", (function(t) {
                            return t instanceof Array ? {
                                listType: "playlist",
                                playlist: t.map(e.getID).join(",")
                            } : O.test(t) ? {
                                listType: "playlist",
                                list: s(t.match(O), 2)[1].replace(/^UC/, "UU")
                            } : w.test(t) ? {
                                listType: "user_uploads",
                                list: s(t.match(w), 2)[1]
                            } : {}
                        })), P(v(e), "onStateChange", (function(t) {
                            var r = t.data,
                                n = e.props,
                                o = n.onPlay,
                                a = n.onPause,
                                i = n.onBuffer,
                                u = n.onBufferEnd,
                                l = n.onEnded,
                                c = n.onReady,
                                s = n.loop,
                                f = n.config,
                                p = f.playerVars,
                                y = f.onUnstarted,
                                d = window.YT.PlayerState,
                                h = d.UNSTARTED,
                                b = d.PLAYING,
                                v = d.PAUSED,
                                m = d.BUFFERING,
                                P = d.ENDED,
                                g = d.CUED;
                            if (r === h && y(), r === b && (o(), u()), r === v && a(), r === m && i(), r === P) {
                                var O = !!e.callPlayer("getPlaylist");
                                s && !O && (p.start ? e.seekTo(p.start) : e.play()), l()
                            }
                            r === g && c()
                        })), P(v(e), "mute", (function() {
                            e.callPlayer("mute")
                        })), P(v(e), "unmute", (function() {
                            e.callPlayer("unMute")
                        })), P(v(e), "ref", (function(t) {
                            e.container = t
                        })), e
                    }
                    return t = l, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "getID",
                        value: function(e) {
                            return !e || e instanceof Array || O.test(e) ? null : e.match(i.MATCH_URL_YOUTUBE)[1]
                        }
                    }, {
                        key: "load",
                        value: function(e, t) {
                            var r = this,
                                n = this.props,
                                o = n.playing,
                                i = n.muted,
                                u = n.playsinline,
                                l = n.controls,
                                s = n.loop,
                                f = n.config,
                                p = n.onError,
                                y = f.playerVars,
                                d = f.embedOptions,
                                h = this.getID(e);
                            if (t) return O.test(e) || w.test(e) || e instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(e)) : void this.player.cueVideoById({
                                videoId: h,
                                startSeconds: (0, a.parseStartTime)(e) || y.start,
                                endSeconds: (0, a.parseEndTime)(e) || y.end
                            });
                            (0, a.getSDK)("https://www.youtube.com/iframe_api", g, "onYouTubeIframeAPIReady", (function(e) {
                                return e.loaded
                            })).then((function(t) {
                                r.container && (r.player = new t.Player(r.container, c({
                                    width: "100%",
                                    height: "100%",
                                    videoId: h,
                                    playerVars: c(c({
                                        autoplay: o ? 1 : 0,
                                        mute: i ? 1 : 0,
                                        controls: l ? 1 : 0,
                                        start: (0, a.parseStartTime)(e),
                                        end: (0, a.parseEndTime)(e),
                                        origin: window.location.origin,
                                        playsinline: u ? 1 : 0
                                    }, r.parsePlaylist(e)), y),
                                    events: {
                                        onReady: function() {
                                            s && r.player.setLoop(!0), r.props.onReady()
                                        },
                                        onStateChange: r.onStateChange,
                                        onError: function(e) {
                                            return p(e.data)
                                        }
                                    },
                                    host: j.test(e) ? "https://www.youtube-nocookie.com" : void 0
                                }, d)))
                            }), p), d.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.callPlayer("playVideo")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.callPlayer("pauseVideo")
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo")
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.callPlayer("seekTo", e), this.props.playing || this.pause()
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.callPlayer("setVolume", 100 * e)
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.callPlayer("setPlaybackRate", e)
                        }
                    }, {
                        key: "setLoop",
                        value: function(e) {
                            this.callPlayer("setLoop", e)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.callPlayer("getDuration")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.callPlayer("getCurrentTime")
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                width: "100%",
                                height: "100%",
                                display: this.props.display
                            };
                            return o.default.createElement("div", {
                                style: e
                            }, o.default.createElement("div", {
                                ref: this.ref
                            }))
                        }
                    }]) && y(t.prototype, r), n && y(t, n), l
                }(o.Component);
            t.default = k, P(k, "displayName", "YouTube"), P(k, "canPlay", i.canPlay.youtube)
        },
        86497: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(67294),
                o = r(38045),
                a = r(71776);

            function i(e) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== i(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                    }
                return r.default = e, t && t.set(e, r), r
            }
            var c = [{
                key: "youtube",
                name: "YouTube",
                canPlay: a.canPlay.youtube,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(60356))
                    }))
                }))
            }, {
                key: "soundcloud",
                name: "SoundCloud",
                canPlay: a.canPlay.soundcloud,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(72648))
                    }))
                }))
            }, {
                key: "vimeo",
                name: "Vimeo",
                canPlay: a.canPlay.vimeo,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(80868))
                    }))
                }))
            }, {
                key: "facebook",
                name: "Facebook",
                canPlay: a.canPlay.facebook,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(31972))
                    }))
                }))
            }, {
                key: "streamable",
                name: "Streamable",
                canPlay: a.canPlay.streamable,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(50993))
                    }))
                }))
            }, {
                key: "wistia",
                name: "Wistia",
                canPlay: a.canPlay.wistia,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(8018))
                    }))
                }))
            }, {
                key: "twitch",
                name: "Twitch",
                canPlay: a.canPlay.twitch,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(29482))
                    }))
                }))
            }, {
                key: "dailymotion",
                name: "DailyMotion",
                canPlay: a.canPlay.dailymotion,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(36807))
                    }))
                }))
            }, {
                key: "mixcloud",
                name: "Mixcloud",
                canPlay: a.canPlay.mixcloud,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(50143))
                    }))
                }))
            }, {
                key: "vidyard",
                name: "Vidyard",
                canPlay: a.canPlay.vidyard,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(36596))
                    }))
                }))
            }, {
                key: "kaltura",
                name: "Kaltura",
                canPlay: a.canPlay.kaltura,
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(73911))
                    }))
                }))
            }, {
                key: "file",
                name: "FilePlayer",
                canPlay: a.canPlay.file,
                canEnablePIP: function(e) {
                    return a.canPlay.file(e) && (document.pictureInPictureEnabled || (0, o.supportsWebKitPresentationMode)()) && !a.AUDIO_EXTENSIONS.test(e)
                },
                lazyPlayer: (0, n.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return l(r(14926))
                    }))
                }))
            }];
            t.default = c
        },
        85741: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultProps = t.propTypes = void 0;
            var n, o = (n = r(45697)) && n.__esModule ? n : {
                default: n
            };
            var a = o.default.string,
                i = o.default.bool,
                u = o.default.number,
                l = o.default.array,
                c = o.default.oneOfType,
                s = o.default.shape,
                f = o.default.object,
                p = o.default.func,
                y = o.default.node,
                d = {
                    url: c([a, l, f]),
                    playing: i,
                    loop: i,
                    controls: i,
                    volume: u,
                    muted: i,
                    playbackRate: u,
                    width: c([a, u]),
                    height: c([a, u]),
                    style: f,
                    progressInterval: u,
                    playsinline: i,
                    pip: i,
                    stopOnUnmount: i,
                    light: c([i, a]),
                    playIcon: y,
                    previewTabIndex: u,
                    fallback: y,
                    wrapper: c([a, p, s({
                        render: p.isRequired
                    })]),
                    config: s({
                        soundcloud: s({
                            options: f
                        }),
                        youtube: s({
                            playerVars: f,
                            embedOptions: f,
                            onUnstarted: p
                        }),
                        facebook: s({
                            appId: a,
                            version: a,
                            playerId: a,
                            attributes: f
                        }),
                        dailymotion: s({
                            params: f
                        }),
                        vimeo: s({
                            playerOptions: f
                        }),
                        file: s({
                            attributes: f,
                            tracks: l,
                            forceVideo: i,
                            forceAudio: i,
                            forceHLS: i,
                            forceDASH: i,
                            forceFLV: i,
                            hlsOptions: f,
                            hlsVersion: a,
                            dashVersion: a,
                            flvVersion: a
                        }),
                        wistia: s({
                            options: f,
                            playerId: a,
                            customControls: l
                        }),
                        mixcloud: s({
                            options: f
                        }),
                        twitch: s({
                            options: f,
                            playerId: a
                        }),
                        vidyard: s({
                            options: f
                        })
                    }),
                    onReady: p,
                    onStart: p,
                    onPlay: p,
                    onPause: p,
                    onBuffer: p,
                    onBufferEnd: p,
                    onEnded: p,
                    onError: p,
                    onDuration: p,
                    onSeek: p,
                    onProgress: p,
                    onClickPreview: p,
                    onEnablePIP: p,
                    onDisablePIP: p
                };
            t.propTypes = d;
            var h = function() {},
                b = {
                    playing: !1,
                    loop: !1,
                    controls: !1,
                    volume: null,
                    muted: !1,
                    playbackRate: 1,
                    width: "640px",
                    height: "360px",
                    style: {},
                    progressInterval: 1e3,
                    playsinline: !1,
                    pip: !1,
                    stopOnUnmount: !0,
                    light: !1,
                    fallback: null,
                    wrapper: "div",
                    previewTabIndex: 0,
                    config: {
                        soundcloud: {
                            options: {
                                visual: !0,
                                buying: !1,
                                liking: !1,
                                download: !1,
                                sharing: !1,
                                show_comments: !1,
                                show_playcount: !1
                            }
                        },
                        youtube: {
                            playerVars: {
                                playsinline: 1,
                                showinfo: 0,
                                rel: 0,
                                iv_load_policy: 3,
                                modestbranding: 1
                            },
                            embedOptions: {},
                            onUnstarted: h
                        },
                        facebook: {
                            appId: "1309697205772819",
                            version: "v3.3",
                            playerId: null,
                            attributes: {}
                        },
                        dailymotion: {
                            params: {
                                api: 1,
                                "endscreen-enable": !1
                            }
                        },
                        vimeo: {
                            playerOptions: {
                                autopause: !1,
                                byline: !1,
                                portrait: !1,
                                title: !1
                            }
                        },
                        file: {
                            attributes: {},
                            tracks: [],
                            forceVideo: !1,
                            forceAudio: !1,
                            forceHLS: !1,
                            forceDASH: !1,
                            forceFLV: !1,
                            hlsOptions: {},
                            hlsVersion: "0.14.16",
                            dashVersion: "3.1.3",
                            flvVersion: "1.5.0"
                        },
                        wistia: {
                            options: {},
                            playerId: null,
                            customControls: null
                        },
                        mixcloud: {
                            options: {
                                hide_cover: 1
                            }
                        },
                        twitch: {
                            options: {},
                            playerId: null
                        },
                        vidyard: {
                            options: {}
                        }
                    },
                    onReady: h,
                    onStart: h,
                    onPlay: h,
                    onPause: h,
                    onBuffer: h,
                    onBufferEnd: h,
                    onEnded: h,
                    onError: h,
                    onDuration: h,
                    onSeek: h,
                    onProgress: h,
                    onClickPreview: h,
                    onEnablePIP: h,
                    onDisablePIP: h
                };
            t.defaultProps = b
        },
        38045: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseStartTime = function(e) {
                return p(e, l)
            }, t.parseEndTime = function(e) {
                return p(e, c)
            }, t.randomString = function() {
                return Math.random().toString(36).substr(2, 5)
            }, t.queryString = function(e) {
                return Object.keys(e).map((function(t) {
                    return "".concat(t, "=").concat(e[t])
                })).join("&")
            }, t.getSDK = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                        return !0
                    },
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n.default,
                    i = y(t);
                if (i && o(i)) return Promise.resolve(i);
                return new Promise((function(n, o) {
                    if (d[e]) d[e].push({
                        resolve: n,
                        reject: o
                    });
                    else {
                        d[e] = [{
                            resolve: n,
                            reject: o
                        }];
                        var i = function(t) {
                            d[e].forEach((function(e) {
                                return e.resolve(t)
                            }))
                        };
                        if (r) {
                            var u = window[r];
                            window[r] = function() {
                                u && u(), i(y(t))
                            }
                        }
                        a(e, (function(n) {
                            n ? (d[e].forEach((function(e) {
                                return e.reject(n)
                            })), d[e] = null) : r || i(y(t))
                        }))
                    }
                }))
            }, t.getConfig = function(e, t) {
                return (0, o.default)(t.config, e.config)
            }, t.omit = function(e) {
                for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                for (var a = (t = []).concat.apply(t, n), i = {}, u = Object.keys(e), l = 0, c = u; l < c.length; l++) {
                    var s = c[l]; - 1 === a.indexOf(s) && (i[s] = e[s])
                }
                return i
            }, t.callPlayer = function(e) {
                var t;
                if (!this.player || !this.player[e]) {
                    var r = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c \u2013 ");
                    return this.player ? this.player[e] || (r += "The method was not available") : r += "The player was not available", console.warn(r, "font-weight: bold", ""), null
                }
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return (t = this.player)[e].apply(t, o)
            }, t.isMediaStream = function(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.MediaStream && e instanceof window.MediaStream
            }, t.isBlobUrl = function(e) {
                return /^blob:/.test(e)
            }, t.supportsWebKitPresentationMode = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video"),
                    t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" === typeof e.webkitSetPresentationMode && t
            };
            var n = a(r(49090)),
                o = a(r(9996));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var l = /[?&#](?:start|t)=([0-9hms]+)/,
                c = /[?&#]end=([0-9hms]+)/,
                s = /(\d+)(h|m|s)/g,
                f = /^\d+$/;

            function p(e, t) {
                if (!(e instanceof Array)) {
                    var r = e.match(t);
                    if (r) {
                        var n = r[1];
                        if (n.match(s)) return function(e) {
                            var t = 0,
                                r = s.exec(e);
                            for (; null !== r;) {
                                var n = i(r, 3),
                                    o = n[1],
                                    a = n[2];
                                "h" === a && (t += 60 * parseInt(o, 10) * 60), "m" === a && (t += 60 * parseInt(o, 10)), "s" === a && (t += parseInt(o, 10)), r = s.exec(e)
                            }
                            return t
                        }(n);
                        if (f.test(n)) return parseInt(n)
                    }
                }
            }

            function y(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            var d = {}
        }
    }
]);