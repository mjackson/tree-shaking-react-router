function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import { createHashHistory } from 'history';

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
export default HashRouter;