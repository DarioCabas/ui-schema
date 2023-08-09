"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memo = exports.isEqual = void 0;
var _react = _interopRequireDefault(require("react"));
var _getDisplayName = require("./getDisplayName");
var _isEqualObject = require("@ui-schema/ui-schema/Utils/isEqualObject");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var isEqual = _isEqualObject.isEqualObject;
exports.isEqual = isEqual;
var memo = function memo(Component) {
  var Memoized = _react["default"].memo(Component, _isEqualObject.isEqualObject);
  Memoized.displayName = (0, _getDisplayName.getDisplayName)(Component);
  return Memoized;
};
exports.memo = memo;