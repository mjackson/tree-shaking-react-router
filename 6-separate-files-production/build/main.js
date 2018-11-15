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
    n((n.s = 2));
})([
  function(e, t) {
    e.exports = React;
  },
  function(e, t) {
    e.exports = ReactDOM;
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r),
      u = n(1),
      i = n.n(u);
    var c = (function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = "browser"),
          t
        );
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.prototype.render = function() {
          return o.a.createElement("p", null, "Browser Router");
        }),
        t
      );
    })(o.a.Component);
    c.propTypes = {};
    var f = c,
      l = (function(e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.prototype.render = function() {
            return o.a.createElement("p", null, "Route");
          }),
          t
        );
      })(o.a.Component);
    l.propTypes = {};
    var a = l;
    function p(e) {
      return (p =
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
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function y(e, t) {
      return !t || ("object" !== p(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function b(e) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function d(e, t) {
      return (d =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var m = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          y(this, b(t).apply(this, arguments))
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
            t && d(e, t);
        })(t, o.a.Component),
        (function(e, t, n) {
          t && s(e.prototype, t), n && s(e, n);
        })(t, [
          {
            key: "render",
            value: function() {
              return o.a.createElement(f, null, o.a.createElement(a, null));
            }
          }
        ]),
        t
      );
    })();
    i.a.render(o.a.createElement(m, null), document.getElementById("app"));
  }
]);
//# sourceMappingURL=main.js.map
