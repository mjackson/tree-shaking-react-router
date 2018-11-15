!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function(t, e) {
    t.exports = React;
  },
  function(t, e) {
    t.exports = ReactDOM;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0),
      o = n.n(r),
      u = n(1),
      c = n.n(u);
    var i = (function(t) {
      function e(e) {
        var n;
        return ((n = t.call(this, e) || this).history = "browser"), n;
      }
      return (
        (function(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        })(e, t),
        (e.prototype.render = function() {
          return o.a.createElement("p", null, "Browser Router");
        }),
        e
      );
    })(o.a.Component);
    i.propTypes = {};
    var p = i;
    var f = (function(t) {
      function e() {
        return t.apply(this, arguments) || this;
      }
      return (
        (function(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        })(e, t),
        (e.prototype.render = function() {
          return o.a.createElement("p", null, "Route");
        }),
        e
      );
    })(o.a.Component);
    f.propTypes = {};
    var a = f;
    function l(t) {
      return (l =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function s(t, e) {
      return !e || ("object" !== l(e) && "function" != typeof e)
        ? (function(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function b(t) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function d(t, e) {
      return (d =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var m = (function(t) {
      function e() {
        return (
          (function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          s(this, b(e).apply(this, arguments))
        );
      }
      return (
        (function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 }
          })),
            e && d(t, e);
        })(e, o.a.Component),
        (function(t, e, n) {
          e && y(t.prototype, e), n && y(t, n);
        })(e, [
          {
            key: "render",
            value: function() {
              return o.a.createElement(p, null, o.a.createElement(a, null));
            }
          }
        ]),
        e
      );
    })();
    c.a.render(o.a.createElement(m, null), document.getElementById("app"));
  }
]);
//# sourceMappingURL=main.js.map
