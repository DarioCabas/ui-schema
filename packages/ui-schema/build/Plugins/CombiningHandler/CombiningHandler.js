"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CombiningHandler = void 0;
var _react = _interopRequireDefault(require("react"));
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _useSchemaCombine = require("@ui-schema/ui-schema/Plugins/CombiningHandler/useSchemaCombine");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var CombiningHandler = function CombiningHandler(props) {
  var baseSchema = props.schema,
    value = props.value,
    currentPluginIndex = props.currentPluginIndex;
  var schema = (0, _useSchemaCombine.useSchemaCombine)(baseSchema, value);
  var next = currentPluginIndex + 1;
  var Plugin = (0, _PluginStack.getNextPlugin)(next, props.widgets);
  return _react["default"].createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next,
    schema: schema
  }));
};
exports.CombiningHandler = CombiningHandler;