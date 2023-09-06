/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.7.0
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(e) {
    "use strict";

    function t() {
        i = e.innerWidth || document.documentElement.clientWidth, a = e.innerHeight || document.documentElement.clientHeight
    }

    function n(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function() {
            n.call(e)
        })
    }

    function o(n) {
        e.requestAnimationFrame(function() {
            "scroll" !== n.type && t();
            for (var e = 0, o = g.length; o > e; e++) "scroll" !== n.type && (g[e].coverImage(), g[e].clipContainer()), g[e].onScroll()
        })
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), e.requestAnimationFrame || ! function() {
        for (var t = ["webkit", "moz"], n = 0; n < t.length && !e.requestAnimationFrame; ++n) {
            var o = t[n];
            e.requestAnimationFrame = e[o + "RequestAnimationFrame"], e.cancelAnimationFrame = e[o + "CancelAnimationFrame"] || e[o + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
            var i = 0;
            e.requestAnimationFrame = function(e) {
                var t = Date.now(),
                    n = Math.max(i + 16, t);
                return setTimeout(function() {
                    e(i = n)
                }, n - t)
            }, e.cancelAnimationFrame = clearTimeout
        }
    }();
    var i, a, r = function() {
            if (!e.getComputedStyle) return !1;
            var t, n = document.createElement("p"),
                o = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            (document.body || document.documentElement).insertBefore(n, null);
            for (var i in o) "undefined" != typeof n.style[i] && (n.style[i] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(o[i]));
            return (document.body || document.documentElement).removeChild(n), "undefined" != typeof t && t.length > 0 && "none" !== t
        }(),
        l = navigator.userAgent.toLowerCase().indexOf("android") > -1,
        s = /iPad|iPhone|iPod/.test(navigator.userAgent) && !e.MSStream,
        c = !!e.opera,
        m = /Edge\/\d+/.test(navigator.userAgent),
        p = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
        u = !!Function("/*@cc_on return document.documentMode===10@*/")(),
        d = document.all && !e.atob;
    t();
    var g = [],
        f = function() {
            function e(e, n) {
                var o, i = this;
                if (i.$item = e, i.defaults = {
                        type: "scroll",
                        speed: .5,
                        imgSrc: null,
                        imgWidth: null,
                        imgHeight: null,
                        enableTransform: !0,
                        elementInViewport: null,
                        zIndex: -100,
                        noAndroid: !1,
                        noIos: !0,
                        onScroll: null,
                        onInit: null,
                        onDestroy: null,
                        onCoverImage: null
                    }, o = JSON.parse(i.$item.getAttribute("data-jarallax") || "{}"), i.options = i.extend({}, i.defaults, o, n), !(l && i.options.noAndroid || s && i.options.noIos)) {
                    i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed)));
                    var a = i.options.elementInViewport;
                    a && "object" == typeof a && "undefined" != typeof a.length && (a = a[0]), !a instanceof Element && (a = null), i.options.elementInViewport = a, i.instanceID = t++, i.image = {
                        src: i.options.imgSrc || null,
                        $container: null,
                        $item: null,
                        width: i.options.imgWidth || null,
                        height: i.options.imgHeight || null,
                        useImgTag: s || l || c || p || u || m
                    }, i.initImg() && i.init()
                }
            }
            var t = 0;
            return e
        }();
    f.prototype.css = function(t, n) {
        if ("string" == typeof n) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(n) : t.style[n];
        n.transform && (n.WebkitTransform = n.MozTransform = n.transform);
        for (var o in n) t.style[o] = n[o];
        return t
    }, f.prototype.extend = function(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
            if (arguments[t])
                for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
        return e
    }, f.prototype.initImg = function() {
        var e = this;
        return null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)
    }, f.prototype.init = function() {
        function e() {
            t.coverImage(), t.clipContainer(), t.onScroll(!0), t.$item.setAttribute("data-jarallax-original-styles", t.$item.getAttribute("style")), t.options.onInit && t.options.onInit.call(t), setTimeout(function() {
                t.$item && t.css(t.$item, {
                    "background-image": "none",
                    "background-attachment": "scroll",
                    "background-size": "auto"
                })
            }, 0)
        }
        var t = this,
            n = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none"
            },
            o = {
                position: "fixed"
            };
        t.image.$container = document.createElement("div"), t.css(t.image.$container, n), t.css(t.image.$container, {
            visibility: "hidden",
            "z-index": t.options.zIndex
        }), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag && r && t.options.enableTransform ? (t.image.$item = document.createElement("img"), t.image.$item.setAttribute("src", t.image.src), o = t.extend({
            "max-width": "none"
        }, n, o)) : (t.image.$item = document.createElement("div"), o = t.extend({
            "background-position": "50% 50%",
            "background-size": "100% auto",
            "background-repeat": "no-repeat no-repeat",
            "background-image": 'url("' + t.image.src + '")'
        }, n, o)), d && (o.backgroundAttachment = "fixed"), t.parentWithTransform = 0;
        for (var i = t.$item; null !== i && i !== document && 0 === t.parentWithTransform;) {
            var a = t.css(i, "-webkit-transform") || t.css(i, "-moz-transform") || t.css(i, "transform");
            a && "none" !== a && (t.parentWithTransform = 1, t.css(t.image.$container, {
                transform: "translateX(0) translateY(0)"
            })), i = i.parentNode
        }
        t.css(t.image.$item, o), t.image.$container.appendChild(t.image.$item), t.image.width && t.image.height ? e() : t.getImageSize(t.image.src, function(n, o) {
            t.image.width = n, t.image.height = o, e()
        }), g.push(t)
    }, f.prototype.destroy = function() {
        for (var e = this, t = 0, n = g.length; n > t; t++)
            if (g[t].instanceID === e.instanceID) {
                g.splice(t, 1);
                break
            }
        var o = e.$item.getAttribute("data-jarallax-original-styles");
        e.$item.removeAttribute("data-jarallax-original-styles"), "null" === o ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", o), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
        for (var i in e) delete e[i]
    }, f.prototype.getImageSize = function(e, t) {
        if (e && t) {
            var n = new Image;
            n.onload = function() {
                t(n.width, n.height)
            }, n.src = e
        }
    }, f.prototype.clipContainer = function() {
        if (!d) {
            var e = this,
                t = e.image.$container.getBoundingClientRect(),
                n = t.width,
                o = t.height;
            if (!e.$clipStyles) {
                e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID);
                var i = document.head || document.getElementsByTagName("head")[0];
                i.appendChild(e.$clipStyles)
            }
            var a = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + n + "px " + o + "px 0);", "   clip: rect(0, " + n + "px, " + o + "px, 0);", "}"].join("\n");
            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a
        }
    }, f.prototype.coverImage = function() {
        var e = this;
        if (e.image.width && e.image.height) {
            var t = e.image.$container.getBoundingClientRect(),
                n = t.width,
                o = t.height,
                i = t.left,
                l = e.image.width,
                s = e.image.height,
                c = e.options.speed,
                m = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                p = 0,
                u = 0,
                d = o,
                g = 0,
                f = 0;
            m && (p = c * (o + a) / 2, (0 > c || c > 1) && (p = c * Math.max(o, a) / 2), 0 > c || c > 1 ? d = Math.max(o, a) + 2 * Math.abs(p) : d += Math.abs(a - o) * (1 - c)), u = d * l / s, n > u && (u = n, d = u * s / l), e.bgPosVerticalCenter = 0, !(m && a > d) || r && e.options.enableTransform || (e.bgPosVerticalCenter = (a - d) / 2, d = a), m ? (g = i + (n - u) / 2, f = (a - d) / 2) : (g = (n - u) / 2, f = (o - d) / 2), e.parentWithTransform && (g -= i), e.parallaxScrollDistance = p, e.css(e.image.$item, {
                width: u + "px",
                height: d + "px",
                marginLeft: g + "px",
                marginTop: f + "px"
            }), e.options.onCoverImage && e.options.onCoverImage.call(e)
        }
    }, f.prototype.isVisible = function() {
        return this.isElementInViewport || !1
    }, f.prototype.onScroll = function(e) {
        var t = this;
        if (t.image.width && t.image.height) {
            var n = t.$item.getBoundingClientRect(),
                o = n.top,
                l = n.height,
                s = {
                    position: "absolute",
                    visibility: "visible",
                    backgroundPosition: "50% 50%"
                },
                c = n;
            if (t.options.elementInViewport) var c = t.options.elementInViewport.getBoundingClientRect();
            if (t.isElementInViewport = c.bottom >= 0 && c.right >= 0 && c.top <= a && c.left <= i, e ? 1 : t.isElementInViewport) {
                var m = Math.max(0, o),
                    p = Math.max(0, l + o),
                    u = Math.max(0, -o),
                    g = Math.max(0, o + l - a),
                    f = Math.max(0, l - (o + l - a)),
                    h = Math.max(0, -o + a - l),
                    y = 1 - 2 * (a - o) / (a + l),
                    v = 1;
                if (a > l ? v = 1 - (u || g) / l : a >= p ? v = p / a : a >= f && (v = f / a), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "translate3d(0, 0, 0)", s.opacity = v), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                    var x = 1;
                    t.options.speed < 0 ? x -= t.options.speed * v : x += t.options.speed * (1 - v), s.transform = "scale(" + x + ") translate3d(0, 0, 0)"
                }
                if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                    var b = t.parallaxScrollDistance * y;
                    r && t.options.enableTransform ? (t.parentWithTransform && (b -= o), s.transform = "translate3d(0, " + b + "px, 0)") : (t.bgPosVerticalCenter && (b += t.bgPosVerticalCenter), s.backgroundPosition = "50% " + b + "px"), s.position = d ? "absolute" : "fixed"
                }
                t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
                    section: n,
                    beforeTop: m,
                    beforeTopEnd: p,
                    afterTop: u,
                    beforeBottom: g,
                    beforeBottomEnd: f,
                    afterBottom: h,
                    visiblePercent: v,
                    fromViewportCenter: y
                })
            }
        }
    }, n(e, "scroll", o), n(e, "resize", o), n(e, "orientationchange", o), n(e, "load", o);
    var h = function(e) {
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        var t, n = arguments[1],
            o = Array.prototype.slice.call(arguments, 2),
            i = e.length,
            a = 0;
        for (a; i > a; a++)
            if ("object" == typeof n || "undefined" == typeof n ? e[a].jarallax || (e[a].jarallax = new f(e[a], n)) : e[a].jarallax && (t = e[a].jarallax[n].apply(e[a].jarallax, o)), "undefined" != typeof t) return t;
        return e
    };
    h.constructor = f;
    var y = e.jarallax;
    if (e.jarallax = h, e.jarallax.noConflict = function() {
            return e.jarallax = y, this
        }, "undefined" != typeof jQuery) {
        var v = function() {
            var t = arguments || [];
            Array.prototype.unshift.call(t, this);
            var n = h.apply(e, t);
            return "object" != typeof n ? n : this
        };
        v.constructor = f;
        var x = jQuery.fn.jarallax;
        jQuery.fn.jarallax = v, jQuery.fn.jarallax.noConflict = function() {
            return jQuery.fn.jarallax = x, this
        }
    }
    n(e, "DOMContentLoaded", function() {
        h(document.querySelectorAll("[data-jarallax]"))
    })
}(window);

