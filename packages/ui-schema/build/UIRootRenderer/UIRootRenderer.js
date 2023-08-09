"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIRootRenderer = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _memo = require("@ui-schema/ui-schema/Utils/memo");
var _UIMeta = require("@ui-schema/ui-schema/UIMeta");
var _excluded = ["rootRenderer"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DumpRootRenderer = function DumpRootRenderer(_ref) {
  var RootRenderer = _ref.rootRenderer,
    props = _objectWithoutProperties(_ref, _excluded);
  return props.isVirtual ? _react["default"].createElement(_PluginStack.PluginStack, props) : _react["default"].createElement(RootRenderer, null, _react["default"].createElement(_PluginStack.PluginStack, props));
};
DumpRootRenderer = (0, _memo.memo)(DumpRootRenderer);
var mustBeSet = function mustBeSet(name) {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    console.error(name + ' must be set');
  }
  return null;
};
var UIRootRenderer = function UIRootRenderer(_ref2) {
  var schema = _ref2.schema,
    rootContext = _ref2.rootContext;
  var _useUIMeta = (0, _UIMeta.useUIMeta)(),
    widgets = _useUIMeta.widgets;
  if (!schema) {
    return mustBeSet('schema');
  }
  if (!widgets) {
    return mustBeSet('widgets');
  }
  var RootRenderer = widgets.RootRenderer;
  if (!RootRenderer) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      console.error('Widget RootRenderer not existing');
    }
    return null;
  }
  return _react["default"].createElement(DumpRootRenderer, {
    rootRenderer: RootRenderer,
    isVirtual: schema === null || schema === void 0 ? void 0 : schema.get('hidden'),
    schema: schema,
    storeKeys: (0, _immutable.List)([]),
    schemaKeys: (0, _immutable.List)([]),
    rootContext: rootContext
  });
};
exports.UIRootRenderer = UIRootRenderer;