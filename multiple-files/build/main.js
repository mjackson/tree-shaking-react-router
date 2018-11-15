!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 4));
})([
  function(e, t) {
    e.exports = React;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "createHashHistory", {
        enumerable: !0,
        get: function() {
          return r.default;
        }
      }),
      Object.defineProperty(t, "createBrowserHistory", {
        enumerable: !0,
        get: function() {
          return o.default;
        }
      });
    var r = u(n(6)),
      o = u(n(7));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  },
  function(e, t) {
    e.exports = ReactDOM;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "HashRouter", {
        enumerable: !0,
        get: function() {
          return r.default;
        }
      }),
      Object.defineProperty(t, "BrowserRouter", {
        enumerable: !0,
        get: function() {
          return o.default;
        }
      });
    var r = u(n(5)),
      o = u(n(8));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      u = n(2),
      i = n.n(u),
      f = n(3);
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function a(e, t) {
      return !t || ("object" !== c(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function p(e) {
      return (p = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var y = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          a(this, p(t).apply(this, arguments))
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && s(e, t);
        })(t, o.a.Component),
        (function(e, t, n) {
          t && l(e.prototype, t), n && l(e, n);
        })(t, [
          {
            key: "render",
            value: function() {
              return o.a.createElement(f.BrowserRouter, null);
            }
          }
        ]),
        t
      );
    })();
    i.a.render(o.a.createElement(y, null), document.getElementById("app"));
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(0)),
      o = n(1);
    function u(e) {
      return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function f(e, t) {
      return !t || ("object" !== u(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, t) {
      return (l =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var a = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = f(this, c(t).call(this, e))).history = (0,
          o.createHashHistory)()),
          n
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && l(e, t);
        })(t, r.default.Component),
        (function(e, t, n) {
          t && i(e.prototype, t), n && i(e, n);
        })(t, [
          {
            key: "render",
            value: function() {
              return r.default.createElement("p", null, "Hash Router");
            }
          }
        ]),
        t
      );
    })();
    !(function(e, t, n) {
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = n);
    })(a, "propTypes", {});
    var p = a;
    t.default = p;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        return "hash";
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        return "browser";
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(0)),
      o = n(1);
    function u(e) {
      return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function f(e, t) {
      return !t || ("object" !== u(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, t) {
      return (l =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var a = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = f(this, c(t).call(this, e))).history = (0,
          o.createBrowserHistory)()),
          n
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && l(e, t);
        })(t, r.default.Component),
        (function(e, t, n) {
          t && i(e.prototype, t), n && i(e, n);
        })(t, [
          {
            key: "render",
            value: function() {
              return r.default.createElement("p", null, "Browser Router");
            }
          }
        ]),
        t
      );
    })();
    !(function(e, t, n) {
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = n);
    })(a, "propTypes", {});
    var p = a;
    t.default = p;
  }
]);