//scrollreveal.js v3.3.1
! function() {
    "use strict";

    function e(n) {
        return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.1", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), t(O.defaults), O.store = {
            elements: {},
            containers: []
        }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (O.tools.isNode(e.container)) return e.container
        }
        return O.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function i() {
        return ++O.uid
    }

    function o(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config,
            i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = {
            target: e,
            config: t,
            interval: n
        };
        O.history.push(i)
    }

    function f() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
            O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0)
        }
        return O
    }

    function d() {
        T(y)
    }

    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function(o) {
            i = O.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e
        })
    }

    function y() {
        var e, t;
        u(), O.tools.forOwn(O.store.elements, function(n) {
            t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1)
        })
    }

    function m(e, t) {
        var n = 0,
            i = 0,
            o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
            started: new Date
        }, e.sequence.timer.clock = window.setTimeout(function() {
            o.blocked = !1, e.sequence.timer = null, d()
        }, Math.abs(o.interval) + i - n)
    }

    function p(e, t, n) {
        var i = 0,
            o = 0,
            r = "after";
        switch (e) {
            case "reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case "reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
            started: new Date
        }, t.timer.clock = window.setTimeout(function() {
            t.config[r](t.domEl), t.timer = null
        }, o - i)
    }

    function g(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return q(e) && !e.revealing && !e.disabled
    }

    function w(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen
    }

    function v(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return !t.active && e.config.reset && e.revealing && !e.disabled
        }
        return !q(e) && e.config.reset && e.revealing && !e.disabled
    }

    function b(e) {
        return {
            width: e.clientWidth,
            height: e.clientHeight
        }
    }

    function h(e) {
        if (e && e !== window.document.documentElement) {
            var t = x(e);
            return {
                x: e.scrollLeft + t.left,
                y: e.scrollTop + t.top
            }
        }
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }

    function x(e) {
        var t = 0,
            n = 0,
            i = e.offsetHeight,
            o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return {
            top: t,
            left: n,
            height: i,
            width: o
        }
    }

    function q(e) {
        function t() {
            var t = c + a * s,
                n = f + l * s,
                i = d - a * s,
                y = u - l * s,
                m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left,
                g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n > p && y < w
        }

        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position
        }
        var i = x(e.domEl),
            o = b(e.config.container),
            r = h(e.config.container),
            s = e.config.viewFactor,
            a = i.height,
            l = i.width,
            c = i.top,
            f = i.left,
            d = c + a,
            u = f + l;
        return t() || n()
    }

    function E() {}
    var O, T;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        beforeReveal: function(e) {},
        afterReveal: function(e) {},
        beforeReset: function(e) {},
        afterReset: function(e) {}
    }, e.prototype.isSupported = function() {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function(e, s, a, d) {
        var u, y, m, p, g, w;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = {
            id: w,
            interval: a,
            elemIds: [],
            active: !1
        });
        for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = {
            id: i(),
            domEl: y[v],
            seen: !1,
            revealing: !1
        }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = {
            id: g.id,
            index: g.elemIds.length
        }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
        return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O
    }, e.prototype.sync = function() {
        if (O.history.length && O.isSupported()) {
            for (var e = 0; e < O.history.length; e++) {
                var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0)
            }
            f()
        }
        return O
    }, E.prototype.isObject = function(e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, E.prototype.isNode = function(e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, E.prototype.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e),
            n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, E.prototype.forOwn = function(e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, E.prototype.extend = function(e, t) {
        return this.forOwn(t, function(n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, E.prototype.extendClone = function(e, t) {
        return this.extend(this.extend({}, e), t)
    }, E.prototype.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, T = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}();

/*!
Waypoints - 4.0.0
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();

/*!
 * jquery.counterup.js 1.0 required waypoins changed last fucntion
 */
! function(t) {
    "use strict";
    t.fn.counterUp = function(e) {
        var n = t.extend({
            time: 400,
            delay: 10
        }, e);
        return this.each(function() {
            var e = t(this),
                u = n,
                a = function() {
                    var t = [],
                        n = u.time / u.delay,
                        a = e.text(),
                        r = /[0-9]+,[0-9]+/.test(a);
                    a = a.replace(/,/g, "");
                    for (var o = (/^[0-9]+$/.test(a), /^[0-9]+\.[0-9]+$/.test(a)), c = o ? (a.split(".")[1] || []).length : 0, s = n; s >= 1; s--) {
                        var d = parseInt(a / n * s);
                        if (o && (d = parseFloat(a / n * s).toFixed(c)), r)
                            for (;
                                /(\d+)(\d{3})/.test(d.toString());) d = d.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        t.unshift(d)
                    }
                    e.data("counterup-nums", t), e.text("0");
                    var i = function() {
                        e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), u.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                    };
                    e.data("counterup-func", i), setTimeout(e.data("counterup-func"), u.delay)
                };
            e.waypoint({
                handler: function() {
                    a(), this.destroy()
                },
                offset: "100%"
            })
        })
    }
}(jQuery);


/*!
 * Name    : Video Worker (wrapper for Youtube, Vimeo and Local videos)
 * Version : 1.2.1
 * Author  : _nK https://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(e) {
    "use strict";

    function t(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
            if (arguments[t])
                for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
        return e
    }

    function i() {
        this._done = [], this._fail = []
    }

    function o(e, t, i) {
        e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, function() {
            i.call(e)
        })
    }
    i.prototype = {
        execute: function(e, t) {
            var i = e.length;
            for (t = Array.prototype.slice.call(t); i--;) e[i].apply(null, t)
        },
        resolve: function() {
            this.execute(this._done, arguments)
        },
        reject: function() {
            this.execute(this._fail, arguments)
        },
        done: function(e) {
            this._done.push(e)
        },
        fail: function(e) {
            this._fail.push(e)
        }
    };
    var a = function() {
        function e(e, o) {
            var a = this;
            a.url = e, a.options_default = {
                autoplay: 1,
                loop: 1,
                mute: 0,
                controls: 0,
                startTime: 0,
                endTime: 0
            }, a.options = t({}, a.options_default, o), a.videoID = a.parseURL(e), a.videoID && (a.ID = i++, a.loadAPI(), a.init())
        }
        var i = 0;
        return e
    }();
    a.prototype.parseURL = function(e) {
        function t(e) {
            var t = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
                i = e.match(t);
            return !(!i || 11 !== i[1].length) && i[1]
        }

        function i(e) {
            var t = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                i = e.match(t);
            return !(!i || !i[3]) && i[3]
        }

        function o(e) {
            for (var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), i = {}, o = 0, a = 0; a < t.length; a++) {
                var n = t[a].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                n && n[1] && n[2] && (i["ogv" === n[1] ? "ogg" : n[1]] = n[2], o = 1)
            }
            return !!o && i
        }
        var a = t(e),
            n = i(e),
            r = o(e);
        return a ? (this.type = "youtube", a) : n ? (this.type = "vimeo", n) : !!r && (this.type = "local", r)
    }, a.prototype.isValid = function() {
        return !!this.videoID
    }, a.prototype.on = function(e, t) {
        this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
    }, a.prototype.off = function(e, t) {
        if (this.userEventsList && this.userEventsList[e])
            if (t)
                for (var i = 0; i < this.userEventsList[e].length; i++) this.userEventsList[e][i] === t && (this.userEventsList[e][i] = !1);
            else delete this.userEventsList[e]
    }, a.prototype.fire = function(e) {
        var t = [].slice.call(arguments, 1);
        if (this.userEventsList && "undefined" != typeof this.userEventsList[e])
            for (var i in this.userEventsList[e]) this.userEventsList[e][i] && this.userEventsList[e][i].apply(this, t)
    };
    var n = 0;
    a.prototype.play = function(e) {
        var t = this;
        t.player && ("youtube" === t.type && t.player.playVideo && ("undefined" != typeof e && t.player.seekTo(e || 0), t.player.playVideo()), "vimeo" !== t.type || n || ("undefined" != typeof e ? (n = 1, t.player.setCurrentTime(e || 0).then(function() {
            t.player.play(), n = 0
        })) : t.player.play()), "local" === t.type && ("undefined" != typeof e && (t.player.currentTime = e), t.player.play()))
    }, a.prototype.pause = function() {
        this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
    }, a.prototype.getImageURL = function(e) {
        var t = this;
        if (t.videoImage) return void e(t.videoImage);
        if ("youtube" === t.type) {
            var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                o = 0,
                a = new Image;
            a.onload = function() {
                120 !== (this.naturalWidth || this.width) || o === i.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg", e(t.videoImage)) : (o++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg")
            }, a.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[o] + ".jpg"
        }
        if ("vimeo" === t.type) {
            var n = new XMLHttpRequest;
            n.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), n.onreadystatechange = function() {
                if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                    var i = JSON.parse(this.responseText);
                    t.videoImage = i[0].thumbnail_large, e(t.videoImage)
                }
            }, n.send(), n = null
        }
    }, a.prototype.getIframe = function(t) {
        var i = this;
        return i.$iframe ? void t(i.$iframe) : void i.onAPIready(function() {
            function a(e, t, i) {
                var o = document.createElement("source");
                o.src = t, o.type = i, e.appendChild(o)
            }
            var n;
            if (i.$iframe || (n = document.createElement("div"), n.style.display = "none"), "youtube" === i.type) {
                i.playerOptions = {}, i.playerOptions.videoId = i.videoID, i.playerOptions.width = e.innerWidth || document.documentElement.clientWidth, i.playerOptions.playerVars = {
                    autohide: 1,
                    rel: 0,
                    autoplay: 0
                }, i.options.controls || (i.playerOptions.playerVars.iv_load_policy = 3, i.playerOptions.playerVars.modestbranding = 1, i.playerOptions.playerVars.controls = 0, i.playerOptions.playerVars.showinfo = 0, i.playerOptions.playerVars.disablekb = 1);
                var r, p;
                i.playerOptions.events = {
                    onReady: function(e) {
                        i.options.mute && e.target.mute(), i.options.autoplay && i.play(i.options.startTime), i.fire("ready", e)
                    },
                    onStateChange: function(e) {
                        i.options.loop && e.data === YT.PlayerState.ENDED && i.play(i.options.startTime), r || e.data !== YT.PlayerState.PLAYING || (r = 1, i.fire("started", e)), e.data === YT.PlayerState.PLAYING && i.fire("play", e), e.data === YT.PlayerState.PAUSED && i.fire("pause", e), e.data === YT.PlayerState.ENDED && i.fire("end", e), i.options.endTime && (e.data === YT.PlayerState.PLAYING ? p = setInterval(function() {
                            i.options.endTime && i.player.getCurrentTime() >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                        }, 150) : clearInterval(p))
                    }
                };
                var s = !i.$iframe;
                if (s) {
                    var l = document.createElement("div");
                    l.setAttribute("id", i.playerID), n.appendChild(l), document.body.appendChild(n)
                }
                i.player = i.player || new e.YT.Player(i.playerID, i.playerOptions), s && (i.$iframe = document.getElementById(i.playerID))
            }
            if ("vimeo" === i.type) {
                i.playerOptions = "", i.playerOptions += "player_id=" + i.playerID, i.playerOptions += "&autopause=0", i.options.controls || (i.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), i.playerOptions += "&autoplay=0", i.playerOptions += "&loop=" + (i.options.loop ? 1 : 0), i.$iframe || (i.$iframe = document.createElement("iframe"), i.$iframe.setAttribute("id", i.playerID), i.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + i.videoID + "?" + i.playerOptions), i.$iframe.setAttribute("frameborder", "0"), n.appendChild(i.$iframe), document.body.appendChild(n)), i.player = i.player || new Vimeo.Player(i.$iframe), i.player.setVolume(i.options.mute ? 0 : 100), i.options.autoplay && i.play(i.options.startTime);
                var d;
                i.player.on("timeupdate", function(e) {
                    d || i.fire("started", e), d = 1, i.options.endTime && i.options.endTime && e.seconds >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                }), i.player.on("play", function(e) {
                    i.fire("play", e)
                }), i.player.on("pause", function(e) {
                    i.fire("pause", e)
                }), i.player.on("ended", function(e) {
                    i.fire("end", e)
                }), i.player.on("loaded", function(e) {
                    i.fire("ready", e)
                })
            }
            if ("local" === i.type) {
                if (!i.$iframe) {
                    i.$iframe = document.createElement("video"), i.options.mute && i.$iframe.setAttribute("mute", "on"), i.options.loop && i.$iframe.setAttribute("loop", "on"), i.$iframe.setAttribute("id", i.playerID), n.appendChild(i.$iframe), document.body.appendChild(n);
                    for (var u in i.videoID) a(i.$iframe, i.videoID[u], "video/" + u)
                }
                i.player = i.player || i.$iframe;
                var y;
                o(i.player, "playing", function(e) {
                    y || i.fire("started", e), y = 1
                }), o(i.player, "timeupdate", function() {
                    i.options.endTime && i.options.endTime && this.currentTime >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                }), o(i.player, "play", function(e) {
                    i.fire("play", e)
                }), o(i.player, "pause", function(e) {
                    i.fire("pause", e)
                }), o(i.player, "ended", function(e) {
                    i.fire("end", e)
                }), o(i.player, "loadedmetadata", function() {
                    i.fire("ready"), i.options.autoplay && i.play(i.options.startTime)
                })
            }
            t(i.$iframe)
        })
    }, a.prototype.init = function() {
        var e = this;
        e.playerID = "VideoWorker-" + e.ID
    };
    var r = 0,
        p = 0;
    a.prototype.loadAPI = function() {
        var t = this;
        if (!r || !p) {
            var i = "";
            if ("youtube" !== t.type || r || (r = 1, i = "//www.youtube.com/iframe_api"), "vimeo" !== t.type || p || (p = 1, i = "//player.vimeo.com/api/player.js"), i) {
                "file://" === e.location.origin && (i = "http:" + i);
                var o = document.createElement("script"),
                    a = document.getElementsByTagName("head")[0];
                o.src = i, a.appendChild(o), a = null, o = null
            }
        }
    };
    var s = 0,
        l = 0,
        d = new i,
        u = new i;
    a.prototype.onAPIready = function(t) {
        var i = this;
        if ("youtube" === i.type && ("undefined" != typeof YT && 0 !== YT.loaded || s ? "object" == typeof YT && 1 === YT.loaded ? t() : d.done(function() {
                t()
            }) : (s = 1, e.onYouTubeIframeAPIReady = function() {
                e.onYouTubeIframeAPIReady = null, d.resolve("done"), t()
            })), "vimeo" === i.type)
            if ("undefined" != typeof Vimeo || l) "undefined" != typeof Vimeo ? t() : u.done(function() {
                t()
            });
            else {
                l = 1;
                var o = setInterval(function() {
                    "undefined" != typeof Vimeo && (clearInterval(o), u.resolve("done"), t())
                }, 20)
            }
        "local" === i.type && t()
    }, e.VideoWorker = a
}(window),
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.0
 * Author  : _nK http://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */
function() {
    "use strict";
    if ("undefined" != typeof jarallax) {
        var e = jarallax.constructor,
            t = e.prototype.init;
        e.prototype.init = function() {
            var e = this;
            t.apply(e), e.video && e.video.getIframe(function(t) {
                var i = t.parentNode;
                e.css(t, {
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    visibility: "visible",
                    zIndex: -1
                }), e.$video = t, e.image.$container.appendChild(t), i.parentNode.removeChild(i)
            })
        };
        var i = e.prototype.coverImage;
        e.prototype.coverImage = function() {
            var e = this;
            i.apply(e), e.video && "IFRAME" === e.image.$item.nodeName && e.css(e.image.$item, {
                height: e.image.$item.getBoundingClientRect().height + 400 + "px",
                marginTop: -200 + parseFloat(e.css(e.image.$item, "margin-top")) + "px"
            })
        };
        var o = e.prototype.initImg;
        e.prototype.initImg = function() {
            var e = this;
            if (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || !1), e.options.videoSrc) {
                var t = new VideoWorker(e.options.videoSrc, {
                    startTime: e.options.videoStartTime || 0,
                    endTime: e.options.videoEndTime || 0
                });
                if (t.isValid() && (e.image.useImgTag = !0, t.on("ready", function() {
                        var i = e.onScroll;
                        e.onScroll = function() {
                            i.apply(e), e.isVisible() ? t.play() : t.pause()
                        }
                    }), t.on("started", function() {
                        e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.options.imgWidth = e.image.width || 1280, e.image.height = e.options.imgHeight = e.image.height || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                    }), e.video = t, "local" !== t.type && t.getImageURL(function(t) {
                        e.image.src = t, e.init()
                    })), "local" !== t.type) return !1
            }
            return o.apply(e)
        };
        var a = e.prototype.destroy;
        e.prototype.destroy = function() {
            var e = this;
            a.apply(e)
        }
    }
}();


/*********************************************************************
 *  #### Twitter Post Fetcher v15.0.1 ####
 *  Coded by Jason Mayes 2015. A present to all the developers out there.
 *  www.jasonmayes.com
 *  Please keep this disclaimer with my code if you use it. Thanks. :-)
 *  Got feedback or questions, ask here:
 *  http://www.jasonmayes.com/projects/twitterApi/
 *  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
 *  Updates will be posted to this site.
 *********************************************************************/
(function(C, p) {
    "function" === typeof define && define.amd ? define([], p) : "object" === typeof exports ? module.exports = p() : p()
})(this, function() {
    function C(a) {
        if (null === r) {
            for (var g = a.length, c = 0, k = document.getElementById(D), f = "<ul>"; c < g;) f += "<li>" + a[c] + "</li>", c++;
            k.innerHTML = f + "</ul>"
        } else r(a)
    }

    function p(a) {
        return a.replace(/<b[^>]*>(.*?)<\/b>/gi, function(a, c) {
            return c
        }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "")
    }

    function E(a) {
        a = a.getElementsByTagName("a");
        for (var g = a.length - 1; 0 <= g; g--) a[g].setAttribute("target", "_blank")
    }

    function l(a, g) {
        for (var c = [], k = new RegExp("(^| )" + g + "( |$)"), f = a.getElementsByTagName("*"), h = 0, b = f.length; h < b; h++) k.test(f[h].className) && c.push(f[h]);
        return c
    }

    function F(a) {
        if (void 0 !== a && 0 <= a.innerHTML.indexOf("data-srcset")) return a = a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0], decodeURIComponent(a).split('"')[1]
    }
    var D = "",
        g = 20,
        G = !0,
        v = [],
        x = !1,
        y = !0,
        w = !0,
        z = null,
        A = !0,
        B = !0,
        r = null,
        H = !0,
        I = !1,
        t = !0,
        J = !0,
        K = !1,
        m = null,
        L = {
            fetch: function(a) {
                void 0 ===
                    a.maxTweets && (a.maxTweets = 20);
                void 0 === a.enableLinks && (a.enableLinks = !0);
                void 0 === a.showUser && (a.showUser = !0);
                void 0 === a.showTime && (a.showTime = !0);
                void 0 === a.dateFunction && (a.dateFunction = "default");
                void 0 === a.showRetweet && (a.showRetweet = !0);
                void 0 === a.customCallback && (a.customCallback = null);
                void 0 === a.showInteraction && (a.showInteraction = !0);
                void 0 === a.showImages && (a.showImages = !1);
                void 0 === a.linksInNewWindow && (a.linksInNewWindow = !0);
                void 0 === a.showPermalinks && (a.showPermalinks = !0);
                void 0 === a.dataOnly &&
                    (a.dataOnly = !1);
                if (x) v.push(a);
                else {
                    x = !0;
                    D = a.domId;
                    g = a.maxTweets;
                    G = a.enableLinks;
                    w = a.showUser;
                    y = a.showTime;
                    B = a.showRetweet;
                    z = a.dateFunction;
                    r = a.customCallback;
                    H = a.showInteraction;
                    I = a.showImages;
                    t = a.linksInNewWindow;
                    J = a.showPermalinks;
                    K = a.dataOnly;
                    var l = document.getElementsByTagName("head")[0];
                    null !== m && l.removeChild(m);
                    m = document.createElement("script");
                    m.type = "text/javascript";
                    m.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + a.id + "?&lang=" + (a.lang || "en") + "&callback=twitterFetcher.callback&suppress_response_codes=true&rnd=" +
                        Math.random();
                    l.appendChild(m)
                }
            },
            callback: function(a) {
                function m(a) {
                    var b = a.getElementsByTagName("img")[0];
                    b.src = b.getAttribute("data-src-2x");
                    return a
                }
                var c = document.createElement("div");
                c.innerHTML = a.body;
                "undefined" === typeof c.getElementsByClassName && (A = !1);
                a = [];
                var k = [],
                    f = [],
                    h = [],
                    b = [],
                    q = [],
                    n = [],
                    e = 0;
                if (A)
                    for (c = c.getElementsByClassName("timeline-Tweet"); e < c.length;) {
                        0 < c[e].getElementsByClassName("timeline-Tweet-retweetCredit").length ? b.push(!0) : b.push(!1);
                        if (!b[e] || b[e] && B) a.push(c[e].getElementsByClassName("timeline-Tweet-text")[0]),
                            q.push(c[e].getAttribute("data-tweet-id")), k.push(m(c[e].getElementsByClassName("timeline-Tweet-author")[0])), f.push(c[e].getElementsByClassName("dt-updated")[0]), n.push(c[e].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== c[e].getElementsByClassName("timeline-Tweet-media")[0] ? h.push(c[e].getElementsByClassName("timeline-Tweet-media")[0]) : h.push(void 0);
                        e++
                    } else
                        for (c = l(c, "timeline-Tweet"); e < c.length;) {
                            0 < l(c[e], "timeline-Tweet-retweetCredit").length ? b.push(!0) : b.push(!1);
                            if (!b[e] ||
                                b[e] && B) a.push(l(c[e], "timeline-Tweet-text")[0]), q.push(c[e].getAttribute("data-tweet-id")), k.push(m(l(c[e], "timeline-Tweet-author")[0])), f.push(l(c[e], "dt-updated")[0]), n.push(l(c[e], "timeline-Tweet-timestamp")[0]), void 0 !== l(c[e], "timeline-Tweet-media")[0] ? h.push(l(c[e], "timeline-Tweet-media")[0]) : h.push(void 0);
                            e++
                        }
                a.length > g && (a.splice(g, a.length - g), k.splice(g, k.length - g), f.splice(g, f.length - g), b.splice(g, b.length - g), h.splice(g, h.length - g), n.splice(g, n.length - g));
                var c = [],
                    e = a.length,
                    d = 0;
                if (K)
                    for (; d <
                        e;) c.push({
                        tweet: a[d].innerHTML,
                        author: k[d].innerHTML,
                        time: f[d].textContent,
                        image: F(h[d]),
                        rt: b[d],
                        tid: q[d],
                        permalinkURL: void 0 === n[d] ? "" : n[d].href
                    }), d++;
                else
                    for (; d < e;) {
                        if ("string" !== typeof z) {
                            var b = f[d].getAttribute("datetime"),
                                u = new Date(f[d].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                                b = z(u, b);
                            f[d].setAttribute("aria-label", b);
                            if (a[d].textContent)
                                if (A) f[d].textContent = b;
                                else {
                                    var u = document.createElement("p"),
                                        r = document.createTextNode(b);
                                    u.appendChild(r);
                                    u.setAttribute("aria-label",
                                        b);
                                    f[d] = u
                                }
                            else f[d].textContent = b
                        }
                        b = "";
                        G ? (t && (E(a[d]), w && E(k[d])), w && (b += '<div class="user">' + p(k[d].innerHTML) + "</div>"), b += '<p class="tweet">' + p(a[d].innerHTML) + "</p>", y && (b = J ? b + ('<p class="timePosted"><a href="' + n[d] + '">' + f[d].getAttribute("aria-label") + "</a></p>") : b + ('<p class="timePosted">' + f[d].getAttribute("aria-label") + "</p>"))) : (w && (b += '<p class="user">' + k[d].textContent + "</p>"), b += '<p class="tweet">' + a[d].textContent + "</p>", y && (b += '<p class="timePosted">' + f[d].textContent + "</p>"));
                        H && (b +=
                            '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + q[d] + '" class="twitter_reply_icon"' + (t ? ' target="_blank">' : ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + q[d] + '" class="twitter_retweet_icon"' + (t ? ' target="_blank">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + q[d] + '" class="twitter_fav_icon"' + (t ? ' target="_blank">' : ">") + "Favorite</a></p>");
                        I && void 0 !== h[d] && (b += '<div class="media"><img src="' + F(h[d]) + '" alt="Image from tweet" /></div>');
                        c.push(b);
                        d++
                    }
                C(c);
                x = !1;
                0 < v.length && (L.fetch(v[0]), v.splice(0, 1))
            }
        };
    return window.twitterFetcher = L
});


// Contact form
;
(function($) {

    $(document).ready(function() {

        $("#submit-message").on('click', function() {

            var btn = $(this);

            var user_name = $('input[name=name]').val();
            var user_email = $('input[name=email]').val();
            var user_company = $('input[name=company]').val();
            var user_message = $('textarea[name=message]').val();

            var proceed = true;
            if (user_name == "") {
                $('input[name=name]').css('border-color', '#e41919');
                proceed = false;
            }
            if (user_email == "") {
                $('input[name=email]').css('border-color', '#e41919');
                proceed = false;
            }

            if (user_message == "") {
                $('textarea[name=message]').css('border-color', '#e41919');
                proceed = false;
            }

            if (proceed) {
                post_data = {
                    'userName': user_name,
                    'userCompany': user_company,
                    'userEmail': user_email,
                    'userMessage': user_message
                };

                var btnText = btn.html();
                if (!btn.hasClass('ti-reload'))
                    btn.prepend('<i class="ti-reload"></i> ');

                $.post('contact_me.php', post_data, function(response) {

                    if (response.type == 'error') {
                        notifyCalback(response.text, 3000, 'notify-error');
                    } else {
                        notifyCalback(response.text, 5000, 'notify-success');
                        $('#contact-form input').val('');
                        $('#contact-form textarea').val('');
                    }

                    btn.html(btnText);
                }, 'json');

            }

            return false;
        });

        $("#contact-form input, #contact-form textarea").keyup(function() {
            $("#contact-form input, #contact-form textarea").css('border-color', '');
        });

    });
})(jQuery);

//notify
function notifyCalback(msg, time, className) {

    var time = typeof time !== 'undefined' ? time : 4000;
    var className = typeof className !== 'undefined' ? className : false;

    $('#notify span.notify-close').on('click', function() {
        $('#notify').fadeOut();
        $('#notify').removeClass('notify-open');
        if (className) {
            $('#notify').removeClass(className);
        }
    });

    $('#notify > .notify-inner').html(msg);
    $('#notify').fadeIn();
    $('#notify').addClass('notify-open');

    if (className) {
        $('#notify').addClass(className);
    }

    if (time) {
        setTimeout(function() {
            $('#notify').fadeOut();
            $('#notify').removeClass('notify-open');
            if (className) {
                $('#notify').removeClass(className);
            }
        }, 4000);
    }

}