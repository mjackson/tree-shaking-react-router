(function (global) {
  var babelHelpers = global.babelHelpers = {};

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  babelHelpers.inheritsLoose = _inheritsLoose;
})(typeof global === "undefined" ? self : global);