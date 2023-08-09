"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPluginStack = applyPluginStack;
exports.injectPluginStack = injectPluginStack;
var _react = _interopRequireDefault(require("react"));
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _memo = require("@ui-schema/ui-schema/Utils/memo");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function applyPluginStack(CustomWidget) {
  var CustomStack = function CustomStack(p) {
    return _react["default"].createElement(_PluginStack.PluginStack, _extends({}, p, {
      WidgetOverride: CustomWidget
    }));
  };
  CustomStack.displayName = "ApplyPluginStack(".concat((0, _memo.getDisplayName)(CustomWidget), ")");
  return (0, _memo.memo)(CustomStack);
}
function injectPluginStack(Wrapper, CustomWidget) {
  var CustomStack = function CustomStack(p) {
    return _react["default"].createElement(_PluginStack.PluginStack, _extends({}, p, {
      StackWrapper: Wrapper,
      WidgetOverride: CustomWidget
    }));
  };
  CustomStack.displayName = "InjectPluginStack(".concat((0, _memo.getDisplayName)(Wrapper)).concat(CustomWidget ? "(".concat((0, _memo.getDisplayName)(CustomWidget), ")") : '', ")");
  return (0, _memo.memo)(CustomStack);
}