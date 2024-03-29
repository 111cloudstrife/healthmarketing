function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function r(e) {
        var t = e.length,
            r = oe.type(e);
        return "function" === r || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, r) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== r
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== r
        });
        if ("string" == typeof t) {
            if (pe.test(t)) return oe.filter(t, e, r);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== r
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = Te[e] = {};
        return oe.each(e.match(we) || [], function(e, r) {
            t[r] = !0
        }), t
    }

    function a() {
        ye.addEventListener ? (ye.removeEventListener("DOMContentLoaded", l, !1), e.removeEventListener("load", l, !1)) : (ye.detachEvent("onreadystatechange", l), e.detachEvent("onload", l))
    }

    function l() {
        (ye.addEventListener || "load" === event.type || "complete" === ye.readyState) && (a(), oe.ready())
    }

    function s(e, t, r) {
        if (void 0 === r && 1 === e.nodeType) {
            var n = "data-" + t.replace(_e, "-$1").toLowerCase();
            if (r = e.getAttribute(n), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : ke.test(r) ? oe.parseJSON(r) : r
                } catch (i) {}
                oe.data(e, t, r)
            } else r = void 0
        }
        return r
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, r, n) {
        if (oe.acceptData(e)) {
            var i, o, a = oe.expando,
                l = e.nodeType,
                s = l ? oe.cache : e,
                u = l ? e[a] : e[a] && a;
            if (u && s[u] && (n || s[u].data) || void 0 !== r || "string" != typeof t) return u || (u = l ? e[a] = U.pop() || oe.guid++ : a), s[u] || (s[u] = l ? {} : {
                toJSON: oe.noop
            }), "object" != typeof t && "function" != typeof t || (n ? s[u] = oe.extend(s[u], t) : s[u].data = oe.extend(s[u].data, t)), o = s[u], n || (o.data || (o.data = {}), o = o.data), void 0 !== r && (o[oe.camelCase(t)] = r), "string" == typeof t ? (i = o[t], null == i && (i = o[oe.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, r) {
        if (oe.acceptData(e)) {
            var n, i, o = e.nodeType,
                a = o ? oe.cache : e,
                l = o ? e[oe.expando] : oe.expando;
            if (a[l]) {
                if (t && (n = r ? a[l] : a[l].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in n ? t = [t] : (t = oe.camelCase(t), t = t in n ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete n[t[i]];
                    if (r ? !u(n) : !oe.isEmptyObject(n)) return
                }(r || (delete a[l].data, u(a[l]))) && (o ? oe.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ye.activeElement
        } catch (e) {}
    }

    function y(e) {
        var t = $e.split("|"),
            r = e.createDocumentFragment();
        if (r.createElement)
            for (; t.length;) r.createElement(t.pop());
        return r
    }

    function m(e, t) {
        var r, n, i = 0,
            o = typeof e.getElementsByTagName !== je ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== je ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], r = e.childNodes || e; null != (n = r[i]); i++) !t || oe.nodeName(n, t) ? o.push(n) : oe.merge(o, m(n, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], o) : o
    }

    function g(e) {
        Ee.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function T(e, t) {
        for (var r, n = 0; null != (r = e[n]); n++) oe._data(r, "globalEval", !t || oe._data(t[n], "globalEval"))
    }

    function x(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var r, n, i, o = oe._data(e),
                a = oe._data(t, o),
                l = o.events;
            if (l) {
                delete a.handle, a.events = {};
                for (r in l)
                    for (n = 0, i = l[r].length; i > n; n++) oe.event.add(t, r, l[r][n])
            }
            a.data && (a.data = oe.extend({}, a.data))
        }
    }

    function P(e, t) {
        var r, n, i;
        if (1 === t.nodeType) {
            if (r = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                i = oe._data(t);
                for (n in i.events) oe.removeEvent(t, n, i.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === r && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === r ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === r && Ee.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === r ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== r && "textarea" !== r || (t.defaultValue = e.defaultValue)
        }
    }

    function j(t, r) {
        var n = oe(r.createElement(t)).appendTo(r.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(n[0]).display : oe.css(n[0], "display");
        return n.detach(), i
    }

    function k(e) {
        var t = ye,
            r = et[e];
        return r || (r = j(e, t), "none" !== r && r || (Ze = (Ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ze[0].contentWindow || Ze[0].contentDocument).document, t.write(), t.close(), r = j(e, t), Ze.detach()), et[e] = r), r
    }

    function _(e, t) {
        return {
            get: function() {
                var r = e();
                if (null != r) return r ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), n = t, i = pt.length; i--;)
            if (t = pt[i] + r, t in e) return t;
        return n
    }

    function S(e, t) {
        for (var r, n, i, o = [], a = 0, l = e.length; l > a; a++) n = e[a], n.style && (o[a] = oe._data(n, "olddisplay"), r = n.style.display, t ? (o[a] || "none" !== r || (n.style.display = ""), "" === n.style.display && Ye(n) && (o[a] = oe._data(n, "olddisplay", k(n.nodeName)))) : o[a] || (i = Ye(n), (r && "none" !== r || !i) && oe._data(n, "olddisplay", i ? r : oe.css(n, "display"))));
        for (a = 0; l > a; a++) n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function Y(e, t, r) {
        var n = ut.exec(t);
        return n ? Math.max(0, n[1] - (r || 0)) + (n[2] || "px") : t
    }

    function A(e, t, r, n, i) {
        for (var o = r === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === r && (a += oe.css(e, r + Se[o], !0, i)), n ? ("content" === r && (a -= oe.css(e, "padding" + Se[o], !0, i)), "margin" !== r && (a -= oe.css(e, "border" + Se[o] + "Width", !0, i))) : (a += oe.css(e, "padding" + Se[o], !0, i), "padding" !== r && (a += oe.css(e, "border" + Se[o] + "Width", !0, i)));
        return a
    }

    function E(e, t, r) {
        var n = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = tt(e),
            a = ne.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = rt(e, t, o), (0 > i || null == i) && (i = e.style[t]), it.test(i)) return i;
            n = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + A(e, t, r || (a ? "border" : "content"), n, o) + "px"
    }

    function Q(e, t, r, n, i) {
        return new Q.prototype.init(e, t, r, n, i)
    }

    function D() {
        return setTimeout(function() {
            ht = void 0
        }), ht = oe.now()
    }

    function O(e, t) {
        var r, n = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) r = Se[i], n["margin" + r] = n["padding" + r] = e;
        return t && (n.opacity = n.width = e), n
    }

    function N(e, t, r) {
        for (var n, i = (wt[t] || []).concat(wt["*"]), o = 0, a = i.length; a > o; o++)
            if (n = i[o].call(r, t, e)) return n
    }

    function I(e, t, r) {
        var n, i, o, a, l, s, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ye(e),
            y = oe._data(e, "fxshow");
        r.queue || (l = oe._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, s = l.empty.fire, l.empty.fire = function() {
            l.unqueued || s()
        }), l.unqueued++, d.always(function() {
            d.always(function() {
                l.unqueued--, oe.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (r.overflow = [p.overflow, p.overflowX, p.overflowY], u = oe.css(e, "display"), c = k(e.nodeName), "none" === u && (u = c), "inline" === u && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== c ? p.zoom = 1 : p.display = "inline-block")), r.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            p.overflow = r.overflow[0], p.overflowX = r.overflow[1], p.overflowY = r.overflow[2]
        }));
        for (n in t)
            if (i = t[n], mt.exec(i)) {
                if (delete t[n], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[n]) continue;
                    h = !0
                }
                f[n] = y && y[n] || oe.style(e, n)
            }
        if (!oe.isEmptyObject(f)) {
            y ? "hidden" in y && (h = y.hidden) : y = oe._data(e, "fxshow", {}), o && (y.hidden = !h), h ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }), d.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in f) oe.style(e, t, f[t])
            });
            for (n in f) a = N(h ? y[n] : 0, n, d), n in y || (y[n] = a.start, h && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function $(e, t) {
        var r, n, i, o, a;
        for (r in e)
            if (n = oe.camelCase(r), i = t[n], o = e[r], oe.isArray(o) && (i = o[1], o = e[r] = o[0]), r !== n && (e[n] = o, delete e[r]), a = oe.cssHooks[n], a && "expand" in a) {
                o = a.expand(o), delete e[n];
                for (r in o) r in e || (e[r] = o[r], t[r] = i)
            } else t[n] = i
    }

    function B(e, t, r) {
        var n, i, o = 0,
            a = bt.length,
            l = oe.Deferred().always(function() {
                delete s.elem
            }),
            s = function() {
                if (i) return !1;
                for (var t = ht || D(), r = Math.max(0, u.startTime + u.duration - t), n = r / u.duration || 0, o = 1 - n, a = 0, s = u.tweens.length; s > a; a++) u.tweens[a].run(o);
                return l.notifyWith(e, [u, o, r]), 1 > o && s ? r : (l.resolveWith(e, [u]), !1)
            },
            u = l.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ht || D(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var n = oe.Tween(e, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(t) {
                    var r = 0,
                        n = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n > r; r++) u.tweens[r].run(1);
                    return t ? l.resolveWith(e, [u, t]) : l.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); a > o; o++)
            if (n = bt[o].call(u, e, c, u.opts)) return n;
        return oe.map(c, N, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(s, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function M(e) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var n, i = 0,
                o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(r))
                for (; n = o[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(r)) : (e[n] = e[n] || []).push(r)
        }
    }

    function L(e, t, r, n) {
        function i(l) {
            var s;
            return o[l] = !0, oe.each(e[l] || [], function(e, l) {
                var u = l(t, r, n);
                return "string" != typeof u || a || o[u] ? a ? !(s = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), s
        }
        var o = {},
            a = e === Rt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function z(e, t) {
        var r, n, i = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r), e
    }

    function F(e, t, r) {
        for (var n, i, o, a, l = e.contents, s = e.dataTypes;
            "*" === s[0];) s.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in l)
                if (l[a] && l[a].test(i)) {
                    s.unshift(a);
                    break
                }
        if (s[0] in r) o = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    o = a;
                    break
                }
                n || (n = a)
            }
            o = o || n
        }
        return o ? (o !== s[0] && s.unshift(o), r[o]) : void 0
    }

    function q(e, t, r, n) {
        var i, o, a, l, s, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (r[e.responseFields[o]] = t), !s && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = c.shift())
                if ("*" === o) o = s;
                else if ("*" !== s && s !== o) {
            if (a = u[s + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (l = i.split(" "), l[1] === o && (a = u[s + " " + l[0]] || u["* " + l[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = l[0], c.unshift(l[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + s + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, r, n) {
        var i;
        if (oe.isArray(t)) oe.each(t, function(t, i) {
            r || Ut.test(e) ? n(e, i) : R(e + "[" + ("object" == typeof i ? t : "") + "]", i, r, n)
        });
        else if (r || "object" !== oe.type(t)) n(e, t);
        else
            for (i in t) R(e + "[" + i + "]", t[i], r, n)
    }

    function H() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function W() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U = [],
        X = U.slice,
        J = U.concat,
        K = U.push,
        G = U.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        re = "".trim,
        ne = {},
        ie = "1.11.0",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        le = /^-ms-/,
        se = /-([\da-z])/gi,
        ue = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, r) {
                return e.call(t, r, t)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                r = +e + (0 > e ? t : 0);
            return this.pushStack(r >= 0 && t > r ? [this[r]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: U.sort,
        splice: U.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, r, n, i, o, a = arguments[0] || {},
            l = 1,
            s = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || oe.isFunction(a) || (a = {}), l === s && (a = this, l--); s > l; l++)
            if (null != (i = arguments[l]))
                for (n in i) e = a[n], r = i[n], a !== r && (u && r && (oe.isPlainObject(r) || (t = oe.isArray(r))) ? (t ? (t = !1, o = e && oe.isArray(e) ? e : []) : o = e && oe.isPlainObject(e) ? e : {}, a[n] = oe.extend(u, o, r)) : void 0 !== r && (a[n] = r));
        return a
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(le, "ms-").replace(se, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i, o = 0,
                a = e.length,
                l = r(e);
            if (n) {
                if (l)
                    for (; a > o && (i = t.apply(e[o], n), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], n), i === !1) break
            } else if (l)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: re && !re.call("\ufeff ") ? function(e) {
            return null == e ? "" : re.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : K.call(n, e)), n
        },
        inArray: function(e, t, r) {
            var n;
            if (t) {
                if (G) return G.call(t, e, r);
                for (n = t.length, r = r ? 0 > r ? Math.max(0, n + r) : r : 0; n > r; r++)
                    if (r in t && t[r] === e) return r
            }
            return -1
        },
        merge: function(e, t) {
            for (var r = +t.length, n = 0, i = e.length; r > n;) e[i++] = t[n++];
            if (r !== r)
                for (; void 0 !== t[n];) e[i++] = t[n++];
            return e.length = i, e
        },
        grep: function(e, t, r) {
            for (var n, i = [], o = 0, a = e.length, l = !r; a > o; o++) n = !t(e[o], o), n !== l && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o = 0,
                a = e.length,
                l = r(e),
                s = [];
            if (l)
                for (; a > o; o++) i = t(e[o], o, n), null != i && s.push(i);
            else
                for (o in e) i = t(e[o], o, n), null != i && s.push(i);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var r, n, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), oe.isFunction(e) ? (r = X.call(arguments, 2), n = function() {
                return e.apply(t || this, r.concat(X.call(arguments)))
            }, n.guid = e.guid = e.guid || oe.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, r, n) {
            var i, o, a, l, s, u, d, h, y, m;
            if ((t ? t.ownerDocument || t : L) !== Q && E(t), t = t || Q, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (O && !n) {
                if (i = ve.exec(e))
                    if (a = i[1]) {
                        if (9 === l) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return r;
                            if (o.id === a) return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return r.push(o), r
                    } else {
                        if (i[2]) return Z.apply(r, t.getElementsByTagName(e)), r;
                        if ((a = i[3]) && P.getElementsByClassName && t.getElementsByClassName) return Z.apply(r, t.getElementsByClassName(a)), r
                    }
                if (P.qsa && (!N || !N.test(e))) {
                    if (h = d = M, y = t, m = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        for (u = f(e), (d = t.getAttribute("id")) ? h = d.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", s = u.length; s--;) u[s] = h + p(u[s]);
                        y = be.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return Z.apply(r, y.querySelectorAll(m)), r
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(se, "$1"), t, r, n)
        }

        function r() {
            function e(r, n) {
                return t.push(r + " ") > j.cacheLength && delete e[t.shift()], e[r + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = Q.createElement("div");
            try {
                return !!e(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var r = e.split("|"), n = e.length; n--;) j.attrHandle[r[n]] = t
        }

        function a(e, t) {
            var r = t && e,
                n = r && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (n) return n;
            if (r)
                for (; r = r.nextSibling;)
                    if (r === t) return -1;
            return e ? 1 : -1
        }

        function l(e) {
            return function(t) {
                var r = t.nodeName.toLowerCase();
                return "input" === r && t.type === e
            }
        }

        function s(e) {
            return function(t) {
                var r = t.nodeName.toLowerCase();
                return ("input" === r || "button" === r) && t.type === e
            }
        }

        function u(e) {
            return n(function(t) {
                return t = +t, n(function(r, n) {
                    for (var i, o = e([], r.length, t), a = o.length; a--;) r[i = o[a]] && (r[i] = !(n[i] = r[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function d() {}

        function f(e, r) {
            var n, i, o, a, l, s, u, c = R[e + " "];
            if (c) return r ? 0 : c.slice(0);
            for (l = e, s = [], u = j.preFilter; l;) {
                n && !(i = ue.exec(l)) || (i && (l = l.slice(i[0].length) || l), s.push(o = [])), n = !1, (i = ce.exec(l)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(se, " ")
                }), l = l.slice(n.length));
                for (a in j.filter) !(i = he[a].exec(l)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), l = l.slice(n.length));
                if (!n) break
            }
            return r ? l.length : l ? t.error(e) : R(e, s).slice(0)
        }

        function p(e) {
            for (var t = 0, r = e.length, n = ""; r > t; t++) n += e[t].value;
            return n
        }

        function h(e, t, r) {
            var n = t.dir,
                i = r && "parentNode" === n,
                o = F++;
            return t.first ? function(t, r, o) {
                for (; t = t[n];)
                    if (1 === t.nodeType || i) return e(t, r, o)
            } : function(t, r, a) {
                var l, s, u = [z, o];
                if (a) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || i) && e(t, r, a)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || i) {
                            if (s = t[M] || (t[M] = {}), (l = s[n]) && l[0] === z && l[1] === o) return u[2] = l[2];
                            if (s[n] = u, u[2] = e(t, r, a)) return !0
                        }
            }
        }

        function y(e) {
            return e.length > 1 ? function(t, r, n) {
                for (var i = e.length; i--;)
                    if (!e[i](t, r, n)) return !1;
                return !0
            } : e[0]
        }

        function m(e, t, r, n, i) {
            for (var o, a = [], l = 0, s = e.length, u = null != t; s > l; l++)(o = e[l]) && (r && !r(o, n, i) || (a.push(o), u && t.push(l)));
            return a
        }

        function g(e, t, r, i, o, a) {
            return i && !i[M] && (i = g(i)), o && !o[M] && (o = g(o, a)), n(function(n, a, l, s) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    y = n || w(t || "*", l.nodeType ? [l] : l, []),
                    g = !e || !n && t ? y : m(y, f, e, l, s),
                    v = r ? o || (n ? e : h || i) ? [] : a : g;
                if (r && r(g, v, l, s), i)
                    for (u = m(v, p), i(u, [], l, s), c = u.length; c--;)(d = u[c]) && (v[p[c]] = !(g[p[c]] = d));
                if (n) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = v.length; c--;)(d = v[c]) && u.push(g[c] = d);
                            o(null, v = [], u, s)
                        }
                        for (c = v.length; c--;)(d = v[c]) && (u = o ? te.call(n, d) : f[c]) > -1 && (n[u] = !(a[u] = d))
                    }
                } else v = m(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, s) : Z.apply(a, v)
            })
        }

        function v(e) {
            for (var t, r, n, i = e.length, o = j.relative[e[0].type], a = o || j.relative[" "], l = o ? 1 : 0, s = h(function(e) {
                    return e === t
                }, a, !0), u = h(function(e) {
                    return te.call(t, e) > -1
                }, a, !0), c = [function(e, r, n) {
                    return !o && (n || r !== S) || ((t = r).nodeType ? s(e, r, n) : u(e, r, n))
                }]; i > l; l++)
                if (r = j.relative[e[l].type]) c = [h(y(c), r)];
                else {
                    if (r = j.filter[e[l].type].apply(null, e[l].matches), r[M]) {
                        for (n = ++l; i > n && !j.relative[e[n].type]; n++);
                        return g(l > 1 && y(c), l > 1 && p(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(se, "$1"), r, n > l && v(e.slice(l, n)), i > n && v(e = e.slice(n)), i > n && p(e))
                    }
                    c.push(r)
                }
            return y(c)
        }

        function b(e, r) {
            var i = r.length > 0,
                o = e.length > 0,
                a = function(n, a, l, s, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        y = n && [],
                        g = [],
                        v = S,
                        b = n || o && j.find.TAG("*", u),
                        w = z += null == v ? 1 : Math.random() || .1,
                        T = b.length;
                    for (u && (S = a !== Q && a); h !== T && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, l)) {
                                    s.push(c);
                                    break
                                }
                            u && (z = w)
                        }
                        i && ((c = !f && c) && p--, n && y.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = r[d++];) f(y, g, a, l);
                        if (n) {
                            if (p > 0)
                                for (; h--;) y[h] || g[h] || (g[h] = K.call(s));
                            g = m(g)
                        }
                        Z.apply(s, g), u && !n && g.length > 0 && p + r.length > 1 && t.uniqueSort(s)
                    }
                    return u && (z = w, S = v), y
                };
            return i ? n(a) : a
        }

        function w(e, r, n) {
            for (var i = 0, o = r.length; o > i; i++) t(e, r[i], n);
            return n
        }

        function T(e, t, r, n) {
            var i, o, a, l, s, u = f(e);
            if (!n && 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && P.getById && 9 === t.nodeType && O && j.relative[o[1].type]) {
                    if (t = (j.find.ID(a.matches[0].replace(Te, xe), t) || [])[0], !t) return r;
                    e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !j.relative[l = a.type]);)
                    if ((s = j.find[l]) && (n = s(a.matches[0].replace(Te, xe), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = n.length && p(o), !e) return Z.apply(r, n), r;
                        break
                    }
            }
            return C(e, u)(n, t, !O, r, be.test(e) && c(t.parentNode) || t), r
        }
        var x, P, j, k, _, C, S, Y, A, E, Q, D, O, N, I, $, B, M = "sizzle" + -new Date,
            L = e.document,
            z = 0,
            F = 0,
            q = r(),
            R = r(),
            H = r(),
            W = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = "undefined",
            U = 1 << 31,
            X = {}.hasOwnProperty,
            J = [],
            K = J.pop,
            G = J.push,
            Z = J.push,
            ee = J.slice,
            te = J.indexOf || function(e) {
                for (var t = 0, r = this.length; r > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            re = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            ae = "\\[" + ne + "*(" + ie + ")" + ne + "*(?:([*^$|!~]?=)" + ne + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + ne + "*\\]",
            le = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(le),
            pe = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ae),
                PSEUDO: new RegExp("^" + le),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + re + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ye = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            Te = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, r) {
                var n = "0x" + t - 65536;
                return n !== n || r ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
        try {
            Z.apply(J = ee.call(L.childNodes), L.childNodes), J[L.childNodes.length].nodeType
        } catch (Pe) {
            Z = {
                apply: J.length ? function(e, t) {
                    G.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var r = e.length, n = 0; e[r++] = t[n++];);
                    e.length = r - 1
                }
            }
        }
        P = t.support = {}, _ = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, E = t.setDocument = function(e) {
            var t, r = e ? e.ownerDocument || e : L,
                n = r.defaultView;
            return r !== Q && 9 === r.nodeType && r.documentElement ? (Q = r, D = r.documentElement, O = !_(r), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                E()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                E()
            })), P.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), P.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), P.getElementsByClassName = ge.test(r.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), P.getById = i(function(e) {
                return D.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length
            }), P.getById ? (j.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && O) {
                    var r = t.getElementById(e);
                    return r && r.parentNode ? [r] : []
                }
            }, j.filter.ID = function(e) {
                var t = e.replace(Te, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete j.find.ID, j.filter.ID = function(e) {
                var t = e.replace(Te, xe);
                return function(e) {
                    var r = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return r && r.value === t
                }
            }), j.find.TAG = P.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var r, n = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; r = o[i++];) 1 === r.nodeType && n.push(r);
                    return n
                }
                return o
            }, j.find.CLASS = P.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
            }, I = [], N = [], (P.qsa = ge.test(r.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + re + ")"), e.querySelectorAll(":checked").length || N.push(":checked")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (P.matchesSelector = ge.test($ = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function(e) {
                P.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), I.push("!=", le)
            }), N = N.length && new RegExp(N.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(D.compareDocumentPosition), B = t || ge.test(D.contains) ? function(e, t) {
                var r = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, W = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !P.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === L && B(L, e) ? -1 : t === r || t.ownerDocument === L && B(L, t) ? 1 : Y ? te.call(Y, e) - te.call(Y, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    l = t.parentNode,
                    s = [e],
                    u = [t];
                if (!o || !l) return e === r ? -1 : t === r ? 1 : o ? -1 : l ? 1 : Y ? te.call(Y, e) - te.call(Y, t) : 0;
                if (o === l) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[i] === u[i];) i++;
                return i ? a(s[i], u[i]) : s[i] === L ? -1 : u[i] === L ? 1 : 0
            }, r) : Q
        }, t.matches = function(e, r) {
            return t(e, null, null, r)
        }, t.matchesSelector = function(e, r) {
            if ((e.ownerDocument || e) !== Q && E(e), r = r.replace(de, "='$1']"), P.matchesSelector && O && (!I || !I.test(r)) && (!N || !N.test(r))) try {
                var n = $.call(e, r);
                if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (i) {}
            return t(r, Q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== Q && E(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== Q && E(e);
            var r = j.attrHandle[t.toLowerCase()],
                n = r && X.call(j.attrHandle, t.toLowerCase()) ? r(e, t, !O) : void 0;
            return void 0 !== n ? n : P.attributes || !O ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, r = [],
                n = 0,
                i = 0;
            if (A = !P.detectDuplicates, Y = !P.sortStable && e.slice(0), e.sort(W), A) {
                for (; t = e[i++];) t === e[i] && (n = r.push(i));
                for (; n--;) e.splice(r[n], 1)
            }
            return Y = null, e
        }, k = t.getText = function(e) {
            var t, r = "",
                n = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) r += k(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[n++];) r += k(t);
            return r
        }, j = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Te, xe), e[3] = (e[4] || e[5] || "").replace(Te, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, r = !e[5] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : r && fe.test(r) && (t = f(r, !0)) && (t = r.indexOf(")", r.length - t) - r.length) && (e[0] = e[0].slice(0, t), e[2] = r.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Te, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, r, n) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === r : r ? (o += "", "=" === r ? o === n : "!=" === r ? o !== n : "^=" === r ? n && 0 === o.indexOf(n) : "*=" === r ? n && o.indexOf(n) > -1 : "$=" === r ? n && o.slice(-n.length) === n : "~=" === r ? (" " + o + " ").indexOf(n) > -1 : "|=" === r ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, r, n, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        l = "of-type" === t;
                    return 1 === n && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, r, s) {
                        var u, c, d, f, p, h, y = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = l && t.nodeName.toLowerCase(),
                            v = !s && !l;
                        if (m) {
                            if (o) {
                                for (; y;) {
                                    for (d = t; d = d[y];)
                                        if (l ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                    h = y = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[M] || (m[M] = {}), u = c[e] || [], p = u[0] === z && u[1], f = u[0] === z && u[2], d = p && m.childNodes[p]; d = ++p && d && d[y] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [z, p, f];
                                        break
                                    }
                            } else if (v && (u = (t[M] || (t[M] = {}))[e]) && u[0] === z) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[y] || (f = p = 0) || h.pop()) && ((l ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++f || (v && ((d[M] || (d[M] = {}))[e] = [z, f]), d !== t)););
                            return f -= i, f === n || f % n === 0 && f / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var i, o = j.pseudos[e] || j.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(r) : o.length > 1 ? (i = [e, e, "", r], j.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, i = o(e, r), a = i.length; a--;) n = te.call(e, i[a]), e[n] = !(t[n] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        r = [],
                        i = C(e.replace(se, "$1"));
                    return i[M] ? n(function(e, t, r, n) {
                        for (var o, a = i(e, null, n, []), l = e.length; l--;)(o = a[l]) && (e[l] = !(t[l] = o))
                    }) : function(e, n, o) {
                        return t[0] = e, i(t, null, o, r), !r.pop()
                    }
                }),
                has: n(function(e) {
                    return function(r) {
                        return t(e, r).length > 0
                    }
                }),
                contains: n(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: n(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Te, xe).toLowerCase(),
                        function(t) {
                            var r;
                            do
                                if (r = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return r = r.toLowerCase(), r === e || 0 === r.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var r = e.location && e.location.hash;
                    return r && r.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === Q.activeElement && (!Q.hasFocus || Q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !j.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ye.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, r) {
                    return [0 > r ? r + t : r]
                }),
                even: u(function(e, t) {
                    for (var r = 0; t > r; r += 2) e.push(r);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var r = 1; t > r; r += 2) e.push(r);
                    return e
                }),
                lt: u(function(e, t, r) {
                    for (var n = 0 > r ? r + t : r; --n >= 0;) e.push(n);
                    return e
                }),
                gt: u(function(e, t, r) {
                    for (var n = 0 > r ? r + t : r; ++n < t;) e.push(n);
                    return e
                })
            }
        }, j.pseudos.nth = j.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) j.pseudos[x] = l(x);
        for (x in {
                submit: !0,
                reset: !0
            }) j.pseudos[x] = s(x);
        return d.prototype = j.filters = j.pseudos, j.setFilters = new d, C = t.compile = function(e, t) {
            var r, n = [],
                i = [],
                o = H[e + " "];
            if (!o) {
                for (t || (t = f(e)), r = t.length; r--;) o = v(t[r]), o[M] ? n.push(o) : i.push(o);
                o = H(e, b(i, n))
            }
            return o
        }, P.sortStable = M.split("").sort(W).join("") === M, P.detectDuplicates = !!A, E(), P.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(Q.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, r) {
            return r ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), P.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(re, function(e, t, r) {
            var n;
            return r ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var de = oe.expr.match.needsContext,
        fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, r) {
        var n = t[0];
        return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? oe.find.matchesSelector(n, e) ? [n] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, r = [],
                n = this,
                i = n.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (oe.contains(n[t], this)) return !0
            }));
            for (t = 0; i > t; t++) oe.find(e, n[t], r);
            return r = this.pushStack(i > 1 ? oe.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var he, ye = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = oe.fn.init = function(e, t) {
            var r, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ye, !0)), fe.test(r[1]) && oe.isPlainObject(t))
                        for (r in t) oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (n = ye.getElementById(r[2]), n && n.parentNode) {
                    if (n.id !== r[2]) return he.find(e);
                    this.length = 1, this[0] = n
                }
                return this.context = ye, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ge.prototype = oe.fn, he = oe(ye);
    var ve = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(e, t, r) {
            for (var n = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === r || 1 !== i.nodeType || !oe(i).is(r));) 1 === i.nodeType && n.push(i), i = i[t];
            return n
        },
        sibling: function(e, t) {
            for (var r = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && r.push(e);
            return r
        }
    }), oe.fn.extend({
        has: function(e) {
            var t, r = oe(e, this),
                n = r.length;
            return this.filter(function() {
                for (t = 0; n > t; t++)
                    if (oe.contains(this, r[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var r, n = 0, i = this.length, o = [], a = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > n; n++)
                for (r = this[n]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && oe.find.matchesSelector(r, e))) {
                        o.push(r);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, r) {
            return oe.dir(e, "parentNode", r)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, r) {
            return oe.dir(e, "nextSibling", r)
        },
        prevUntil: function(e, t, r) {
            return oe.dir(e, "previousSibling", r)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(r, n) {
            var i = oe.map(this, t, r);
            return "Until" !== e.slice(-5) && (n = r), n && "string" == typeof n && (i = oe.filter(n, i)), this.length > 1 && (be[e] || (i = oe.unique(i)), ve.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var we = /\S+/g,
        Te = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? Te[e] || o(e) : oe.extend({}, e);
        var t, r, n, i, a, l, s = [],
            u = !e.once && [],
            c = function(o) {
                for (r = e.memory && o, n = !0, a = l || 0, l = 0, i = s.length, t = !0; s && i > a; a++)
                    if (s[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                t = !1, s && (u ? u.length && c(u.shift()) : r ? s = [] : d.disable())
            },
            d = {
                add: function() {
                    if (s) {
                        var n = s.length;
                        ! function o(t) {
                            oe.each(t, function(t, r) {
                                var n = oe.type(r);
                                "function" === n ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== n && o(r)
                            })
                        }(arguments), t ? i = s.length : r && (l = n, c(r))
                    }
                    return this
                },
                remove: function() {
                    return s && oe.each(arguments, function(e, r) {
                        for (var n;
                            (n = oe.inArray(r, s, n)) > -1;) s.splice(n, 1), t && (i >= n && i--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, s) > -1 : !(!s || !s.length)
                },
                empty: function() {
                    return s = [], i = 0, this
                },
                disable: function() {
                    return s = u = r = void 0, this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return u = void 0, r || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, r) {
                    return !s || n && !u || (r = r || [], r = [e, r.slice ? r.slice() : r], t ? u.push(r) : c(r)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                r = "pending",
                n = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(r) {
                            oe.each(t, function(t, o) {
                                var a = oe.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[o[0] + "With"](this === n ? r.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, n) : n
                    }
                },
                i = {};
            return n.pipe = n.then, oe.each(t, function(e, o) {
                var a = o[2],
                    l = o[3];
                n[o[1]] = a.add, l && a.add(function() {
                    r = l
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? n : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), n.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, r, n, i = 0,
                o = X.call(arguments),
                a = o.length,
                l = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                s = 1 === l ? e : oe.Deferred(),
                u = function(e, r, n) {
                    return function(i) {
                        r[e] = this, n[e] = arguments.length > 1 ? X.call(arguments) : i, n === t ? s.notifyWith(r, n) : --l || s.resolveWith(r, n)
                    }
                };
            if (a > 1)
                for (t = new Array(a), r = new Array(a), n = new Array(a); a > i; i++) o[i] && oe.isFunction(o[i].promise) ? o[i].promise().done(u(i, n, o)).fail(s.reject).progress(u(i, r, t)) : --l;
            return l || s.resolveWith(n, o), s.promise()
        }
    });
    var xe;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!ye.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(ye, [oe]), oe.fn.trigger && oe(ye).trigger("ready").off("ready"))
            }
        }
    }), oe.ready.promise = function(t) {
        if (!xe)
            if (xe = oe.Deferred(), "complete" === ye.readyState) setTimeout(oe.ready);
            else if (ye.addEventListener) ye.addEventListener("DOMContentLoaded", l, !1), e.addEventListener("load", l, !1);
        else {
            ye.attachEvent("onreadystatechange", l), e.attachEvent("onload", l);
            var r = !1;
            try {
                r = null == e.frameElement && ye.documentElement
            } catch (n) {}
            r && r.doScroll && ! function i() {
                if (!oe.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), oe.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var Pe, je = "undefined";
    for (Pe in oe(ne)) break;
    ne.ownLast = "0" !== Pe, ne.inlineBlockNeedsLayout = !1, oe(function() {
            var e, t, r = ye.getElementsByTagName("body")[0];
            r && (e = ye.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = ye.createElement("div"), r.appendChild(e).appendChild(t), typeof t.style.zoom !== je && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ne.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (r.style.zoom = 1)), r.removeChild(e), e = t = null)
        }),
        function() {
            var e = ye.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function(e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                r = +e.nodeType || 1;
            return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !u(e)
        },
        data: function(e, t, r) {
            return c(e, t, r)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, r) {
            return c(e, t, r, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var r, n, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                    for (r = a.length; r--;) n = a[r].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), s(o, n, i[n]));
                    oe._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : o ? s(o, e, oe.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, r) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = oe._data(e, t), r && (!n || oe.isArray(r) ? n = oe._data(e, t, oe.makeArray(r)) : n.push(r)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var r = oe.queue(e, t),
                n = r.length,
                i = r.shift(),
                o = oe._queueHooks(e, t),
                a = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === i && (i = r.shift(), n--), i && ("fx" === t && r.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var r = t + "queueHooks";
            return oe._data(e, r) || oe._data(e, r, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"), oe._removeData(e, r)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var r = 2;
            return "string" != typeof e && (t = e, e = "fx", r--), arguments.length < r ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var r = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var r, n = 1,
                i = oe.Deferred(),
                o = this,
                a = this.length,
                l = function() {
                    --n || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) r = oe._data(o[a], e + "queueHooks"), r && r.empty && (n++, r.empty.add(l));
            return l(), i.promise(t)
        }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ye = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Ae = oe.access = function(e, t, r, n, i, o, a) {
            var l = 0,
                s = e.length,
                u = null == r;
            if ("object" === oe.type(r)) {
                i = !0;
                for (l in r) oe.access(e, t, l, r[l], !0, o, a)
            } else if (void 0 !== n && (i = !0, oe.isFunction(n) || (a = !0), u && (a ? (t.call(e, n), t = null) : (u = t, t = function(e, t, r) {
                    return u.call(oe(e), r)
                })), t))
                for (; s > l; l++) t(e[l], r, a ? n : n.call(e[l], l, t(e[l], r)));
            return i ? e : u ? t.call(e) : s ? t(e[0], r) : o
        },
        Ee = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ye.createDocumentFragment(),
            t = ye.createElement("div"),
            r = ye.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== ye.createElement("nav").cloneNode(!0).outerHTML, r.type = "checkbox", r.checked = !0, e.appendChild(r), ne.appendChecked = r.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                ne.deleteExpando = !1
            }
        }
        e = t = r = null
    }(),
    function() {
        var t, r, n = ye.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) r = "on" + t, (ne[t + "Bubbles"] = r in e) || (n.setAttribute(r, "t"), ne[t + "Bubbles"] = n.attributes[r].expando === !1);
        n = null
    }();
    var Qe = /^(?:input|select|textarea)$/i,
        De = /^key/,
        Oe = /^(?:mouse|contextmenu)|click/,
        Ne = /^(?:focusinfocus|focusoutblur)$/,
        Ie = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, r, n, i) {
            var o, a, l, s, u, c, d, f, p, h, y, m = oe._data(e);
            if (m) {
                for (r.handler && (s = r, r = s.handler, i = s.selector), r.guid || (r.guid = oe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                        return typeof oe === je || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(we) || [""], l = t.length; l--;) o = Ie.exec(t[l]) || [], p = y = o[1], h = (o[2] || "").split(".").sort(), p && (u = oe.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = oe.event.special[p] || {}, d = oe.extend({
                    type: p,
                    origType: y,
                    data: n,
                    handler: r,
                    guid: r.guid,
                    selector: i,
                    needsContext: i && oe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, s), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, n, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), oe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, r, n, i) {
            var o, a, l, s, u, c, d, f, p, h, y, m = oe.hasData(e) && oe._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(we) || [""], u = t.length; u--;)
                    if (l = Ie.exec(t[u]) || [], p = y = l[1], h = (l[2] || "").split(".").sort(), p) {
                        for (d = oe.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, f = c[p] || [], l = l[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) a = f[o], !i && y !== a.origType || r && r.guid !== a.guid || l && !l.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        s && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || oe.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) oe.event.remove(e, p + t[u], r, n, !0);
                oe.isEmptyObject(c) && (delete m.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function(t, r, n, i) {
            var o, a, l, s, u, c, d, f = [n || ye],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (l = c = n = n || ye, 3 !== n.nodeType && 8 !== n.nodeType && !Ne.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), r = null == r ? [t] : oe.makeArray(r, [t]), u = oe.event.special[p] || {}, i || !u.trigger || u.trigger.apply(n, r) !== !1)) {
                if (!i && !u.noBubble && !oe.isWindow(n)) {
                    for (s = u.delegateType || p, Ne.test(s + p) || (l = l.parentNode); l; l = l.parentNode) f.push(l), c = l;
                    c === (n.ownerDocument || ye) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (l = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? s : u.bindType || p, o = (oe._data(l, "events") || {})[t.type] && oe._data(l, "handle"), o && o.apply(l, r), o = a && l[a], o && o.apply && oe.acceptData(l) && (t.result = o.apply(l, r), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), r) === !1) && oe.acceptData(n) && a && n[p] && !oe.isWindow(n)) {
                    c = n[a], c && (n[a] = null), oe.event.triggered = p;
                    try {
                        n[p]()
                    } catch (y) {}
                    oe.event.triggered = void 0, c && (n[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, r, n, i, o, a = [],
                l = X.call(arguments),
                s = (oe._data(this, "events") || {})[e.type] || [],
                u = oe.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, s), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (n = i.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n, e.data = n.data, r = ((oe.event.special[n.origType] || {}).handle || n.handler).apply(i.elem, l), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var r, n, i, o, a = [],
                l = t.delegateCount,
                s = e.target;
            if (l && s.nodeType && (!e.button || "click" !== e.type))
                for (; s != this; s = s.parentNode || this)
                    if (1 === s.nodeType && (s.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; l > o; o++) n = t[o], r = n.selector + " ", void 0 === i[r] && (i[r] = n.needsContext ? oe(r, this).index(s) >= 0 : oe.find(r, this, null, [s]).length), i[r] && i.push(n);
                        i.length && a.push({
                            elem: s,
                            handlers: i
                        })
                    }
            return l < t.length && a.push({
                elem: this,
                handlers: t.slice(l)
            }), a
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, r, n, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Oe.test(i) ? this.mouseHooks : De.test(i) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(o), t = n.length; t--;) r = n[t], e[r] = o[r];
            return e.target || (e.target = o.srcElement || ye), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var r, n, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ye, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, r, n) {
            var i = oe.extend(new oe.Event, r, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? oe.event.trigger(i, null, t) : oe.event.dispatch.call(t, i), i.isDefaultPrevented() && r.preventDefault()
        }
    }, oe.removeEvent = ye.removeEventListener ? function(e, t, r) {
        e.removeEventListener && e.removeEventListener(t, r, !1)
    } : function(e, t, r) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === je && (e[n] = null), e.detachEvent(n, r))
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? f : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = f, this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var r, n = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === n || oe.contains(n, i)) || (e.type = o.origType, r = o.handler.apply(this, arguments), e.type = t), r
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    r = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                r && !oe._data(r, "submitBubbles") && (oe.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), oe._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Qe.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !Qe.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var r = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    i = oe._data(n, t);
                i || n.addEventListener(e, r, !0), oe._data(n, t, (i || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    i = oe._data(n, t) - 1;
                i ? oe._data(n, t, i) : (n.removeEventListener(e, r, !0), oe._removeData(n, t))
            }
        }
    }), oe.fn.extend({
        on: function(e, t, r, n, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (o in e) this.on(o, t, r, e[o], i);
                return this
            }
            if (null == r && null == n ? (n = t, r = t = void 0) : null == n && ("string" == typeof t ? (n = r, r = void 0) : (n = r, r = t, t = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === i && (a = n, n = function(e) {
                return oe().off(e), a.apply(this, arguments)
            }, n.guid = a.guid || (a.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, e, n, r, t)
            })
        },
        one: function(e, t, r, n) {
            return this.on(e, t, r, n, 1)
        },
        off: function(e, t, r) {
            var n, i;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, oe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = p), this.each(function() {
                oe.event.remove(this, e, r, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var r = this[0];
            return r ? oe.event.trigger(e, t, r, !0) : void 0
        }
    });
    var $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Be = / jQuery\d+="(?:null|\d+)"/g,
        Me = new RegExp("<(?:" + $e + ")[\\s/>]", "i"),
        Le = /^\s+/,
        ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fe = /<([\w:]+)/,
        qe = /<tbody/i,
        Re = /<|&#?\w+;/,
        He = /<(?:script|style|link)/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = y(ye),
        Ge = Ke.appendChild(ye.createElement("div"));
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, oe.extend({
        clone: function(e, t, r) {
            var n, i, o, a, l, s = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !Me.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(o = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (n = m(o), l = m(e), a = 0; null != (i = l[a]); ++a) n[a] && P(i, n[a]);
            if (t)
                if (r)
                    for (l = l || m(e), n = n || m(o), a = 0; null != (i = l[a]); a++) x(i, n[a]);
                else x(e, o);
            return n = m(o, "script"), n.length > 0 && T(n, !s && m(e, "script")), n = l = i = null, o
        },
        buildFragment: function(e, t, r, n) {
            for (var i, o, a, l, s, u, c, d = e.length, f = y(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === oe.type(o)) oe.merge(p, o.nodeType ? [o] : o);
                    else if (Re.test(o)) {
                for (l = l || f.appendChild(t.createElement("div")), s = (Fe.exec(o) || ["", ""])[1].toLowerCase(), c = Je[s] || Je._default, l.innerHTML = c[1] + o.replace(ze, "<$1></$2>") + c[2], i = c[0]; i--;) l = l.lastChild;
                if (!ne.leadingWhitespace && Le.test(o) && p.push(t.createTextNode(Le.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== s || qe.test(o) ? "<table>" !== c[1] || qe.test(o) ? 0 : l : l.firstChild, i = o && o.childNodes.length; i--;) oe.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (oe.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = f.lastChild
            } else p.push(t.createTextNode(o));
            for (l && f.removeChild(l), ne.appendChecked || oe.grep(m(p, "input"), g), h = 0; o = p[h++];)
                if ((!n || -1 === oe.inArray(o, n)) && (a = oe.contains(o.ownerDocument, o), l = m(f.appendChild(o), "script"), a && T(l), r))
                    for (i = 0; o = l[i++];) Ve.test(o.type || "") && r.push(o);
            return l = null, f
        },
        cleanData: function(e, t) {
            for (var r, n, i, o, a = 0, l = oe.expando, s = oe.cache, u = ne.deleteExpando, c = oe.event.special; null != (r = e[a]); a++)
                if ((t || oe.acceptData(r)) && (i = r[l], o = i && s[i])) {
                    if (o.events)
                        for (n in o.events) c[n] ? oe.event.remove(r, n) : oe.removeEvent(r, n, o.handle);
                    s[i] && (delete s[i], u ? delete r[l] : typeof r.removeAttribute !== je ? r.removeAttribute(l) : r[l] = null, U.push(i))
                }
        }
    }), oe.fn.extend({
        text: function(e) {
            return Ae(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ye).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var r, n = e ? oe.filter(e, this) : this, i = 0; null != (r = n[i]); i++) t || 1 !== r.nodeType || oe.cleanData(m(r)), r.parentNode && (t && oe.contains(r.ownerDocument, r) && T(m(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {},
                    r = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Be, "") : void 0;
                if ("string" == typeof e && !He.test(e) && (ne.htmlSerialize || !Me.test(e)) && (ne.leadingWhitespace || !Le.test(e)) && !Je[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ze, "<$1></$2>");
                    try {
                        for (; n > r; r++) t = this[r] || {}, 1 === t.nodeType && (oe.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, oe.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = J.apply([], e);
            var r, n, i, o, a, l, s = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = oe.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ne.checkClone && We.test(f)) return this.each(function(r) {
                var n = c.eq(r);
                p && (e[0] = f.call(this, r, n.html())), n.domManip(e, t)
            });
            if (u && (l = oe.buildFragment(e, this[0].ownerDocument, !1, this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (o = oe.map(m(l, "script"), b), i = o.length; u > s; s++) n = l, s !== d && (n = oe.clone(n, !0, !0), i && oe.merge(o, m(n, "script"))), t.call(this[s], n, s);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, oe.map(o, w), s = 0; i > s; s++) n = o[s], Ve.test(n.type || "") && !oe._data(n, "globalEval") && oe.contains(a, n) && (n.src ? oe._evalUrl && oe._evalUrl(n.src) : oe.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xe, "")));
                l = r = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var r, n = 0, i = [], o = oe(e), a = o.length - 1; a >= n; n++) r = n === a ? this : this.clone(!0), oe(o[n])[t](r), K.apply(i, r.get());
            return this.pushStack(i)
        }
    });
    var Ze, et = {};
    ! function() {
        var e, t, r = ye.createElement("div"),
            n = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = r.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(e.style.opacity), ne.cssFloat = !!e.style.cssFloat, r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === r.style.backgroundClip, e = r = null, ne.shrinkWrapBlocks = function() {
            var e, r, i, o;
            if (null == t) {
                if (e = ye.getElementsByTagName("body")[0], !e) return;
                o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", r = ye.createElement("div"), i = ye.createElement("div"), e.appendChild(r).appendChild(i), t = !1, typeof i.style.zoom !== je && (i.style.cssText = n + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(r), e = r = i = null
            }
            return t
        }
    }();
    var tt, rt, nt = /^margin/,
        it = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tt = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, rt = function(e, t, r) {
            var n, i, o, a, l = e.style;
            return r = r || tt(e), a = r ? r.getPropertyValue(t) || r[t] : void 0, r && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), it.test(a) && nt.test(t) && (n = l.width,
                i = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = r.width, l.width = n, l.minWidth = i, l.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ye.documentElement.currentStyle && (tt = function(e) {
            return e.currentStyle
        }, rt = function(e, t, r) {
            var n, i, o, a, l = e.style;
            return r = r || tt(e), a = r ? r[t] : void 0, null == a && l && l[t] && (a = l[t]), it.test(a) && !ot.test(t) && (n = l.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : a, a = l.pixelLeft + "px", l.left = n, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, r, n = ye.getElementsByTagName("body")[0];
                n && (t = ye.createElement("div"), r = ye.createElement("div"), t.style.cssText = u, n.appendChild(t).appendChild(r), r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", oe.swap(n, null != n.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    i = 4 === r.offsetWidth
                }), o = !0, a = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(r, null) || {}).top, o = "4px" === (e.getComputedStyle(r, null) || {
                    width: "4px"
                }).width), n.removeChild(t), r = n = null)
            }
            var r, n, i, o, a, l, s = ye.createElement("div"),
                u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = s.getElementsByTagName("a")[0], r.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(r.style.opacity), ne.cssFloat = !!r.style.cssFloat, s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === s.style.backgroundClip, r = s = null, oe.extend(ne, {
                reliableHiddenOffsets: function() {
                    if (null != n) return n;
                    var e, t, r, i = ye.createElement("div"),
                        o = ye.getElementsByTagName("body")[0];
                    if (o) return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = ye.createElement("div"), e.style.cssText = u, o.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", n = r && 0 === t[0].offsetHeight, o.removeChild(e), i = o = null, n
                },
                boxSizing: function() {
                    return null == i && t(), i
                },
                boxSizingReliable: function() {
                    return null == o && t(), o
                },
                pixelPosition: function() {
                    return null == a && t(), a
                },
                reliableMarginRight: function() {
                    var t, r, n, i;
                    if (null == l && e.getComputedStyle) {
                        if (t = ye.getElementsByTagName("body")[0], !t) return;
                        r = ye.createElement("div"), n = ye.createElement("div"), r.style.cssText = u, t.appendChild(r).appendChild(n), i = n.appendChild(ye.createElement("div")), i.style.cssText = n.style.cssText = c, i.style.marginRight = i.style.width = "0", n.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(r)
                    }
                    return l
                }
            })
        }(), oe.swap = function(e, t, r, n) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = r.apply(e, n || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var at = /alpha\([^)]*\)/i,
        lt = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        ut = new RegExp("^(" + Ce + ")(.*)$", "i"),
        ct = new RegExp("^([+-])=(" + Ce + ")", "i"),
        dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ft = {
            letterSpacing: 0,
            fontWeight: 400
        },
        pt = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var r = rt(e, "opacity");
                        return "" === r ? "1" : r
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, r, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, l = oe.camelCase(t),
                    s = e.style;
                if (t = oe.cssProps[l] || (oe.cssProps[l] = C(s, l)), a = oe.cssHooks[t] || oe.cssHooks[l], void 0 === r) return a && "get" in a && void 0 !== (i = a.get(e, !1, n)) ? i : s[t];
                if (o = typeof r, "string" === o && (i = ct.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(oe.css(e, t)), o = "number"), null != r && r === r && ("number" !== o || oe.cssNumber[l] || (r += "px"), ne.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), !(a && "set" in a && void 0 === (r = a.set(e, r, n))))) try {
                    s[t] = "", s[t] = r
                } catch (u) {}
            }
        },
        css: function(e, t, r, n) {
            var i, o, a, l = oe.camelCase(t);
            return t = oe.cssProps[l] || (oe.cssProps[l] = C(e.style, l)), a = oe.cssHooks[t] || oe.cssHooks[l], a && "get" in a && (o = a.get(e, !0, r)), void 0 === o && (o = rt(e, t, n)), "normal" === o && t in ft && (o = ft[t]), "" === r || r ? (i = parseFloat(o), r === !0 || oe.isNumeric(i) ? i || 0 : o) : o
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, r, n) {
                return r ? 0 === e.offsetWidth && st.test(oe.css(e, "display")) ? oe.swap(e, dt, function() {
                    return E(e, t, n)
                }) : E(e, t, n) : void 0
            },
            set: function(e, r, n) {
                var i = n && tt(e);
                return Y(e, r, n ? A(e, t, n, ne.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return lt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var r = e.style,
                n = e.currentStyle,
                i = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = n && n.filter || r.filter || "";
            r.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(o.replace(at, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || n && !n.filter) || (r.filter = at.test(o) ? o.replace(at, i) : o + " " + i)
        }
    }), oe.cssHooks.marginRight = _(ne.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, rt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(r) {
                for (var n = 0, i = {}, o = "string" == typeof r ? r.split(" ") : [r]; 4 > n; n++) i[e + Se[n] + t] = o[n] || o[n - 2] || o[0];
                return i
            }
        }, nt.test(e) || (oe.cssHooks[e + t].set = Y)
    }), oe.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, r) {
                var n, i, o = {},
                    a = 0;
                if (oe.isArray(t)) {
                    for (n = tt(e), i = t.length; i > a; a++) o[t[a]] = oe.css(e, t[a], !1, n);
                    return o
                }
                return void 0 !== r ? oe.style(e, t, r) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ye(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = Q, Q.prototype = {
        constructor: Q,
        init: function(e, t, r, n, i, o) {
            this.elem = e, this.prop = r, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (oe.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var e = Q.propHooks[this.prop];
            return e && e.get ? e.get(this) : Q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, r = Q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Q.propHooks._default.set(this), this
        }
    }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = Q.prototype.init, oe.fx.step = {};
    var ht, yt, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        bt = [I],
        wt = {
            "*": [function(e, t) {
                var r = this.createTween(e, t),
                    n = r.cur(),
                    i = gt.exec(t),
                    o = i && i[3] || (oe.cssNumber[e] ? "" : "px"),
                    a = (oe.cssNumber[e] || "px" !== o && +n) && gt.exec(oe.css(r.elem, e)),
                    l = 1,
                    s = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +n || 1;
                    do l = l || ".5", a /= l, oe.style(r.elem, e, a + o); while (l !== (l = r.cur() / n) && 1 !== l && --s)
                }
                return i && (a = r.start = +a || +n || 0, r.unit = o, r.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), r
            }]
        };
    oe.Animation = oe.extend(B, {
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var r, n = 0, i = e.length; i > n; n++) r = e[n], wt[r] = wt[r] || [], wt[r].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bt.unshift(e) : bt.push(e)
            }
        }), oe.speed = function(e, t, r) {
            var n = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: r || !r && t || oe.isFunction(e) && e,
                duration: e,
                easing: r && t || t && !oe.isFunction(t) && t
            };
            return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
            }, n
        }, oe.fn.extend({
            fadeTo: function(e, t, r, n) {
                return this.filter(Ye).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, r, n)
            },
            animate: function(e, t, r, n) {
                var i = oe.isEmptyObject(e),
                    o = oe.speed(t, r, n),
                    a = function() {
                        var t = B(this, oe.extend({}, e), o);
                        (i || oe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, r) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof e && (r = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = oe.timers,
                        a = oe._data(this);
                    if (i) a[i] && a[i].stop && n(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && vt.test(i) && n(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(r), t = !1, o.splice(i, 1));
                    !t && r || oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, r = oe._data(this),
                        n = r[e + "queue"],
                        i = r[e + "queueHooks"],
                        o = oe.timers,
                        a = n ? n.length : 0;
                    for (r.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete r.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var r = oe.fn[t];
            oe.fn[t] = function(e, n, i) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(O(t, !0), e, n, i)
            }
        }), oe.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, r, n) {
                return this.animate(t, e, r, n)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = oe.timers,
                r = 0;
            for (ht = oe.now(); r < t.length; r++) e = t[r], e() || t[r] !== e || t.splice(r--, 1);
            t.length || oe.fx.stop(), ht = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            yt || (yt = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            clearInterval(yt), yt = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
                var n = setTimeout(t, e);
                r.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var e, t, r, n, i = ye.createElement("div");
            i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], r = ye.createElement("select"), n = r.appendChild(ye.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", ne.getSetAttribute = "t" !== i.className, ne.style = /top/.test(e.getAttribute("style")), ne.hrefNormalized = "/a" === e.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = n.selected, ne.enctype = !!ye.createElement("form").enctype, r.disabled = !0, ne.optDisabled = !n.disabled, t = ye.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value, e = t = r = n = i = null
        }();
    var Tt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, r, n, i = this[0]; {
                if (arguments.length) return n = oe.isFunction(e), this.each(function(r) {
                    var i;
                    1 === this.nodeType && (i = n ? e.call(this, r, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(i, "value")) ? r : (r = i.value, "string" == typeof r ? r.replace(Tt, "") : null == r ? "" : r)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, r, n = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], l = o ? i + 1 : n.length, s = 0 > i ? l : o ? i : 0; l > s; s++)
                        if (r = n[s], (r.selected || s === i) && (ne.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !oe.nodeName(r.parentNode, "optgroup"))) {
                            if (t = oe(r).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var r, n, i = e.options, o = oe.makeArray(t), a = i.length; a--;)
                        if (n = i[a], oe.inArray(oe.valHooks.option.get(n), o) >= 0) try {
                            n.selected = r = !0
                        } catch (l) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return r || (e.selectedIndex = -1), i
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt, Pt, jt = oe.expr.attrHandle,
        kt = /^(?:checked|selected)$/i,
        _t = ne.getSetAttribute,
        Ct = ne.input;
    oe.fn.extend({
        attr: function(e, t) {
            return Ae(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, r) {
            var n, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === je ? oe.prop(e, t, r) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), n = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Pt : xt)), void 0 === r ? n && "get" in n && null !== (i = n.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i) : null !== r ? n && "set" in n && void 0 !== (i = n.set(e, r, t)) ? i : (e.setAttribute(t, r + ""), r) : void oe.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var r, n, i = 0,
                o = t && t.match(we);
            if (o && 1 === e.nodeType)
                for (; r = o[i++];) n = oe.propFix[r] || r, oe.expr.match.bool.test(r) ? Ct && _t || !kt.test(r) ? e[n] = !1 : e[oe.camelCase("default-" + r)] = e[n] = !1 : oe.attr(e, r, ""), e.removeAttribute(_t ? r : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var r = e.value;
                        return e.setAttribute("type", t), r && (e.value = r), t
                    }
                }
            }
        }
    }), Pt = {
        set: function(e, t, r) {
            return t === !1 ? oe.removeAttr(e, r) : Ct && _t || !kt.test(r) ? e.setAttribute(!_t && oe.propFix[r] || r, r) : e[oe.camelCase("default-" + r)] = e[r] = !0, r
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = jt[t] || oe.find.attr;
        jt[t] = Ct && _t || !kt.test(t) ? function(e, t, n) {
            var i, o;
            return n || (o = jt[t], jt[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, jt[t] = o), i
        } : function(e, t, r) {
            return r ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ct && _t || (oe.attrHooks.value = {
        set: function(e, t, r) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, r)
        }
    }), _t || (xt = {
        set: function(e, t, r) {
            var n = e.getAttributeNode(r);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(r)), n.value = t += "", "value" === r || t === e.getAttribute(r) ? t : void 0
        }
    }, jt.id = jt.name = jt.coords = function(e, t, r) {
        var n;
        return r ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, oe.valHooks.button = {
        get: function(e, t) {
            var r = e.getAttributeNode(t);
            return r && r.specified ? r.value : void 0
        },
        set: xt.set
    }, oe.attrHooks.contenteditable = {
        set: function(e, t, r) {
            xt.set(e, "" === t ? !1 : t, r)
        }
    }, oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(t, "auto"), r) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i,
        Yt = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ae(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, r) {
            var n, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !oe.isXMLDoc(e), o && (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== r ? i && "set" in i && void 0 !== (n = i.set(e, r, t)) ? n : e[t] = r : i && "get" in i && null !== (n = i.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || Yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var At = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, r, n, i, o, a, l = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(we) || []; s > l; l++)
                    if (r = this[l], n = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(At, " ") : " ")) {
                        for (o = 0; i = t[o++];) n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        a = oe.trim(n), r.className !== a && (r.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, r, n, i, o, a, l = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(we) || []; s > l; l++)
                    if (r = this[l], n = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(At, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; n.indexOf(" " + i + " ") >= 0;) n = n.replace(" " + i + " ", " ");
                        a = e ? oe.trim(n) : "", r.className !== a && (r.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var r = typeof e;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(r) {
                oe(this).toggleClass(e.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if ("string" === r)
                    for (var t, n = 0, i = oe(this), o = e.match(we) || []; t = o[n++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else r !== je && "boolean" !== r || (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", r = 0, n = this.length; n > r; r++)
                if (1 === this[r].nodeType && (" " + this[r].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, r) {
            return arguments.length > 0 ? this.on(t, null, e, r) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, r) {
            return this.on(e, null, t, r)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, r, n) {
            return this.on(t, e, r, n)
        },
        undelegate: function(e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }
    });
    var Et = oe.now(),
        Qt = /\?/,
        Dt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var r, n = null,
            i = oe.trim(t + "");
        return i && !oe.trim(i.replace(Dt, function(e, t, i, o) {
            return r && t && (n = 0), 0 === n ? e : (r = i || t, n += !o - !i, "")
        })) ? Function("return " + i)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function(t) {
        var r, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, r = n.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
        } catch (i) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), r
    };
    var Ot, Nt, It = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qt = {},
        Rt = {},
        Ht = "*/".concat("*");
    try {
        Nt = location.href
    } catch (Wt) {
        Nt = ye.createElement("a"), Nt.href = "", Nt = Nt.href
    }
    Ot = Ft.exec(Nt.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Nt,
            type: "GET",
            isLocal: Mt.test(Ot[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? z(z(e, oe.ajaxSettings), t) : z(oe.ajaxSettings, e)
        },
        ajaxPrefilter: M(qt),
        ajaxTransport: M(Rt),
        ajax: function(e, t) {
            function r(e, t, r, n) {
                var i, c, g, v, w, x = t;
                2 !== b && (b = 2, l && clearTimeout(l), u = void 0, a = n || "", T.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, r && (v = F(d, T, r)), v = q(d, v, T, i), i ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = v.state, c = v.data, g = v.error, i = !g)) : (g = x, !e && x || (x = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || x) + "", i ? h.resolveWith(f, [c, x, T]) : h.rejectWith(f, [T, x, g]), T.statusCode(m), m = void 0, s && p.trigger(i ? "ajaxSuccess" : "ajaxError", [T, d, i ? c : g]), y.fireWith(f, [T, x]), s && (p.trigger("ajaxComplete", [T, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, i, o, a, l, s, u, c, d = oe.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? oe(f) : oe.event,
                h = oe.Deferred(),
                y = oe.Callbacks("once memory"),
                m = d.statusCode || {},
                g = {},
                v = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Bt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var r = e.toLowerCase();
                        return b || (e = v[r] = v[r] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), r(0, t), this
                    }
                };
            if (h.promise(T).complete = y.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || Nt) + "").replace(It, "").replace(zt, Ot[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain && (n = Ft.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Ot[1] && n[2] === Ot[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ot[3] || ("http:" === Ot[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), L(qt, d, t, T), 2 === b) return T;
            s = d.global, s && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Lt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Qt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = $t.test(o) ? o.replace($t, "$1_=" + Et++) : o + (Qt.test(o) ? "&" : "?") + "_=" + Et++)), d.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) T.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](d[i]);
            if (u = L(Rt, d, t, T)) {
                T.readyState = 1, s && p.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(g, r)
                } catch (x) {
                    if (!(2 > b)) throw x;
                    r(-1, x)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, r) {
            return oe.get(e, t, r, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, r, n, i) {
            return oe.isFunction(r) && (i = i || n, n = r, r = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: i,
                data: r,
                success: n
            })
        }
    }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    r = t.contents();
                r.length ? r.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(r) {
                oe(this).wrapAll(t ? e.call(this, r) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    };
    var Vt = /%20/g,
        Ut = /\[\]$/,
        Xt = /\r?\n/g,
        Jt = /^(?:submit|button|image|reset|file)$/i,
        Kt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var r, n = [],
            i = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (r in e) R(r, e[r], t, i);
        return n.join("&").replace(Vt, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Kt.test(this.nodeName) && !Jt.test(e) && (this.checked || !Ee.test(e))
            }).map(function(e, t) {
                var r = oe(this).val();
                return null == r ? null : oe.isArray(r) ? oe.map(r, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(Xt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && H() || W()
    } : H;
    var Gt = 0,
        Zt = {},
        er = oe.ajaxSettings.xhr();
    e.ActiveXObject && oe(e).on("unload", function() {
        for (var e in Zt) Zt[e](void 0, !0)
    }), ne.cors = !!er && "withCredentials" in er, er = ne.ajax = !!er, er && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(r, n) {
                    var i, o = e.xhr(),
                        a = ++Gt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (i in r) void 0 !== r[i] && o.setRequestHeader(i, r[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(r, i) {
                        var l, s, u;
                        if (t && (i || 4 === o.readyState))
                            if (delete Zt[a], t = void 0, o.onreadystatechange = oe.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, l = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    s = o.statusText
                                } catch (c) {
                                    s = ""
                                }
                                l || !e.isLocal || e.crossDomain ? 1223 === l && (l = 204) : l = u.text ? 200 : 404
                            }
                        u && n(l, s, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, r = ye.head || oe("head")[0] || ye.documentElement;
            return {
                send: function(n, i) {
                    t = ye.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, r) {
                        (r || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, r || i(200, "success"))
                    }, r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        rr = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || oe.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, r, n) {
        var i, o, a, l = t.jsonp !== !1 && (rr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && rr.test(t.data) && "data");
        return l || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l ? t[l] = t[l].replace(rr, "$1" + i) : t.jsonp !== !1 && (t.url += (Qt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || oe.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, n.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = r.jsonpCallback, tr.push(i)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, r) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (r = t, t = !1), t = t || ye;
        var n = fe.exec(e),
            i = !r && [];
        return n ? [t.createElement(n[1])] : (n = oe.buildFragment([e], t, i), i && i.length && oe(i).remove(), oe.merge([], n.childNodes))
    };
    var nr = oe.fn.load;
    oe.fn.load = function(e, t, r) {
        if ("string" != typeof e && nr) return nr.apply(this, arguments);
        var n, i, o, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (n = e.slice(l, e.length), e = e.slice(0, l)), oe.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(n ? oe("<div>").append(oe.parseHTML(e)).find(n) : e)
        }).complete(r && function(e, t) {
            a.each(r, i || [e.responseText, t, e])
        }), this
    }, oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, r) {
            var n, i, o, a, l, s, u, c = oe.css(e, "position"),
                d = oe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), l = d.offset(), o = oe.css(e, "top"), s = oe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [o, s]) > -1, u ? (n = d.position(), a = n.top, i = n.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), oe.isFunction(t) && (t = t.call(e, r, l)), null != t.top && (f.top = t.top - l.top + a), null != t.left && (f.left = t.left - l.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, r, n = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, oe.contains(t, i) ? (typeof i.getBoundingClientRect !== je && (n = i.getBoundingClientRect()), r = V(o), {
                top: n.top + (r.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (r.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var e, t, r = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ir; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || ir
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var r = /Y/.test(t);
        oe.fn[e] = function(n) {
            return Ae(this, function(e, n, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[n] : e[n] : void(o ? o.scrollTo(r ? oe(o).scrollLeft() : i, r ? i : oe(o).scrollTop()) : e[n] = i);
            }, e, n, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = _(ne.pixelPosition, function(e, r) {
            return r ? (r = rt(e, t), it.test(r) ? oe(e).position()[t] + "px" : r) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(r, n) {
            oe.fn[n] = function(n, i) {
                var o = arguments.length && (r || "boolean" != typeof n),
                    a = r || (n === !0 || i === !0 ? "margin" : "border");
                return Ae(this, function(t, r, n) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === n ? oe.css(t, r, a) : oe.style(t, r, n, a)
                }, t, o ? n : void 0, o, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var or = e.jQuery,
        ar = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = ar), t && e.jQuery === oe && (e.jQuery = or), oe
    }, typeof t === je && (e.jQuery = e.$ = oe), oe
}),
function($) {
    "use strict";
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        hasOwn = Object.prototype.hasOwnProperty;
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(e) {
        if (null === e) return "null";
        var t, r, n, i, o = $.type(e);
        if ("undefined" !== o) {
            if ("number" === o || "boolean" === o) return String(e);
            if ("string" === o) return $.quoteString(e);
            if ("function" == typeof e.toJSON) return $.toJSON(e.toJSON());
            if ("date" === o) {
                var a = e.getUTCMonth() + 1,
                    l = e.getUTCDate(),
                    s = e.getUTCFullYear(),
                    u = e.getUTCHours(),
                    c = e.getUTCMinutes(),
                    d = e.getUTCSeconds(),
                    f = e.getUTCMilliseconds();
                return 10 > a && (a = "0" + a), 10 > l && (l = "0" + l), 10 > u && (u = "0" + u), 10 > c && (c = "0" + c), 10 > d && (d = "0" + d), 100 > f && (f = "0" + f), 10 > f && (f = "0" + f), '"' + s + "-" + a + "-" + l + "T" + u + ":" + c + ":" + d + "." + f + 'Z"'
            }
            if (t = [], $.isArray(e)) {
                for (r = 0; r < e.length; r++) t.push($.toJSON(e[r]) || "null");
                return "[" + t.join(",") + "]"
            }
            if ("object" == typeof e) {
                for (r in e)
                    if (hasOwn.call(e, r)) {
                        if (o = typeof r, "number" === o) n = '"' + r + '"';
                        else {
                            if ("string" !== o) continue;
                            n = $.quoteString(r)
                        }
                        o = typeof e[r], "function" !== o && "undefined" !== o && (i = $.toJSON(e[r]), t.push(n + ":" + i))
                    }
                return "{" + t.join(",") + "}"
            }
        }
    }, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
        return eval("(" + str + ")")
    }, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(str) {
        var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.")
    }, $.quoteString = function(e) {
        return e.match(escape) ? '"' + e.replace(escape, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        }) + '"' : '"' + e + '"'
    }
}(jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            n = e(r);
        if (!n.is("[type=submit],[type=image]")) {
            var i = n.closest("[type=submit]");
            if (0 === i.length) return;
            r = i[0]
        }
        var o = this;
        if (o.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) o.clk_x = t.offsetX, o.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var a = n.offset();
            o.clk_x = t.pageX - a.left, o.clk_y = t.pageY - a.top
        } else o.clk_x = t.pageX - r.offsetLeft, o.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            o.clk = o.clk_x = o.clk_y = null
        }, 100)
    }

    function n() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var i = {};
    i.fileapi = void 0 !== e("<input type='file'/>").get(0).files, i.formdata = void 0 !== window.FormData;
    var o = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!o) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var n, i, o = e.param(r, t.traditional).split("&"),
                a = o.length,
                l = [];
            for (n = 0; a > n; n++) o[n] = o[n].replace(/\+/g, " "), i = o[n].split("="), l.push([decodeURIComponent(i[0]), decodeURIComponent(i[1])]);
            return l
        }

        function a(n) {
            for (var i = new FormData, o = 0; o < n.length; o++) i.append(n[o].name, n[o].value);
            if (t.extraData) {
                var a = r(t.extraData);
                for (o = 0; o < a.length; o++) a[o] && i.append(a[o][0], a[o][1])
            }
            t.data = null;
            var l = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: s || "POST"
            });
            t.uploadProgress && (l.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        n = e.loaded || e.position,
                        i = e.total;
                    e.lengthComputable && (r = Math.ceil(n / i * 100)), t.uploadProgress(e, n, i, r)
                }, !1), r
            }), l.data = null;
            var u = l.beforeSend;
            return l.beforeSend = function(e, r) {
                t.formData ? r.data = t.formData : r.data = i, u && u.call(this, e, r)
            }, e.ajax(l)
        }

        function l(r) {
            function i(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    n("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    n("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function a() {
                function t() {
                    try {
                        var e = i(g).readyState;
                        n("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        n("Server abort: ", r, " (", r.name, ")"), l(_), x && clearTimeout(x), x = void 0
                    }
                }
                var r = d.attr2("target"),
                    o = d.attr2("action"),
                    a = "multipart/form-data",
                    u = d.attr("enctype") || d.attr("encoding") || a;
                P.setAttribute("target", h), s && !/post/i.test(s) || P.setAttribute("method", "POST"), o != f.url && P.setAttribute("action", f.url), f.skipEncodingOverride || s && !/post/i.test(s) || d.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), f.timeout && (x = setTimeout(function() {
                    T = !0, l(k)
                }, f.timeout));
                var c = [];
                try {
                    if (f.extraData)
                        for (var p in f.extraData) f.extraData.hasOwnProperty(p) && (e.isPlainObject(f.extraData[p]) && f.extraData[p].hasOwnProperty("name") && f.extraData[p].hasOwnProperty("value") ? c.push(e('<input type="hidden" name="' + f.extraData[p].name + '">').val(f.extraData[p].value).appendTo(P)[0]) : c.push(e('<input type="hidden" name="' + p + '">').val(f.extraData[p]).appendTo(P)[0]));
                    f.iframeTarget || m.appendTo("body"), g.attachEvent ? g.attachEvent("onload", l) : g.addEventListener("load", l, !1), setTimeout(t, 15);
                    try {
                        P.submit()
                    } catch (y) {
                        var v = document.createElement("form").submit;
                        v.apply(P)
                    }
                } finally {
                    P.setAttribute("action", o), P.setAttribute("enctype", u), r ? P.setAttribute("target", r) : d.removeAttr("target"), e(c).remove()
                }
            }

            function l(t) {
                if (!v.aborted && !E) {
                    if (A = i(g), A || (n("cannot access response document"), t = _), t === k && v) return v.abort("timeout"), void j.reject(v, "timeout");
                    if (t == _ && v) return v.abort("server abort"), void j.reject(v, "error", "server abort");
                    if (A && A.location.href != f.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", l) : g.removeEventListener("load", l, !1);
                        var r, o = "success";
                        try {
                            if (T) throw "timeout";
                            var a = "xml" == f.dataType || A.XMLDocument || e.isXMLDoc(A);
                            if (n("isXml=" + a), !a && window.opera && (null === A.body || !A.body.innerHTML) && --Q) return n("requeing onLoad callback, DOM not available"), void setTimeout(l, 250);
                            var s = A.body ? A.body : A.documentElement;
                            v.responseText = s ? s.innerHTML : null, v.responseXML = A.XMLDocument ? A.XMLDocument : A, a && (f.dataType = "xml"), v.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": f.dataType
                                };
                                return t[e.toLowerCase()]
                            }, s && (v.status = Number(s.getAttribute("status")) || v.status, v.statusText = s.getAttribute("statusText") || v.statusText);
                            var u = (f.dataType || "").toLowerCase(),
                                c = /(json|script|text)/.test(u);
                            if (c || f.textarea) {
                                var d = A.getElementsByTagName("textarea")[0];
                                if (d) v.responseText = d.value, v.status = Number(d.getAttribute("status")) || v.status, v.statusText = d.getAttribute("statusText") || v.statusText;
                                else if (c) {
                                    var h = A.getElementsByTagName("pre")[0],
                                        y = A.getElementsByTagName("body")[0];
                                    h ? v.responseText = h.textContent ? h.textContent : h.innerText : y && (v.responseText = y.textContent ? y.textContent : y.innerText)
                                }
                            } else "xml" == u && !v.responseXML && v.responseText && (v.responseXML = D(v.responseText));
                            try {
                                Y = N(v, u, f)
                            } catch (b) {
                                o = "parsererror", v.error = r = b || o
                            }
                        } catch (b) {
                            n("error caught: ", b), o = "error", v.error = r = b || o
                        }
                        v.aborted && (n("upload aborted"), o = null), v.status && (o = v.status >= 200 && v.status < 300 || 304 === v.status ? "success" : "error"), "success" === o ? (f.success && f.success.call(f.context, Y, "success", v), j.resolve(v.responseText, "success", v), p && e.event.trigger("ajaxSuccess", [v, f])) : o && (void 0 === r && (r = v.statusText), f.error && f.error.call(f.context, v, o, r), j.reject(v, "error", r), p && e.event.trigger("ajaxError", [v, f, r])), p && e.event.trigger("ajaxComplete", [v, f]), p && !--e.active && e.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, v, o), E = !0, f.timeout && clearTimeout(x), setTimeout(function() {
                            f.iframeTarget ? m.attr("src", f.iframeSrc) : m.remove(), v.responseXML = null
                        }, 100)
                    }
                }
            }
            var u, c, f, p, h, m, g, v, b, w, T, x, P = d[0],
                j = e.Deferred();
            if (j.abort = function(e) {
                    v.abort(e)
                }, r)
                for (c = 0; c < y.length; c++) u = e(y[c]), o ? u.prop("disabled", !1) : u.removeAttr("disabled");
            if (f = e.extend(!0, {}, e.ajaxSettings, t), f.context = f.context || f, h = "jqFormIO" + (new Date).getTime(), f.iframeTarget ? (m = e(f.iframeTarget), w = m.attr2("name"), w ? h = w : m.attr2("name", h)) : (m = e('<iframe name="' + h + '" src="' + f.iframeSrc + '" />'), m.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = m[0], v = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        n("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (i) {}
                        m.attr("src", f.iframeSrc), v.error = r, f.error && f.error.call(f.context, v, r, t), p && e.event.trigger("ajaxError", [v, f, r]), f.complete && f.complete.call(f.context, v, r)
                    }
                }, p = f.global, p && 0 === e.active++ && e.event.trigger("ajaxStart"), p && e.event.trigger("ajaxSend", [v, f]), f.beforeSend && f.beforeSend.call(f.context, v, f) === !1) return f.global && e.active--, j.reject(), j;
            if (v.aborted) return j.reject(), j;
            b = P.clk, b && (w = b.name, w && !b.disabled && (f.extraData = f.extraData || {}, f.extraData[w] = b.value, "image" == b.type && (f.extraData[w + ".x"] = P.clk_x, f.extraData[w + ".y"] = P.clk_y)));
            var k = 1,
                _ = 2,
                C = e("meta[name=csrf-token]").attr("content"),
                S = e("meta[name=csrf-param]").attr("content");
            S && C && (f.extraData = f.extraData || {}, f.extraData[S] = C), f.forceSync ? a() : setTimeout(a, 10);
            var Y, A, E, Q = 50,
                D = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                O = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                N = function(t, r, n) {
                    var i = t.getResponseHeader("content-type") || "",
                        o = "xml" === r || !r && i.indexOf("xml") >= 0,
                        a = o ? t.responseXML : t.responseText;
                    return o && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), n && n.dataFilter && (a = n.dataFilter(a, r)), "string" == typeof a && ("json" === r || !r && i.indexOf("json") >= 0 ? a = O(a) : ("script" === r || !r && i.indexOf("javascript") >= 0) && e.globalEval(a)), a
                };
            return j
        }
        if (!this.length) return n("ajaxSubmit: skipping submit process - no element selected"), this;
        var s, u, c, d = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), s = t.type || this.attr2("method"), u = t.url || this.attr2("action"), c = "string" == typeof u ? e.trim(u) : "", c = c || window.location.href || "", c && (c = (c.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: c,
            success: e.ajaxSettings.success,
            type: s || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var f = {};
        if (this.trigger("form-pre-serialize", [this, t, f]), f.veto) return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return n("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var h, y = [],
            m = this.formToArray(t.semantic, y);
        if (t.data && (t.extraData = t.data, h = e.param(t.data, p)), t.beforeSubmit && t.beforeSubmit(m, this, t) === !1) return n("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [m, this, t, f]), f.veto) return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(m, p);
        h && (g = g ? g + "&" + h : h), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var v = [];
        if (t.resetForm && v.push(function() {
                d.resetForm()
            }), t.clearForm && v.push(function() {
                d.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var b = t.success || function() {};
            v.push(function(r) {
                var n = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[n](r).each(b, arguments)
            })
        } else t.success && v.push(t.success);
        if (t.success = function(e, r, n) {
                for (var i = t.context || this, o = 0, a = v.length; a > o; o++) v[o].apply(i, [e, r, n || d, d])
            }, t.error) {
            var w = t.error;
            t.error = function(e, r, n) {
                var i = t.context || this;
                w.apply(i, [e, r, n, d])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var n = t.context || this;
                T.apply(n, [e, r, d])
            }
        }
        var x = e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }),
            P = x.length > 0,
            j = "multipart/form-data",
            k = d.attr("enctype") == j || d.attr("encoding") == j,
            _ = i.fileapi && i.formdata;
        n("fileAPI :" + _);
        var C, S = (P || k) && !_;
        t.iframe !== !1 && (t.iframe || S) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            C = l(m)
        }) : C = l(m) : C = (P || k) && _ ? a(m) : e.ajax(t), d.removeData("jqxhr").data("jqxhr", C);
        for (var Y = 0; Y < y.length; Y++) y[Y] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(i) {
        if (i = i || {}, i.delegation = i.delegation && e.isFunction(e.fn.on), !i.delegation && 0 === this.length) {
            var o = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && o.s ? (n("DOM not ready, queuing ajaxForm"), e(function() {
                e(o.s, o.c).ajaxForm(i)
            }), this) : (n("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return i.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, i, t).on("click.form-plugin", this.selector, i, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", i, t).bind("click.form-plugin", i, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r) {
        var n = [];
        if (0 === this.length) return n;
        var o, a = this[0],
            l = this.attr("id"),
            s = t ? a.getElementsByTagName("*") : a.elements;
        if (s && !/MSIE [678]/.test(navigator.userAgent) && (s = e(s).get()), l && (o = e(":input[form=" + l + "]").get(), o.length && (s = (s || []).concat(o))), !s || !s.length) return n;
        var u, c, d, f, p, h, y;
        for (u = 0, h = s.length; h > u; u++)
            if (p = s[u], d = p.name, d && !p.disabled)
                if (t && a.clk && "image" == p.type) a.clk == p && (n.push({
                    name: d,
                    value: e(p).val(),
                    type: p.type
                }), n.push({
                    name: d + ".x",
                    value: a.clk_x
                }, {
                    name: d + ".y",
                    value: a.clk_y
                }));
                else if (f = e.fieldValue(p, !0), f && f.constructor == Array)
            for (r && r.push(p), c = 0, y = f.length; y > c; c++) n.push({
                name: d,
                value: f[c]
            });
        else if (i.fileapi && "file" == p.type) {
            r && r.push(p);
            var m = p.files;
            if (m.length)
                for (c = 0; c < m.length; c++) n.push({
                    name: d,
                    value: m[c],
                    type: p.type
                });
            else n.push({
                name: d,
                value: "",
                type: p.type
            })
        } else null !== f && "undefined" != typeof f && (r && r.push(p), n.push({
            name: d,
            value: f,
            type: p.type,
            required: p.required
        }));
        if (!t && a.clk) {
            var g = e(a.clk),
                v = g[0];
            d = v.name, d && !v.disabled && "image" == v.type && (n.push({
                name: d,
                value: g.val()
            }), n.push({
                name: d + ".x",
                value: a.clk_x
            }, {
                name: d + ".y",
                value: a.clk_y
            }))
        }
        return n
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var n = this.name;
            if (n) {
                var i = e.fieldValue(this, t);
                if (i && i.constructor == Array)
                    for (var o = 0, a = i.length; a > o; o++) r.push({
                        name: n,
                        value: i[o]
                    });
                else null !== i && "undefined" != typeof i && r.push({
                    name: this.name,
                    value: i
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], n = 0, i = this.length; i > n; n++) {
            var o = this[n],
                a = e.fieldValue(o, t);
            null === a || "undefined" == typeof a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(r, a) : r.push(a))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var n = t.name,
            i = t.type,
            o = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!n || t.disabled || "reset" == i || "button" == i || ("checkbox" == i || "radio" == i) && !t.checked || ("submit" == i || "image" == i) && t.form && t.form.clk != t || "select" == o && -1 == t.selectedIndex)) return null;
        if ("select" == o) {
            var a = t.selectedIndex;
            if (0 > a) return null;
            for (var l = [], s = t.options, u = "select-one" == i, c = u ? a + 1 : s.length, d = u ? a : 0; c > d; d++) {
                var f = s[d];
                if (f.selected) {
                    var p = f.value;
                    if (p || (p = f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value), u) return p;
                    l.push(p)
                }
            }
            return l
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var n = this.type,
                i = this.tagName.toLowerCase();
            r.test(n) || "textarea" == i ? this.value = "" : "checkbox" == n || "radio" == n ? this.checked = !1 : "select" == i ? this.selectedIndex = -1 : "file" == n ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(n) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var n = e(this).parent("select");
                t && n[0] && "select-one" == n[0].type && n.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, r, n, i) {
            return jQuery.easing[jQuery.easing.def](e, t, r, n, i)
        },
        easeInQuad: function(e, t, r, n, i) {
            return n * (t /= i) * t + r
        },
        easeOutQuad: function(e, t, r, n, i) {
            return -n * (t /= i) * (t - 2) + r
        },
        easeInOutQuad: function(e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t + r : -n / 2 * (--t * (t - 2) - 1) + r
        },
        easeInCubic: function(e, t, r, n, i) {
            return n * (t /= i) * t * t + r
        },
        easeOutCubic: function(e, t, r, n, i) {
            return n * ((t = t / i - 1) * t * t + 1) + r
        },
        easeInOutCubic: function(e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t * t + r : n / 2 * ((t -= 2) * t * t + 2) + r
        },
        easeInQuart: function(e, t, r, n, i) {
            return n * (t /= i) * t * t * t + r
        },
        easeOutQuart: function(e, t, r, n, i) {
            return -n * ((t = t / i - 1) * t * t * t - 1) + r
        },
        easeInOutQuart: function(e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + r : -n / 2 * ((t -= 2) * t * t * t - 2) + r
        },
        easeInQuint: function(e, t, r, n, i) {
            return n * (t /= i) * t * t * t * t + r
        },
        easeOutQuint: function(e, t, r, n, i) {
            return n * ((t = t / i - 1) * t * t * t * t + 1) + r
        },
        easeInOutQuint: function(e, t, r, n, i) {
            return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + r : n / 2 * ((t -= 2) * t * t * t * t + 2) + r
        },
        easeInSine: function(e, t, r, n, i) {
            return -n * Math.cos(t / i * (Math.PI / 2)) + n + r
        },
        easeOutSine: function(e, t, r, n, i) {
            return n * Math.sin(t / i * (Math.PI / 2)) + r
        },
        easeInOutSine: function(e, t, r, n, i) {
            return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + r
        },
        easeInExpo: function(e, t, r, n, i) {
            return 0 == t ? r : n * Math.pow(2, 10 * (t / i - 1)) + r
        },
        easeOutExpo: function(e, t, r, n, i) {
            return t == i ? r + n : n * (-Math.pow(2, -10 * t / i) + 1) + r
        },
        easeInOutExpo: function(e, t, r, n, i) {
            return 0 == t ? r : t == i ? r + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + r : n / 2 * (-Math.pow(2, -10 * --t) + 2) + r
        },
        easeInCirc: function(e, t, r, n, i) {
            return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + r
        },
        easeOutCirc: function(e, t, r, n, i) {
            return n * Math.sqrt(1 - (t = t / i - 1) * t) + r
        },
        easeInOutCirc: function(e, t, r, n, i) {
            return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + r : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + r
        },
        easeInElastic: function(e, t, r, n, i) {
            var o = 1.70158,
                a = 0,
                l = n;
            if (0 == t) return r;
            if (1 == (t /= i)) return r + n;
            if (a || (a = .3 * i), l < Math.abs(n)) {
                l = n;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(n / l);
            return -(l * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / a)) + r
        },
        easeOutElastic: function(e, t, r, n, i) {
            var o = 1.70158,
                a = 0,
                l = n;
            if (0 == t) return r;
            if (1 == (t /= i)) return r + n;
            if (a || (a = .3 * i), l < Math.abs(n)) {
                l = n;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(n / l);
            return l * Math.pow(2, -10 * t) * Math.sin((t * i - o) * (2 * Math.PI) / a) + n + r
        },
        easeInOutElastic: function(e, t, r, n, i) {
            var o = 1.70158,
                a = 0,
                l = n;
            if (0 == t) return r;
            if (2 == (t /= i / 2)) return r + n;
            if (a || (a = i * (.3 * 1.5)), l < Math.abs(n)) {
                l = n;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(n / l);
            return 1 > t ? -.5 * (l * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / a)) + r : l * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / a) * .5 + n + r
        },
        easeInBack: function(e, t, r, n, i, o) {
            return void 0 == o && (o = 1.70158), n * (t /= i) * t * ((o + 1) * t - o) + r
        },
        easeOutBack: function(e, t, r, n, i, o) {
            return void 0 == o && (o = 1.70158), n * ((t = t / i - 1) * t * ((o + 1) * t + o) + 1) + r
        },
        easeInOutBack: function(e, t, r, n, i, o) {
            return void 0 == o && (o = 1.70158), (t /= i / 2) < 1 ? n / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + r : n / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + r
        },
        easeInBounce: function(e, t, r, n, i) {
            return n - jQuery.easing.easeOutBounce(e, i - t, 0, n, i) + r
        },
        easeOutBounce: function(e, t, r, n, i) {
            return (t /= i) < 1 / 2.75 ? n * (7.5625 * t * t) + r : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + r : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + r : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + r
        },
        easeInOutBounce: function(e, t, r, n, i) {
            return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, i) + r : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, n, i) + .5 * n + r
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(e) {
            return l.raw ? e : encodeURIComponent(e)
        }

        function r(e) {
            return l.raw ? e : decodeURIComponent(e)
        }

        function n(e) {
            return t(l.json ? JSON.stringify(e) : String(e))
        }

        function i(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                e = decodeURIComponent(e.replace(a, " "))
            } catch (t) {
                return
            }
            try {
                return l.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function o(t, r) {
            var n = l.raw ? t : i(t);
            return e.isFunction(r) ? r(n) : n
        }
        var a = /\+/g,
            l = e.cookie = function(i, a, s) {
                if (void 0 !== a && !e.isFunction(a)) {
                    if (s = e.extend({}, l.defaults, s), "number" == typeof s.expires) {
                        var u = s.expires,
                            c = s.expires = new Date;
                        c.setDate(c.getDate() + u)
                    }
                    return document.cookie = [t(i), "=", n(a), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
                }
                for (var d = i ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, h = f.length; h > p; p++) {
                    var y = f[p].split("="),
                        m = r(y.shift()),
                        g = y.join("=");
                    if (i && i === m) {
                        d = o(g, a);
                        break
                    }
                    i || void 0 === (g = o(g)) || (d[m] = g)
                }
                return d
            };
        l.defaults = {}, e.removeCookie = function(t, r) {
            return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend({}, r, {
                expires: -1
            })), !0) : !1
        }
    }),
    function(e, t, r, n) {
        function i(e, t) {
            return e[t] === n ? b[t] : e[t]
        }

        function o() {
            var e = t.pageYOffset;
            return e === n ? g.scrollTop : e
        }

        function a(e, t) {
            var r = b["on" + e];
            r && (x(r) ? r.call(t[0]) : (r.addClass && t.addClass(r.addClass), r.removeClass && t.removeClass(r.removeClass))), t.trigger("lazy" + e, [t]), c()
        }

        function l(t) {
            a(t.type, e(this).off(y, l))
        }

        function s(r) {
            if (_.length) {
                r = r || b.forceLoad, C = 1 / 0;
                var n, i, s = o(),
                    u = t.innerHeight || g.clientHeight,
                    c = t.innerWidth || g.clientWidth;
                for (n = 0, i = _.length; i > n; n++) {
                    var d, f = _[n],
                        h = f[0],
                        m = f[p],
                        v = !1,
                        w = r;
                    if (k(g, h)) {
                        if (r || !m.visibleOnly || h.offsetWidth || h.offsetHeight) {
                            if (!w) {
                                var T = h.getBoundingClientRect(),
                                    P = m.edgeX,
                                    j = m.edgeY;
                                d = T.top + s - j - u, w = s >= d && T.bottom > -j && T.left <= c + P && T.right > -P
                            }
                            if (w) {
                                a("show", f);
                                var S = m.srcAttr,
                                    Y = x(S) ? S(f) : h.getAttribute(S);
                                Y && (f.on(y, l), h.src = Y), v = !0
                            } else C > d && (C = d)
                        }
                    } else v = !0;
                    v && (_.splice(n--, 1), i--)
                }
                i || a("complete", e(g))
            }
        }

        function u() {
            S > 1 ? (S = 1, s(), setTimeout(u, b.throttle)) : S = 0
        }

        function c(e) {
            _.length && (e && "scroll" === e.type && e.currentTarget === t && C >= o() || (S || setTimeout(u, 0), S = 2))
        }

        function d() {
            T.lazyLoadXT()
        }

        function f() {
            s(!0)
        }
        var p = "lazyLoadXT",
            h = "lazied",
            y = "load error",
            m = "lazy-hidden",
            g = r.documentElement || r.body,
            v = t.onscroll === n || !!t.operamini || !g.getBoundingClientRect,
            b = {
                autoInit: !0,
                selector: "img[data-src]",
                blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                throttle: 99,
                forceLoad: v,
                loadEvent: "pageshow",
                updateEvent: "load orientationchange resize scroll touchmove focus",
                forceEvent: "",
                oninit: {
                    removeClass: "lazy"
                },
                onshow: {
                    addClass: m
                },
                onload: {
                    removeClass: m,
                    addClass: "lazy-loaded"
                },
                onerror: {
                    removeClass: m
                },
                checkDuplicates: !0
            },
            w = {
                srcAttr: "data-src",
                edgeX: 0,
                edgeY: 0,
                visibleOnly: !0
            },
            T = e(t),
            x = e.isFunction,
            P = e.extend,
            j = e.data || function(t, r) {
                return e(t).data(r)
            },
            k = e.contains || function(e, t) {
                for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
            },
            _ = [],
            C = 0,
            S = 0;
        e[p] = P(b, w, e[p]), e.fn[p] = function(r) {
            r = r || {};
            var n, o = i(r, "blankImage"),
                l = i(r, "checkDuplicates"),
                s = i(r, "scrollContainer"),
                u = {};
            e(s).on("scroll", c);
            for (n in w) u[n] = i(r, n);
            return this.each(function(n, i) {
                if (i === t) e(b.selector).lazyLoadXT(r);
                else {
                    if (l && j(i, h)) return;
                    var s = e(i).data(h, 1);
                    o && "IMG" === i.tagName && !i.src && (i.src = o), s[p] = P({}, u), a("init", s), _.push(s)
                }
            })
        }, e(r).ready(function() {
            a("start", T), T.on(b.loadEvent, d).on(b.updateEvent, c).on(b.forceEvent, f), e(r).on(b.updateEvent, c), b.autoInit && d()
        })
    }(window.jQuery || window.Zepto || window.$, window, document),
    function() {
        function e(e, t, r) {
            for (var n = (r || 0) - 1, i = e ? e.length : 0; ++n < i;)
                if (e[n] === t) return n;
            return -1
        }

        function t(t, r) {
            var n = typeof r;
            if (t = t.cache, "boolean" == n || null == r) return t[r] ? 0 : -1;
            "number" != n && "string" != n && (n = "object");
            var i = "number" == n ? r : g + r;
            return t = (t = t[n]) && t[i], "object" == n ? t && e(t, r) > -1 ? 0 : -1 : t ? 0 : -1
        }

        function r(e) {
            var t = this.cache,
                r = typeof e;
            if ("boolean" == r || null == e) t[e] = !0;
            else {
                "number" != r && "string" != r && (r = "object");
                var n = "number" == r ? e : g + e,
                    i = t[r] || (t[r] = {});
                "object" == r ? (i[n] || (i[n] = [])).push(e) : i[n] = !0
            }
        }

        function n(e) {
            return e.charCodeAt(0)
        }

        function i(e, t) {
            for (var r = e.criteria, n = t.criteria, i = -1, o = r.length; ++i < o;) {
                var a = r[i],
                    l = n[i];
                if (a !== l) {
                    if (a > l || "undefined" == typeof a) return 1;
                    if (l > a || "undefined" == typeof l) return -1
                }
            }
            return e.index - t.index
        }

        function o(e) {
            var t = -1,
                n = e.length,
                i = e[0],
                o = e[n / 2 | 0],
                a = e[n - 1];
            if (i && "object" == typeof i && o && "object" == typeof o && a && "object" == typeof a) return !1;
            var l = s();
            l["false"] = l["null"] = l["true"] = l.undefined = !1;
            var u = s();
            for (u.array = e, u.cache = l, u.push = r; ++t < n;) u.push(e[t]);
            return u
        }

        function a(e) {
            return "\\" + V[e]
        }

        function l() {
            return h.pop() || []
        }

        function s() {
            return y.pop() || {
                array: null,
                cache: null,
                criteria: null,
                "false": !1,
                index: 0,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                undefined: !1,
                value: null
            }
        }

        function u(e) {
            e.length = 0, h.length < b && h.push(e)
        }

        function c(e) {
            var t = e.cache;
            t && c(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, y.length < b && y.push(e)
        }

        function d(e, t, r) {
            t || (t = 0), "undefined" == typeof r && (r = e ? e.length : 0);
            for (var n = -1, i = r - t || 0, o = Array(0 > i ? 0 : i); ++n < i;) o[n] = e[t + n];
            return o
        }

        function f(r) {
            function h(e) {
                return e && "object" == typeof e && !Kr(e) && Dr.call(e, "__wrapped__") ? e : new y(e)
            }

            function y(e, t) {
                this.__chain__ = !!t, this.__wrapped__ = e
            }

            function b(e) {
                function t() {
                    if (n) {
                        var e = d(n);
                        Or.apply(e, arguments)
                    }
                    if (this instanceof t) {
                        var o = X(r.prototype),
                            a = r.apply(o, e || arguments);
                        return Ae(a) ? a : o
                    }
                    return r.apply(i, e || arguments)
                }
                var r = e[0],
                    n = e[2],
                    i = e[4];
                return Jr(t, e), t
            }

            function V(e, t, r, n, i) {
                if (r) {
                    var o = r(e);
                    if ("undefined" != typeof o) return o
                }
                var a = Ae(e);
                if (!a) return e;
                var s = _r.call(e);
                if (!q[s]) return e;
                var c = Ur[s];
                switch (s) {
                    case I:
                    case $:
                        return new c(+e);
                    case M:
                    case F:
                        return new c(e);
                    case z:
                        return o = c(e.source, k.exec(e)), o.lastIndex = e.lastIndex, o
                }
                var f = Kr(e);
                if (t) {
                    var p = !n;
                    n || (n = l()), i || (i = l());
                    for (var h = n.length; h--;)
                        if (n[h] == e) return i[h];
                    o = f ? c(e.length) : {}
                } else o = f ? d(e) : on({}, e);
                return f && (Dr.call(e, "index") && (o.index = e.index), Dr.call(e, "input") && (o.input = e.input)), t ? (n.push(e), i.push(o), (f ? Je : sn)(e, function(e, a) {
                    o[a] = V(e, t, r, n, i)
                }), p && (u(n), u(i)), o) : o
            }

            function X(e, t) {
                return Ae(e) ? Mr(e) : {}
            }

            function J(e, t, r) {
                if ("function" != typeof e) return Kt;
                if ("undefined" == typeof t || !("prototype" in e)) return e;
                var n = e.__bindData__;
                if ("undefined" == typeof n && (Xr.funcNames && (n = !e.name), n = n || !Xr.funcDecomp, !n)) {
                    var i = Er.call(e);
                    Xr.funcNames || (n = !_.test(i)), n || (n = A.test(i), Jr(e, n))
                }
                if (n === !1 || n !== !0 && 1 & n[1]) return e;
                switch (r) {
                    case 1:
                        return function(r) {
                            return e.call(t, r)
                        };
                    case 2:
                        return function(r, n) {
                            return e.call(t, r, n)
                        };
                    case 3:
                        return function(r, n, i) {
                            return e.call(t, r, n, i)
                        };
                    case 4:
                        return function(r, n, i, o) {
                            return e.call(t, r, n, i, o)
                        }
                }
                return Ot(e, t)
            }

            function K(e) {
                function t() {
                    var e = s ? a : this;
                    if (i) {
                        var h = d(i);
                        Or.apply(h, arguments)
                    }
                    if ((o || c) && (h || (h = d(arguments)), o && Or.apply(h, o), c && h.length < l)) return n |= 16, K([r, f ? n : -4 & n, h, null, a, l]);
                    if (h || (h = arguments), u && (r = e[p]), this instanceof t) {
                        e = X(r.prototype);
                        var y = r.apply(e, h);
                        return Ae(y) ? y : e
                    }
                    return r.apply(e, h)
                }
                var r = e[0],
                    n = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    l = e[5],
                    s = 1 & n,
                    u = 2 & n,
                    c = 4 & n,
                    f = 8 & n,
                    p = r;
                return Jr(t, e), t
            }

            function G(r, n) {
                var i = -1,
                    a = se(),
                    l = r ? r.length : 0,
                    s = l >= v && a === e,
                    u = [];
                if (s) {
                    var d = o(n);
                    d ? (a = t, n = d) : s = !1
                }
                for (; ++i < l;) {
                    var f = r[i];
                    a(n, f) < 0 && u.push(f)
                }
                return s && c(n), u
            }

            function ee(e, t, r, n) {
                for (var i = (n || 0) - 1, o = e ? e.length : 0, a = []; ++i < o;) {
                    var l = e[i];
                    if (l && "object" == typeof l && "number" == typeof l.length && (Kr(l) || fe(l))) {
                        t || (l = ee(l, t, r));
                        var s = -1,
                            u = l.length,
                            c = a.length;
                        for (a.length += u; ++s < u;) a[c++] = l[s]
                    } else r || a.push(l)
                }
                return a
            }

            function te(e, t, r, n, i, o) {
                if (r) {
                    var a = r(e, t);
                    if ("undefined" != typeof a) return !!a
                }
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                var s = typeof e,
                    c = typeof t;
                if (!(e !== e || e && W[s] || t && W[c])) return !1;
                if (null == e || null == t) return e === t;
                var d = _r.call(e),
                    f = _r.call(t);
                if (d == O && (d = L), f == O && (f = L), d != f) return !1;
                switch (d) {
                    case I:
                    case $:
                        return +e == +t;
                    case M:
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case z:
                    case F:
                        return e == Tr(t)
                }
                var p = d == N;
                if (!p) {
                    var h = Dr.call(e, "__wrapped__"),
                        y = Dr.call(t, "__wrapped__");
                    if (h || y) return te(h ? e.__wrapped__ : e, y ? t.__wrapped__ : t, r, n, i, o);
                    if (d != L) return !1;
                    var m = e.constructor,
                        g = t.constructor;
                    if (m != g && !(Ye(m) && m instanceof m && Ye(g) && g instanceof g) && "constructor" in e && "constructor" in t) return !1
                }
                var v = !i;
                i || (i = l()), o || (o = l());
                for (var b = i.length; b--;)
                    if (i[b] == e) return o[b] == t;
                var w = 0;
                if (a = !0, i.push(e), o.push(t), p) {
                    if (b = e.length, w = t.length, a = w == b, a || n)
                        for (; w--;) {
                            var T = b,
                                x = t[w];
                            if (n)
                                for (; T-- && !(a = te(e[T], x, r, n, i, o)););
                            else if (!(a = te(e[w], x, r, n, i, o))) break
                        }
                } else ln(t, function(t, l, s) {
                    return Dr.call(s, l) ? (w++, a = Dr.call(e, l) && te(e[l], t, r, n, i, o)) : void 0
                }), a && !n && ln(e, function(e, t, r) {
                    return Dr.call(r, t) ? a = --w > -1 : void 0
                });
                return i.pop(), o.pop(), v && (u(i), u(o)), a
            }

            function re(e, t, r, n, i) {
                (Kr(t) ? Je : sn)(t, function(t, o) {
                    var a, l, s = t,
                        u = e[o];
                    if (t && ((l = Kr(t)) || un(t))) {
                        for (var c = n.length; c--;)
                            if (a = n[c] == t) {
                                u = i[c];
                                break
                            }
                        if (!a) {
                            var d;
                            r && (s = r(u, t), (d = "undefined" != typeof s) && (u = s)), d || (u = l ? Kr(u) ? u : [] : un(u) ? u : {}), n.push(t), i.push(u), d || re(u, t, r, n, i)
                        }
                    } else r && (s = r(u, t), "undefined" == typeof s && (s = t)), "undefined" != typeof s && (u = s);
                    e[o] = u
                })
            }

            function ne(e, t) {
                return e + Ar(Vr() * (t - e + 1))
            }

            function ie(r, n, i) {
                var a = -1,
                    s = se(),
                    d = r ? r.length : 0,
                    f = [],
                    p = !n && d >= v && s === e,
                    h = i || p ? l() : f;
                if (p) {
                    var y = o(h);
                    s = t, h = y
                }
                for (; ++a < d;) {
                    var m = r[a],
                        g = i ? i(m, a, r) : m;
                    (n ? !a || h[h.length - 1] !== g : s(h, g) < 0) && ((i || p) && h.push(g), f.push(m))
                }
                return p ? (u(h.array), c(h)) : i && u(h), f
            }

            function oe(e) {
                return function(t, r, n) {
                    var i = {};
                    r = h.createCallback(r, n, 3);
                    var o = -1,
                        a = t ? t.length : 0;
                    if ("number" == typeof a)
                        for (; ++o < a;) {
                            var l = t[o];
                            e(i, l, r(l, o, t), t)
                        } else sn(t, function(t, n, o) {
                            e(i, t, r(t, n, o), o)
                        });
                    return i
                }
            }

            function ae(e, t, r, n, i, o) {
                var a = 1 & t,
                    l = 2 & t,
                    s = 4 & t,
                    u = 16 & t,
                    c = 32 & t;
                if (!l && !Ye(e)) throw new xr;
                u && !r.length && (t &= -17, u = r = !1), c && !n.length && (t &= -33, c = n = !1);
                var f = e && e.__bindData__;
                if (f && f !== !0) return f = d(f), f[2] && (f[2] = d(f[2])), f[3] && (f[3] = d(f[3])), !a || 1 & f[1] || (f[4] = i), !a && 1 & f[1] && (t |= 8), !s || 4 & f[1] || (f[5] = o), u && Or.apply(f[2] || (f[2] = []), r), c && $r.apply(f[3] || (f[3] = []), n), f[1] |= t, ae.apply(null, f);
                var p = 1 == t || 17 === t ? b : K;
                return p([e, t, r, n, i, o])
            }

            function le(e) {
                return en[e]
            }

            function se() {
                var t = (t = h.indexOf) === gt ? e : t;
                return t
            }

            function ue(e) {
                return "function" == typeof e && Cr.test(e)
            }

            function ce(e) {
                var t, r;
                return e && _r.call(e) == L && (t = e.constructor, !Ye(t) || t instanceof t) ? (ln(e, function(e, t) {
                    r = t
                }), "undefined" == typeof r || Dr.call(e, r)) : !1
            }

            function de(e) {
                return tn[e]
            }

            function fe(e) {
                return e && "object" == typeof e && "number" == typeof e.length && _r.call(e) == O || !1
            }

            function pe(e, t, r, n) {
                return "boolean" != typeof t && null != t && (n = r, r = t, t = !1), V(e, t, "function" == typeof r && J(r, n, 1))
            }

            function he(e, t, r) {
                return V(e, !0, "function" == typeof t && J(t, r, 1))
            }

            function ye(e, t) {
                var r = X(e);
                return t ? on(r, t) : r
            }

            function me(e, t, r) {
                var n;
                return t = h.createCallback(t, r, 3), sn(e, function(e, r, i) {
                    return t(e, r, i) ? (n = r, !1) : void 0
                }), n
            }

            function ge(e, t, r) {
                var n;
                return t = h.createCallback(t, r, 3), be(e, function(e, r, i) {
                    return t(e, r, i) ? (n = r, !1) : void 0;
                }), n
            }

            function ve(e, t, r) {
                var n = [];
                ln(e, function(e, t) {
                    n.push(t, e)
                });
                var i = n.length;
                for (t = J(t, r, 3); i-- && t(n[i--], n[i], e) !== !1;);
                return e
            }

            function be(e, t, r) {
                var n = Zr(e),
                    i = n.length;
                for (t = J(t, r, 3); i--;) {
                    var o = n[i];
                    if (t(e[o], o, e) === !1) break
                }
                return e
            }

            function we(e) {
                var t = [];
                return ln(e, function(e, r) {
                    Ye(e) && t.push(r)
                }), t.sort()
            }

            function Te(e, t) {
                return e ? Dr.call(e, t) : !1
            }

            function xe(e) {
                for (var t = -1, r = Zr(e), n = r.length, i = {}; ++t < n;) {
                    var o = r[t];
                    i[e[o]] = o
                }
                return i
            }

            function Pe(e) {
                return e === !0 || e === !1 || e && "object" == typeof e && _r.call(e) == I || !1
            }

            function je(e) {
                return e && "object" == typeof e && _r.call(e) == $ || !1
            }

            function ke(e) {
                return e && 1 === e.nodeType || !1
            }

            function _e(e) {
                var t = !0;
                if (!e) return t;
                var r = _r.call(e),
                    n = e.length;
                return r == N || r == F || r == O || r == L && "number" == typeof n && Ye(e.splice) ? !n : (sn(e, function() {
                    return t = !1
                }), t)
            }

            function Ce(e, t, r, n) {
                return te(e, t, "function" == typeof r && J(r, n, 2))
            }

            function Se(e) {
                return zr(e) && !Fr(parseFloat(e))
            }

            function Ye(e) {
                return "function" == typeof e
            }

            function Ae(e) {
                return !(!e || !W[typeof e])
            }

            function Ee(e) {
                return De(e) && e != +e
            }

            function Qe(e) {
                return null === e
            }

            function De(e) {
                return "number" == typeof e || e && "object" == typeof e && _r.call(e) == M || !1
            }

            function Oe(e) {
                return e && "object" == typeof e && _r.call(e) == z || !1
            }

            function Ne(e) {
                return "string" == typeof e || e && "object" == typeof e && _r.call(e) == F || !1
            }

            function Ie(e) {
                return "undefined" == typeof e
            }

            function $e(e, t, r) {
                var n = {};
                return t = h.createCallback(t, r, 3), sn(e, function(e, r, i) {
                    n[r] = t(e, r, i)
                }), n
            }

            function Be(e) {
                var t = arguments,
                    r = 2;
                if (!Ae(e)) return e;
                if ("number" != typeof t[2] && (r = t.length), r > 3 && "function" == typeof t[r - 2]) var n = J(t[--r - 1], t[r--], 2);
                else r > 2 && "function" == typeof t[r - 1] && (n = t[--r]);
                for (var i = d(arguments, 1, r), o = -1, a = l(), s = l(); ++o < r;) re(e, i[o], n, a, s);
                return u(a), u(s), e
            }

            function Me(e, t, r) {
                var n = {};
                if ("function" != typeof t) {
                    var i = [];
                    ln(e, function(e, t) {
                        i.push(t)
                    }), i = G(i, ee(arguments, !0, !1, 1));
                    for (var o = -1, a = i.length; ++o < a;) {
                        var l = i[o];
                        n[l] = e[l]
                    }
                } else t = h.createCallback(t, r, 3), ln(e, function(e, r, i) {
                    t(e, r, i) || (n[r] = e)
                });
                return n
            }

            function Le(e) {
                for (var t = -1, r = Zr(e), n = r.length, i = pr(n); ++t < n;) {
                    var o = r[t];
                    i[t] = [o, e[o]]
                }
                return i
            }

            function ze(e, t, r) {
                var n = {};
                if ("function" != typeof t)
                    for (var i = -1, o = ee(arguments, !0, !1, 1), a = Ae(e) ? o.length : 0; ++i < a;) {
                        var l = o[i];
                        l in e && (n[l] = e[l])
                    } else t = h.createCallback(t, r, 3), ln(e, function(e, r, i) {
                        t(e, r, i) && (n[r] = e)
                    });
                return n
            }

            function Fe(e, t, r, n) {
                var i = Kr(e);
                if (null == r)
                    if (i) r = [];
                    else {
                        var o = e && e.constructor,
                            a = o && o.prototype;
                        r = X(a)
                    }
                return t && (t = h.createCallback(t, n, 4), (i ? Je : sn)(e, function(e, n, i) {
                    return t(r, e, n, i)
                })), r
            }

            function qe(e) {
                for (var t = -1, r = Zr(e), n = r.length, i = pr(n); ++t < n;) i[t] = e[r[t]];
                return i
            }

            function Re(e) {
                for (var t = arguments, r = -1, n = ee(t, !0, !1, 1), i = t[2] && t[2][t[1]] === e ? 1 : n.length, o = pr(i); ++r < i;) o[r] = e[n[r]];
                return o
            }

            function He(e, t, r) {
                var n = -1,
                    i = se(),
                    o = e ? e.length : 0,
                    a = !1;
                return r = (0 > r ? Rr(0, o + r) : r) || 0, Kr(e) ? a = i(e, t, r) > -1 : "number" == typeof o ? a = (Ne(e) ? e.indexOf(t, r) : i(e, t, r)) > -1 : sn(e, function(e) {
                    return ++n >= r ? !(a = e === t) : void 0
                }), a
            }

            function We(e, t, r) {
                var n = !0;
                t = h.createCallback(t, r, 3);
                var i = -1,
                    o = e ? e.length : 0;
                if ("number" == typeof o)
                    for (; ++i < o && (n = !!t(e[i], i, e)););
                else sn(e, function(e, r, i) {
                    return n = !!t(e, r, i)
                });
                return n
            }

            function Ve(e, t, r) {
                var n = [];
                t = h.createCallback(t, r, 3);
                var i = -1,
                    o = e ? e.length : 0;
                if ("number" == typeof o)
                    for (; ++i < o;) {
                        var a = e[i];
                        t(a, i, e) && n.push(a)
                    } else sn(e, function(e, r, i) {
                        t(e, r, i) && n.push(e)
                    });
                return n
            }

            function Ue(e, t, r) {
                t = h.createCallback(t, r, 3);
                var n = -1,
                    i = e ? e.length : 0;
                if ("number" != typeof i) {
                    var o;
                    return sn(e, function(e, r, n) {
                        return t(e, r, n) ? (o = e, !1) : void 0
                    }), o
                }
                for (; ++n < i;) {
                    var a = e[n];
                    if (t(a, n, e)) return a
                }
            }

            function Xe(e, t, r) {
                var n;
                return t = h.createCallback(t, r, 3), Ke(e, function(e, r, i) {
                    return t(e, r, i) ? (n = e, !1) : void 0
                }), n
            }

            function Je(e, t, r) {
                var n = -1,
                    i = e ? e.length : 0;
                if (t = t && "undefined" == typeof r ? t : J(t, r, 3), "number" == typeof i)
                    for (; ++n < i && t(e[n], n, e) !== !1;);
                else sn(e, t);
                return e
            }

            function Ke(e, t, r) {
                var n = e ? e.length : 0;
                if (t = t && "undefined" == typeof r ? t : J(t, r, 3), "number" == typeof n)
                    for (; n-- && t(e[n], n, e) !== !1;);
                else {
                    var i = Zr(e);
                    n = i.length, sn(e, function(e, r, o) {
                        return r = i ? i[--n] : --n, t(o[r], r, o)
                    })
                }
                return e
            }

            function Ge(e, t) {
                var r = d(arguments, 2),
                    n = -1,
                    i = "function" == typeof t,
                    o = e ? e.length : 0,
                    a = pr("number" == typeof o ? o : 0);
                return Je(e, function(e) {
                    a[++n] = (i ? t : e[t]).apply(e, r)
                }), a
            }

            function Ze(e, t, r) {
                var n = -1,
                    i = e ? e.length : 0;
                if (t = h.createCallback(t, r, 3), "number" == typeof i)
                    for (var o = pr(i); ++n < i;) o[n] = t(e[n], n, e);
                else o = [], sn(e, function(e, r, i) {
                    o[++n] = t(e, r, i)
                });
                return o
            }

            function et(e, t, r) {
                var i = -(1 / 0),
                    o = i;
                if ("function" != typeof t && r && r[t] === e && (t = null), null == t && Kr(e))
                    for (var a = -1, l = e.length; ++a < l;) {
                        var s = e[a];
                        s > o && (o = s)
                    } else t = null == t && Ne(e) ? n : h.createCallback(t, r, 3), Je(e, function(e, r, n) {
                        var a = t(e, r, n);
                        a > i && (i = a, o = e)
                    });
                return o
            }

            function tt(e, t, r) {
                var i = 1 / 0,
                    o = i;
                if ("function" != typeof t && r && r[t] === e && (t = null), null == t && Kr(e))
                    for (var a = -1, l = e.length; ++a < l;) {
                        var s = e[a];
                        o > s && (o = s)
                    } else t = null == t && Ne(e) ? n : h.createCallback(t, r, 3), Je(e, function(e, r, n) {
                        var a = t(e, r, n);
                        i > a && (i = a, o = e)
                    });
                return o
            }

            function rt(e, t, r, n) {
                if (!e) return r;
                var i = arguments.length < 3;
                t = h.createCallback(t, n, 4);
                var o = -1,
                    a = e.length;
                if ("number" == typeof a)
                    for (i && (r = e[++o]); ++o < a;) r = t(r, e[o], o, e);
                else sn(e, function(e, n, o) {
                    r = i ? (i = !1, e) : t(r, e, n, o)
                });
                return r
            }

            function nt(e, t, r, n) {
                var i = arguments.length < 3;
                return t = h.createCallback(t, n, 4), Ke(e, function(e, n, o) {
                    r = i ? (i = !1, e) : t(r, e, n, o)
                }), r
            }

            function it(e, t, r) {
                return t = h.createCallback(t, r, 3), Ve(e, function(e, r, n) {
                    return !t(e, r, n)
                })
            }

            function ot(e, t, r) {
                if (e && "number" != typeof e.length && (e = qe(e)), null == t || r) return e ? e[ne(0, e.length - 1)] : p;
                var n = at(e);
                return n.length = Hr(Rr(0, t), n.length), n
            }

            function at(e) {
                var t = -1,
                    r = e ? e.length : 0,
                    n = pr("number" == typeof r ? r : 0);
                return Je(e, function(e) {
                    var r = ne(0, ++t);
                    n[t] = n[r], n[r] = e
                }), n
            }

            function lt(e) {
                var t = e ? e.length : 0;
                return "number" == typeof t ? t : Zr(e).length
            }

            function st(e, t, r) {
                var n;
                t = h.createCallback(t, r, 3);
                var i = -1,
                    o = e ? e.length : 0;
                if ("number" == typeof o)
                    for (; ++i < o && !(n = t(e[i], i, e)););
                else sn(e, function(e, r, i) {
                    return !(n = t(e, r, i))
                });
                return !!n
            }

            function ut(e, t, r) {
                var n = -1,
                    o = Kr(t),
                    a = e ? e.length : 0,
                    d = pr("number" == typeof a ? a : 0);
                for (o || (t = h.createCallback(t, r, 3)), Je(e, function(e, r, i) {
                        var a = d[++n] = s();
                        o ? a.criteria = Ze(t, function(t) {
                            return e[t]
                        }) : (a.criteria = l())[0] = t(e, r, i), a.index = n, a.value = e
                    }), a = d.length, d.sort(i); a--;) {
                    var f = d[a];
                    d[a] = f.value, o || u(f.criteria), c(f)
                }
                return d
            }

            function ct(e) {
                return e && "number" == typeof e.length ? d(e) : qe(e)
            }

            function dt(e) {
                for (var t = -1, r = e ? e.length : 0, n = []; ++t < r;) {
                    var i = e[t];
                    i && n.push(i)
                }
                return n
            }

            function ft(e) {
                return G(e, ee(arguments, !0, !0, 1))
            }

            function pt(e, t, r) {
                var n = -1,
                    i = e ? e.length : 0;
                for (t = h.createCallback(t, r, 3); ++n < i;)
                    if (t(e[n], n, e)) return n;
                return -1
            }

            function ht(e, t, r) {
                var n = e ? e.length : 0;
                for (t = h.createCallback(t, r, 3); n--;)
                    if (t(e[n], n, e)) return n;
                return -1
            }

            function yt(e, t, r) {
                var n = 0,
                    i = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var o = -1;
                    for (t = h.createCallback(t, r, 3); ++o < i && t(e[o], o, e);) n++
                } else if (n = t, null == n || r) return e ? e[0] : p;
                return d(e, 0, Hr(Rr(0, n), i))
            }

            function mt(e, t, r, n) {
                return "boolean" != typeof t && null != t && (n = r, r = "function" != typeof t && n && n[t] === e ? null : t, t = !1), null != r && (e = Ze(e, r, n)), ee(e, t)
            }

            function gt(t, r, n) {
                if ("number" == typeof n) {
                    var i = t ? t.length : 0;
                    n = 0 > n ? Rr(0, i + n) : n || 0
                } else if (n) {
                    var o = _t(t, r);
                    return t[o] === r ? o : -1
                }
                return e(t, r, n)
            }

            function vt(e, t, r) {
                var n = 0,
                    i = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var o = i;
                    for (t = h.createCallback(t, r, 3); o-- && t(e[o], o, e);) n++
                } else n = null == t || r ? 1 : t || n;
                return d(e, 0, Hr(Rr(0, i - n), i))
            }

            function bt() {
                for (var r = [], n = -1, i = arguments.length, a = l(), s = se(), d = s === e, f = l(); ++n < i;) {
                    var p = arguments[n];
                    (Kr(p) || fe(p)) && (r.push(p), a.push(d && p.length >= v && o(n ? r[n] : f)))
                }
                var h = r[0],
                    y = -1,
                    m = h ? h.length : 0,
                    g = [];
                e: for (; ++y < m;) {
                    var b = a[0];
                    if (p = h[y], (b ? t(b, p) : s(f, p)) < 0) {
                        for (n = i, (b || f).push(p); --n;)
                            if (b = a[n], (b ? t(b, p) : s(r[n], p)) < 0) continue e;
                        g.push(p)
                    }
                }
                for (; i--;) b = a[i], b && c(b);
                return u(a), u(f), g
            }

            function wt(e, t, r) {
                var n = 0,
                    i = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var o = i;
                    for (t = h.createCallback(t, r, 3); o-- && t(e[o], o, e);) n++
                } else if (n = t, null == n || r) return e ? e[i - 1] : p;
                return d(e, Rr(0, i - n))
            }

            function Tt(e, t, r) {
                var n = e ? e.length : 0;
                for ("number" == typeof r && (n = (0 > r ? Rr(0, n + r) : Hr(r, n - 1)) + 1); n--;)
                    if (e[n] === t) return n;
                return -1
            }

            function xt(e) {
                for (var t = arguments, r = 0, n = t.length, i = e ? e.length : 0; ++r < n;)
                    for (var o = -1, a = t[r]; ++o < i;) e[o] === a && (Ir.call(e, o--, 1), i--);
                return e
            }

            function Pt(e, t, r) {
                e = +e || 0, r = "number" == typeof r ? r : +r || 1, null == t && (t = e, e = 0);
                for (var n = -1, i = Rr(0, Sr((t - e) / (r || 1))), o = pr(i); ++n < i;) o[n] = e, e += r;
                return o
            }

            function jt(e, t, r) {
                var n = -1,
                    i = e ? e.length : 0,
                    o = [];
                for (t = h.createCallback(t, r, 3); ++n < i;) {
                    var a = e[n];
                    t(a, n, e) && (o.push(a), Ir.call(e, n--, 1), i--)
                }
                return o
            }

            function kt(e, t, r) {
                if ("number" != typeof t && null != t) {
                    var n = 0,
                        i = -1,
                        o = e ? e.length : 0;
                    for (t = h.createCallback(t, r, 3); ++i < o && t(e[i], i, e);) n++
                } else n = null == t || r ? 1 : Rr(0, t);
                return d(e, n)
            }

            function _t(e, t, r, n) {
                var i = 0,
                    o = e ? e.length : i;
                for (r = r ? h.createCallback(r, n, 1) : Kt, t = r(t); o > i;) {
                    var a = i + o >>> 1;
                    r(e[a]) < t ? i = a + 1 : o = a
                }
                return i
            }

            function Ct() {
                return ie(ee(arguments, !0, !0))
            }

            function St(e, t, r, n) {
                return "boolean" != typeof t && null != t && (n = r, r = "function" != typeof t && n && n[t] === e ? null : t, t = !1), null != r && (r = h.createCallback(r, n, 3)), ie(e, t, r)
            }

            function Yt(e) {
                return G(e, d(arguments, 1))
            }

            function At() {
                for (var e = -1, t = arguments.length; ++e < t;) {
                    var r = arguments[e];
                    if (Kr(r) || fe(r)) var n = n ? ie(G(n, r).concat(G(r, n))) : r
                }
                return n || []
            }

            function Et() {
                for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, r = e ? et(pn(e, "length")) : 0, n = pr(0 > r ? 0 : r); ++t < r;) n[t] = pn(e, t);
                return n
            }

            function Qt(e, t) {
                var r = -1,
                    n = e ? e.length : 0,
                    i = {};
                for (t || !n || Kr(e[0]) || (t = []); ++r < n;) {
                    var o = e[r];
                    t ? i[o] = t[r] : o && (i[o[0]] = o[1])
                }
                return i
            }

            function Dt(e, t) {
                if (!Ye(t)) throw new xr;
                return function() {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }

            function Ot(e, t) {
                return arguments.length > 2 ? ae(e, 17, d(arguments, 2), null, t) : ae(e, 1, null, null, t)
            }

            function Nt(e) {
                for (var t = arguments.length > 1 ? ee(arguments, !0, !1, 1) : we(e), r = -1, n = t.length; ++r < n;) {
                    var i = t[r];
                    e[i] = ae(e[i], 1, null, null, e)
                }
                return e
            }

            function It(e, t) {
                return arguments.length > 2 ? ae(t, 19, d(arguments, 2), null, e) : ae(t, 3, null, null, e)
            }

            function $t() {
                for (var e = arguments, t = e.length; t--;)
                    if (!Ye(e[t])) throw new xr;
                return function() {
                    for (var t = arguments, r = e.length; r--;) t = [e[r].apply(this, t)];
                    return t[0]
                }
            }

            function Bt(e, t) {
                return t = "number" == typeof t ? t : +t || e.length, ae(e, 4, null, null, null, t)
            }

            function Mt(e, t, r) {
                var n, i, o, a, l, s, u, c = 0,
                    d = !1,
                    f = !0;
                if (!Ye(e)) throw new xr;
                if (t = Rr(0, t) || 0, r === !0) {
                    var h = !0;
                    f = !1
                } else Ae(r) && (h = r.leading, d = "maxWait" in r && (Rr(t, r.maxWait) || 0), f = "trailing" in r ? r.trailing : f);
                var y = function() {
                        var r = t - (yn() - a);
                        if (0 >= r) {
                            i && Yr(i);
                            var d = u;
                            i = s = u = p, d && (c = yn(), o = e.apply(l, n), s || i || (n = l = null))
                        } else s = Nr(y, r)
                    },
                    m = function() {
                        s && Yr(s), i = s = u = p, (f || d !== t) && (c = yn(), o = e.apply(l, n), s || i || (n = l = null))
                    };
                return function() {
                    if (n = arguments, a = yn(), l = this, u = f && (s || !h), d === !1) var r = h && !s;
                    else {
                        i || h || (c = a);
                        var p = d - (a - c),
                            g = 0 >= p;
                        g ? (i && (i = Yr(i)), c = a, o = e.apply(l, n)) : i || (i = Nr(m, p))
                    }
                    return g && s ? s = Yr(s) : s || t === d || (s = Nr(y, t)), r && (g = !0, o = e.apply(l, n)), !g || s || i || (n = l = null), o
                }
            }

            function Lt(e) {
                if (!Ye(e)) throw new xr;
                var t = d(arguments, 1);
                return Nr(function() {
                    e.apply(p, t)
                }, 1)
            }

            function zt(e, t) {
                if (!Ye(e)) throw new xr;
                var r = d(arguments, 2);
                return Nr(function() {
                    e.apply(p, r)
                }, t)
            }

            function Ft(e, t) {
                if (!Ye(e)) throw new xr;
                var r = function() {
                    var n = r.cache,
                        i = t ? t.apply(this, arguments) : g + arguments[0];
                    return Dr.call(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                };
                return r.cache = {}, r
            }

            function qt(e) {
                var t, r;
                if (!Ye(e)) throw new xr;
                return function() {
                    return t ? r : (t = !0, r = e.apply(this, arguments), e = null, r)
                }
            }

            function Rt(e) {
                return ae(e, 16, d(arguments, 1))
            }

            function Ht(e) {
                return ae(e, 32, null, d(arguments, 1))
            }

            function Wt(e, t, r) {
                var n = !0,
                    i = !0;
                if (!Ye(e)) throw new xr;
                return r === !1 ? n = !1 : Ae(r) && (n = "leading" in r ? r.leading : n, i = "trailing" in r ? r.trailing : i), R.leading = n, R.maxWait = t, R.trailing = i, Mt(e, t, R)
            }

            function Vt(e, t) {
                return ae(t, 16, [e])
            }

            function Ut(e) {
                return function() {
                    return e
                }
            }

            function Xt(e, t, r) {
                var n = typeof e;
                if (null == e || "function" == n) return J(e, t, r);
                if ("object" != n) return tr(e);
                var i = Zr(e),
                    o = i[0],
                    a = e[o];
                return 1 != i.length || a !== a || Ae(a) ? function(t) {
                    for (var r = i.length, n = !1; r-- && (n = te(t[i[r]], e[i[r]], null, !0)););
                    return n
                } : function(e) {
                    var t = e[o];
                    return a === t && (0 !== a || 1 / a == 1 / t)
                }
            }

            function Jt(e) {
                return null == e ? "" : Tr(e).replace(nn, le)
            }

            function Kt(e) {
                return e
            }

            function Gt(e, t, r) {
                var n = !0,
                    i = t && we(t);
                t && (r || i.length) || (null == r && (r = t), o = y, t = e, e = h, i = we(t)), r === !1 ? n = !1 : Ae(r) && "chain" in r && (n = r.chain);
                var o = e,
                    a = Ye(o);
                Je(i, function(r) {
                    var i = e[r] = t[r];
                    a && (o.prototype[r] = function() {
                        var t = this.__chain__,
                            r = this.__wrapped__,
                            a = [r];
                        Or.apply(a, arguments);
                        var l = i.apply(e, a);
                        if (n || t) {
                            if (r === l && Ae(l)) return this;
                            l = new o(l), l.__chain__ = t
                        }
                        return l
                    })
                })
            }

            function Zt() {
                return r._ = kr, this
            }

            function er() {}

            function tr(e) {
                return function(t) {
                    return t[e]
                }
            }

            function rr(e, t, r) {
                var n = null == e,
                    i = null == t;
                if (null == r && ("boolean" == typeof e && i ? (r = e, e = 1) : i || "boolean" != typeof t || (r = t, i = !0)), n && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, r || e % 1 || t % 1) {
                    var o = Vr();
                    return Hr(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
                }
                return ne(e, t)
            }

            function nr(e, t) {
                if (e) {
                    var r = e[t];
                    return Ye(r) ? e[t]() : r
                }
            }

            function ir(e, t, r) {
                var n = h.templateSettings;
                e = Tr(e || ""), r = an({}, r, n);
                var i, o = an({}, r.imports, n.imports),
                    l = Zr(o),
                    s = qe(o),
                    u = 0,
                    c = r.interpolate || Y,
                    d = "__p += '",
                    f = wr((r.escape || Y).source + "|" + c.source + "|" + (c === C ? j : Y).source + "|" + (r.evaluate || Y).source + "|$", "g");
                e.replace(f, function(t, r, n, o, l, s) {
                    return n || (n = o), d += e.slice(u, s).replace(E, a), r && (d += "' +\n__e(" + r + ") +\n'"), l && (i = !0, d += "';\n" + l + ";\n__p += '"), n && (d += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), u = s + t.length, t
                }), d += "';\n";
                var y = r.variable,
                    m = y;
                m || (y = "obj", d = "with (" + y + ") {\n" + d + "\n}\n"), d = (i ? d.replace(T, "") : d).replace(x, "$1").replace(P, "$1;"), d = "function(" + y + ") {\n" + (m ? "" : y + " || (" + y + " = {});\n") + "var __t, __p = '', __e = _.escape" + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                var g = "\n/*\n//# sourceURL=" + (r.sourceURL || "/lodash/template/source[" + D++ + "]") + "\n*/";
                try {
                    var v = mr(l, "return " + d + g).apply(p, s)
                } catch (b) {
                    throw b.source = d, b
                }
                return t ? v(t) : (v.source = d, v)
            }

            function or(e, t, r) {
                e = (e = +e) > -1 ? e : 0;
                var n = -1,
                    i = pr(e);
                for (t = J(t, r, 1); ++n < e;) i[n] = t(n);
                return i
            }

            function ar(e) {
                return null == e ? "" : Tr(e).replace(rn, de)
            }

            function lr(e) {
                var t = ++m;
                return Tr(null == e ? "" : e) + t
            }

            function sr(e) {
                return e = new y(e), e.__chain__ = !0, e
            }

            function ur(e, t) {
                return t(e), e
            }

            function cr() {
                return this.__chain__ = !0, this
            }

            function dr() {
                return Tr(this.__wrapped__)
            }

            function fr() {
                return this.__wrapped__
            }
            r = r ? Z.defaults(U.Object(), r, Z.pick(U, Q)) : U;
            var pr = r.Array,
                hr = r.Boolean,
                yr = r.Date,
                mr = r.Function,
                gr = r.Math,
                vr = r.Number,
                br = r.Object,
                wr = r.RegExp,
                Tr = r.String,
                xr = r.TypeError,
                Pr = [],
                jr = br.prototype,
                kr = r._,
                _r = jr.toString,
                Cr = wr("^" + Tr(_r).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                Sr = gr.ceil,
                Yr = r.clearTimeout,
                Ar = gr.floor,
                Er = mr.prototype.toString,
                Qr = ue(Qr = br.getPrototypeOf) && Qr,
                Dr = jr.hasOwnProperty,
                Or = Pr.push,
                Nr = r.setTimeout,
                Ir = Pr.splice,
                $r = Pr.unshift,
                Br = function() {
                    try {
                        var e = {},
                            t = ue(t = br.defineProperty) && t,
                            r = t(e, e, e) && t
                    } catch (n) {}
                    return r
                }(),
                Mr = ue(Mr = br.create) && Mr,
                Lr = ue(Lr = pr.isArray) && Lr,
                zr = r.isFinite,
                Fr = r.isNaN,
                qr = ue(qr = br.keys) && qr,
                Rr = gr.max,
                Hr = gr.min,
                Wr = r.parseInt,
                Vr = gr.random,
                Ur = {};
            Ur[N] = pr, Ur[I] = hr, Ur[$] = yr, Ur[B] = mr, Ur[L] = br, Ur[M] = vr, Ur[z] = wr, Ur[F] = Tr, y.prototype = h.prototype;
            var Xr = h.support = {};
            Xr.funcDecomp = !ue(r.WinRTError) && A.test(f), Xr.funcNames = "string" == typeof mr.name, h.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: C,
                variable: "",
                imports: {
                    _: h
                }
            }, Mr || (X = function() {
                function e() {}
                return function(t) {
                    if (Ae(t)) {
                        e.prototype = t;
                        var n = new e;
                        e.prototype = null
                    }
                    return n || r.Object()
                }
            }());
            var Jr = Br ? function(e, t) {
                    H.value = t, Br(e, "__bindData__", H)
                } : er,
                Kr = Lr || function(e) {
                    return e && "object" == typeof e && "number" == typeof e.length && _r.call(e) == N || !1
                },
                Gr = function(e) {
                    var t, r = e,
                        n = [];
                    if (!r) return n;
                    if (!W[typeof e]) return n;
                    for (t in r) Dr.call(r, t) && n.push(t);
                    return n
                },
                Zr = qr ? function(e) {
                    return Ae(e) ? qr(e) : []
                } : Gr,
                en = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                tn = xe(en),
                rn = wr("(" + Zr(tn).join("|") + ")", "g"),
                nn = wr("[" + Zr(en).join("") + "]", "g"),
                on = function(e, t, r) {
                    var n, i = e,
                        o = i;
                    if (!i) return o;
                    var a = arguments,
                        l = 0,
                        s = "number" == typeof r ? 2 : a.length;
                    if (s > 3 && "function" == typeof a[s - 2]) var u = J(a[--s - 1], a[s--], 2);
                    else s > 2 && "function" == typeof a[s - 1] && (u = a[--s]);
                    for (; ++l < s;)
                        if (i = a[l], i && W[typeof i])
                            for (var c = -1, d = W[typeof i] && Zr(i), f = d ? d.length : 0; ++c < f;) n = d[c], o[n] = u ? u(o[n], i[n]) : i[n];
                    return o
                },
                an = function(e, t, r) {
                    var n, i = e,
                        o = i;
                    if (!i) return o;
                    for (var a = arguments, l = 0, s = "number" == typeof r ? 2 : a.length; ++l < s;)
                        if (i = a[l], i && W[typeof i])
                            for (var u = -1, c = W[typeof i] && Zr(i), d = c ? c.length : 0; ++u < d;) n = c[u], "undefined" == typeof o[n] && (o[n] = i[n]);
                    return o
                },
                ln = function(e, t, r) {
                    var n, i = e,
                        o = i;
                    if (!i) return o;
                    if (!W[typeof i]) return o;
                    t = t && "undefined" == typeof r ? t : J(t, r, 3);
                    for (n in i)
                        if (t(i[n], n, e) === !1) return o;
                    return o
                },
                sn = function(e, t, r) {
                    var n, i = e,
                        o = i;
                    if (!i) return o;
                    if (!W[typeof i]) return o;
                    t = t && "undefined" == typeof r ? t : J(t, r, 3);
                    for (var a = -1, l = W[typeof i] && Zr(i), s = l ? l.length : 0; ++a < s;)
                        if (n = l[a], t(i[n], n, e) === !1) return o;
                    return o
                },
                un = Qr ? function(e) {
                    if (!e || _r.call(e) != L) return !1;
                    var t = e.valueOf,
                        r = ue(t) && (r = Qr(t)) && Qr(r);
                    return r ? e == r || Qr(e) == r : ce(e)
                } : ce,
                cn = oe(function(e, t, r) {
                    Dr.call(e, r) ? e[r]++ : e[r] = 1
                }),
                dn = oe(function(e, t, r) {
                    (Dr.call(e, r) ? e[r] : e[r] = []).push(t)
                }),
                fn = oe(function(e, t, r) {
                    e[r] = t
                }),
                pn = Ze,
                hn = Ve,
                yn = ue(yn = yr.now) && yn || function() {
                    return (new yr).getTime()
                },
                mn = 8 == Wr(w + "08") ? Wr : function(e, t) {
                    return Wr(Ne(e) ? e.replace(S, "") : e, t || 0)
                };
            return h.after = Dt, h.assign = on, h.at = Re, h.bind = Ot, h.bindAll = Nt, h.bindKey = It, h.chain = sr, h.compact = dt, h.compose = $t, h.constant = Ut, h.countBy = cn, h.create = ye, h.createCallback = Xt, h.curry = Bt, h.debounce = Mt, h.defaults = an, h.defer = Lt, h.delay = zt, h.difference = ft, h.filter = Ve, h.flatten = mt, h.forEach = Je, h.forEachRight = Ke, h.forIn = ln, h.forInRight = ve, h.forOwn = sn, h.forOwnRight = be, h.functions = we, h.groupBy = dn, h.indexBy = fn, h.initial = vt, h.intersection = bt, h.invert = xe, h.invoke = Ge, h.keys = Zr, h.map = Ze, h.mapValues = $e, h.max = et, h.memoize = Ft, h.merge = Be, h.min = tt, h.omit = Me, h.once = qt, h.pairs = Le, h.partial = Rt, h.partialRight = Ht, h.pick = ze, h.pluck = pn, h.property = tr, h.pull = xt, h.range = Pt, h.reject = it, h.remove = jt, h.rest = kt, h.shuffle = at, h.sortBy = ut, h.tap = ur, h.throttle = Wt, h.times = or, h.toArray = ct, h.transform = Fe, h.union = Ct, h.uniq = St, h.values = qe, h.where = hn, h.without = Yt, h.wrap = Vt, h.xor = At, h.zip = Et, h.zipObject = Qt, h.collect = Ze, h.drop = kt, h.each = Je, h.eachRight = Ke, h.extend = on, h.methods = we, h.object = Qt, h.select = Ve, h.tail = kt, h.unique = St, h.unzip = Et, Gt(h), h.clone = pe, h.cloneDeep = he, h.contains = He, h.escape = Jt, h.every = We, h.find = Ue, h.findIndex = pt, h.findKey = me, h.findLast = Xe, h.findLastIndex = ht, h.findLastKey = ge, h.has = Te, h.identity = Kt, h.indexOf = gt, h.isArguments = fe, h.isArray = Kr, h.isBoolean = Pe, h.isDate = je, h.isElement = ke, h.isEmpty = _e, h.isEqual = Ce, h.isFinite = Se, h.isFunction = Ye, h.isNaN = Ee, h.isNull = Qe, h.isNumber = De, h.isObject = Ae, h.isPlainObject = un, h.isRegExp = Oe, h.isString = Ne, h.isUndefined = Ie, h.lastIndexOf = Tt, h.mixin = Gt, h.noConflict = Zt, h.noop = er, h.now = yn, h.parseInt = mn, h.random = rr, h.reduce = rt, h.reduceRight = nt, h.result = nr, h.runInContext = f, h.size = lt, h.some = st, h.sortedIndex = _t, h.template = ir, h.unescape = ar, h.uniqueId = lr, h.all = We, h.any = st, h.detect = Ue, h.findWhere = Ue, h.foldl = rt, h.foldr = nt, h.include = He, h.inject = rt, Gt(function() {
                var e = {};
                return sn(h, function(t, r) {
                    h.prototype[r] || (e[r] = t)
                }), e
            }(), !1), h.first = yt, h.last = wt, h.sample = ot, h.take = yt, h.head = yt, sn(h, function(e, t) {
                var r = "sample" !== t;
                h.prototype[t] || (h.prototype[t] = function(t, n) {
                    var i = this.__chain__,
                        o = e(this.__wrapped__, t, n);
                    return i || null != t && (!n || r && "function" == typeof t) ? new y(o, i) : o
                })
            }), h.VERSION = "2.4.1", h.prototype.chain = cr, h.prototype.toString = dr, h.prototype.value = fr, h.prototype.valueOf = fr, Je(["join", "pop", "shift"], function(e) {
                var t = Pr[e];
                h.prototype[e] = function() {
                    var e = this.__chain__,
                        r = t.apply(this.__wrapped__, arguments);
                    return e ? new y(r, e) : r
                }
            }), Je(["push", "reverse", "sort", "unshift"], function(e) {
                var t = Pr[e];
                h.prototype[e] = function() {
                    return t.apply(this.__wrapped__, arguments), this
                }
            }), Je(["concat", "slice", "splice"], function(e) {
                var t = Pr[e];
                h.prototype[e] = function() {
                    return new y(t.apply(this.__wrapped__, arguments), this.__chain__)
                }
            }), h
        }
        var p, h = [],
            y = [],
            m = 0,
            g = +new Date + "",
            v = 75,
            b = 40,
            w = " 	\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　",
            T = /\b__p \+= '';/g,
            x = /\b(__p \+=) '' \+/g,
            P = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            j = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            k = /\w*$/,
            _ = /^\s*function[ \n\r\t]+\w/,
            C = /<%=([\s\S]+?)%>/g,
            S = RegExp("^[" + w + "]*0+(?=.$)"),
            Y = /($^)/,
            A = /\bthis\b/,
            E = /['\n\r\t\u2028\u2029\\]/g,
            Q = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
            D = 0,
            O = "[object Arguments]",
            N = "[object Array]",
            I = "[object Boolean]",
            $ = "[object Date]",
            B = "[object Function]",
            M = "[object Number]",
            L = "[object Object]",
            z = "[object RegExp]",
            F = "[object String]",
            q = {};
        q[B] = !1, q[O] = q[N] = q[I] = q[$] = q[M] = q[L] = q[z] = q[F] = !0;
        var R = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            H = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            W = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            V = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            U = W[typeof window] && window || this,
            X = W[typeof exports] && exports && !exports.nodeType && exports,
            J = W[typeof module] && module && !module.nodeType && module,
            K = J && J.exports === X && X,
            G = W[typeof global] && global;
        !G || G.global !== G && G.window !== G || (U = G);
        var Z = f();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (U._ = Z, define(function() {
            return Z
        })) : X && J ? K ? (J.exports = Z)._ = Z : X._ = Z : U._ = Z
    }.call(this), window.Modernizr = function(e, t, r) {
        function n(e) {
            g.cssText = e
        }

        function i(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var n in e) {
                var i = e[n];
                if (!o(i, "-") && g[i] !== r) return "pfx" == t ? i : !0
            }
            return !1
        }

        function l(e, t, n) {
            for (var o in e) {
                var a = t[e[o]];
                if (a !== r) return n === !1 ? e[o] : i(a, "function") ? a.bind(n || t) : a
            }
            return !1
        }

        function s(e, t, r) {
            var n = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + b.join(n + " ") + n).split(" ");
            return i(t, "string") || i(t, "undefined") ? a(o, t) : (o = (e + " " + w.join(n + " ") + n).split(" "), l(o, t, r))
        }
        var u, c, d, f = "2.8.3",
            p = {},
            h = t.documentElement,
            y = "modernizr",
            m = t.createElement(y),
            g = m.style,
            v = ({}.toString, "Webkit Moz O ms"),
            b = v.split(" "),
            w = v.toLowerCase().split(" "),
            T = {},
            x = [],
            P = x.slice,
            j = {}.hasOwnProperty;
        d = i(j, "undefined") || i(j.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return j.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var r = P.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var o = new i,
                            a = t.apply(o, r.concat(P.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, r.concat(P.call(arguments)))
                };
            return n
        }), T.cssanimations = function() {
            return s("animationName")
        };
        for (var k in T) d(T, k) && (c = k.toLowerCase(), p[c] = T[k](), x.push((p[c] ? "" : "no-") + c));
        return p.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var n in e) d(e, n) && p.addTest(n, e[n]);
            else {
                if (e = e.toLowerCase(), p[e] !== r) return p;
                t = "function" == typeof t ? t() : t, "undefined" != typeof enableClasses && enableClasses && (h.className += " " + (t ? "" : "no-") + e), p[e] = t
            }
            return p
        }, n(""), m = u = null, p._version = f, p._domPrefixes = w, p._cssomPrefixes = b, p.testProp = function(e) {
            return a([e])
        }, p.testAllProps = s, p
    }(this, this.document), + function(e) {
        "use strict";
        var t = function(t, r) {
            this.options = r, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        t.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, t.prototype.toggle = function(e) {
            return this[this.isShown ? "hide" : "show"](e)
        }, t.prototype.show = function(t) {
            var r = this,
                n = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
                var n = e.support.transition && r.$element.hasClass("fade");
                r.$element.parent().length || r.$element.appendTo(document.body), r.$element.show().scrollTop(0), n && r.$element[0].offsetWidth, r.$element.addClass("in").attr("aria-hidden", !1), r.enforceFocus();
                var i = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                n ? r.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                    r.$element.focus().trigger(i)
                }).emulateTransitionEnd(300) : r.$element.focus().trigger(i)
            }))
        }, t.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, t.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
            }, this))
        }, t.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, t.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
            })
        }, t.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, t.prototype.backdrop = function(t) {
            var r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var n = e.support.transition && r;
                if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                n ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
        };
        var r = e.fn.modal;
        e.fn.modal = function(r, n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.modal"),
                    a = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof r && r);
                o || i.data("bs.modal", o = new t(this, a)), "string" == typeof r ? o[r](n) : a.show && o.show(n)
            })
        }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
            return e.fn.modal = r, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
            var r = e(this),
                n = r.attr("href"),
                i = e(r.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
                o = i.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(n) && n
                }, i.data(), r.data());
            r.is("a") && t.preventDefault(), i.modal(o, this).one("hide", function() {
                r.is(":visible") && r.focus()
            })
        }), e(document).on("show.bs.modal", ".modal", function() {
            e(document.body).addClass("modal-open")
        }).on("hidden.bs.modal", ".modal", function() {
            e(document.body).removeClass("modal-open")
        })
    }(jQuery), $.lazyLoadXT.autoInit = !1, $.lazyLoadXT.edgeY = 1e3, $.lazyLoadXT.updateEvent += " lazyupdate", $.lazyLoadXT.oninit = {}, $.lazyLoadXT.onshow = {}, $.lazyLoadXT.onload = {}, $.lazyLoadXT.onerror = {}, plp.lazy = {
        add: function(e, t) {
            return e.addClass("lazy").lazyLoadXT().one("lazyshow", function(e) {
                var r = $(this);
                r.removeClass("lazy"), t(r), e.stopPropagation()
            })
        },
        trigger: function(e) {
            return e.trigger("lazyshow")
        },
        force: function(e) {
            return e = e || $("div.area"), plp.lazy.trigger(e.find(".lazy")), e
        },
        update: function() {
            $(document).trigger("lazyupdate")
        },
        distance: function(e) {
            return e && ($.lazyLoadXT.edgeY = 1 * e, plp.lazy.update()), $.lazyLoadXT.edgeY
        }
    }, $(function() {
        function e(e) {
            var t = e.w << 16 | e.h << 2 | e.c,
                r = e.b << 16 | e.q << 6,
                n = t.toString(29),
                i = r.toString(29),
                o = +t.toString().substring(0, 1) + +r.toString().substring(0, 1);
            return o.toString(29) + n + i + (n.length.toString(29) + i.length.toString(29))
        }

        function t(e) {
            var t = e.indexOf("//u.platformalp.ru") > -1,
                r = e.indexOf("//u0.platformalp.ru") > -1,
                n = e.indexOf("//u1.platformalp.ru") > -1,
                i = e.indexOf("//u2.platformalp.ru") > -1,
                o = e.indexOf("//u3.platformalp.ru") > -1,
                a = e.indexOf("//u4.platformalp.ru") > -1,
                l = e.indexOf("//u5.platformalp.ru") > -1,
                s = e.indexOf("//u7.platformalp.ru") > -1,
                u = e.indexOf("//u9.platformalp.ru") > -1;
            return t || r || n || i || o || a || l || s || u
        }

        function r(t, r) {
            plp.isRetina() && r.retina && (r.width2 *= 2, r.height2 *= 2);
            var n = Math.min(r.width1, 2e3),
                i = Math.min(r.height1, 2e3);
            r.width2 > n && (r.height2 = n / r.width2 * r.height2, r.width2 = n), r.height2 > i && (r.width2 = i / r.height2 * r.width2, r.height2 = i);
            var o = e({
                h: r.height2,
                w: r.width2
            });
            return t.replace(/(.+?.\w+)\/(.+)/, "$1/s/" + o + "/$2")
        }
        plp.lazy.add($("[data-lazy-iframe]"), function(e) {
            e.attr("src", e.attr("data-lazy-iframe")), e.removeAttr("data-lazy-iframe")
        }), plp.lazy.add($("[data-lazy-image]"), function(e) {
            var n = e.attr("data-lazy-image");
            if (t(n) && "true" !== e.attr("data-lazy-image_noscale")) {
                var i = e.attr("data-lazy-image_size").split(","),
                    o = {
                        retina: "true" !== e.attr("data-lazy-image_nohd"),
                        width1: 1 * i[0],
                        width2: 1 * i[0],
                        height1: 1 * i[1],
                        height2: 1 * i[1]
                    },
                    a = e.attr("data-lazy-image_detect");
                if ("xs" === plp.screensize) {
                    var l = e.attr("data-lazy-image_detect-xs");
                    l && (a = l)
                }
                if ("css-width" === a) o.width2 = e.width(), o.width2 < o.width1 && (o.height2 = o.width2 / o.width1 * o.height1);
                else if ("css-width-height" === a) o.width2 = e.width(), o.height2 = e.height();
                else if ("css-max-height" === a) {
                    var s = parseInt(e.css("max-height"));
                    o.height1 > s ? (o.height2 = s, o.width2 = s / o.height1 * o.width1) : e.css("max-height", o.height2)
                } else if ("css-max-width-max-height" === a) {
                    var u = parseInt(e.css("max-width")),
                        c = parseInt(e.css("max-height"));
                    o.width2 > u && (o.width2 = u, o.height2 = u / o.width1 * o.height1), o.height2 > c && (o.width2 = c / o.height2 * o.width2, o.height2 = c), o.width2 < u && e.css("max-width", o.width2), o.height2 < c && e.css("max-height", o.height2)
                } else if ("css-width-max-height" === a) {
                    o.width2 = e.width(), o.width2 < o.width1 && (o.height2 = o.width2 / o.width1 * o.height1);
                    var c = parseInt(e.css("max-height"));
                    o.height2 > c ? o.height2 = c : e.css("max-height", o.height2)
                } else "fill-width" === a && (o.width2 = e.parent().width(), o.height2 = o.width2 / o.width1 * o.height1);
                n = r(n, o)
            }
            e.data(), e.removeAttr("data-lazy-image"), e.removeAttr("data-lazy-image_size"), e.removeAttr("data-lazy-image_detect"), e.removeAttr("data-lazy-image_nohd"), e.removeAttr("data-lazy-image_noscale"), e.attr("src", n)
        }), plp.lazy.add($("[data-lazy-bgimage]"), function(e) {
            var n = e.attr("data-lazy-bgimage");
            if (t(n) && "true" !== e.attr("data-lazy-bgimage_noscale")) {
                var i = e.attr("data-lazy-bgimage_size").split(","),
                    o = {
                        retina: "true" !== e.attr("data-lazy-bgimage_nohd"),
                        width1: 1 * i[0],
                        width2: 1 * i[0],
                        height1: 1 * i[1],
                        height2: 1 * i[1]
                    },
                    a = e.width(),
                    l = e.height(),
                    s = e.css("background-size");
                "cover" === s ? (o.width1 > a && (o.width2 = a, o.height2 = a / o.width1 * o.height1), o.height2 < l && (o.height2 = l, o.width2 = l / o.height1 * o.width1)) : "contain" === s && (o.width2 > a && (o.width2 = a, o.height2 = a / o.width1 * o.height1), o.height2 > l && (o.height2 = l, o.width2 = l / o.height1 * o.width1));
                var n = r(n, o)
            }
            e.data(), e.removeAttr("data-lazy-bgimage"), e.removeAttr("data-lazy-bgimage_size"), e.removeAttr("data-lazy-bgimage_nohd"), e.removeAttr("data-lazy-bgimage_noscale"), e.css("background-image", "url(" + n + ")")
        }), plp.lazy.add($("[data-lazy-all], .lazy-all"), function(e) {
            plp.lazy.force(e)
        })
    }), plp.isRetina = function() {
        if (window.devicePixelRatio > 1) return !0;
        var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return !(!window.matchMedia || !window.matchMedia(e).matches)
    },
    function(e, t, r) {
        function n(r, n, i) {
            var o = t.createElement(r);
            return n && (o.id = Z + n), i && (o.style.cssText = i), e(o)
        }

        function i() {
            return r.innerHeight ? r.innerHeight : e(r).height()
        }

        function o(t, r) {
            r !== Object(r) && (r = {}), this.cache = {}, this.el = t, this.value = function(t) {
                var n;
                return void 0 === this.cache[t] && (n = e(this.el).attr("data-cbox-" + t), void 0 !== n ? this.cache[t] = n : void 0 !== r[t] ? this.cache[t] = r[t] : void 0 !== K[t] && (this.cache[t] = K[t])), this.cache[t]
            }, this.get = function(t) {
                var r = this.value(t);
                return e.isFunction(r) ? r.call(this.el, this) : r
            }
        }

        function a(e) {
            var t = _.length,
                r = (q + e) % t;
            return 0 > r ? t + r : r
        }

        function l(e, t) {
            return Math.round((/%/.test(e) ? ("x" === t ? C.width() : i()) / 100 : 1) * parseInt(e, 10))
        }

        function s(e, t) {
            return e.get("photo") || e.get("photoRegex").test(t)
        }

        function u(e, t) {
            return e.get("retinaUrl") && r.devicePixelRatio > 1 ? t.replace(e.get("photoRegex"), e.get("retinaSuffix")) : t
        }

        function c(e) {
            "contains" in b[0] && !b[0].contains(e.target) && e.target !== v[0] && (e.stopPropagation(), b.focus())
        }

        function d(e) {
            d.str !== e && (b.add(v).removeClass(d.str).addClass(e), d.str = e)
        }

        function f(t) {
            q = 0, t && t !== !1 && "nofollow" !== t ? (_ = e("." + ee).filter(function() {
                var r = e.data(this, G),
                    n = new o(this, r);
                return n.get("rel") === t
            }), q = _.index(B.el), -1 === q && (_ = _.add(B.el), q = _.length - 1)) : _ = e(B.el)
        }

        function p(r) {
            e(t).trigger(r), le.triggerHandler(r)
        }

        function h(r) {
            var i;
            if (!V) {
                if (i = e(r).data("colorbox"), B = new o(r, i), f(B.get("rel")), !H) {
                    H = W = !0, d(B.get("className")), b.css({
                        visibility: "hidden",
                        display: "block",
                        opacity: ""
                    }), S = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), T.css({
                        width: "",
                        height: ""
                    }).append(S), M = x.height() + k.height() + T.outerHeight(!0) - T.height(), L = P.width() + j.width() + T.outerWidth(!0) - T.width(), z = S.outerHeight(!0), F = S.outerWidth(!0);
                    var a = l(B.get("initialWidth"), "x"),
                        s = l(B.get("initialHeight"), "y"),
                        u = B.get("maxWidth"),
                        h = B.get("maxHeight");
                    B.w = (u !== !1 ? Math.min(a, l(u, "x")) : a) - F - L, B.h = (h !== !1 ? Math.min(s, l(h, "y")) : s) - z - M, S.css({
                        width: "",
                        height: B.h
                    }), X.position(), p(te), B.get("onOpen"), $.add(E).hide(), b.focus(), B.get("trapFocus") && t.addEventListener && (t.addEventListener("focus", c, !0), le.one(oe, function() {
                        t.removeEventListener("focus", c, !0)
                    })), B.get("returnFocus") && le.one(oe, function() {
                        e(B.el).focus()
                    })
                }
                v.css({
                    opacity: parseFloat(B.get("opacity")) || "",
                    cursor: B.get("overlayClose") ? "pointer" : "",
                    visibility: "visible"
                }).show(), B.get("closeButton") ? I.html(B.get("close")).appendTo(T) : I.appendTo("<div/>"), g()
            }
        }

        function y() {
            !b && t.body && (J = !1, C = e(r), b = n(se).attr({
                id: G,
                "class": e.support.opacity === !1 ? Z + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), v = n(se, "Overlay").hide(), A = e([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), w = n(se, "Wrapper"), T = n(se, "Content").append(E = n(se, "Title"), Q = n(se, "Current"), N = e('<button type="button"/>').attr({
                id: Z + "Previous"
            }), O = e('<button type="button"/>').attr({
                id: Z + "Next"
            }), D = n("button", "Slideshow"), A), I = e('<button type="button"/>').attr({
                id: Z + "Close"
            }), w.append(n(se).append(n(se, "TopLeft"), x = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(P = n(se, "MiddleLeft"), T, j = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
                "float": "left"
            }), Y = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), $ = O.add(N).add(Q).add(D), e(t.body).append(v, b.append(w, Y)))
        }

        function m() {
            function r(e) {
                e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), h(this))
            }
            return b ? (J || (J = !0, O.click(function() {
                X.next()
            }), N.click(function() {
                X.prev()
            }), I.click(function() {
                X.close()
            }), v.click(function() {
                B.get("overlayClose") && X.close()
            }), e(t).bind("keydown." + Z, function(e) {
                var t = e.keyCode;
                H && B.get("escKey") && 27 === t && (e.preventDefault(), X.close()), H && B.get("arrowKey") && _[1] && !e.altKey && (37 === t ? (e.preventDefault(), N.click()) : 39 === t && (e.preventDefault(), O.click()))
            }), e.isFunction(e.fn.on) ? e(t).on("click." + Z, "." + ee, r) : e("." + ee).live("click." + Z, r)), !0) : !1
        }

        function g() {
            var t, i, o, a = X.prep,
                c = ++ue;
            if (W = !0, R = !1, p(ae), p(re), B.get("onLoad"), B.h = B.get("height") ? l(B.get("height"), "y") - z - M : B.get("innerHeight") && l(B.get("innerHeight"), "y"), B.w = B.get("width") ? l(B.get("width"), "x") - F - L : B.get("innerWidth") && l(B.get("innerWidth"), "x"), B.mw = B.w, B.mh = B.h, B.get("maxWidth") && (B.mw = l(B.get("maxWidth"), "x") - F - L, B.mw = B.w && B.w < B.mw ? B.w : B.mw), B.get("maxHeight") && (B.mh = l(B.get("maxHeight"), "y") - z - M, B.mh = B.h && B.h < B.mh ? B.h : B.mh), t = B.get("href"), U = setTimeout(function() {
                    A.show()
                }, 100), B.get("inline")) {
                var d = e(t);
                o = e("<div>").hide().insertBefore(d), le.one(ae, function() {
                    o.replaceWith(d)
                }), a(d)
            } else B.get("iframe") ? a(" ") : B.get("html") ? a(B.get("html")) : s(B, t) ? (t = u(B, t), R = new Image, e(R).addClass(Z + "Photo").bind("error", function() {
                a(n(se, "Error").html(B.get("imgError")))
            }).one("load", function() {
                c === ue && setTimeout(function() {
                    var t;
                    e.each(["alt", "longdesc", "aria-describedby"], function(t, r) {
                        var n = e(B.el).attr(r) || e(B.el).attr("data-" + r);
                        n && R.setAttribute(r, n)
                    }), B.get("retinaImage") && r.devicePixelRatio > 1 && (R.height = R.height / r.devicePixelRatio, R.width = R.width / r.devicePixelRatio), B.get("scalePhotos") && (i = function() {
                        R.height -= R.height * t, R.width -= R.width * t
                    }, B.mw && R.width > B.mw && (t = (R.width - B.mw) / R.width, i()), B.mh && R.height > B.mh && (t = (R.height - B.mh) / R.height, i())), B.h && (R.style.marginTop = Math.max(B.mh - R.height, 0) / 2 + "px"), _[1] && (B.get("loop") || _[q + 1]) && (R.style.cursor = "pointer", R.onclick = function() {
                        X.next()
                    }), R.style.width = R.width + "px", R.style.height = R.height + "px", a(R)
                }, 1)
            }), R.src = t) : t && Y.load(t, B.get("data"), function(t, r) {
                c === ue && a("error" === r ? n(se, "Error").html(B.get("xhrError")) : e(this).contents())
            })
        }
        var v, b, w, T, x, P, j, k, _, C, S, Y, A, E, Q, D, O, N, I, $, B, M, L, z, F, q, R, H, W, V, U, X, J, K = {
                html: !1,
                photo: !1,
                iframe: !1,
                inline: !1,
                transition: "elastic",
                speed: 300,
                fadeOut: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scalePhotos: !0,
                scrolling: !0,
                opacity: .9,
                preloading: !0,
                className: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                top: !1,
                bottom: !1,
                left: !1,
                right: !1,
                fixed: !1,
                data: void 0,
                closeButton: !0,
                fastIframe: !0,
                open: !1,
                reposition: !0,
                loop: !0,
                slideshow: !1,
                slideshowAuto: !0,
                slideshowSpeed: 2500,
                slideshowStart: "start slideshow",
                slideshowStop: "stop slideshow",
                photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
                retinaImage: !1,
                retinaUrl: !1,
                retinaSuffix: "@2x.$1",
                current: "image {current} of {total}",
                previous: "previous",
                next: "next",
                close: "close",
                xhrError: "This content failed to load.",
                imgError: "This image failed to load.",
                returnFocus: !0,
                trapFocus: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                rel: function() {
                    return this.rel
                },
                href: function() {
                    return e(this).attr("href")
                },
                title: function() {
                    return this.title
                }
            },
            G = "colorbox",
            Z = "cbox",
            ee = Z + "Element",
            te = Z + "_open",
            re = Z + "_load",
            ne = Z + "_complete",
            ie = Z + "_cleanup",
            oe = Z + "_closed",
            ae = Z + "_purge",
            le = e("<a/>"),
            se = "div",
            ue = 0,
            ce = {},
            de = function() {
                function e() {
                    clearTimeout(a)
                }

                function t() {
                    (B.get("loop") || _[q + 1]) && (e(), a = setTimeout(X.next, B.get("slideshowSpeed")))
                }

                function r() {
                    D.html(B.get("slideshowStop")).unbind(s).one(s, n), le.bind(ne, t).bind(re, e), b.removeClass(l + "off").addClass(l + "on")
                }

                function n() {
                    e(), le.unbind(ne, t).unbind(re, e), D.html(B.get("slideshowStart")).unbind(s).one(s, function() {
                        X.next(), r()
                    }), b.removeClass(l + "on").addClass(l + "off")
                }

                function i() {
                    o = !1, D.hide(), e(), le.unbind(ne, t).unbind(re, e), b.removeClass(l + "off " + l + "on")
                }
                var o, a, l = Z + "Slideshow_",
                    s = "click." + Z;
                return function() {
                    o ? B.get("slideshow") || (le.unbind(ie, i), i()) : B.get("slideshow") && _[1] && (o = !0, le.one(ie, i), B.get("slideshowAuto") ? r() : n(), D.show())
                }
            }();
        e.colorbox || (e(y), X = e.fn[G] = e[G] = function(t, r) {
            var n, i = this;
            if (t = t || {}, e.isFunction(i)) i = e("<a/>"), t.open = !0;
            else if (!i[0]) return i;
            return i[0] ? (y(), m() && (r && (t.onComplete = r), i.each(function() {
                var r = e.data(this, G) || {};
                e.data(this, G, e.extend(r, t))
            }).addClass(ee), n = new o(i[0], t), n.get("open") && h(i[0])), i) : i
        }, X.position = function(t, r) {
            function n() {
                x[0].style.width = k[0].style.width = T[0].style.width = parseInt(b[0].style.width, 10) - L + "px", T[0].style.height = P[0].style.height = j[0].style.height = parseInt(b[0].style.height, 10) - M + "px"
            }
            var o, a, s, u = 0,
                c = 0,
                d = b.offset();
            if (C.unbind("resize." + Z), b.css({
                    top: -9e4,
                    left: -9e4
                }), a = C.scrollTop(), s = C.scrollLeft(), B.get("fixed") ? (d.top -= a, d.left -= s, b.css({
                    position: "fixed"
                })) : (u = a, c = s, b.css({
                    position: "absolute"
                })), c += B.get("right") !== !1 ? Math.max(C.width() - B.w - F - L - l(B.get("right"), "x"), 0) : B.get("left") !== !1 ? l(B.get("left"), "x") : Math.round(Math.max(C.width() - B.w - F - L, 0) / 2), u += B.get("bottom") !== !1 ? Math.max(i() - B.h - z - M - l(B.get("bottom"), "y"), 0) : B.get("top") !== !1 ? l(B.get("top"), "y") : Math.round(Math.max(i() - B.h - z - M, 0) / 2), b.css({
                    top: d.top,
                    left: d.left,
                    visibility: "visible"
                }), w[0].style.width = w[0].style.height = "9999px", o = {
                    width: B.w + F + L,
                    height: B.h + z + M,
                    top: u,
                    left: c
                }, t) {
                var f = 0;
                e.each(o, function(e) {
                    return o[e] !== ce[e] ? void(f = t) : void 0
                }), t = f
            }
            ce = o, t || b.css(o), b.dequeue().animate(o, {
                duration: t || 0,
                complete: function() {
                    n(), W = !1, w[0].style.width = B.w + F + L + "px", w[0].style.height = B.h + z + M + "px", B.get("reposition") && setTimeout(function() {
                        C.bind("resize." + Z, X.position)
                    }, 1), r && r()
                },
                step: n
            })
        }, X.resize = function(e) {
            var t;
            H && (e = e || {}, e.width && (B.w = l(e.width, "x") - F - L), e.innerWidth && (B.w = l(e.innerWidth, "x")), S.css({
                width: B.w
            }), e.height && (B.h = l(e.height, "y") - z - M), e.innerHeight && (B.h = l(e.innerHeight, "y")), e.innerHeight || e.height || (t = S.scrollTop(), S.css({
                height: "auto"
            }), B.h = S.height()), S.css({
                height: B.h
            }), t && S.scrollTop(t), X.position("none" === B.get("transition") ? 0 : B.get("speed")))
        }, X.prep = function(r) {
            function i() {
                return B.w = B.w || S.width(), B.w = B.mw && B.mw < B.w ? B.mw : B.w, B.w
            }

            function l() {
                return B.h = B.h || S.height(), B.h = B.mh && B.mh < B.h ? B.mh : B.h, B.h
            }
            if (H) {
                var c, f = "none" === B.get("transition") ? 0 : B.get("speed");
                S.remove(), S = n(se, "LoadedContent").append(r), S.hide().appendTo(Y.show()).css({
                    width: i(),
                    overflow: B.get("scrolling") ? "auto" : "hidden"
                }).css({
                    height: l()
                }).prependTo(T), Y.hide(), e(R).css({
                    "float": "none"
                }), d(B.get("className")), c = function() {
                    function r() {
                        e.support.opacity === !1 && b[0].style.removeAttribute("filter")
                    }
                    var n, i, l = _.length;
                    H && (i = function() {
                        clearTimeout(U), A.hide(), p(ne), B.get("onComplete")
                    }, E.html(B.get("title")).show(), S.show(), l > 1 ? ("string" == typeof B.get("current") && Q.html(B.get("current").replace("{current}", q + 1).replace("{total}", l)).show(), O[B.get("loop") || l - 1 > q ? "show" : "hide"]().html(B.get("next")), N[B.get("loop") || q ? "show" : "hide"]().html(B.get("previous")), de(), B.get("preloading") && e.each([a(-1), a(1)], function() {
                        var r, n = _[this],
                            i = new o(n, e.data(n, G)),
                            a = i.get("href");
                        a && s(i, a) && (a = u(i, a), r = t.createElement("img"), r.src = a)
                    })) : $.hide(), B.get("iframe") ? (n = t.createElement("iframe"), "frameBorder" in n && (n.frameBorder = 0), "allowTransparency" in n && (n.allowTransparency = "true"), B.get("scrolling") || (n.scrolling = "no"), e(n).attr({
                        src: B.get("href"),
                        name: (new Date).getTime(),
                        "class": Z + "Iframe",
                        allowFullScreen: !0
                    }).one("load", i).appendTo(S), le.one(ae, function() {
                        n.src = "//about:blank"
                    }), B.get("fastIframe") && e(n).trigger("load")) : i(), "fade" === B.get("transition") ? b.fadeTo(f, 1, r) : r())
                }, "fade" === B.get("transition") ? b.fadeTo(f, 0, function() {
                    X.position(0, c)
                }) : X.position(f, c)
            }
        }, X.next = function() {
            !W && _[1] && (B.get("loop") || _[q + 1]) && (q = a(1), h(_[q]))
        }, X.prev = function() {
            !W && _[1] && (B.get("loop") || q) && (q = a(-1), h(_[q]))
        }, X.close = function() {
            H && !V && (V = !0, H = !1, p(ie), B.get("onCleanup"), C.unbind("." + Z), v.fadeTo(B.get("fadeOut") || 0, 0), b.stop().fadeTo(B.get("fadeOut") || 0, 0, function() {
                b.hide(), v.hide(), p(ae), S.remove(), setTimeout(function() {
                    V = !1, p(oe), B.get("onClosed")
                }, 1)
            }))
        }, X.remove = function() {
            b && (b.stop(), e.colorbox.close(), b.stop().remove(), v.remove(), V = !1, b = null, e("." + ee).removeData(G).removeClass(ee), e(t).unbind("click." + Z).unbind("keydown." + Z))
        }, X.element = function() {
            return e(B.el)
        }, X.settings = K)
    }(jQuery, document, window),
    function(e, t) {
        function r() {
            function r(t) {
                var r = t || e.event,
                    n = r.keyCode || r.which;
                if (-1 !== [9, 13, 32, 27].indexOf(n)) {
                    for (var i = r.target || r.srcElement, o = -1, a = 0; a < j.length; a++)
                        if (i === j[a]) {
                            o = a;
                            break
                        }
                    9 === n ? (i = -1 === o ? x : o === j.length - 1 ? j[0] : j[o + 1], O(r), i.focus(), l(i, d.confirmButtonColor)) : (i = 13 === n || 32 === n ? -1 === o ? x : void 0 : 27 !== n || P.hidden || "none" === P.style.display ? void 0 : P, void 0 !== i && D(i, r))
                }
            }

            function a(t) {
                var r = t || e.event,
                    n = r.target || r.srcElement,
                    i = r.relatedTarget,
                    o = T(y, "visible");
                if (o) {
                    var a = -1;
                    if (null !== i) {
                        for (var l = 0; l < j.length; l++)
                            if (i === j[l]) {
                                a = l;
                                break
                            } - 1 === a && n.focus()
                    } else h = n
                }
            }
            if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1;
            var d = o({}, v);
            switch (typeof arguments[0]) {
                case "string":
                    d.title = arguments[0], d.text = arguments[1] || "", d.type = arguments[2] || "";
                    break;
                case "object":
                    if (void 0 === arguments[0].title) return e.console.error('Missing "title" argument!'), !1;
                    d.title = arguments[0].title, d.text = arguments[0].text || v.text, d.type = arguments[0].type || v.type, d.customClass = arguments[0].customClass || d.customClass, d.allowOutsideClick = arguments[0].allowOutsideClick || v.allowOutsideClick, d.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : v.showCancelButton, d.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : v.closeOnConfirm, d.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : v.closeOnCancel, d.timer = arguments[0].timer || v.timer, d.confirmButtonText = v.showCancelButton ? "Confirm" : v.confirmButtonText, d.confirmButtonText = arguments[0].confirmButtonText || v.confirmButtonText, d.confirmButtonColor = arguments[0].confirmButtonColor || v.confirmButtonColor, d.cancelButtonText = arguments[0].cancelButtonText || v.cancelButtonText, d.imageUrl = arguments[0].imageUrl || v.imageUrl, d.imageSize = arguments[0].imageSize || v.imageSize, d.doneFunction = arguments[1] || null;
                    break;
                default:
                    return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
            }
            n(d), c(), s();
            for (var y = b(), m = function(t) {
                    var r = t || e.event,
                        n = r.target || r.srcElement,
                        o = "confirm" === n.className,
                        a = T(y, "visible"),
                        l = d.doneFunction && "true" === y.getAttribute("data-has-done-function");
                    switch (r.type) {
                        case "mouseover":
                            o && (n.style.backgroundColor = i(d.confirmButtonColor, -.04));
                            break;
                        case "mouseout":
                            o && (n.style.backgroundColor = d.confirmButtonColor);
                            break;
                        case "mousedown":
                            o && (n.style.backgroundColor = i(d.confirmButtonColor, -.14));
                            break;
                        case "mouseup":
                            o && (n.style.backgroundColor = i(d.confirmButtonColor, -.04));
                            break;
                        case "focus":
                            var s = y.querySelector("button.confirm"),
                                c = y.querySelector("button.cancel");
                            o ? c.style.boxShadow = "none" : s.style.boxShadow = "none";
                            break;
                        case "click":
                            if (o && l && a) d.doneFunction(!0), d.closeOnConfirm && u();
                            else if (l && a) {
                                var f = String(d.doneFunction).replace(/\s/g, ""),
                                    p = "function(" === f.substring(0, 9) && ")" !== f.substring(9, 10);
                                p && d.doneFunction(!1), d.closeOnCancel && u()
                            } else u()
                    }
                }, g = y.querySelectorAll("button"), w = 0; w < g.length; w++) g[w].onclick = m, g[w].onmouseover = m, g[w].onmouseout = m, g[w].onmousedown = m, g[w].onfocus = m;
            f = t.onclick, t.onclick = function(t) {
                var r = t || e.event,
                    n = r.target || r.srcElement,
                    i = y === n,
                    o = Y(y, n),
                    a = T(y, "visible"),
                    l = "true" === y.getAttribute("data-allow-ouside-click");
                !i && !o && a && l && u()
            };
            var x = y.querySelector("button.confirm"),
                P = y.querySelector("button.cancel"),
                j = y.querySelectorAll("button:not([type=hidden])");
            p = e.onkeydown, e.onkeydown = r, x.onblur = a, P.onblur = a, e.onfocus = function() {
                e.setTimeout(function() {
                    void 0 !== h && (h.focus(), h = void 0)
                }, 0)
            }
        }

        function n(t) {
            var r = b(),
                n = r.querySelector("h2"),
                i = r.querySelector("p"),
                o = r.querySelector("button.cancel"),
                a = r.querySelector("button.confirm");
            if (n.innerHTML = j(t.title).split("\n").join("<br>"), i.innerHTML = j(t.text || "").split("\n").join("<br>"), t.text && _(i), t.customClass && x(r, t.customClass), S(r.querySelectorAll(".icon")), t.type) {
                for (var s = !1, u = 0; u < g.length; u++)
                    if (t.type === g[u]) {
                        s = !0;
                        break
                    }
                if (!s) return e.console.error("Unknown alert type: " + t.type), !1;
                var c = r.querySelector(".icon." + t.type);
                switch (_(c), t.type) {
                    case "success":
                        x(c, "animate"), x(c.querySelector(".tip"), "animateSuccessTip"), x(c.querySelector(".long"), "animateSuccessLong");
                        break;
                    case "error":
                        x(c, "animateErrorIcon"), x(c.querySelector(".x-mark"), "animateXMark");
                        break;
                    case "warning":
                        x(c, "pulseWarning"), x(c.querySelector(".body"), "pulseWarningIns"), x(c.querySelector(".dot"), "pulseWarningIns")
                }
            }
            if (t.imageUrl) {
                var d = r.querySelector(".icon.custom");
                d.style.backgroundImage = "url(" + t.imageUrl + ")", _(d);
                var f = 80,
                    p = 80;
                if (t.imageSize) {
                    var h = t.imageSize.split("x")[0],
                        y = t.imageSize.split("x")[1];
                    h && y ? (f = h, p = y, d.css({
                        width: h + "px",
                        height: y + "px"
                    })) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
                }
                d.setAttribute("style", d.getAttribute("style") + "width:" + f + "px; height:" + p + "px")
            }
            r.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? o.style.display = "inline-block" : S(o), t.cancelButtonText && (o.innerHTML = j(t.cancelButtonText)), t.confirmButtonText && (a.innerHTML = j(t.confirmButtonText)), a.style.backgroundColor = t.confirmButtonColor, l(a, t.confirmButtonColor), r.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
            var m = !!t.doneFunction;
            r.setAttribute("data-has-done-function", m), r.setAttribute("data-timer", t.timer)
        }

        function i(e, t) {
            e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
            var r, n, i = "#";
            for (n = 0; 3 > n; n++) r = parseInt(e.substr(2 * n, 2), 16), r = Math.round(Math.min(Math.max(0, r + r * t), 255)).toString(16), i += ("00" + r).substr(r.length);
            return i
        }

        function o(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            return e
        }

        function a(e) {
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
        }

        function l(e, t) {
            var r = a(t);
            e.style.boxShadow = "0 0 2px rgba(" + r + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
        }

        function s() {
            var e = b();
            E(w(), 10), _(e), x(e, "showSweetAlert"), P(e, "hideSweetAlert"), d = t.activeElement;
            var r = e.querySelector("button.confirm");
            r.focus(), setTimeout(function() {
                x(e, "visible")
            }, 500);
            var n = e.getAttribute("data-timer");
            "null" !== n && "" !== n && (e.timeout = setTimeout(function() {
                u()
            }, n))
        }

        function u() {
            var r = b();
            Q(w(), 5), Q(r, 5), P(r, "showSweetAlert"), x(r, "hideSweetAlert"), P(r, "visible");
            var n = r.querySelector(".icon.success");
            P(n, "animate"), P(n.querySelector(".tip"), "animateSuccessTip"), P(n.querySelector(".long"), "animateSuccessLong");
            var i = r.querySelector(".icon.error");
            P(i, "animateErrorIcon"), P(i.querySelector(".x-mark"), "animateXMark");
            var o = r.querySelector(".icon.warning");
            P(o, "pulseWarning"), P(o.querySelector(".body"), "pulseWarningIns"), P(o.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = p, t.onclick = f, d && d.focus(), h = void 0, clearTimeout(r.timeout)
        }

        function c() {
            var e = b();
            e.style.marginTop = A(b())
        }
        var d, f, p, h, y = ".sweet-alert",
            m = ".sweet-overlay",
            g = ["error", "warning", "info", "success"],
            v = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#AEDEF4",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null
            },
            b = function() {
                return t.querySelector(y)
            },
            w = function() {
                return t.querySelector(m)
            },
            T = function(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            },
            x = function(e, t) {
                T(e, t) || (e.className += " " + t)
            },
            P = function(e, t) {
                var r = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (T(e, t)) {
                    for (; r.indexOf(" " + t + " ") >= 0;) r = r.replace(" " + t + " ", " ");
                    e.className = r.replace(/^\s+|\s+$/g, "")
                }
            },
            j = function(e) {
                var r = t.createElement("div");
                return r.appendChild(t.createTextNode(e)), r.innerHTML
            },
            k = function(e) {
                e.style.opacity = "", e.style.display = "block"
            },
            _ = function(e) {
                if (e && !e.length) return k(e);
                for (var t = 0; t < e.length; ++t) k(e[t])
            },
            C = function(e) {
                e.style.opacity = "", e.style.display = "none"
            },
            S = function(e) {
                if (e && !e.length) return C(e);
                for (var t = 0; t < e.length; ++t) C(e[t])
            },
            Y = function(e, t) {
                for (var r = t.parentNode; null !== r;) {
                    if (r === e) return !0;
                    r = r.parentNode
                }
                return !1
            },
            A = function(e) {
                e.style.left = "-9999px", e.style.display = "block";
                var t, r = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt(r / 2 + t) + "px"
            },
            E = function(e, t) {
                if (+e.style.opacity < 1) {
                    t = t || 16, e.style.opacity = 0, e.style.display = "block";
                    var r = +new Date,
                        n = function() {
                            e.style.opacity = +e.style.opacity + (new Date - r) / 100, r = +new Date, +e.style.opacity < 1 && setTimeout(n, t)
                        };
                    n()
                }
                e.style.display = "block"
            },
            Q = function(e, t) {
                t = t || 16, e.style.opacity = 1;
                var r = +new Date,
                    n = function() {
                        e.style.opacity = +e.style.opacity - (new Date - r) / 100, r = +new Date, +e.style.opacity > 0 ? setTimeout(n, t) : e.style.display = "none"
                    };
                n()
            },
            D = function(r) {
                if (MouseEvent) {
                    var n = new MouseEvent("click", {
                        view: e,
                        bubbles: !1,
                        cancelable: !0
                    });
                    r.dispatchEvent(n)
                } else if (t.createEvent) {
                    var i = t.createEvent("MouseEvents");
                    i.initEvent("click", !1, !1), r.dispatchEvent(i)
                } else t.createEventObject ? r.fireEvent("onclick") : "function" == typeof r.onclick && r.onclick()
            },
            O = function(t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
            };
        e.sweetAlertInitialize = function() {
                var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
                    r = t.createElement("div");
                r.innerHTML = e, t.body.appendChild(r)
            }, e.sweetAlert = e.swal = function() {
                var e = arguments;
                if (null !== b()) r.apply(this, e);
                else var t = setInterval(function() {
                    null !== b() && (clearInterval(t), r.apply(this, e))
                }, 100)
            }, e.swal.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                o(v, e)
            },
            function() {
                "complete" === t.readyState || "interactive" === t.readyState && t.body ? e.sweetAlertInitialize() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function r() {
                    t.removeEventListener("DOMContentLoaded", r, !1), e.sweetAlertInitialize()
                }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function n() {
                    "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), e.sweetAlertInitialize())
                })
            }()
    }(window, document);
var ytp = ytp || {};
! function(jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
        else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3,
                end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.fn.CSSAnimate = function(e, t, r, n, i) {
        function o(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function a(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }
        return jQuery.support.CSStransition = function() {
            var e = (document.body || document.documentElement).style;
            return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
        }(), this.each(function() {
            var l = this,
                s = jQuery(this);
            l.id = l.id || "CSSA_" + (new Date).getTime();
            var u = u || {
                type: "noEvent"
            };
            if (l.CSSAIsRunning && l.eventType == u.type) l.CSSqueue = function() {
                s.CSSAnimate(e, t, r, n, i)
            };
            else if (l.CSSqueue = null, l.eventType = u.type, 0 !== s.length && e) {
                if (l.CSSAIsRunning = !0, "function" == typeof t && (i = t, t = jQuery.fx.speeds._default), "function" == typeof r && (i = r, r = 0), "function" == typeof n && (i = n, n = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)
                    for (var c in jQuery.fx.speeds) {
                        if (t == c) {
                            t = jQuery.fx.speeds[c];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
                    u = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    }, u[n] && (n = u[n]);
                    var d = "",
                        f = "transitionEnd";
                    jQuery.browser.webkit ? (d = "-webkit-", f = "webkitTransitionEnd") : jQuery.browser.mozilla ? (d = "-moz-", f = "transitionend") : jQuery.browser.opera ? (d = "-o-", f = "otransitionend") : jQuery.browser.msie && (d = "-ms-", f = "msTransitionEnd"), u = [];
                    for (p in e) c = p, "transform" === c && (c = d + "transform", e[c] = e[p], delete e[p]), "filter" === c && (c = d + "filter", e[c] = e[p], delete e[p]), "transform-origin" !== c && "origin" !== c || (c = d + "transform-origin", e[c] = e[p], delete e[p]), "x" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " translateX(" + a(e[p], "px") + ")", delete e[p]), "y" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " translateY(" + a(e[p], "px") + ")", delete e[p]), "z" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " translateZ(" + a(e[p], "px") + ")", delete e[p]), "rotate" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotate(" + a(e[p], "deg") + ")", delete e[p]), "rotateX" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotateX(" + a(e[p], "deg") + ")", delete e[p]), "rotateY" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotateY(" + a(e[p], "deg") + ")", delete e[p]), "rotateZ" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " rotateZ(" + a(e[p], "deg") + ")", delete e[p]), "scale" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scale(" + a(e[p], "") + ")", delete e[p]), "scaleX" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scaleX(" + a(e[p], "") + ")", delete e[p]), "scaleY" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scaleY(" + a(e[p], "") + ")", delete e[p]), "scaleZ" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " scaleZ(" + a(e[p], "") + ")", delete e[p]), "skew" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " skew(" + a(e[p], "deg") + ")", delete e[p]), "skewX" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " skewX(" + a(e[p], "deg") + ")", delete e[p]), "skewY" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " skewY(" + a(e[p], "deg") + ")", delete e[p]), "perspective" === c && (c = d + "transform", e[c] = e[c] || "", e[c] += " perspective(" + a(e[p], "px") + ")", delete e[p]), 0 > u.indexOf(c) && u.push(o(c));
                    var p = u.join(","),
                        h = function() {
                            s.off(f + "." + l.id), clearTimeout(l.timeout), s.css(d + "transition", ""), "function" == typeof i && i(s), l.called = !0, l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null)
                        },
                        y = {};
                    jQuery.extend(y, e), y[d + "transition-property"] = p, y[d + "transition-duration"] = t + "ms", y[d + "transition-delay"] = r + "ms", y[d + "transition-style"] = "preserve-3d", y[d + "transition-timing-function"] = n, setTimeout(function() {
                        s.one(f + "." + l.id, h), s.css(y)
                    }, 1), l.timeout = setTimeout(function() {
                        s.called || !i ? (s.called = !1, l.CSSAIsRunning = !1) : (s.css(d + "transition", ""), i(s), l.CSSAIsRunning = !1, "function" == typeof l.CSSqueue && (l.CSSqueue(), l.CSSqueue = null))
                    }, t + r + 100)
                } else {
                    for (var p in e) "transform" === p && delete e[p], "filter" === p && delete e[p], "transform-origin" === p && delete e[p], "auto" === e[p] && delete e[p];
                    i && "string" != typeof i || (i = "linear"), s.animate(e, t, i)
                }
            }
        })
    }, ! function(e) {
        e.simpleSlider = {
            defaults: {
                initialval: 0,
                scale: 100,
                orientation: "h",
                readonly: !1,
                callback: !1
            },
            init: function(t) {
                return this.each(function() {
                    var r = this,
                        n = e(r);
                    n.addClass("simpleSlider"), r.opt = {}, e.extend(r.opt, e.simpleSlider.defaults, t), e.extend(r.opt, n.data());
                    var i = "h" == r.opt.orientation ? "horizontal" : "vertical",
                        o = e("<div/>").addClass("level").addClass(i);
                    n.prepend(o), r.level = o, n.css({
                        cursor: "default"
                    }), "auto" == r.opt.scale && (r.opt.scale = e(r).outerWidth()), n.updateSliderVal(), r.opt.readonly || (n.on("mousedown", function(e) {
                        r.canSlide = !0, n.updateSliderVal(e)
                    }), e(document).on("mousemove", function(t) {
                        r.canSlide && (e(document).css({
                            cursor: "default"
                        }), n.updateSliderVal(t), t.preventDefault(), t.stopPropagation())
                    }).on("mouseup", function() {
                        e(document).css({
                            cursor: "auto"
                        }), r.canSlide = !1
                    }))
                })
            },
            updateSliderVal: function(t) {
                function r(e, t) {
                    return Math.floor(100 * e / t)
                }
                var n = this,
                    i = n.get(0);
                i.opt.initialval = "number" == typeof i.opt.initialval ? i.opt.initialval : i.opt.initialval(i);
                var o = e(i).outerWidth(),
                    a = e(i).outerHeight();
                i.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - n.offset().left : "number" == typeof t ? t * o / i.opt.scale : i.opt.initialval * o / i.opt.scale, i.y = "object" == typeof t ? t.clientY + document.body.scrollTop - n.offset().top : "number" == typeof t ? (i.opt.scale - i.opt.initialval - t) * a / i.opt.scale : i.opt.initialval * a / i.opt.scale, i.y = n.outerHeight() - i.y, i.scaleX = i.x * i.opt.scale / o, i.scaleY = i.y * i.opt.scale / a, i.outOfRangeX = i.scaleX > i.opt.scale ? i.scaleX - i.opt.scale : i.scaleX < 0 ? i.scaleX : 0, i.outOfRangeY = i.scaleY > i.opt.scale ? i.scaleY - i.opt.scale : i.scaleY < 0 ? i.scaleY : 0, i.outOfRange = "h" == i.opt.orientation ? i.outOfRangeX : i.outOfRangeY, i.value = "undefined" != typeof t ? "h" == i.opt.orientation ? i.x >= n.outerWidth() ? i.opt.scale : i.x <= 0 ? 0 : i.scaleX : i.y >= n.outerHeight() ? i.opt.scale : i.y <= 0 ? 0 : i.scaleY : "h" == i.opt.orientation ? i.scaleX : i.scaleY, "h" == i.opt.orientation ? i.level.width(r(i.x, o) + "%") : i.level.height(r(i.y, a)), "function" == typeof i.opt.callback && i.opt.callback(i)
            }
        }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
    }(jQuery), jQuery.mbStorage = {
        set: function(e, t) {
            t = JSON.stringify(t), localStorage.setItem(e, t)
        },
        get: function(e) {
            return localStorage[e] ? JSON.parse(localStorage[e]) : null
        },
        remove: function(e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    };
    var getYTPVideoID = function(e) {
        var t, r;
        return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), r = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = r ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], r = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, r = t ? null : e), {
            videoID: t,
            playlistID: r
        }
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.1",
        author: "Matteo Bicocchi",
        defaults: {
            apiKey: "",
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function(e) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
                    grayscale: {
                        value: 0,
                        unit: "%"
                    },
                    hue_rotate: {
                        value: 0,
                        unit: "deg"
                    },
                    invert: {
                        value: 0,
                        unit: "%"
                    },
                    opacity: {
                        value: 0,
                        unit: "%"
                    },
                    saturate: {
                        value: 0,
                        unit: "%"
                    },
                    sepia: {
                        value: 0,
                        unit: "%"
                    },
                    brightness: {
                        value: 0,
                        unit: "%"
                    },
                    contrast: {
                        value: 0,
                        unit: "%"
                    },
                    blur: {
                        value: 0,
                        unit: "px"
                    }
                }, $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
                    playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                    html5: 1
                }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
                    overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    if (YTPlayer.canPlayOnMobile = isPlayer && 0 == jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({
                            boxSizing: "border-box"
                        }), wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                            position: "relative"
                        }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                            opacity: 1
                        }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function() {
                            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .6 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        height: "100%",
                                        width: "100%",
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target, playerBox.css({
                                                    opacity: 1
                                                }), YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(e) {
                                            if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                                                YTPlayer.isReady = !YTPlayer.isPlayer || YTPlayer.opt.autoPlay, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function() {
                                                    $YTPlayer.optimizeDisplay()
                                                }), jQuery.mbYTPlayer.checkForState(YTPlayer);
                                                var t = jQuery.Event("YTPUnstarted");
                                                t.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(t)
                                            }
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.state != state) {
                                                    YTPlayer.state = state;
                                                    var eventType;
                                                    switch (state) {
                                                        case -1:
                                                            eventType = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            eventType = "YTPEnd";
                                                            break;
                                                        case 1:
                                                            eventType = "YTPStart", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.videoData.title || YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.videoData.title || YTPlayer.videoID.toString());
                                                            break;
                                                        case 2:
                                                            eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 3:
                                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            eventType = "YTPCued"
                                                    }
                                                    var YTPevent = jQuery.Event(eventType);
                                                    YTPevent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPevent)
                                                }
                                            }
                                        },
                                        onPlaybackQualityChange: function(e) {
                                            var t = e.target.getPlaybackQuality(),
                                                r = jQuery.Event("YTPQualityChange");
                                            r.quality = t, jQuery(YTPlayer).trigger(r)
                                        },
                                        onError: function(e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                            }
                        }))
                    })
                }
            })
        },
        getDataFromAPI: function(e) {
            if (e.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + e.videoID), e.videoData) setTimeout(function() {
                "auto" == e.opt.ratio ? e.opt.ratio = "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
                var t = jQuery.Event("YTPData");
                t.prop = {};
                for (var r in e.videoData) t.prop[r] = e.videoData[r];
                jQuery(e).trigger(t)
            }, 500);
            else if (e.opt.apiKey) jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + e.opt.apiKey + "&part=snippet", function(t) {
                function r(t) {
                    e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : "4/3", e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YYTPlayer_data_" + e.videoID, e.videoData)
                }
                e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), r(t.items[0].snippet);
                var n = jQuery.Event("YTPData");
                n.prop = {};
                for (var i in e.videoData) n.prop[i] = e.videoData[i];
                jQuery(e).trigger(n)
            });
            else {
                if (e.hasData = !1, setTimeout(function() {
                        jQuery(e).trigger("YTPChanged")
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = "https://i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    })
                }
                e.videoData = null, "auto" == e.opt.ratio ? "16/9" : "4/3"
            }
            jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (!e.hasData && (e.hasData = !0, e.isPlayer && !e.opt.autoPlay)) {
                    var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    })
                }
            }), e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            var e = this.get(0);
            return e.videoData
        },
        getVideoID: function() {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function(e) {
            var t = this.get(0);
            jQuery.browser.chrome || t.player.setPlaybackQuality(e)
        },
        playlist: function(e, t, r) {
            var n = this,
                i = n.get(0);
            return i.isPlayList = !0, t && (e = jQuery.shuffle(e)), i.videoID || (i.videos = e, i.videoCounter = 0, i.videoLength = e.length, jQuery(i).data("property", e[0]), jQuery(i).mb_YTPlayer()), "function" == typeof r && jQuery(i).on("YTPChanged", function() {
                r(i)
            }), jQuery(i).on("YTPEnd", function() {
                jQuery(i).playNext()
            }), n
        },
        playNext: function() {
            var e = this.get(0);
            e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        playPrev: function() {
            var e = this.get(0);
            e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter])
        },
        changeMovie: function(e) {
            var t = this.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, e && jQuery.extend(t.opt, t.defaultOpt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, jQuery(t.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function() {
                jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery.mbYTPlayer.checkForState(t), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(t)
            })
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
            var t = e.wrapper;
            t.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState)
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }

            function RunPrefixMethod(e, t) {
                for (var r, n, i = ["webkit", "moz", "ms", "o", ""], o = 0; o < i.length && !e[r];) {
                    if (r = t, "" == i[o] && (r = r.substr(0, 1).toLowerCase() + r.substr(1)), r = i[o] + r, n = typeof e[r], "undefined" != n) return i = [i[o]], "function" == n ? e[r]() : e[r];
                    o++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 500), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, 500)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0)
        },
        toggleLoops: function() {
            var e = this.get(0),
                t = e.opt;
            1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1)
        },
        play: function() {
            var e = this.get(0);
            if (e.isReady) {
                var t = jQuery("#controlBar_" + e.id),
                    r = t.find(".mb_YTPPlaypause");
                r.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({
                    opacity: e.isAlone ? 1 : e.opt.opacity
                }, 2e3), jQuery(e.playerEl).CSSAnimate({
                    opacity: 1
                }, 1e3), jQuery(e).css("background-image", "none")
            }
        },
        togglePlay: function(e) {
            var t = this.get(0);
            1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state)
        },
        stop: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                r = t.find(".mb_YTPPlaypause");
            r.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo()
        },
        pause: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                r = t.find(".mb_YTPPlaypause");
            r.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo()
        },
        seekTo: function(e) {
            var t = this.get(0);
            t.player.seekTo(e, !0)
        },
        setVolume: function(e) {
            var t = this.get(0);
            e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute()
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(0);
                var t = jQuery("#controlBar_" + e.id),
                    r = t.find(".mb_YTPMuteUnmute");
                r.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var n = jQuery.Event("YTPMuted");
                n.time = e.player.time, e.canTrigger && jQuery(e).trigger(n)
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                var t = jQuery("#controlBar_" + e.id),
                    r = t.find(".mb_YTPMuteUnmute");
                r.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var n = jQuery.Event("YTPUnmuted");
                n.time = e.player.time, e.canTrigger && jQuery(e).trigger(n)
            }
        },
        applyFilter: function(e, t) {
            var r = this.get(0);
            return r.filters[e].value = t, r.filtersEnabled && this.YTPEnableFilters(), this
        },
        applyFilters: function(e) {
            var t = this.get(0);
            return this.on("YTPReady", function() {
                for (var r in e) t.filters[r].value = e[r], jQuery(t).YTPApplyFilter(r, e[r]);
                jQuery(t).trigger("YTPFiltersApplied")
            }), this
        },
        toggleFilter: function(e, t) {
            var r = this.get(0);
            return r.filters[e].value ? r.filters[e].value = 0 : r.filters[e].value = t, r.filtersEnabled && this.YTPEnableFilters(), this
        },
        disableFilters: function() {
            var e = this.get(0),
                t = jQuery(e.playerEl);
            return t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1, this
        },
        enableFilters: function() {
            var e = this.get(0),
                t = jQuery(e.playerEl),
                r = "";
            for (var n in e.filters) e.filters[n].value && (r += n.replace("_", "-") + "(" + e.filters[n].value + e.filters[n].unit + ") ");
            return t.css("-webkit-filter", r), t.css("filter", r), e.filtersEnabled = !0, this
        },
        toggleFilters: function(e) {
            var t = this.get(0);
            return t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled), this
        },
        removeFilter: function(e, t) {
            "function" == typeof e && (t = e, e = null);
            var r = this.get(0);
            if (e) this.YTPApplyFilter(e, 0), "function" == typeof t && t(e);
            else
                for (var n in r.filters) this.YTPApplyFilter(n, 0), "function" == typeof t && t(n);
            return this
        },
        manageProgress: function() {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                r = t.find(".mb_YTPProgress"),
                n = t.find(".mb_YTPLoaded"),
                i = t.find(".mb_YTPseekbar"),
                o = r.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()),
                l = Math.floor(e.player.getDuration()),
                s = a * o / l,
                u = 0,
                c = 100 * e.player.getVideoLoadedFraction();
            return n.css({
                left: u,
                width: c + "%"
            }), i.css({
                left: 0,
                width: s
            }), {
                totalTime: l,
                currentTime: a
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                        timeBar.css({
                            width: e.clientX - timeBar.offset().left
                        }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var t = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 1e3;
            return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0,
                    stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
                    var YTPevent = jQuery.Event("YTPTime");
                    YTPevent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPevent)
                }
                if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 2e3), YTPlayer.isPlayList) {
                        clearInterval(YTPlayer.getState);
                        var YTPEnd = jQuery.Event("YTPEnd");
                        return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd)
                    }
                    data.loop ? YTPlayer.player.seekTo(startAt, !0) : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, 1e3, function() {
                        var e = jQuery.Event("YTPEnd");
                        if (e.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), !YTPlayer.isBackground) {
                            var t = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
                            YTPlayer.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                    }))
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(e) {
            var t = jQuery(e);
            if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();
            if (jQuery.browser.chrome && (e.opt.quality = "default"), e.player.pauseVideo(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                var r = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? r + " retina" : r)
            } else e.overlay.removeClass(function(e, t) {
                var r = t.split(" "),
                    n = [];
                return jQuery.each(r, function(e, t) {
                    /raster.*/.test(t) && n.push(t)
                }), n.push("retina"), n.join(" ")
            });
            e.checkForStartAt = setInterval(function() {
                jQuery(e).YTPMute();
                var r = e.opt.startAt ? e.opt.startAt : 1,
                    n = e.player.getVideoLoadedFraction() > r / e.player.getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= r && n) {
                    clearInterval(e.checkForStartAt), e.isReady = !0, "function" == typeof e.opt.onReady && e.opt.onReady(e);
                    var i = jQuery.Event("YTPReady");
                    jQuery(e).trigger(i), e.player.pauseVideo(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay ? (t.YTPPlay(), t.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({
                        opacity: 1
                    }, 1e3), e.wrapper.CSSAnimate({
                        opacity: e.isAlone ? 1 : e.opt.opacity
                    }, 1e3)) : e.player.pauseVideo(), e.isPlayer && !e.opt.autoPlay && (e.loading.html("Ready"), setTimeout(function() {
                        e.loading.fadeOut()
                    }, 100)), e.controlBar && e.controlBar.slideDown(1e3)
                } else r >= 0 && e.player.seekTo(r, !0)
            }, 1e3)
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60),
                r = Math.floor(e - 60 * t);
            return (9 >= t ? "0" + t : t) + " : " + (9 >= r ? "0" + r : r)
        }
    }, jQuery.fn.toggleVolume = function() {
        var e = this.get(0);
        if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
    }, jQuery.fn.optimizeDisplay = function() {
        var e = this.get(0),
            t = e.opt,
            r = jQuery(e.playerEl),
            n = {},
            i = e.wrapper;
        n.width = i.outerWidth(), n.height = i.outerHeight();
        var o = 24,
            a = 100,
            l = {};
        t.optimizeDisplay ? (l.width = n.width + n.width * o / 100, l.height = "16/9" == t.ratio ? Math.ceil(9 * n.width / 16) : Math.ceil(3 * n.width / 4), l.marginTop = -((l.height - n.height) / 2), l.marginLeft = -(n.width * (o / 2) / 100), l.height < n.height && (l.height = n.height + n.height * o / 100, l.width = "16/9" == t.ratio ? Math.floor(16 * n.height / 9) : Math.floor(4 * n.height / 3), l.marginTop = -(n.height * (o / 2) / 100), l.marginLeft = -((l.width - n.width) / 2)), l.width += a, l.height += a, l.marginTop -= a / 2, l.marginLeft -= a / 2) : (l.width = "100%", l.height = "100%", l.marginTop = 0, l.marginLeft -= 0), r.css({
            width: l.width,
            height: l.height,
            marginTop: l.marginTop,
            marginLeft: l.marginLeft
        })
    }, jQuery.shuffle = function(e) {
        for (var t = e.slice(), r = t.length, n = r; n--;) {
            var i = parseInt(Math.random() * r),
                o = t[n];
            t[n] = t[i], t[i] = o
        }
        return t
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), ! function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e) {
        var t, r, n, i, o, a, l, s = {};
        for (o = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), l = 0, a = o.length; a > l && (r = o[l], -1 === r.search(/^(http|https|ftp):\/\//) && -1 !== r.search(":")); l++) t = r.indexOf(":"), n = r.substring(0, t), i = r.substring(t + 1), i || (i = void 0), "string" == typeof i && (i = "true" === i || ("false" === i ? !1 : i)), "string" == typeof i && (i = isNaN(i) ? i : +i), s[n] = i;
        return null == n && null == i ? e : s
    }

    function r(e) {
        e = "" + e;
        var t, r, n, i = e.split(/\s+/),
            o = "50%",
            a = "50%";
        for (n = 0, t = i.length; t > n; n++) r = i[n], "left" === r ? o = "0%" : "right" === r ? o = "100%" : "top" === r ? a = "0%" : "bottom" === r ? a = "100%" : "center" === r ? 0 === n ? o = "50%" : a = "50%" : 0 === n ? o = r : a = r;
        return {
            x: o,
            y: a
        }
    }

    function n(t, r) {
        var n = function() {
            r(this.src)
        };
        e('<img src="' + t + '.gif">').load(n), e('<img src="' + t + '.jpg">').load(n), e('<img src="' + t + '.jpeg">').load(n), e('<img src="' + t + '.png">').load(n)
    }

    function i(r, n, i) {
        if (this.$element = e(r), "string" == typeof n && (n = t(n)), i ? "string" == typeof i && (i = t(i)) : i = {}, "string" == typeof n) n = n.replace(/\.\w*$/, "");
        else if ("object" == typeof n)
            for (var o in n) n.hasOwnProperty(o) && (n[o] = n[o].replace(/\.\w*$/, ""));
        this.settings = e.extend({}, a, i), this.path = n, this.init()
    }
    var o = "vide",
        a = {
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            posterType: "detect",
            resizing: !0
        };
    i.prototype.init = function() {
        var t, i = this,
            o = r(i.settings.position),
            a = "";
        i.$wrapper = e("<div>").css({
            position: "absolute",
            "z-index": -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": o.x + " " + o.y
        }), t = i.path, "object" == typeof i.path && (i.path.poster ? t = i.path.poster : i.path.mp4 ? t = i.path.mp4 : i.path.webm ? t = i.path.webm : i.path.ogv && (t = i.path.ogv)), "detect" === i.settings.posterType ? n(t, function(e) {
            i.$wrapper.css("background-image", "url(" + e + ")")
        }) : "none" !== i.settings.posterType && i.$wrapper.css("background-image", "url(" + t + "." + i.settings.posterType + ")"), "static" === i.$element.css("position") && i.$element.css("position", "relative"), i.$element.prepend(i.$wrapper), "object" == typeof i.path ? (i.path.mp4 && (a += '<source src="' + i.path.mp4 + '.mp4" type="video/mp4">'), i.path.webm && (a += '<source src="' + i.path.webm + '.webm" type="video/webm">'),
            i.path.ogv && (a += '<source src="' + i.path.ogv + '.ogv" type="video/ogv">'), i.$video = e("<video>" + a + "</video>")) : i.$video = e('<video><source src="' + i.path + '.mp4" type="video/mp4"><source src="' + i.path + '.webm" type="video/webm"><source src="' + i.path + '.ogv" type="video/ogg"></video>'), i.$video.prop({
            autoplay: i.settings.autoplay,
            loop: i.settings.loop,
            volume: i.settings.volume,
            muted: i.settings.muted,
            defaultMuted: i.settings.muted,
            playbackRate: i.settings.playbackRate,
            defaultPlaybackRate: i.settings.playbackRate
        }).css({
            margin: "auto",
            position: "absolute",
            "z-index": -1,
            top: o.y,
            left: o.x,
            "-webkit-transform": "translate(-" + o.x + ", -" + o.y + ")",
            "-ms-transform": "translate(-" + o.x + ", -" + o.y + ")",
            "-moz-transform": "translate(-" + o.x + ", -" + o.y + ")",
            transform: "translate(-" + o.x + ", -" + o.y + ")",
            visibility: "hidden"
        }).one("canplaythrough.vide", function() {
            i.resize()
        }).one("playing.vide", function() {
            i.$video.css("visibility", "visible"), i.$wrapper.css("background-image", "none")
        }), i.$element.on("resize.vide", function() {
            i.settings.resizing && i.resize()
        }), i.$wrapper.append(i.$video)
    }, i.prototype.getVideoObject = function() {
        return this.$video[0]
    }, i.prototype.resize = function() {
        if (this.$video) {
            var e = this.$video[0].videoHeight,
                t = this.$video[0].videoWidth,
                r = this.$wrapper.height(),
                n = this.$wrapper.width();
            n / t > r / e ? this.$video.css({
                width: n + 2,
                height: "auto"
            }) : this.$video.css({
                width: "auto",
                height: r + 2
            })
        }
    }, i.prototype.destroy = function() {
        this.$element.off(o), this.$video && this.$video.off(o), delete e[o].lookup[this.index], this.$element.removeData(o), this.$wrapper.remove()
    }, e[o] = {
        lookup: []
    }, e.fn[o] = function(t, r) {
        var n;
        return this.each(function() {
            n = e.data(this, o), n && n.destroy(), n = new i(this, t, r), n.index = e[o].lookup.push(n) - 1, e.data(this, o, n)
        }), this
    }, e(document).ready(function() {
        var t = e(window);
        t.on("resize.vide", function() {
            for (var t, r = e[o].lookup.length, n = 0; r > n; n++) t = e[o].lookup[n], t && t.settings.resizing && t.resize()
        }), t.on("unload.vide", function() {
            return !1
        }), e(document).find("[data-vide-bg]").each(function(t, r) {
            var n = e(r),
                i = n.data("vide-options"),
                a = n.data("vide-bg");
            n[o](a, i)
        })
    })
}),
function(e, t, r) {
    "use strict";

    function n(e) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            n = t.createElement("div"),
            i = n.style,
            o = ["Webkit", "Moz", "ms", "O"];
        if (e in i) return e;
        for (var a = 0, l = o.length; l > a; a++) {
            var s = o[a] + r;
            if (s in i) return s
        }
        return null
    }

    function i(e, t, r) {
        return r ? (r *= t, t += r, e = t - r) : e = e || 0, parseInt(Math.random() * (t - e + 1) + e)
    }

    function o(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    }

    function a(e, t) {
        for (var r in t) e.style[d[r] || r] = t[r]
    }

    function l(r) {
        function n() {
            var e = h.cloneNode();
            return "solid" != v.type && (e[d ? "src" : "innerHTML"] = "string" == typeof v.content ? v.content : v.content[0 == p ? 0 : Math.floor(Math.random() * p)]), e
        }

        function l() {
            var e, t = i(v.minSize, v.maxSize),
                r = -2 * t,
                o = i(0, w - t),
                l = i(5, 10) / 10,
                s = i(null, .8 * T, 1),
                u = i(-100, 100),
                c = T + 2 * t,
                d = i(null, 20 * T, .2);
            g.length ? (e = g.shift(), e.dataset.type != v.type && (e = new n)) : e = new n;
            var f = {
                top: r + "px",
                left: o + "px",
                opacity: l,
                transform: "none",
                transition: d + "ms linear"
            };
            switch (v.type) {
                case "solid":
                    f.width = f.height = t + "px";
                    break;
                case "text":
                    f["font-size"] = t + "px";
                    break;
                case "image":
                    f.width = t + "px"
            }
            a(e, f), b.appendChild(e), setTimeout(function() {
                a(e, {
                    transform: "translate(" + u + "px," + c + "px) rotate(" + s + "deg)",
                    opacity: v.fadeOut ? 0 : l
                })
            }, 100)
        }
        var d, p, h, y, m = this,
            g = [],
            v = c,
            b = t.createElement("div");
        m.config = function(e) {
            o(v, e), d = "image" == v.type, p = v.content.length, h = d ? new Image : t.createElement("div"), h.className = "snowflake snowflake-" + v.type, h.dataset.type = v.type
        }, m.config(r);
        var w = v.root.scrollWidth,
            T = v.root.scrollHeight;
        return e.addEventListener("resize", function() {
            w = v.root.scrollWidth, T = v.root.scrollHeight
        }, !1), m.playing = 0, m.play = function() {
            m.playing || (y = setInterval(l, v.interval), m.playing = 1)
        }, m.stop = function() {
            m.playing && (clearInterval(y), y = null, m.playing = 0)
        }, t.addEventListener(u, function() {
            t[s] ? m.stop() : m.play()
        }, !1), b.addEventListener(f, function(e) {
            var t = e.target || e.srcElement;
            b.removeChild(t), g.push(t)
        }, !1), b.className = "snowfield", v.root.firstChild ? v.root.insertBefore(b, v.root.firstChild) : v.root.appendChild(b), v.autoplay && m.play(), m
    }
    var s, u, c = {
            minSize: 10,
            maxSize: 30,
            type: "text",
            content: "&#10052",
            fadeOut: !0,
            autoplay: !0,
            interval: 200,
            root: t.body
        },
        d = {
            transform: n("transform"),
            transition: n("transition")
        },
        f = {
            WebkitTransition: "webkitTransitionEnd",
            OTransition: "oTransitionEnd",
            Moztransition: "transitionend",
            transition: "transitionend"
        }[d.transition];
    "undefined" != typeof t.hidden ? (s = "hidden", u = "visibilitychange") : "undefined" != typeof t.mozHidden ? (s = "mozHidden", u = "mozvisibilitychange") : "undefined" != typeof t.msHidden ? (s = "msHidden", u = "msvisibilitychange") : "undefined" != typeof t.webkitHidden && (s = "webkitHidden", u = "webkitvisibilitychange"), e.Snowfall = l
}(window, document),
function() {
    try {
        $(function() {
            try {
                var e, t, r, n, i, o;
                return $.fn.findUpmost = function(e) {
                    try {
                        var t, r, n, i;
                        for (i = [], $(this).find(e).each(function() {
                                try {
                                    var e;
                                    return e = $(this).parents().length, i[e] ? i[e].push(this) : i[e] = [this]
                                } catch (t) {
                                    error_handler(t, "red-libs 3")
                                }
                            }), t = 0, r = i.length; r > t; t++)
                            if (n = i[t]) return $(n)
                    } catch (o) {
                        error_handler(o, "red-libs 2")
                    }
                }, t = [], i = ".modal-content, .sweet-overlay, .sweet-alert, #cboxOverlay, #colorbox", plp.modal = function(e, r) {
                    try {
                        return r.appendTo("div.area"), r.modal({
                            backdrop: !1,
                            keyboard: !1,
                            show: !1
                        }), e.on("click", function(e) {
                            try {
                                return r.modal("show"), r.before('<div class="modal-backdrop fade in"></div>'), t.push(r), plp.lazy.update(), e.preventDefault()
                            } catch (n) {
                                error_handler(n, "red-libs 5")
                            }
                        })
                    } catch (n) {
                        error_handler(n, "red-libs 4")
                    }
                }, e = $(".btn[data-modal], .btn-modal[data-modal]"), e.each(function() {
                    try {
                        var e, t, r;
                        return e = $(this), r = e.closest(".node"), r.length || (r = e.closest(".modal")), t = r.findUpmost('.modal[data-modal="' + e.attr("data-modal") + '"]'), plp.modal(e, t)
                    } catch (n) {
                        error_handler(n, "red-libs 6")
                    }
                }), o = function(t) {
                    try {
                        return e.filter('[data-id="' + t + '"]:visible:first').click()
                    } catch (r) {
                        error_handler(r, "red-libs 7")
                    }
                }, n = location.href.match(/#modal-([a-z0-9]+)/), n && o(n[1]), $(document).on("click", 'a[href^="#modal-"]', function(e) {
                    try {
                        var t;
                        if (e.isDefaultPrevented()) return;
                        if (t = $(this).attr("href").match(/#modal-([a-z0-9]+)/)) return o(t[1])
                    } catch (r) {
                        error_handler(r, "red-libs 8")
                    }
                }), r = function() {
                    try {
                        var e;
                        return e = _.last(t).modal("hide"), e.prev(".modal-backdrop").remove(), t = _.without(t, e)
                    } catch (r) {
                        error_handler(r, "red-libs 9")
                    }
                }, $(document).on("click", function(n) {
                    try {
                        var o, a;
                        if (!t.length) return;
                        if ($(n.target).closest(e).length) return;
                        if ($(n.target).closest('a[href^="#modal-"]').length) return;
                        if (a = _.last(t), n.target === a[0]) return r();
                        if ($(n.target).closest(".modal-header > .close").length) return r();
                        if (o = $(n.target).closest(".modal"), o.length && o[0] !== a[0]) return r();
                        if (!$(n.target).closest(i).length) return r()
                    } catch (l) {
                        error_handler(l, "red-libs 10")
                    }
                })
            } catch (a) {
                error_handler(a, "red-libs 1")
            }
        })
    } catch (e) {
        error_handler(e, "red-libs 0")
    }
}.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t, r, n, i, o, a, l, s, u, c;
                    return o = window.plp_page_id || window.plp.page_id, e = window.plp_content_id || window.plp.content_id, c = $.cookie("visit_id"), l = 0, a = 2500, r = {
                        ru: {
                            error: "Не удалось отправить форму!",
                            validate: "Неправильно заполнены поля:",
                            interval: "Пожалуйста, повторите отправку через пару секунд.",
                            required: "Поле «%field%» обязательно для заполнения.",
                            email: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
                            phone: "Поле «%field%» должно содержать правильный номер телефона.",
                            number: "Поле «%field%» должно быть правильным числом."
                        },
                        am: {
                            error: "Հայտն ուղարկված չէ, խնդրում ենք կրկին փորձել",
                            validate: "Տողերը սխալ են լրացված",
                            interval: "Տողերը սխալ են մուտքագրված: Խնդրում ենք կրկին փորձել մի քանի վարկյանից",
                            required: "Խնդրում ենք լրացրեք «%field%» տողը, այն պարտադիր է",
                            email: "Խնդրում ենք «%field%» տողում գրանցել Ձեր իրական էլ. փոստի հասցեն",
                            phone: "Խնդրում ենք «%field%» տողում գրանցել Ձեր ճիշտ հեռախոսահամարը",
                            number: "Խնդրում ենք «%field%» տողում գրանցել ճիշտ ամսաթիվ"
                        },
                        bg: {
                            error: "Неуспешно изпращане на заявката!",
                            validate: "Грешно запълнени полета:",
                            interval: "Моля, изпратете отново заявката след няколко секунди.",
                            required: "Полето «%field%» е задължително за запълване.",
                            email: "Полето «%field%» трябва да съдържа истинският Ви имейл адрес.",
                            phone: "Полето «%field%» задължително трябва да съдържа правилният Ви телефонен номер.",
                            number: "Полето «%field%» трябва да съдържа правилно изписано число."
                        },
                        uk: {
                            error: "Не вдалося відправити форму!",
                            validate: "Неправильно заповнені поля:",
                            interval: "Будь ласка, повторіть відправку через пару секунд",
                            required: "Поле «%field%» обов'язково для заповнення.",
                            email: "Поле «%field%» повинно містити ваш справжній e-mail адресу.",
                            phone: "Поле «%field%» повинно містити правильний номер телефону.",
                            number: "Поле «%field%» має бути правильним числом."
                        },
                        md: {
                            error: "Не удалось отправить форму!",
                            validate: "Неправильно заполнены поля:",
                            interval: "Пожалуйста, повторите отправку через пару секунд.",
                            required: "Поле «%field%» обязательно для заполнения.",
                            email: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
                            phone: "Поле «%field%» должно содержать правильный номер телефона.",
                            number: "Поле «%field%» должно быть правильным числом."
                        },
                        en: {
                            error: "Error sending form!",
                            validate: "Fields are not filled corectly:",
                            interval: "Pleasy try again in a few seconds.",
                            required: "The field «%field%» is required.",
                            email: "The field «%field%» must contain you real email address.",
                            phone: "The field «%field%» must contain you real phone number.",
                            number: "The field «%field%» must be a number."
                        },
                        es: {
                            error: "No es posible enviar el formulario!",
                            validate: "Los campos rellenados de forma incorrecta:",
                            interval: "Por favor, inténtelo de nuevo después de unos segundos.",
                            required: "Campo «%field%» rellenar obligatorio.",
                            email: "Campo «%field%» debe contener su dirección electrónica actual.",
                            phone: "Campo «%field%» debe contener el numero de teléfono en el formato adecuado.",
                            number: "Campo «%field%» debe ser el numero correcto."
                        },
                        it: {
                            error: "Il form non è stato inviato!",
                            validate: "I campi richiesti sono stati compilati in modo errato:",
                            interval: "Per favore riprova l'invio tra qualche istante.",
                            required: "«%field%» Campo obbligatorio.",
                            email: "Il campo «%field%» deve contenere un indirizzo e-mail valido.",
                            phone: "Il campo «%field%» deve contenere un numero di telefono valido.",
                            number: "Il campo «%field%» deve avere un numero corretto."
                        },
                        fr: {
                            error: "Impossible d'envoyer le formulaire!",
                            validate: "Ne pas correctement rempli les champs:",
                            interval: "Se il vous plaît essayez d'envoyer un couple de secondes",
                            required: "Le champ «%field%» est nécessaire.",
                            email: "Le champ «%field%» doit contenir votre adresse e-mail réelle.",
                            phone: "Le champ «%field%» doit contenir un numéro de téléphone valide.",
                            number: "Le champ «%field%» doit être un nombre valide."
                        },
                        de: {
                            error: "Die form konnte nicht gesendet!",
                            validate: "Sei nicht korrekt ausgefüllt Felder:",
                            interval: "Versuchen Sie, ein paar Sekunden zu senden.",
                            required: "Das Feld «%field%» ist nicht erforderlich.",
                            email: "Das Feld «%field%» muss auf Ihren eigenen E-Mail Adresse enthalten.",
                            phone: "Das Feld «%field%» muss eine gültige Telefonnummer enthalten.",
                            number: "Das Feld «%field%» muss eine gültige Zahl sein."
                        },
                        "pt-BR": {
                            error: "Não foi possível enviar o formulário!",
                            validate: "Não campos preenchidos corretamente:",
                            interval: "Por favor, tente enviar um par de segundos",
                            required: "O campo «%field%» é necessário.",
                            email: "O campo «%field%» deve conter o seu endereço de e-mail real.",
                            phone: "O campo «%field%» deve conter um número de telefone válido.",
                            number: "O campo «%field%» deve ser um número válido."
                        },
                        cs: {
                            error: "Nepodařilo se odeslat formulář!",
                            validate: "Nesprávně vyplněné pole:",
                            interval: "Prosím zopakujte odeslání za pár vteřin.",
                            required: "Pole «%field%» nutné k vyplnění.",
                            email: "Pole «%field%» musí obsahovat vaši správnou e-mail adresu.",
                            phone: "Pole «%field%» musí obsahovat vaše správné telefonní číslo.",
                            number: "Pole «%field%» musí být prvočislem."
                        },
                        el: {
                            error: "Η φόρμα δεν στάλθηκε!",
                            validate: "Τα πεδία δεν συμπληρώθηκαν σωστά:",
                            interval: "Παρακαλώ, προσπαθήστε ξανά σε μερικά δευτερόλεπτα.",
                            required: "Το πεδίο «%field%» απαιτείται.",
                            email: "Το πεδίο «%field%» πρέπει να περιλαμβάνει την πραγματική διεύθυνση e-mail σας.",
                            phone: "Το πεδίο «%field%» πρέπει να περιέχει τον σωστό αριθμό τηλεφώνου.",
                            number: "Το πεδίο «%field%» θα πρέπει να είναι ο σωστός αριθμός."
                        },
                        lt: {
                            error: "Nepasisekė nusiųsti formą!",
                            validate: "Neteisingai užpildyti laukai:",
                            interval: "Prašome pakartoti siuntimą po keletą sekundžių.",
                            required: "Laukas «%field%» būtinas užpildymui.",
                            email: "Laukas «%field%» turi būti nurodytas jūsų esamas email adresas.",
                            phone: "Laukas «%field%» turi būti teisingai nurodytas telefono numeris.",
                            number: "Laukas «%field%» turu būti nurodytas teisingas skaičius."
                        },
                        pl: {
                            error: "Nie udało się wysłać formularz",
                            validate: "Nieprawidłowo wpisałeś dane",
                            interval: "Proszę powtórzyć za parę sekund",
                            required: 'Informacja "%field%" musi być wypełniona',
                            email: "Nieprawidłowy adres e-mail",
                            phone: "Nieprawidłowy numer telefonu",
                            number: "Wpisałeś nieprawidłowe dane"
                        },
                        "zh-CN": {
                            error: "填好的表格发不了",
                            validate: "这些字段填写无法",
                            interval: "请稍等再发送",
                            required: "该“%field%” 字段必须填好",
                            email: "该“%field%” 字段必须含真实的电子邮件",
                            phone: "该“%field%” 字段必须填写有效手机号码",
                            number: "该“%field%” 字段必须填写正确的号码"
                        },
                        ge: {
                            error: "ფორმა არ გაიგზავნა!",
                            validate: "შემდეგი ველები არასწორად არის შევსებული:",
                            interval: "გაიმეორეთ გაგზავნის",
                            required: "ამ ველის «%field%» შევსება აუცილებელია.",
                            email: "ეს ველი «%field%» უნდა შეიცავდეს თქვენი ნამდვილი ელ-ფოსტის მისამართს.",
                            phone: "ეს ველი «%field%» უნდა შეიცავდეს რეალურად არსებულ ტელეფონის ნომერს.",
                            number: "ამ ველში «%field%» უნდა იყოს სწორი რიცხვი."
                        },
                        he: {
                            error: "תופס נשלח ללא הצלחה",
                            validate: "השדות ממולאים לא נכון",
                            interval: "אנא לשלוח שוב בעוד כמה שניות",
                            required: 'חייב למלאות שדה "%field%"',
                            email: 'שדה "%field%" חייב לכלול את כתובת הדואר האלקטרוני האמיתית שלך',
                            phone: 'שדה "%field%" חייב לכלול מספר טלפון נכון',
                            number: 'שדה "%field%" צריך להיות המספר הנכון'
                        }
                    }, t = r[window.plp_lang || window.plp.lang || "ru"], u = "Да", s = "Нет", n = function(e, t, r) {
                        try {
                            var n;
                            return "xs" === plp.screensize ? (n = e, t && (n += "\n" + t), alert(n), void(r && r())) : Modernizr.cssanimations ? swal({
                                title: e,
                                text: t || null,
                                type: "error"
                            }, r) : swal({
                                title: e,
                                text: t || null,
                                imageUrl: "//s.platformalp.ru/swal/error.png"
                            }, r)
                        } catch (i) {
                            error_handler(i, "red-libs 2")
                        }
                    }, i = function(e, t, r) {
                        try {
                            var n;
                            return "xs" === plp.screensize ? (n = e, t && (n += "\n" + t), alert(n), void(r && r())) : Modernizr.cssanimations ? swal({
                                title: e,
                                text: t || null,
                                type: "success"
                            }, r) : swal({
                                title: e,
                                text: t || null,
                                imageUrl: "//s.platformalp.ru/swal/success.png"
                            }, r)
                        } catch (i) {
                            error_handler(i, "red-libs 3")
                        }
                    }, $("[data-ym_goal]").each(function() {
                        try {
                            var e;
                            if (e = $(this), e.closest("form.form").length) return;
                            return e.on("click", function() {
                                try {
                                    var t;
                                    if (t = e.data("ym_goal"), window.yaCounter) return yaCounter.reachGoal(t)
                                } catch (r) {
                                    error_handler(r, "red-libs 5")
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red-libs 4")
                        }
                    }), $("[data-ga_category]").each(function() {
                        try {
                            var e;
                            if (e = $(this), e.closest("form.form").length) return;
                            return e.on("click", function() {
                                try {
                                    var t, r;
                                    if (r = e.data("ga_category"), t = e.data("ga_action"), window.ga) return ga("send", "event", r, t)
                                } catch (n) {
                                    error_handler(n, "red-libs 7")
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red-libs 6")
                        }
                    }), $("form.form").each(function() {
                        try {
                            var r, d, f, p, h, y, m;
                            return f = $(this), h = f.data("form"), y = f.closest("[data-item]").data("item") || [], p = f.data("fields"), m = {
                                hit: {
                                    page_id: o,
                                    ab_id: e,
                                    visit_id: c
                                },
                                form: h,
                                item: y,
                                fields: p
                            }, d = f.find(".field").each(function(e) {
                                try {
                                    var t, r;
                                    if (t = $(this), r = m.fields[e], "radio-list" === r.type && t.find("input").prop("name", _.uniqueId("radio")), "textarea" === r.type) return t.find("textarea").val(function(e, t) {
                                        try {
                                            return $.trim(t)
                                        } catch (r) {
                                            error_handler(r, "red-libs 10")
                                        }
                                    })
                                } catch (n) {
                                    error_handler(n, "red-libs 9")
                                }
                            }), f.find("[data-placeholder]").each(function() {
                                try {
                                    var e, t;
                                    if (e = $(this), !e.val()) return;
                                    return e.data("placeholder", !0), t = e.val(), e.on("focus", function(t) {
                                        try {
                                            if (e.data("placeholder")) return e.val("").data("placeholder", !1)
                                        } catch (r) {
                                            error_handler(r, "red-libs 12")
                                        }
                                    }), e.on("blur", function(r) {
                                        try {
                                            if ("" === e.val()) return e.val(t).data("placeholder", !0)
                                        } catch (n) {
                                            error_handler(n, "red-libs 13")
                                        }
                                    })
                                } catch (r) {
                                    error_handler(r, "red-libs 11")
                                }
                            })
                            // r = f.find(".submit"), f.on("submit", function(e) {
                            //     try {
                            //         var o, c, p, y;
                            //         return e.preventDefault(), $.now() - a < l ? void n(t.error, t.interval) : (c = [], d.each(function(e) {
                            //             try {
                            //                 var r;
                            //                 if ("checkbox-input" === m.fields[e].type ? m.fields[e].value = $(this).find("input").prop("checked") ? u : s : "radio-list" === m.fields[e].type ? m.fields[e].value = $(this).find("[type=radio]:checked").val() || "" : "select-menu" === m.fields[e].type ? m.fields[e].value = $(this).find("select").val() : (r = $(this).find(".form-control").data("placeholder"), m.fields[e].value = r ? "" : $(this).find(".form-control").val()), m.fields[e].required && "" === m.fields[e].value && c.push(t.required.replace("%field%", m.fields[e].name)), "" === m.fields[e].value) return;
                            //                 if ("email" !== m.fields[e].type || /.+@.+\..+/.test(m.fields[e].value) || c.push(t.email.replace("%field%", m.fields[e].name)), "phone" === m.fields[e].type && !/.*\d.*\d.*\d.*\d.*/.test(m.fields[e].value)) return c.push(t.phone.replace("%field%", m.fields[e].name))
                            //             } catch (n) {
                            //                 error_handler(n, "red-libs 15")
                            //             }
                            //         }), c.length > 0 ? void n(t.validate, c.join("\n")) : (y = {
                            //             name: "",
                            //             phone: "",
                            //             email: "",
                            //             count: "",
                            //             fields: {},
                            //             item: {},
                            //             send: m
                            //         }, _.each(m.fields, function(e) {
                            //             try {
                            //                 var t;
                            //                 if ("" === y[e.type] && (y[t = e.type] || (y[t] = e.value)), !y.fields[e.name]) return y.fields[e.name] = e.value
                            //             } catch (r) {
                            //                 error_handler(r, "red-libs 16")
                            //             }
                            //         }), _.each(m.item, function(e) {
                            //             try {
                            //                 var t, r;
                            //                 return (t = y.item)[r = e.type] || (t[r] = _.escape(e.value))
                            //             } catch (n) {
                            //                 error_handler(n, "red-libs 17")
                            //             }
                            //         }), r.prop("disabled", !0), p = function(e, o, a) {
                            //             try {
                            //                 var s, u, c, d;
                            //                 return _.defaults(e, y), console.log("Данные формы", {
                            //                     time: e.time,
                            //                     name: e.name,
                            //                     email: e.email,
                            //                     phone: e.phone,
                            //                     count: e.count,
                            //                     fields: e.fields,
                            //                     item: e.item
                            //                 }), r.prop("disabled", !1), 0 === e.result ? n(t.error, e.errors) : 1 === e.result ? (d = r.data("ym_goal"), window.yaCounter && yaCounter.reachGoal(d), u = r.data("ga_category"), s = r.data("ga_action"), window.ga && ga("send", "event", u, s), "msg" === h.after ? i(_.template(h.msg, e), null) : "url" === h.after ? location.href = _.template(h.url, e) : "addhtml" === h.after ? $("body").append(_.template(h.addhtml, e)) : "msg+url" === h.after ? i(_.template(h.msg, e), null, function() {
                            //                     try {
                            //                         return location.href = _.template(h.url, e)
                            //                     } catch (t) {
                            //                         error_handler(t, "red-libs 19")
                            //                     }
                            //                 }) : "msg+addhtml" === h.after ? i(_.template(h.msg, e), null, function() {
                            //                     try {
                            //                         return $("body").append(_.template(h.addhtml, e))
                            //                     } catch (t) {
                            //                         error_handler(t, "red-libs 20")
                            //                     }
                            //                 }) : "js" === h.after && (c = "(function () { var time = <%= time %>; var name = '<%- name %>'; var email = '<%- email %>'; var phone = '<%- phone %>'; var count = '<%- count %>'; var fields = <%= $.toJSON(fields) %>; var item = <%= $.toJSON(item) %>; var send = <%= $.toJSON(send) %>;" + h.js + "})();", $.globalEval(_.template(c, e)))) : n(t.error, null), f.trigger("reset").find("[data-placeholder]").data("placeholder", !0), l = $.now()
                            //             } catch (p) {
                            //                 error_handler(p, "red-libs 18")
                            //             }
                            //         }, o = function(e, i, o) {
                            //             try {
                            //                 return r.prop("disabled", !1), n(t.error, 400 === e.status ? e.responseText : null), l = $.now()
                            //             } catch (a) {
                            //                 error_handler(a, "red-libs 21")
                            //             }
                            //         }, $.ajax("/app/c", {
                            //             type: "POST",
                            //             data: $.toJSON(m),
                            //             dataType: "json",
                            //             contentType: "application/json",
                            //             processData: !1,
                            //             success: p,
                            //             error: o
                            //         })))
                            //     } catch (g) {
                            //         error_handler(g, "red-libs 14")
                            //     }
                            // })
                        } catch (g) {
                            error_handler(g, "red-libs 8")
                        }
                    })
                } catch (d) {
                    error_handler(d, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t;
                    return e = $("div.area:first"), t = function() {
                        try {
                            var t, r, n;
                            return t = $('<div class="container"></div>').appendTo(e), n = t.width(), r = "xs", 1140 === n && (r = "lg"), 940 === n && (r = "md"), 720 === n && (r = "sm"), t.remove(), r
                        } catch (i) {
                            error_handler(i, "red-libs 2")
                        }
                    }, plp.screensize = t(), $(window).on("resize", function(e) {
                        try {
                            var r;
                            if (r = t(), plp.screensize === r) return;
                            return $(plp).trigger("screensize-change", {
                                oldsize: plp.screensize,
                                newsize: r
                            }), plp.screensize = r
                        } catch (n) {
                            error_handler(n, "red-libs 3")
                        }
                    })
                } catch (r) {
                    error_handler(r, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t, r, n, i, o, a;
                    if ((new WOW).init(), $('[data-action="formscroll"]').each(function() {
                            try {
                                var e, t, r, n, i;
                                return i = $(this), t = i.closest(".section"), n = t.prevAll(".section"), r = t.nextAll(".section"), e = i.hasClass("btn") ? i : i.find(".btn"), e.on("click", function() {
                                    try {
                                        var e, i, o;
                                        if (i = r.find(".form:visible").first(), 1 === i.length) return $("html, body").animate({
                                            scrollTop: i.offset().top - 100
                                        }, {
                                            duration: 1500,
                                            easing: "easeInOutQuint"
                                        });
                                        if (e = t.find(".form:visible").first(), 1 === e.length) return $("html, body").animate({
                                            scrollTop: e.offset().top - 100
                                        }, {
                                            duration: 1500,
                                            easing: "easeInOutQuint"
                                        });
                                        if (o = n.find(".form:visible").last(), 1 === o.length) return $("html, body").animate({
                                            scrollTop: o.offset().top - 100
                                        }, {
                                            duration: 1500,
                                            easing: "easeInOutQuint"
                                        })
                                    } catch (a) {
                                        error_handler(a, "red-libs 3")
                                    }
                                })
                            } catch (o) {
                                error_handler(o, "red-libs 2")
                            }
                        }), t = $(".section-menu.fixation").first(), $(document).on("click", 'a[href^="#"]', function(e) {
                            try {
                                var r, n;
                                if (e.isDefaultPrevented()) return;
                                if (r = $($(this).attr("href")), r.length) return n = r.offset().top, t.length && (n -= t.height()), $("html,body").animate({
                                    scrollTop: n
                                }, {
                                    duration: 1e3,
                                    easing: "easeInOutCubic"
                                }), !1
                            } catch (i) {
                                error_handler(i, "red-libs 4")
                            }
                        }), r = location.href.match(/scrollblock=(\d+)/)) {
                        if (o = location.href.match(/scrolloffset=(-?\d+)/), i = o.length ? 1 * o[1] : 0, n = 1 * r[1], e = $(".node.section").eq(n), e.length) return a = e.offset().top + i, $(document).scrollTop(a);
                        throw new Error("lib-scroll trying to scroll to unexisting " + n + " block")
                    }
                } catch (l) {
                    error_handler(l, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            var e, t, r, n;
            n = function(e, t) {
                try {
                    var r, n, i, o, a, l;
                    for (r = function() {
                            try {
                                return setTimeout(function(e) {
                                    try {
                                        return function() {
                                            try {
                                                return t()
                                            } catch (e) {
                                                error_handler(e, "red-libs 4")
                                            }
                                        }
                                    } catch (r) {
                                        error_handler(r, "red-libs 3")
                                    }
                                }(this), 500)
                            } catch (e) {
                                error_handler(e, "red-libs 2")
                            }
                        }, a = 0, l = [], i = 0, o = e.length; o > i; i++) n = e[i], l.push(function(t) {
                        try {
                            var n, i, o, l;
                            if (o = document.createElement("span"), o.innerHTML = "giItT1WQy@!-/#", o.style.position = "fixed", o.style.left = "-10000px", o.style.top = "-10000px", o.style.fontSize = "1000px", o.style.fontFamily = "sans-serif", o.style.fontVariant = "normal", o.style.fontStyle = "normal", o.style.fontWeight = "normal", o.style.letterSpacing = "0", document.body.appendChild(o), l = o.offsetWidth, o.style.fontFamily = t, i = void 0, n = function() {
                                    try {
                                        if (o && o.offsetWidth !== l && (++a, o.parentNode.removeChild(o), o = null), a >= e.length && (i && clearInterval(i), a === e.length)) return r(), !0
                                    } catch (t) {
                                        error_handler(t, "red-libs 6")
                                    }
                                }, !n()) return i = setInterval(n, 500)
                        } catch (s) {
                            error_handler(s, "red-libs 5")
                        }
                    }(n));
                    return l
                } catch (s) {
                    error_handler(s, "red-libs 1")
                }
            }, t = {
                opensans: ["Open Sans"],
                robotosans: ["Open Sans", "Roboto Slab"],
                introsans: ["Open Sans", "Intro"],
                sportsans: ["Open Sans", "Sports World"],
                unisans: ["Open Sans", "Uni Sans"],
                junesans: ["Open Sans", "Junegull"],
                geolobster: ["Lobster"],
                geoseva: ["Yeseva One"],
                geobeer: ["Beer money"],
                sladkoblogger: ["Sladkoeshka", "Blogger Sans"]
            }, e = $("div.area"), r = !1, $.each(t, function(t, i) {
                try {
                    if (e.hasClass(t)) return r = !0, n(i, function() {
                        try {
                            return $(plp).trigger("fonts-loaded")
                        } catch (e) {
                            error_handler(e, "red-libs 8")
                        }
                    }), !1
                } catch (o) {
                    error_handler(o, "red-libs 7")
                }
            }), r || $(plp).trigger("fonts-loaded")
        } catch (i) {
            error_handler(i, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t, r;
                    if (r = !1, t = $("<div></div>"), e = $(".section.fixation:first"), e.length) return $(document).on("scroll", function(n) {
                        try {
                            var i, o;
                            if (i = $(document).scrollTop(), r) {
                                if (o = t.offset().top, o > i) return t.remove(), e.removeClass("fixed"), r = !1
                            } else if (o = e.offset().top, i > o) return t.css("height", e.height()).insertAfter(e), e.addClass("fixed"), r = !0
                        } catch (a) {
                            error_handler(a, "red-libs 2")
                        }
                    })
                } catch (n) {
                    error_handler(n, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            var e, t, r, n, i, o = function(e, t) {
                    try {
                        return function() {
                            try {
                                return e.apply(t, arguments)
                            } catch (r) {
                                error_handler(r, "red-libs 2")
                            }
                        }
                    } catch (r) {
                        error_handler(r, "red-libs 1")
                    }
                },
                a = [].indexOf || function(e) {
                    try {
                        for (var t = 0, r = this.length; r > t; t++)
                            if (t in this && this[t] === e) return t;
                        return -1
                    } catch (n) {
                        error_handler(n, "red-libs 3")
                    }
                };
            t = function() {
                function e() {
                    try {} catch (e) {
                        error_handler(e, "red-libs 5")
                    }
                }
                try {
                    return e.prototype.extend = function(e, t) {
                        try {
                            var r, n;
                            for (r in t) n = t[r], null == e[r] && (e[r] = n);
                            return e
                        } catch (i) {
                            error_handler(i, "red-libs 6")
                        }
                    }, e.prototype.isMobile = function(e) {
                        try {
                            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
                        } catch (t) {
                            error_handler(t, "red-libs 7")
                        }
                    }, e.prototype.createEvent = function(e, t, r, n) {
                        try {
                            var i;
                            return null == t && (t = !1), null == r && (r = !1), null == n && (n = null), null != document.createEvent ? (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, t, r, n)) : null != document.createEventObject ? (i = document.createEventObject(), i.eventType = e) : i.eventName = e, i
                        } catch (o) {
                            error_handler(o, "red-libs 8")
                        }
                    }, e.prototype.emitEvent = function(e, t) {
                        try {
                            if (null != e.dispatchEvent) return e.dispatchEvent(t);
                            if (t in (null != e)) return e[t]();
                            if ("on" + t in (null != e)) return e["on" + t]()
                        } catch (r) {
                            error_handler(r, "red-libs 9")
                        }
                    }, e.prototype.addEvent = function(e, t, r) {
                        try {
                            return null != e.addEventListener ? e.addEventListener(t, r, !1) : null != e.attachEvent ? e.attachEvent("on" + t, r) : e[t] = r
                        } catch (n) {
                            error_handler(n, "red-libs 10")
                        }
                    }, e.prototype.removeEvent = function(e, t, r) {
                        try {
                            return null != e.removeEventListener ? e.removeEventListener(t, r, !1) : null != e.detachEvent ? e.detachEvent("on" + t, r) : delete e[t]
                        } catch (n) {
                            error_handler(n, "red-libs 11")
                        }
                    }, e.prototype.innerHeight = function() {
                        try {
                            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
                        } catch (e) {
                            error_handler(e, "red-libs 12")
                        }
                    }, e
                } catch (t) {
                    error_handler(t, "red-libs 4")
                }
            }(), r = this.WeakMap || this.MozWeakMap || (r = function() {
                function e() {
                    try {
                        this.keys = [], this.values = []
                    } catch (e) {
                        error_handler(e, "red-libs 14")
                    }
                }
                try {
                    return e.prototype.get = function(e) {
                        try {
                            var t, r, n, i, o;
                            for (o = this.keys, t = n = 0, i = o.length; i > n; t = ++n)
                                if (r = o[t], r === e) return this.values[t]
                        } catch (a) {
                            error_handler(a, "red-libs 15")
                        }
                    }, e.prototype.set = function(e, t) {
                        try {
                            var r, n, i, o, a;
                            for (a = this.keys, r = i = 0, o = a.length; o > i; r = ++i)
                                if (n = a[r], n === e) return void(this.values[r] = t);
                            return this.keys.push(e), this.values.push(t)
                        } catch (l) {
                            error_handler(l, "red-libs 16")
                        }
                    }, e
                } catch (t) {
                    error_handler(t, "red-libs 13")
                }
            }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
                function e() {
                    try {
                        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                    } catch (e) {
                        error_handler(e, "red-libs 18")
                    }
                }
                try {
                    return e.notSupported = !0, e.prototype.observe = function() {
                        try {} catch (e) {
                            error_handler(e, "red-libs 19")
                        }
                    }, e
                } catch (t) {
                    error_handler(t, "red-libs 17")
                }
            }()), n = this.getComputedStyle || function(e, t) {
                try {
                    return this.getPropertyValue = function(t) {
                        try {
                            var r;
                            return "float" === t && (t = "styleFloat"), i.test(t) && t.replace(i, function(e, t) {
                                try {
                                    return t.toUpperCase()
                                } catch (r) {
                                    error_handler(r, "red-libs 22")
                                }
                            }), (null != (r = e.currentStyle) ? r[t] : void 0) || null
                        } catch (n) {
                            error_handler(n, "red-libs 21")
                        }
                    }, this
                } catch (r) {
                    error_handler(r, "red-libs 20")
                }
            }, i = /(\-([a-z]){1})/g, this.WOW = function() {
                function i(e) {
                    try {
                        null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new r, this.wowEvent = this.util().createEvent(this.config.boxClass)
                    } catch (t) {
                        error_handler(t, "red-libs 24")
                    }
                }
                try {
                    return i.prototype.defaults = {
                        boxClass: "wow",
                        animateClass: "animated",
                        offset: 0,
                        mobile: !0,
                        live: !0,
                        callback: null
                    }, i.prototype.init = function() {
                        try {
                            var e;
                            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
                        } catch (t) {
                            error_handler(t, "red-libs 25")
                        }
                    }, i.prototype.start = function() {
                        try {
                            var t, r, n, i;
                            if (this.stopped = !1, this.boxes = function() {
                                    try {
                                        var e, r, n, i;
                                        for (n = this.element.querySelectorAll("." + this.config.boxClass), i = [], e = 0, r = n.length; r > e; e++) t = n[e], i.push(t);
                                        return i
                                    } catch (o) {
                                        error_handler(o, "red-libs 27")
                                    }
                                }.call(this), this.all = function() {
                                    try {
                                        var e, r, n, i;
                                        for (n = this.boxes, i = [], e = 0, r = n.length; r > e; e++) t = n[e], i.push(t);
                                        return i
                                    } catch (o) {
                                        error_handler(o, "red-libs 28")
                                    }
                                }.call(this), this.boxes.length)
                                if (this.disabled()) this.resetStyle();
                                else
                                    for (i = this.boxes, r = 0, n = i.length; n > r; r++) t = i[r], this.applyStyle(t, !0);
                            if (this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new e(function(e) {
                                try {
                                    return function(t) {
                                        try {
                                            var r, n, i, o, a;
                                            for (a = [], r = 0, n = t.length; n > r; r++) o = t[r], a.push(function() {
                                                try {
                                                    var e, t, r, n;
                                                    for (r = o.addedNodes || [], n = [], e = 0, t = r.length; t > e; e++) i = r[e], n.push(this.doSync(i));
                                                    return n
                                                } catch (a) {
                                                    error_handler(a, "red-libs 31")
                                                }
                                            }.call(e));
                                            return a
                                        } catch (l) {
                                            error_handler(l, "red-libs 30")
                                        }
                                    }
                                } catch (t) {
                                    error_handler(t, "red-libs 29")
                                }
                            }(this)).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                        } catch (o) {
                            error_handler(o, "red-libs 26")
                        }
                    }, i.prototype.stop = function() {
                        try {
                            if (this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
                        } catch (e) {
                            error_handler(e, "red-libs 32")
                        }
                    }, i.prototype.sync = function(t) {
                        try {
                            if (e.notSupported) return this.doSync(this.element)
                        } catch (r) {
                            error_handler(r, "red-libs 33")
                        }
                    }, i.prototype.doSync = function(e) {
                        try {
                            var t, r, n, i, o;
                            if (null == e && (e = this.element), 1 !== e.nodeType) return;
                            for (e = e.parentNode || e, i = e.querySelectorAll("." + this.config.boxClass), o = [], r = 0, n = i.length; n > r; r++) t = i[r], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                            return o
                        } catch (l) {
                            error_handler(l, "red-libs 34")
                        }
                    }, i.prototype.show = function(e) {
                        try {
                            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
                        } catch (t) {
                            error_handler(t, "red-libs 35")
                        }
                    }, i.prototype.applyStyle = function(e, t) {
                        try {
                            var r, n, i;
                            return n = e.getAttribute("data-wow-duration"), r = e.getAttribute("data-wow-delay"), i = e.getAttribute("data-wow-iteration"), this.animate(function(o) {
                                try {
                                    return function() {
                                        try {
                                            return o.customStyle(e, t, n, r, i)
                                        } catch (a) {
                                            error_handler(a, "red-libs 38")
                                        }
                                    }
                                } catch (a) {
                                    error_handler(a, "red-libs 37")
                                }
                            }(this))
                        } catch (o) {
                            error_handler(o, "red-libs 36")
                        }
                    }, i.prototype.animate = function() {
                        try {
                            return "requestAnimationFrame" in window ? function(e) {
                                try {
                                    return window.requestAnimationFrame(e)
                                } catch (t) {
                                    error_handler(t, "red-libs 40")
                                }
                            } : function(e) {
                                try {
                                    return e()
                                } catch (t) {
                                    error_handler(t, "red-libs 41")
                                }
                            }
                        } catch (e) {
                            error_handler(e, "red-libs 39")
                        }
                    }(), i.prototype.resetStyle = function() {
                        try {
                            var e, t, r, n, i;
                            for (n = this.boxes, i = [], t = 0, r = n.length; r > t; t++) e = n[t], i.push(e.style.visibility = "visible");
                            return i
                        } catch (o) {
                            error_handler(o, "red-libs 42")
                        }
                    }, i.prototype.resetAnimation = function(e) {
                        try {
                            var t;
                            if (e.type.toLowerCase().indexOf("animationend") >= 0) return t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()
                        } catch (r) {
                            error_handler(r, "red-libs 43")
                        }
                    }, i.prototype.customStyle = function(e, t, r, n, i) {
                        try {
                            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", r && this.vendorSet(e.style, {
                                animationDuration: r
                            }), n && this.vendorSet(e.style, {
                                animationDelay: n
                            }), i && this.vendorSet(e.style, {
                                animationIterationCount: i
                            }), this.vendorSet(e.style, {
                                animationName: t ? "none" : this.cachedAnimationName(e)
                            }), e
                        } catch (o) {
                            error_handler(o, "red-libs 44")
                        }
                    }, i.prototype.vendors = ["moz", "webkit"], i.prototype.vendorSet = function(e, t) {
                        try {
                            var r, n, i, o;
                            n = [];
                            for (r in t) i = t[r], e["" + r] = i, n.push(function() {
                                try {
                                    var t, n, a, l;
                                    for (a = this.vendors, l = [], t = 0, n = a.length; n > t; t++) o = a[t], l.push(e["" + o + r.charAt(0).toUpperCase() + r.substr(1)] = i);
                                    return l
                                } catch (s) {
                                    error_handler(s, "red-libs 46")
                                }
                            }.call(this));
                            return n
                        } catch (a) {
                            error_handler(a, "red-libs 45");
                        }
                    }, i.prototype.vendorCSS = function(e, t) {
                        try {
                            var r, i, o, a, l, s;
                            for (l = n(e), a = l.getPropertyCSSValue(t), o = this.vendors, r = 0, i = o.length; i > r; r++) s = o[r], a = a || l.getPropertyCSSValue("-" + s + "-" + t);
                            return a
                        } catch (u) {
                            error_handler(u, "red-libs 47")
                        }
                    }, i.prototype.animationName = function(e) {
                        try {
                            var t;
                            try {
                                t = this.vendorCSS(e, "animation-name").cssText
                            } catch (r) {
                                t = n(e).getPropertyValue("animation-name")
                            }
                            return "none" === t ? "" : t
                        } catch (i) {
                            error_handler(i, "red-libs 48")
                        }
                    }, i.prototype.cacheAnimationName = function(e) {
                        try {
                            return this.animationNameCache.set(e, this.animationName(e))
                        } catch (t) {
                            error_handler(t, "red-libs 49")
                        }
                    }, i.prototype.cachedAnimationName = function(e) {
                        try {
                            return this.animationNameCache.get(e)
                        } catch (t) {
                            error_handler(t, "red-libs 50")
                        }
                    }, i.prototype.scrollHandler = function() {
                        try {
                            return this.scrolled = !0
                        } catch (e) {
                            error_handler(e, "red-libs 51")
                        }
                    }, i.prototype.scrollCallback = function() {
                        try {
                            var e;
                            if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                                    try {
                                        var t, r, n, i;
                                        for (n = this.boxes, i = [], t = 0, r = n.length; r > t; t++) e = n[t], e && (this.isVisible(e) ? this.show(e) : i.push(e));
                                        return i
                                    } catch (o) {
                                        error_handler(o, "red-libs 53")
                                    }
                                }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
                        } catch (t) {
                            error_handler(t, "red-libs 52")
                        }
                    }, i.prototype.offsetTop = function(e) {
                        try {
                            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                            return t
                        } catch (r) {
                            error_handler(r, "red-libs 54")
                        }
                    }, i.prototype.isVisible = function(e) {
                        try {
                            var t, r, n, i, o;
                            return r = e.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, i = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - r, n = this.offsetTop(e), t = n + e.clientHeight, i >= n && t >= o
                        } catch (a) {
                            error_handler(a, "red-libs 55")
                        }
                    }, i.prototype.util = function() {
                        try {
                            return null != this._util ? this._util : this._util = new t
                        } catch (e) {
                            error_handler(e, "red-libs 56")
                        }
                    }, i.prototype.disabled = function() {
                        try {
                            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                        } catch (e) {
                            error_handler(e, "red-libs 57")
                        }
                    }, i
                } catch (l) {
                    error_handler(l, "red-libs 23")
                }
            }()
        } catch (l) {
            error_handler(l, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".node[data-bgvideo]").each(function() {
                        try {
                            var e, t;
                            return e = $(this), t = e.data("bgvideo"), plp.lazy.add(e.removeAttr("data-bgvideo"), function(r) {
                                try {
                                    var n;
                                    if ("youtube" === t.bgVideo_Source) return n = $("<div></div>").prependTo(e.children(".wrapper1")), n.data("property", {
                                        videoURL: t.bgVideo_Youtube,
                                        containment: n,
                                        mute: !0,
                                        showControls: !1
                                    }).YTPlayer();
                                    if ("direct" === t.bgVideo_Source || "library" === t.bgVideo_Source) return n = e.children(".wrapper1"), n.vide({
                                        mp4: t.bgVideo_Mp4,
                                        webm: t.bgVideo_Webm,
                                        ogv: t.bgVideo_Ogv
                                    }, {
                                        mute: !0,
                                        autoplay: !0,
                                        loop: !0,
                                        posterType: "none"
                                    })
                                } catch (i) {
                                    error_handler(i, "red-libs 3")
                                }
                            })
                        } catch (r) {
                            error_handler(r, "red-libs 2")
                        }
                    })
                } catch (e) {
                    error_handler(e, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".node[data-bgsnow]").each(function() {
                        try {
                            var e, t, r;
                            return e = $(this), t = e.data("bgsnow"), e.removeAttr("data-bgsnow"), r = new Snowfall({
                                root: e.find("> .wrapper1 > .wrapper2").get(0),
                                type: "text",
                                content: ["*", "&#10052", "&#10053", "&#10054", "."],
                                minSize: 10,
                                maxSize: 30
                            }), e.data("bgsnow", r)
                        } catch (n) {
                            error_handler(n, "red-libs 2")
                        }
                    })
                } catch (e) {
                    error_handler(e, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".section-gallery").each(function() {
                        try {
                            var e;
                            return e = $(this), e.find(".sectiongallery-colorbox").colorbox({
                                maxWidth: "80%",
                                maxHeight: "80%"
                            })
                        } catch (t) {
                            error_handler(t, "red-libs 2")
                        }
                    })
                } catch (e) {
                    error_handler(e, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    var e, t;
                    if (e = $(".section-map > .mapwrapper"), !e.length) return;
                    return t = "//api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU", $.getScript(t, function() {
                        try {
                            return ymaps.ready(function() {
                                try {
                                    return e.each(function() {
                                        try {
                                            var e;
                                            return e = plp.lazy.add($(this), function(t) {
                                                try {
                                                    var r, n, i, o, a;
                                                    return a = e.data("val"), r = $('<div class="map"></div>').appendTo(e), n = _.uniqueId("map"), r.attr("id", n).css("height", a.height), i = new ymaps.Map(n, {
                                                        center: a.center,
                                                        type: a.type,
                                                        zoom: a.zoom
                                                    }), o = new ymaps.GeoObject({
                                                        geometry: {
                                                            type: "Point",
                                                            coordinates: a.point
                                                        }
                                                    }, {
                                                        draggable: !0
                                                    }), i.geoObjects.add(o), i.controls.add("zoomControl", {
                                                        left: 7,
                                                        top: 7
                                                    }).add("typeSelector", {
                                                        right: 7,
                                                        top: 7
                                                    })
                                                } catch (l) {
                                                    error_handler(l, "red-libs 5")
                                                }
                                            })
                                        } catch (t) {
                                            error_handler(t, "red-libs 4")
                                        }
                                    })
                                } catch (t) {
                                    error_handler(t, "red-libs 3")
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red-libs 2")
                        }
                    })
                } catch (r) {
                    error_handler(r, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".section-shop").each(function() {
                        try {
                            var e, t, r, n, i;
                            return e = $(this), e.find(".sectionshop-colorbox").colorbox({
                                maxWidth: "80%",
                                maxHeight: "80%"
                            }), t = e.find("> .wrapper1 > .wrapper2 > .container > .template1 > .incon > .row > .ib"), t = _.groupBy(t, function(e, t) {
                                try {
                                    return Math.floor(t / 3)
                                } catch (r) {
                                    error_handler(r, "red-libs 3")
                                }
                            }), r = e.find("> .wrapper1 > .wrapper2 > .container > .template3 > .incon > .row > .ib"), r = _.groupBy(r, function(e, t) {
                                try {
                                    return Math.floor(t / 2)
                                } catch (r) {
                                    error_handler(r, "red-libs 4")
                                }
                            }), i = function() {
                                try {
                                    return _.each(t, function(e) {
                                        try {
                                            return _.each(e, function(e) {
                                                try {
                                                    var t, r;
                                                    return r = $(e), t = r.find("> .incon > .inner > .description"), t.removeAttr("style")
                                                } catch (n) {
                                                    error_handler(n, "red-libs 7")
                                                }
                                            })
                                        } catch (t) {
                                            error_handler(t, "red-libs 6")
                                        }
                                    }), _.each(r, function(e) {
                                        try {
                                            return _.each(e, function(e) {
                                                try {
                                                    var t, r;
                                                    return r = $(e), t = r.find("> .incon > .tbl > .td.right > .description"), t.removeAttr("style")
                                                } catch (n) {
                                                    error_handler(n, "red-libs 9")
                                                }
                                            })
                                        } catch (t) {
                                            error_handler(t, "red-libs 8")
                                        }
                                    })
                                } catch (e) {
                                    error_handler(e, "red-libs 5")
                                }
                            }, n = function() {
                                try {
                                    return _.each(t, function(e) {
                                        try {
                                            var t;
                                            return t = 0, _.each(e, function(e) {
                                                try {
                                                    var r;
                                                    if (r = $(e).height(), r > t) return t = r
                                                } catch (n) {
                                                    error_handler(n, "red-libs 12")
                                                }
                                            }), _.each(e, function(e) {
                                                try {
                                                    var r, n, i;
                                                    if (n = $(e), r = n.find("> .incon > .inner > .description"), i = n.height(), t > i) return r.css("margin-bottom", "+=" + (t - i))
                                                } catch (o) {
                                                    error_handler(o, "red-libs 13")
                                                }
                                            })
                                        } catch (r) {
                                            error_handler(r, "red-libs 11")
                                        }
                                    }), _.each(r, function(e) {
                                        try {
                                            var t;
                                            return t = 0, _.each(e, function(e) {
                                                try {
                                                    var r;
                                                    if (r = $(e).height(), r > t) return t = r
                                                } catch (n) {
                                                    error_handler(n, "red-libs 15")
                                                }
                                            }), _.each(e, function(e) {
                                                try {
                                                    var r, n, i;
                                                    if (n = $(e), r = n.find("> .incon > .tbl > .td.right > .description"), i = n.height(), t > i) return r.css("margin-bottom", "+=" + (t - i))
                                                } catch (o) {
                                                    error_handler(o, "red-libs 16")
                                                }
                                            })
                                        } catch (r) {
                                            error_handler(r, "red-libs 14")
                                        }
                                    })
                                } catch (e) {
                                    error_handler(e, "red-libs 10")
                                }
                            }, "xs" !== plp.screensize && n(), $(plp).on("screensize-change", function(e, t) {
                                try {
                                    if (i(), "xs" !== t.newsize) return n()
                                } catch (r) {
                                    error_handler(r, "red-libs 17")
                                }
                            }), $(plp).on("fonts-loaded", function(e, t) {
                                try {
                                    if (i(), "xs" !== plp.screensize) return n()
                                } catch (r) {
                                    error_handler(r, "red-libs 18")
                                }
                            })
                        } catch (o) {
                            error_handler(o, "red-libs 2")
                        }
                    })
                } catch (e) {
                    error_handler(e, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".section-slider").each(function() {
                        try {
                            var e, t;
                            return e = $(this).find("> .wrapper1 > .wrapper2 > .container > .incon > .wrap"), t = e.find("> .bxslider"), t.data("$slider", t), plp.lazy.add(t, function() {
                                try {
                                    return plp.lazy.force(t)
                                } catch (e) {
                                    error_handler(e, "red-libs 3")
                                }
                            }), t.bxSlider({
                                slideSelector: ".slide",
                                auto: !0,
                                controls: !1,
                                adaptive: !0,
                                preloadImages: "all",
                                pause: 1 * t.data("pause")
                            }), e.find("> .right").on("click", function() {
                                try {
                                    return t.goToNextSlide()
                                } catch (e) {
                                    error_handler(e, "red-libs 4")
                                }
                            }), e.find("> .left").on("click", function() {
                                try {
                                    return t.goToPrevSlide()
                                } catch (e) {
                                    error_handler(e, "red-libs 5")
                                }
                            }), t.find(".lazy").on("load", function() {
                                try {
                                    return t.redrawSlider()
                                } catch (e) {
                                    error_handler(e, "red-libs 6")
                                }
                            })
                        } catch (r) {
                            error_handler(r, "red-libs 2")
                        }
                    })
                } catch (e) {
                    error_handler(e, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            var e;
            e = function(e) {
                try {
                    return _.reduce(e, function(e, t, r) {
                        try {
                            return e + t.charCodeAt() * Math.pow(r + 5, 5)
                        } catch (n) {
                            error_handler(n, "red-libs 2")
                        }
                    }, e.length)
                } catch (t) {
                    error_handler(t, "red-libs 1")
                }
            }, $(function() {
                try {
                    var t, r, n, i, o, a, l, s, u;
                    if (r = $(".section-social-comments"), !r.length) return;
                    if (r.not(":first").remove(), n = r.find("> .wrapper1 > .wrapper2 > .container > .tbl > .td.vk > div"), n.length && (a = _.uniqueId("vk_comments"), n.attr("id", a), u = "true" === n.attr("data-joint"), l = 1, u || (l = e(location.host.replace(/^www\./, "") + "/" + location.pathname)), s = "//vk.com/js/api/openapi.js?112", $.getScript(s, function() {
                            try {
                                return VK.init({
                                    apiId: n.data("apiid"),
                                    onlyWidgets: !0
                                }), VK.Widgets.Comments(a, {
                                    limit: 5,
                                    width: "430",
                                    attach: "*"
                                }, l)
                            } catch (e) {
                                error_handler(e, "red-libs 4")
                            }
                        })), t = r.find("> .wrapper1 > .wrapper2 > .container > .tbl > .td.fb > div"), t.length) return i = "true" === t.attr("data-joint"), o = "http://" + location.host.replace(/^www\./, ""), i || (o += "/" + location.pathname), t.attr("data-href", o), $("head").append('<meta property="fb:app_id" content="' + t.data("apiid") + '"/>'), $('<div id="fb-root"></div>').appendTo("body"),
                        function(e, t, r) {
                            try {
                                var n, i = e.getElementsByTagName(t)[0];
                                if (e.getElementById(r)) return;
                                n = e.createElement(t), n.id = r, n.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.0", i.parentNode.insertBefore(n, i)
                            } catch (o) {
                                error_handler(o, "red-libs 5")
                            }
                        }(document, "script", "facebook-jssdk")
                } catch (c) {
                    error_handler(c, "red-libs 3")
                }
            })
        } catch (t) {
            error_handler(t, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            $(function() {
                try {
                    return $(".widget-image").each(function() {
                        try {
                            var e;
                            if (e = $(this).find(".colorbox"), !e.length) return;
                            return e.data("rel") ? e.colorbox({
                                rel: e.data("rel"),
                                maxWidth: "80%",
                                maxHeight: "80%"
                            }) : e.colorbox({
                                maxWidth: "80%",
                                maxHeight: "80%"
                            })
                        } catch (t) {
                            error_handler(t, "red-libs 2")
                        }
                    })
                } catch (e) {
                    error_handler(e, "red-libs 1")
                }
            })
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {
            ! function(e) {
                try {
                    e(function() {
                        try {
                            e("div.share42init").each(function(t) {
                                try {
                                    plp.lazy.add(e(this), function(r) {
                                        function n(t) {
                                            try {
                                                var r;
                                                e.getJSON("http://graph.facebook.com/?callback=?&ids=" + t, function(e) {
                                                    try {
                                                        r = e[t].shares || 0, (r > 0 || 1 == h) && l.find('a[data-count="fb"]').after('<span class="share42-counter">' + r + "</span>")
                                                    } catch (n) {
                                                        error_handler(n, "red-libs 6")
                                                    }
                                                })
                                            } catch (n) {
                                                error_handler(n, "red-libs 5")
                                            }
                                        }

                                        function i(t) {
                                            try {
                                                var r;
                                                e.getJSON("http://urls.api.twitter.com/1/urls/count.json?callback=?&url=" + t, function(e) {
                                                    try {
                                                        r = e.count, (r > 0 || 1 == h) && l.find('a[data-count="twi"]').after('<span class="share42-counter">' + r + "</span>")
                                                    } catch (t) {
                                                        error_handler(t, "red-libs 8")
                                                    }
                                                })
                                            } catch (n) {
                                                error_handler(n, "red-libs 7")
                                            }
                                        }

                                        function o(r) {
                                            try {
                                                e.getScript("http://vk.com/share.php?act=count&index=" + t + "&url=" + r), window.VK || (window.VK = {}), window.VK.Share = {
                                                    count: function(t, r) {
                                                        try {
                                                            (r > 0 || 1 == h) && e("div.share42init").eq(t).find('a[data-count="vk"]').after('<span class="share42-counter">' + r + "</span>")
                                                        } catch (n) {
                                                            error_handler(n, "red-libs 10")
                                                        }
                                                    }
                                                }
                                            } catch (n) {
                                                error_handler(n, "red-libs 9")
                                            }
                                        }

                                        function a(e) {
                                            try {
                                                for (var t = document.getElementsByTagName("script"), r = new RegExp("^(.*/|)(" + e + ")([#?]|$)"), n = 0, i = t.length; i > n; n++) {
                                                    var o = String(t[n].src).match(r);
                                                    if (o) return o[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/) ? o[1] : 0 == o[1].indexOf("/") ? o[1] : (b = document.getElementsByTagName("base"), b[0] && b[0].href ? b[0].href + o[1] : document.location.pathname.match(/(.*[\/\\])/)[0] + o[1])
                                                }
                                                return null
                                            } catch (a) {
                                                error_handler(a, "red-libs 11")
                                            }
                                        }
                                        try {
                                            var l = r,
                                                s = l.attr("data-url"),
                                                u = l.attr("data-title"),
                                                c = l.attr("data-image"),
                                                d = l.attr("data-description"),
                                                f = l.attr("data-path"),
                                                p = l.attr("data-icons-file"),
                                                h = l.attr("data-zero-counter");
                                            if (s || (s = "http://" + location.host), p || (p = "icons.png"), h || (h = 0), n(s), i(s), o(s), f || (f = a("share42.js")), u || (u = document.title), !d) {
                                                var y = e('meta[name="description"]').attr("content");
                                                d = void 0 !== y ? y : ""
                                            }
                                            s = encodeURIComponent(s), u = encodeURIComponent(u), u = u.replace(/\'/g, "%27"), c = encodeURIComponent(c), d = encodeURIComponent(d), d = d.replace(/\'/g, "%27");
                                            var m = "u=" + s;
                                            "null" != c && "" != c && (m = "s=100&p[url]=" + s + "&p[title]=" + u + "&p[summary]=" + d + "&p[images][0]=" + c);
                                            var g = "";
                                            "null" != c && "" != c && (g = "&image=" + c);
                                            var v = new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?' + m + "', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Поделиться в Facebook\"", '"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text=' + u + "&url=" + s + "', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Добавить в Twitter\"", '"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url=' + s + "&title=" + u + g + "&description=" + d + "', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Поделиться В Контакте\""),
                                                w = "";
                                            for (j = 0; j < v.length; j++) w += '<span class="share42-item" style="display:inline-block;margin:0 6px 6px 0;height:24px;"><a rel="nofollow" style="display:inline-block;width:24px;height:24px;margin:0;padding:0;outline:none;background:url(' + f + p + ") -" + 24 * j + 'px 0 no-repeat" href=' + v[j] + ' target="_blank"></a></span>';
                                            l.html('<span id="share42">' + w + '</span><style>.share42-counter{display:inline-block;vertical-align:top;margin-left:9px;position:relative;background:#FFF;color:#666;} .share42-counter:before{content:"";position:absolute;top:0;left:-8px;width:8px;height:100%;} .share42-counter{height:24px;padding:0 7px 0 3px;font:12px/25px Arial,sans-serif;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAYCAYAAAAMAljuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIxJREFUeNrs2rENgCAQQNHDyBBWDMFULmFjnMGlYAgKoy01BR5xB6H4P7mE+l7JmRBCFerdrXN673dTNfbRt1KKpJQk57xNrKN/1lpxzrXnCshAKNoCyGABAggBAggBAggBAggBAggBQoAAQoAAQoAAQr/U/tW1B5BBMNqRg3bOMUY20r9LvjOg4xVgABtzIxFP3JZkAAAAAElFTkSuQmCC) 100% 0;} .share42-counter:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAYCAYAAADH2bwQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJlJREFUeNrEks0NwyAMhU0kdmi4MARTZYh0jS4FE3DiAjvA4dVUjZQ/p+qlfZKFrPcJPYMVANorhDDzMXGN1IF1ee/nGCNqrega6KjJWkta61dzBoyLKQEb/Rrg+WGM2RKr+ZFzxl6XJj6Z0kseQiq+gUop8hScXIQG5xx1U4ROvvv7kH8ASmvtEniklGiBlLD29/fa354CDAC6sL9OAqehCgAAAABJRU5ErkJggg==);}</style>')
                                        } catch (T) {
                                            error_handler(T, "red-libs 4")
                                        }
                                    })
                                } catch (r) {
                                    error_handler(r, "red-libs 3")
                                }
                            })
                        } catch (t) {
                            error_handler(t, "red-libs 2")
                        }
                    })
                } catch (t) {
                    error_handler(t, "red-libs 1")
                }
            }(jQuery)
        } catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this),
    function() {
        try {} catch (e) {
            error_handler(e, "red-libs 0")
        }
    }.call(this);
