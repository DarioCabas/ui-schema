"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectRenderer = void 0;
var _react = _interopRequireDefault(require("react"));
var _memo = require("@ui-schema/ui-schema/Utils/memo");
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _excluded = ["level", "schema", "storeKeys", "schemaKeys", "errors"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ObjectRendererBase = function ObjectRendererBase(_ref) {
  var level = _ref.level,
    schema = _ref.schema,
    storeKeys = _ref.storeKeys,
    schemaKeys = _ref.schemaKeys,
    errors = _ref.errors,
    props = _objectWithoutProperties(_ref, _excluded);
  var isVirtual = props.isVirtual,
    widgets = props.widgets;
  var properties = schema.get('properties');
  if (!isVirtual && !widgets.GroupRenderer) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Widget GroupRenderer not existing');
    }
    return null;
  }
  var GroupRenderer = widgets.GroupRenderer;
  var propertyTree = (properties === null || properties === void 0 ? void 0 : properties.map(function (childSchema, childKey) {
    return _react["default"].createElement(_PluginStack.PluginStack, _extends({
      key: childKey
    }, props, {
      schema: childSchema,
      parentSchema: schema,
      storeKeys: storeKeys.push(childKey),
      schemaKeys: schemaKeys === null || schemaKeys === void 0 ? void 0 : schemaKeys.push('properties').push(childKey),
      level: level + 1
    }));
  }).valueSeq()) || null;
  return isVirtual ? propertyTree : properties ? _react["default"].createElement(GroupRenderer, {
    storeKeys: storeKeys,
    schemaKeys: schemaKeys,
    level: level,
    noGrid: props.noGrid,
    schema: schema
  }, propertyTree) : null;
};
var ObjectRenderer = (0, _memo.memo)(ObjectRendererBase);
exports.ObjectRenderer = ObjectRenderer;