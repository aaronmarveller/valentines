webpackJsonp([0], {
    16: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s() {
            (0, u.default)("#typer").type("今天Aaron要给你过情人节啦", '<span class="blue">').type("0", "<br>").type("00", '<span class="blank">').wait(10).type("等下。。。", '<span class="note">').wait(10).type("么么哒~o(*≧▽≦)ツ", '<span class="note">', 0).wait(10).then(function () {
                l()
            }).wait(25)
                .type("0", "<br>")
                .type("", '<span class="note">')
                .type("0", "<br>")
                .type("以下是这次", '<span class="purple">')
                .type("0", '<span class="blank">')
                .type("情人节的", '<span class="blue">')
                .type("0", '<span class="blank">')
                .type("主角", '<span class="gray">')
                .type("00", '<span class="blank">')
                .type("嘻嘻", '<span class="gray">')
                .type("0", "<br>")
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("boy", '<span class="gray">')
                .type(":", '<span class="blue">')
                .type("000", '<span class="blank">')
                .type("'屁源'", '<span class="green">')
                .wait(15).del(6)
                .type("Aaron", '<span class="green">')
                .type(",", '<span class="gray">')
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("girl", '<span class="gray">')
                .type(":", '<span class="blue">')
                .type("0", '<span class="blank">')
                .type("Lillian", '<span class="green">')
                .type(",", '<span class="gray">')
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("start", '<span class="gray">').type(":", '<span class="blue">')
                .type("0", '<span class="blank">')
                .type("2018-11-11", '<span class="green">')
                .type("0", "<br>")
                .type("00", '<span class="blank">')
                .type("0", "<br>")
                .type("00", '<span class="blank">')
                .type("接下来的一年", '<span class="purple">')
                .type("0", '<span class="blank">')
                .type("更加滴爱我哟", '<span class="gray">')
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("爱我", '<span class="gray">')
                .type(":", '<span class="blue">')
                .type("0", '<span class="blank">')
                .type("每一天", '<span class="green">')
                .type(",", '<span class="gray">')
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("亲我", '<span class="gray">')
                .type(":", '<span class="blue">')
                .type("0", '<span class="blank">')
                .type("每一天", '<span class="green">')
                .type(",", '<span class="gray">')
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("还有...", '<span class="gray">')
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("嘻嘻。。。", '<span class="gray">')
                .type(",", '<span class="gray">')
                .type("0", "<br>")
                .type("0000", '<span class="blank">')
                .type("你懂的", '<span class="gray">')
                .type(":", '<span class="blue">')
                .type("0", '<span class="blank">')
                .type("每一天！！！！！", '<span class="green">')
                .type("0", "<br>")
                .type("00", '<span class="blank">')
                .type("0", "<br>")
                .type("那么下面", '<span class="purple">')
                .type("0", '<span class="blank">')
                .type("念个咒语吧！", '<span class="blue">')
                .type("0", '<span class="blank">')
                .type("0", "<br>")
                .type("Mi Mi Mi", '<span class="green">')
                .type("0", "<br>")
                .type("Ma Ma Ma", '<span class="gray">')
                .type("0", "<br>")
                .type("Gu Gu Gu!!!", '<span class="blue">')
                .type("0", "<br>")
                .wait(20).type("0", "<br>").type("变！！！", '<span class="blue">').wait(5).then(function () {
                r("show", function () {
                    p()
                })
            })
        }

        function l() {
            var e = document.createElement("div");
            e.className = "lip", document.body.appendChild(e), setTimeout(function () {
                e.remove()
            }, 2500)
        }

        function r(e, t) {
            var a = document.querySelector(".board");
            a.style.display = "block", setTimeout(function () {
                a.style.right = e && "hide" !== e ? "0" : "calc(-100vw - 10px)"
            }, 30), setTimeout(function () {
                t && t()
            }, 2e3)
        }

        function p() {
            var e = document.querySelector("#showArea"), t = document.querySelector("#heart"),
                a = document.querySelector("#flower"), n = document.querySelector(".foot"),
                s = document.querySelector(".love");
            e.className = "show", heartMain.style.display = "block", n.style.display = "block", setTimeout(function () {
                a_text.style.display = "block"
            }, 2e3), send.addEventListener("click", function () {
                o(), setTimeout(function () {
                    heartMain.style.display = "none", a_text.style.display = "none", t.style.display = "block", a.style.display = "block", s.style.display = "block"
                }, 4e3)
            })
        }

        function i() {
            var e = new Date("2018/11/11 00:00:00"), t = new Date, a = (Date.parse(t) - Date.parse(e)) / 1e3,
                n = Math.floor(a / 86400);
            document.querySelector("#timer").style.display = "block", new d.default("count", 10, n, 0, 5).start()
        }

        function o() {
            var e = document.querySelector("#send");
            e.setAttribute("disabled", ""), setTimeout(function () {
                e.removeAttribute("disabled")
            }, 2e3);
            var t = document.querySelectorAll(".comment"), a = 0;
            if (t && (a = t.length) > 7) {
                for (var n = 0; n < a; n++) t[n].remove();
                a = 0
            }
            var s = document.createElement("div");
            s.className = "comment", s.style.bottom = 80 + 55 * a + "px", s.innerHTML = " 我爱Aaron  ", document.body.appendChild(s), setTimeout(function () {
                i()
            }, 5e3)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.go = void 0;
        var c = a(17), u = n(c), y = a(18), d = n(y), m = a(2);
        document.createElement("img").setAttribute("src", m), t.go = s
    }, 17: function (e, t, a) {
        "use strict";
        var n, s;
        "function" == typeof Symbol && Symbol.iterator;
        !function (l, r) {
            n = r, void 0 !== (s = "function" == typeof n ? n.call(t, a, t, e) : n) && (e.exports = s)
        }(0, function () {
            function e(t, a) {
                if (!(this instanceof e)) return new n(t, a);
                if ("string" == typeof t && (t = document.querySelector(t)), t && t[0] && t[0].nodeName && (t = t[0]), !t) throw new Error("Unknown element");
                this.el = t, this.stack = [], this.last = null, this._speed = 50 + Math.round(30 * Math.random()), this.length = 0, this.iterations = 0, this.classNames = {
                    typing: "-typish-typing",
                    waiting: "-typish-waiting"
                }, this.clearAllSync()
            }

            function t(e, t) {
                if (e.classList) e.classList.remove(t); else {
                    var a = new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi");
                    e.className = e.className.replace(a, " ").replace(/(^\s*)|(\s*$)/g, "").replace(/\s{2,}/g, " ")
                }
            }

            function a(e, t) {
                e.classList ? e.classList.add(t) : e.className = (e.className + " " + t).replace(/(^\s*)|(\s*$)/g, "").replace(/\s{2,}/g, " ")
            }

            var n = e;
            return e.defaultSpeed = 50, e.prototype.type = function (e, n, s) {
                "number" == typeof n && (s = n, n = void 0);
                var l, r = this;
                l = 0 === s ? [e] : e.split("");
                for (var p = 0, i = l.length; p < i; p++) {
                    var o = l[p];
                    !function (e, l) {
                        r.queue(function (p) {
                            0 === l && (a(r.el, r.classNames.typing), r.spanSync(n)), r.typeSync(e), l === i - 1 && t(r.el, r.classNames.typing), r.defer(p, s)
                        })
                    }(o, p)
                }
                return this
            }, e.prototype.del = function (e, t) {
                void 0 === e && (e = 1);
                for (var a = 0; a < e; a++) this.queue(function (e) {
                    this.delSync(), this.defer(e, t)
                });
                return this
            }, e.prototype.wait = function (e) {
                return this.queue(function (n) {
                    a(this.el, this.classNames.waiting), this.defer(function () {
                        t(this.el, this.classNames.waiting), n()
                    }, e)
                })
            }, e.prototype.clear = function (e) {
                var t = this;
                return 0 === e ? this.queue(function (e) {
                    this.clearAllSync(), e()
                }) : this.queue(function (a) {
                    function n() {
                        if (0 === t.length) return a();
                        t.delSync(), t.defer(n, e)
                    }

                    n()
                })
            }, e.prototype.then = function (e) {
                return this.queue(function (t) {
                    e.apply(this), t()
                })
            }, e.prototype.speed = function (e) {
                return this.then(function () {
                    return this._speed = e, this
                })
            }, e.prototype.queue = function (e) {
                function t() {
                    n.shift(), n.length && (n[0].call(a, t), a.iterations++)
                }

                var a = this, n = this.stack;
                return n.push(e), 1 === n.length && (this.iterations++, e.call(a, t)), this
            }, e.prototype.defer = function (e, t) {
                if (0 === t) return e.call(this), this;
                "number" == typeof t ? t *= this._speed : t = Math.floor(101 * Math.random()) + 50;
                var a = this;
                return setTimeout(function () {
                    e.call(a)
                }, t), this
            }, e.prototype.spanSync = function (e) {
                var t;
                if (e && "<" === e.substr(0, 1)) {
                    var a = document.createElement("div");
                    a.innerHTML = e, t = a.children[0], t || (t = document.createElement("span"))
                } else t = document.createElement("span"), e && (t.className = e.replace(/\./, " "));
                return this.el.appendChild(t), this.last = t, this
            }, e.prototype.typeSync = function (e, t) {
                return t ? this.spanSync(t) : this.last || this.spanSync(), this.length += e.length, e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>"), this.last.innerHTML += e, this
            }, e.prototype.delSync = function () {
                if (!this.last) return this;
                this.length--;
                var e = this.last.innerHTML;
                return 1 === e.length ? this.popSpanSync() : (this.last.innerHTML = e.substr(e, e.length - 1), 0 === e.length ? this.popSpanSync() : this)
            }, e.prototype.popSpanSync = function () {
                return this.last ? (this.el.removeChild(this.last), this.el.children.length ? this.last = this.el.children[this.el.children.length - 1] : this.last = void 0, this) : this
            }, e.prototype.clearAllSync = function () {
                this.el.innerHTML = "", this.length = 0
            }, e
        })
    }, 18: function (e, t, a) {
        var n, s;
        !function (l, r) {
            n = r, void 0 !== (s = "function" == typeof n ? n.call(t, a, t, e) : n) && (e.exports = s)
        }(0, function (e, t, a) {
            return function (e, t, a, n, s, l) {
                function r(e) {
                    e = e.toFixed(o.decimals), e += "";
                    var t, a, n, s, l, r;
                    if (t = e.split("."), a = t[0], n = t.length > 1 ? o.options.decimal + t[1] : "", o.options.useGrouping) {
                        for (s = "", l = 0, r = a.length; l < r; ++l) 0 !== l && l % 3 == 0 && (s = o.options.separator + s), s = a[r - l - 1] + s;
                        a = s
                    }
                    return o.options.numerals.length && (a = a.replace(/[0-9]/g, function (e) {
                        return o.options.numerals[+e]
                    }), n = n.replace(/[0-9]/g, function (e) {
                        return o.options.numerals[+e]
                    })), o.options.prefix + a + n + o.options.suffix
                }

                function p(e, t, a, n) {
                    return a * (1 - Math.pow(2, -10 * e / n)) * 1024 / 1023 + t
                }

                function i(e) {
                    return "number" == typeof e && !isNaN(e)
                }

                var o = this;
                if (o.version = function () {
                    return "1.9.2"
                }, o.options = {
                    useEasing: !0,
                    useGrouping: !0,
                    separator: ",",
                    decimal: ".",
                    easingFn: p,
                    formattingFn: r,
                    prefix: "",
                    suffix: "",
                    numerals: []
                }, l && "object" == typeof l) for (var c in o.options) l.hasOwnProperty(c) && null !== l[c] && (o.options[c] = l[c]);
                "" === o.options.separator ? o.options.useGrouping = !1 : o.options.separator = "" + o.options.separator;
                for (var u = 0, y = ["webkit", "moz", "ms", "o"], d = 0; d < y.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[y[d] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[y[d] + "CancelAnimationFrame"] || window[y[d] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) {
                    var a = (new Date).getTime(), n = Math.max(0, 16 - (a - u)), s = window.setTimeout(function () {
                        e(a + n)
                    }, n);
                    return u = a + n, s
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e)
                }), o.initialize = function () {
                    return !(!o.initialized && (o.error = "", o.d = "string" == typeof e ? document.getElementById(e) : e, o.d ? (o.startVal = Number(t), o.endVal = Number(a), i(o.startVal) && i(o.endVal) ? (o.decimals = Math.max(0, n || 0), o.dec = Math.pow(10, o.decimals), o.duration = 1e3 * Number(s) || 2e3, o.countDown = o.startVal > o.endVal, o.frameVal = o.startVal, o.initialized = !0, 0) : (o.error = "[CountUp] startVal (" + t + ") or endVal (" + a + ") is not a number", 1)) : (o.error = "[CountUp] target is null or undefined", 1)))
                }, o.printValue = function (e) {
                    var t = o.options.formattingFn(e);
                    "INPUT" === o.d.tagName ? this.d.value = t : "text" === o.d.tagName || "tspan" === o.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
                }, o.count = function (e) {
                    o.startTime || (o.startTime = e), o.timestamp = e;
                    var t = e - o.startTime;
                    o.remaining = o.duration - t, o.options.useEasing ? o.countDown ? o.frameVal = o.startVal - o.options.easingFn(t, 0, o.startVal - o.endVal, o.duration) : o.frameVal = o.options.easingFn(t, o.startVal, o.endVal - o.startVal, o.duration) : o.countDown ? o.frameVal = o.startVal - (o.startVal - o.endVal) * (t / o.duration) : o.frameVal = o.startVal + (o.endVal - o.startVal) * (t / o.duration), o.countDown ? o.frameVal = o.frameVal < o.endVal ? o.endVal : o.frameVal : o.frameVal = o.frameVal > o.endVal ? o.endVal : o.frameVal, o.frameVal = Math.round(o.frameVal * o.dec) / o.dec, o.printValue(o.frameVal), t < o.duration ? o.rAF = requestAnimationFrame(o.count) : o.callback && o.callback()
                }, o.start = function (e) {
                    o.initialize() && (o.callback = e, o.rAF = requestAnimationFrame(o.count))
                }, o.pauseResume = function () {
                    o.paused ? (o.paused = !1, delete o.startTime, o.duration = o.remaining, o.startVal = o.frameVal, requestAnimationFrame(o.count)) : (o.paused = !0, cancelAnimationFrame(o.rAF))
                }, o.reset = function () {
                    o.paused = !1, delete o.startTime, o.initialized = !1, o.initialize() && (cancelAnimationFrame(o.rAF), o.printValue(o.startVal))
                }, o.update = function (e) {
                    if (o.initialize()) {
                        if (e = Number(e), !i(e)) return void (o.error = "[CountUp] update() - new endVal is not a number: " + e);
                        o.error = "", e !== o.frameVal && (cancelAnimationFrame(o.rAF), o.paused = !1, delete o.startTime, o.startVal = o.frameVal, o.endVal = e, o.countDown = o.startVal > o.endVal, o.rAF = requestAnimationFrame(o.count))
                    }
                }, o.initialize() && o.printValue(o.startVal)
            }
        })
    }
});