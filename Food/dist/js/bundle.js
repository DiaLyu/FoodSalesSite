/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
      return t[e];
    }.bind(null, o));
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 4);
}([function (t, e, n) {
  (function (e, n) {
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.8+1e68dce6
     */
    var r;
    r = function () {
      "use strict";

      function t(t) {
        return "function" == typeof t;
      }

      var r = Array.isArray ? Array.isArray : function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
          o = 0,
          i = void 0,
          s = void 0,
          c = function (t, e) {
        m[o] = t, m[o + 1] = e, 2 === (o += 2) && (s ? s(v) : w());
      },
          a = "undefined" != typeof window ? window : void 0,
          l = a || {},
          u = l.MutationObserver || l.WebKitMutationObserver,
          d = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
          f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

      function h() {
        var t = setTimeout;
        return function () {
          return t(v, 1);
        };
      }

      var m = new Array(1e3);

      function v() {
        for (var t = 0; t < o; t += 2) (0, m[t])(m[t + 1]), m[t] = void 0, m[t + 1] = void 0;

        o = 0;
      }

      var p,
          y,
          g,
          _,
          w = void 0;

      function b(t, e) {
        var n = this,
            r = new this.constructor(L);
        void 0 === r[E] && $(r);
        var o = n._state;

        if (o) {
          var i = arguments[o - 1];
          c(function () {
            return O(o, r, i, n._result);
          });
        } else C(n, r, t, e);

        return r;
      }

      function S(t) {
        if (t && "object" == typeof t && t.constructor === this) return t;
        var e = new this(L);
        return A(e, t), e;
      }

      d ? w = function () {
        return e.nextTick(v);
      } : u ? (y = 0, g = new u(v), _ = document.createTextNode(""), g.observe(_, {
        characterData: !0
      }), w = function () {
        _.data = y = ++y % 2;
      }) : f ? ((p = new MessageChannel()).port1.onmessage = v, w = function () {
        return p.port2.postMessage(0);
      }) : w = void 0 === a ? function () {
        try {
          var t = Function("return this")().require("vertx");

          return void 0 !== (i = t.runOnLoop || t.runOnContext) ? function () {
            i(v);
          } : h();
        } catch (t) {
          return h();
        }
      }() : h();
      var E = Math.random().toString(36).substring(2);

      function L() {}

      function x(e, n, r) {
        n.constructor === e.constructor && r === b && n.constructor.resolve === S ? function (t, e) {
          1 === e._state ? q(t, e._result) : 2 === e._state ? j(t, e._result) : C(e, void 0, function (e) {
            return A(t, e);
          }, function (e) {
            return j(t, e);
          });
        }(e, n) : void 0 === r ? q(e, n) : t(r) ? function (t, e, n) {
          c(function (t) {
            var r = !1,
                o = function (t, e, n, r) {
              try {
                t.call(e, n, r);
              } catch (t) {
                return t;
              }
            }(n, e, function (n) {
              r || (r = !0, e !== n ? A(t, n) : q(t, n));
            }, function (e) {
              r || (r = !0, j(t, e));
            }, t._label);

            !r && o && (r = !0, j(t, o));
          }, t);
        }(e, n, r) : q(e, n);
      }

      function A(t, e) {
        if (t === e) j(t, new TypeError("You cannot resolve a promise with itself"));else if (o = typeof (r = e), null === r || "object" !== o && "function" !== o) q(t, e);else {
          var n = void 0;

          try {
            n = e.then;
          } catch (e) {
            return void j(t, e);
          }

          x(t, e, n);
        }
        var r, o;
      }

      function T(t) {
        t._onerror && t._onerror(t._result), M(t);
      }

      function q(t, e) {
        void 0 === t._state && (t._result = e, t._state = 1, 0 !== t._subscribers.length && c(M, t));
      }

      function j(t, e) {
        void 0 === t._state && (t._state = 2, t._result = e, c(T, t));
      }

      function C(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null, o[i] = e, o[i + 1] = n, o[i + 2] = r, 0 === i && t._state && c(M, t);
      }

      function M(t) {
        var e = t._subscribers,
            n = t._state;

        if (0 !== e.length) {
          for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? O(n, r, o, i) : o(i);

          t._subscribers.length = 0;
        }
      }

      function O(e, n, r, o) {
        var i = t(r),
            s = void 0,
            c = void 0,
            a = !0;

        if (i) {
          try {
            s = r(o);
          } catch (t) {
            a = !1, c = t;
          }

          if (n === s) return void j(n, new TypeError("A promises callback cannot return that same promise."));
        } else s = o;

        void 0 !== n._state || (i && a ? A(n, s) : !1 === a ? j(n, c) : 1 === e ? q(n, s) : 2 === e && j(n, s));
      }

      var k = 0;

      function $(t) {
        t[E] = k++, t._state = void 0, t._result = void 0, t._subscribers = [];
      }

      var I = function () {
        function t(t, e) {
          this._instanceConstructor = t, this.promise = new t(L), this.promise[E] || $(this.promise), r(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? q(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && q(this.promise, this._result))) : j(this.promise, new Error("Array Methods must be provided an Array"));
        }

        return t.prototype._enumerate = function (t) {
          for (var e = 0; void 0 === this._state && e < t.length; e++) this._eachEntry(t[e], e);
        }, t.prototype._eachEntry = function (t, e) {
          var n = this._instanceConstructor,
              r = n.resolve;

          if (r === S) {
            var o = void 0,
                i = void 0,
                s = !1;

            try {
              o = t.then;
            } catch (t) {
              s = !0, i = t;
            }

            if (o === b && void 0 !== t._state) this._settledAt(t._state, e, t._result);else if ("function" != typeof o) this._remaining--, this._result[e] = t;else if (n === P) {
              var c = new n(L);
              s ? j(c, i) : x(c, t, o), this._willSettleAt(c, e);
            } else this._willSettleAt(new n(function (e) {
              return e(t);
            }), e);
          } else this._willSettleAt(r(t), e);
        }, t.prototype._settledAt = function (t, e, n) {
          var r = this.promise;
          void 0 === r._state && (this._remaining--, 2 === t ? j(r, n) : this._result[e] = n), 0 === this._remaining && q(r, this._result);
        }, t.prototype._willSettleAt = function (t, e) {
          var n = this;
          C(t, void 0, function (t) {
            return n._settledAt(1, e, t);
          }, function (t) {
            return n._settledAt(2, e, t);
          });
        }, t;
      }(),
          P = function () {
        function e(t) {
          this[E] = k++, this._result = this._state = void 0, this._subscribers = [], L !== t && ("function" != typeof t && function () {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }(), this instanceof e ? function (t, e) {
            try {
              e(function (e) {
                A(t, e);
              }, function (e) {
                j(t, e);
              });
            } catch (e) {
              j(t, e);
            }
          }(this, t) : function () {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }());
        }

        return e.prototype.catch = function (t) {
          return this.then(null, t);
        }, e.prototype.finally = function (e) {
          var n = this.constructor;
          return t(e) ? this.then(function (t) {
            return n.resolve(e()).then(function () {
              return t;
            });
          }, function (t) {
            return n.resolve(e()).then(function () {
              throw t;
            });
          }) : this.then(e, e);
        }, e;
      }();

      return P.prototype.then = b, P.all = function (t) {
        return new I(this, t).promise;
      }, P.race = function (t) {
        var e = this;
        return r(t) ? new e(function (n, r) {
          for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r);
        }) : new e(function (t, e) {
          return e(new TypeError("You must pass an array to race."));
        });
      }, P.resolve = S, P.reject = function (t) {
        var e = new this(L);
        return j(e, t), e;
      }, P._setScheduler = function (t) {
        s = t;
      }, P._setAsap = function (t) {
        c = t;
      }, P._asap = c, P.polyfill = function () {
        var t = void 0;
        if (void 0 !== n) t = n;else if ("undefined" != typeof self) t = self;else try {
          t = Function("return this")();
        } catch (t) {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var e = t.Promise;

        if (e) {
          var r = null;

          try {
            r = Object.prototype.toString.call(e.resolve());
          } catch (t) {}

          if ("[object Promise]" === r && !e.cast) return;
        }

        t.Promise = P;
      }, P.Promise = P, P;
    }, t.exports = r();
  }).call(this, n(1), n(2));
}, function (t, e) {
  var n,
      r,
      o = t.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined");
  }

  function s() {
    throw new Error("clearTimeout has not been defined");
  }

  function c(t) {
    if (n === setTimeout) return setTimeout(t, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

    try {
      return n(t, 0);
    } catch (e) {
      try {
        return n.call(null, t, 0);
      } catch (e) {
        return n.call(this, t, 0);
      }
    }
  }

  !function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i;
    } catch (t) {
      n = i;
    }

    try {
      r = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (t) {
      r = s;
    }
  }();
  var a,
      l = [],
      u = !1,
      d = -1;

  function f() {
    u && a && (u = !1, a.length ? l = a.concat(l) : d = -1, l.length && h());
  }

  function h() {
    if (!u) {
      var t = c(f);
      u = !0;

      for (var e = l.length; e;) {
        for (a = l, l = []; ++d < e;) a && a[d].run();

        d = -1, e = l.length;
      }

      a = null, u = !1, function (t) {
        if (r === clearTimeout) return clearTimeout(t);
        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);

        try {
          r(t);
        } catch (e) {
          try {
            return r.call(null, t);
          } catch (e) {
            return r.call(this, t);
          }
        }
      }(t);
    }
  }

  function m(t, e) {
    this.fun = t, this.array = e;
  }

  function v() {}

  o.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    l.push(new m(t, e)), 1 !== l.length || u || c(h);
  }, m.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function (t) {
    return [];
  }, o.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function () {
    return "/";
  }, o.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function () {
    return 0;
  };
}, function (t, e) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (t) {
    "object" == typeof window && (n = window);
  }

  t.exports = n;
}, function (t, e) {
  window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (t, e) {
    e = e || window;

    for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this);
  });
}, function (t, e, n) {
  "use strict";

  n.r(e);
  n(3);

  var r = function (t, e, n, r) {
    const o = document.querySelectorAll(t),
          i = document.querySelectorAll(e),
          s = document.querySelector(n);

    function c() {
      i.forEach(t => {
        t.classList.add("hide"), t.classList.remove("show", "fade");
      }), o.forEach(t => {
        t.classList.remove(r);
      });
    }

    function a() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      i[t].classList.add("show", "fade"), i[t].classList.remove("hide"), o[t].classList.add(r);
    }

    c(), a(), s.addEventListener("click", e => {
      const n = e.target;
      n && n.classList.contains(t.slice(1)) && o.forEach((t, e) => {
        n == t && (c(), a(e));
      });
    });
  };

  function o(t, e) {
    const n = document.querySelector(t);
    n.classList.add("show"), n.classList.remove("hide"), document.body.style.overflow = "hidden", console.log(e), e && clearInterval(e);
  }

  function i(t) {
    const e = document.querySelector(t);
    e.classList.add("hide"), e.classList.remove("show"), document.body.style.overflow = "";
  }

  var s = function (t, e, n) {
    const r = document.querySelectorAll(t),
          s = document.querySelector(e);
    document.querySelector("[data-close]"), r.forEach(t => {
      t.addEventListener("click", () => o(e, n));
    }), s.addEventListener("click", t => {
      t.target !== s && "" != t.target.getAttribute("data-close") || i(e);
    }), document.addEventListener("keydown", t => {
      "Escape" === t.code && s.classList.contains("show") && i(e);
    }), window.addEventListener("scroll", function t() {
      window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 && (o(e, n), window.removeEventListener("scroll", t));
    });
  };

  var c = function (t, e) {
    function n(t) {
      return t >= 0 && t < 10 ? `0${t}` : t;
    }

    !function (t, e) {
      const r = document.querySelector(t),
            o = r.querySelector("#days"),
            i = r.querySelector("#hours"),
            s = r.querySelector("#minutes"),
            c = r.querySelector("#seconds"),
            a = setInterval(l, 1e3);

      function l() {
        const t = function (t) {
          let e, n, r, o;
          const i = Date.parse(t) - Date.parse(new Date());
          return i <= 0 ? (e = 0, n = 0, r = 0, o = 0) : (e = Math.floor(i / 864e5), n = Math.floor(i / 36e5 % 24), r = Math.floor(i / 6e4 % 60), o = Math.floor(i / 1e3 % 60)), {
            total: i,
            days: e,
            hours: n,
            minutes: r,
            seconds: o
          };
        }(e);

        o.innerHTML = n(t.days), i.innerHTML = n(t.hours), s.innerHTML = n(t.minutes), c.innerHTML = n(t.seconds), t.total <= 0 && clearInterval(a);
      }

      l();
    }(t, e);
  };

  var a = function () {
    const t = document.querySelector(".calculating__result span");
    let e, n, r, o, i;

    function s() {
      t.textContent = e && n && r && o && i ? "female" === e ? Math.round((447.6 + 9.2 * r + 3.1 * n - 4.3 * o) * i) : Math.round((88.36 + 13.4 * r + 4.8 * n - 5.7 * o) * i) : "____";
    }

    function c(t, e) {
      document.querySelectorAll(t).forEach(t => {
        t.classList.remove(e), t.getAttribute("id") === localStorage.getItem("sex") && t.classList.add(e), t.getAttribute("data-ratio") === localStorage.getItem("ratio") && t.classList.add(e);
      });
    }

    function a(t, n) {
      const r = document.querySelectorAll(t);
      r.forEach(t => {
        t.addEventListener("click", t => {
          t.target.getAttribute("data-ratio") ? (i = +t.target.getAttribute("data-ratio"), localStorage.setItem("ratio", +t.target.getAttribute("data-ratio"))) : (e = t.target.getAttribute("id"), localStorage.setItem("sex", t.target.getAttribute("id"))), r.forEach(t => {
            t.classList.remove(n);
          }), t.target.classList.add(n), s();
        });
      });
    }

    function l(t) {
      const e = document.querySelector(t);
      e.addEventListener("input", () => {
        switch (e.value.match(/\D/g) ? e.style.border = "1px solid red" : e.style.border = "none", e.getAttribute("id")) {
          case "height":
            n = +e.value;
            break;

          case "weight":
            r = +e.value;
            break;

          case "age":
            o = +e.value;
        }

        s();
      });
    }

    localStorage.getItem("sex") ? e = localStorage.getItem("sex") : (e = "female", localStorage.setItem("sex", "female")), localStorage.getItem("ratio") ? i = localStorage.getItem("ratio") : (i = 1.375, localStorage.setItem("ratio", 1.375)), s(), c("#gender div", "calculating__choose-item_active"), c(".calculating__choose_big div", "calculating__choose-item_active"), a("#gender div", "calculating__choose-item_active"), a(".calculating__choose_big div", "calculating__choose-item_active"), l("#height"), l("#weight"), l("#age");
  };

  var l = function () {
    class t {
      constructor(t, e, n, r, o, i) {
        for (var _len = arguments.length, s = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
          s[_key - 6] = arguments[_key];
        }

        this.src = t, this.alt = e, this.title = n, this.descr = r, this.price = o, this.classes = s, this.parent = document.querySelector(i), this.transfer = 27, this.changeToUAH();
      }

      changeToUAH() {
        this.price = this.price * this.transfer;
      }

      render() {
        const t = document.createElement("div");
        0 === this.classes.length ? (this.element = "menu__item", t.classList.add(this.element)) : this.classes.forEach(e => t.classList.add(e)), t.innerHTML = `\n                    <img src=${this.src} alt=${this.alt}>\n                    <h3 class="menu__item-subtitle">${this.title}</h3>\n                    <div class="menu__item-descr">${this.descr}</div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                    </div>\n                `, this.parent.append(t);
      }

    }

    (async t => {
      const e = await fetch(t);
      if (!e.ok) throw new Error(`Could not fetch ${t}, status: ${e.status}`);
      return await e.json();
    })("http://localhost:3000/menu").then(e => {
      e.forEach(_ref => {
        let {
          img: e,
          altimg: n,
          title: r,
          descr: o,
          price: i
        } = _ref;
        new t(e, n, r, o, i, ".menu .container").render();
      });
    });
  };

  var u = function (t, e) {
    const n = document.querySelectorAll(t),
          r = "icons/spinner.svg",
          s = "Спасибо! Скоро мы с вами свяжемся",
          c = "Что-то пошло не так...";

    function a(t) {
      const n = document.querySelector(".modal__dialog");
      n.classList.add("hide"), o(".modal", e);
      const r = document.createElement("div");
      r.classList.add("modal__dialog"), r.innerHTML = `\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${t}</div>\n            </div>\n        `, document.querySelector(".modal").append(r), setTimeout(() => {
        r.remove(), n.classList.add("show"), n.classList.remove("hide"), i(".modal");
      }, 4e3);
    }

    n.forEach(t => {
      var e;
      (e = t).addEventListener("submit", t => {
        t.preventDefault();
        const n = document.createElement("img");
        n.src = r, n.style.cssText = "\n                display: block;\n                margin: 0 auto;\n            ", e.append(n), e.insertAdjacentElement("afterend", n);
        const o = new FormData(e);
        (async (t, e) => {
          const n = await fetch(t, {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: e
          });
          return await n.json();
        })("http://localhost:3000/requests", JSON.stringify(Object.fromEntries(o.entries()))).then(t => {
          console.log(t), a(s), n.remove();
        }).catch(() => {
          a(c);
        }).finally(() => {
          e.reset();
        });
      });
    }), fetch("http://localhost:3000/menu").then(t => t.json()).then(t => console.log(t));
  };

  var d = function (_ref2) {
    let {
      container: t,
      slide: e,
      nextArrow: n,
      prevArrow: r,
      totalCounter: o,
      currentCounter: i,
      wrapper: s,
      field: c
    } = _ref2;
    const a = document.querySelectorAll(e),
          l = document.querySelector(t),
          u = document.querySelector(r),
          d = document.querySelector(n),
          f = document.querySelector(o),
          h = document.querySelector(i),
          m = document.querySelector(s),
          v = document.querySelector(c),
          p = window.getComputedStyle(m).width;
    let y = 1,
        g = 0;
    a.length < 10 ? (f.textContent = `0${a.length}`, h.textContent = `0${y}`) : (f.textContent = a.length, h.textContent = y), v.style.width = 100 * a.length + "%", v.style.display = "flex", v.style.transition = "0.5s all", m.style.overflow = "hidden", a.forEach(t => {
      t.style.width = p;
    }), l.style.position = "relative";

    const _ = document.createElement("ol"),
          w = [];

    _.classList.add("carousel-indicators"), _.style.cssText = "\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ", l.append(_);

    for (let t = 0; t < a.length; t++) {
      const e = document.createElement("li");
      e.setAttribute("data-slide-to", t + 1), e.style.cssText = "\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ", 0 == t && (e.style.opacity = 1), _.append(e), w.push(e);
    }

    function b(t) {
      return +t.replace(/\D/g, "");
    }

    d.addEventListener("click", () => {
      g == b(p) * (a.length - 1) ? g = 0 : g += b(p), v.style.transform = `translateX(-${g}px)`, y == a.length ? y = 1 : y++, a.length < 10 ? h.textContent = `0${y}` : h.textContent = y, w.forEach(t => t.style.opacity = ".5"), w[y - 1].style.opacity = 1;
    }), u.addEventListener("click", () => {
      0 == g ? g = b(p) * (a.length - 1) : g -= b(p), v.style.transform = `translateX(-${g}px)`, 1 == y ? y = a.length : y--, a.length < 10 ? h.textContent = `0${y}` : h.textContent = y, w.forEach(t => t.style.opacity = ".5"), w[y - 1].style.opacity = 1;
    }), w.forEach(t => {
      t.addEventListener("click", t => {
        const e = t.target.getAttribute("data-slide-to");
        y = e, g = b(p) * (e - 1), v.style.transform = `translateX(-${g}px)`, a.length < 10 ? h.textContent = `0${y}` : h.textContent = y, w.forEach(t => t.style.opacity = ".5"), w[y - 1].style.opacity = 1;
      });
    });
  };

  n(0).polyfill(), window.addEventListener("DOMContentLoaded", () => {
    const t = setTimeout(() => o(".modal", t), 3e5);
    r(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active"), s("[data-modal]", ".modal", t), c(".timer", "2022-09-20"), a(), l(), u("form", t), d({
      container: ".offer__slider",
      nextArrow: ".offer__slider-next",
      slide: ".offer__slide",
      prevArrow: ".offer__slider-prev",
      totalCounter: "#total",
      currentCounter: "#current",
      wrapper: ".offer__slider-wrapper",
      field: ".offer__slider-inner"
    });
  });
}]);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map