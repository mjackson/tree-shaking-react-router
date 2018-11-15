import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import React from 'react';
import { createHashHistory, createBrowserHistory } from 'history';

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.history = createHashHistory();
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return React.createElement("p", null, "Hash Router");
  };

  return HashRouter;
}(React.Component);

HashRouter.propTypes = {};

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.history = createBrowserHistory();
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return React.createElement("p", null, "Browser Router");
  };

  return BrowserRouter;
}(React.Component);

BrowserRouter.propTypes = {};

export { HashRouter, BrowserRouter };
