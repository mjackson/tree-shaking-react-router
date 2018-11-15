function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import { createBrowserHistory } from 'history';

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
export default BrowserRouter;