import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React from 'react';
import { createHashHistory, createBrowserHistory } from 'history';

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter(props) {
    var _this;

    _classCallCheck(this, HashRouter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HashRouter).call(this, props));
    _this.history = createHashHistory();
    return _this;
  }

  _createClass(HashRouter, [{
    key: "render",
    value: function render() {
      return React.createElement("p", null, "Hash Router");
    }
  }]);

  return HashRouter;
}(React.Component);

_defineProperty(HashRouter, "propTypes", {});

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter(props) {
    var _this;

    _classCallCheck(this, BrowserRouter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BrowserRouter).call(this, props));
    _this.history = createBrowserHistory();
    return _this;
  }

  _createClass(BrowserRouter, [{
    key: "render",
    value: function render() {
      return React.createElement("p", null, "Browser Router");
    }
  }]);

  return BrowserRouter;
}(React.Component);

_defineProperty(BrowserRouter, "propTypes", {});

export { HashRouter, BrowserRouter };
