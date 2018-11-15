import { createHashHistory, createBrowserHistory } from 'history';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import React from 'react';

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory();
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return React.createElement("p", null, "Hash Router");
  };

  return HashRouter;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  HashRouter.propTypes = {};
}

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory();
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return React.createElement("p", null, "Browser Router");
  };

  return BrowserRouter;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  BrowserRouter.propTypes = {};
}

var Route =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    return React.createElement("p", null, "Route");
  };

  return Route;
}(React.Component);

if (process.env.NODE_ENV !== "production") {
  Route.propTypes = {};
}

export { HashRouter, BrowserRouter, Route };
