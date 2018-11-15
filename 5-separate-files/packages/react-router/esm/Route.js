import React from 'react';
import './babelHelpers';

var Route =
/*#__PURE__*/
function (_React$Component) {
  babelHelpers.inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    return React.createElement("p", null, "Route");
  };

  return Route;
}(React.Component);

Route.propTypes = {};
export default Route;