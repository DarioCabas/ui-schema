"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InjectSplitSchemaPlugin = void 0;
var _react = _interopRequireDefault(require("react"));
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _SchemaRootProvider = require("@ui-schema/ui-schema/SchemaRootProvider");
var _escapePointer = require("@ui-schema/ui-schema/JSONPointer/escapePointer");
var _immutable = require("immutable");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var InjectSplitSchemaPlugin = function InjectSplitSchemaPlugin(props) {
  var schema = props.schema,
    storeKeys = props.storeKeys,
    currentPluginIndex = props.currentPluginIndex;
  var _useSchemaRoot = (0, _SchemaRootProvider.useSchemaRoot)(),
    schemaStyle = _useSchemaRoot.schemaStyle;
  var next = currentPluginIndex + 1;
  var Plugin = (0, _PluginStack.getNextPlugin)(next, props.widgets);
  var pointer = storeKeys.size > 0 ? '/' + storeKeys.map(function (k) {
    return (0, _escapePointer.escapePointer)(String(k));
  }).join('/') : '';
  var schemaStyleLevel = schemaStyle === null || schemaStyle === void 0 ? void 0 : schemaStyle.get(pointer);
  var schemaStyleClean;
  if (schemaStyleLevel && _immutable.Map.isMap(schemaStyleLevel)) {
    schemaStyleClean = schemaStyleLevel["delete"]('properties')["delete"]('items')["delete"]('if')["delete"]('else')["delete"]('then')["delete"]('not')["delete"]('allOf')["delete"]('anyOf')["delete"]('required');
  }
  return _react["default"].createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next,
    schema: schemaStyleClean ? schema.mergeDeep(schemaStyleClean) : schema
  }));
};
exports.InjectSplitSchemaPlugin = InjectSplitSchemaPlugin;