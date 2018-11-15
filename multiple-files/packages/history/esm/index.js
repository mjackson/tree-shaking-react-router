"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createHashHistory", {
  enumerable: true,
  get: function get() {
    return _createHashHistory.default;
  }
});
Object.defineProperty(exports, "createBrowserHistory", {
  enumerable: true,
  get: function get() {
    return _createBrowserHistory.default;
  }
});

var _createHashHistory = _interopRequireDefault(require("./createHashHistory"));

var _createBrowserHistory = _interopRequireDefault(require("./createBrowserHistory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }