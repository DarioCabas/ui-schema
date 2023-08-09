"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextPlugin = exports.PluginStack = exports.NextPluginRendererMemo = exports.NextPluginRenderer = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _memo = require("@ui-schema/ui-schema/Utils/memo");
var _UIMeta = require("@ui-schema/ui-schema/UIMeta");
var _ValidatorErrors = require("@ui-schema/ui-schema/ValidatorErrors");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _useImmutable = require("@ui-schema/ui-schema/Utils/useImmutable");
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _excluded = ["StackWrapper", "wrapperProps"],
  _excluded2 = ["widgets"],
  _excluded3 = ["currentPluginIndex"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var errorContainer = (0, _ValidatorErrors.createValidatorErrors)();
var PluginStack = function PluginStack(_ref) {
  var StackWrapper = _ref.StackWrapper,
    wrapperProps = _ref.wrapperProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useUIMeta = (0, _UIMeta.useUIMeta)(),
    widgets = _useUIMeta.widgets,
    meta = _objectWithoutProperties(_useUIMeta, _excluded2);
  var config = (0, _UIStore.useUIConfig)();
  var _props$level = props.level,
    level = _props$level === void 0 ? 0 : _props$level,
    parentSchema = props.parentSchema,
    _props$storeKeys = props.storeKeys,
    storeKeys = _props$storeKeys === void 0 ? (0, _immutable.List)([]) : _props$storeKeys,
    _props$schemaKeys = props.schemaKeys,
    schemaKeys = _props$schemaKeys === void 0 ? (0, _immutable.List)([]) : _props$schemaKeys,
    schema = props.schema,
    customWidgets = props.widgets;
  var currentStoreKeys = (0, _useImmutable.useImmutable)(storeKeys);
  var currentSchemaKeys = (0, _useImmutable.useImmutable)(schemaKeys);
  var activeWidgets = customWidgets || widgets;
  var isVirtual = Boolean(props.isVirtual || (schema === null || schema === void 0 ? void 0 : schema.get('hidden')));
  var required = (0, _immutable.List)([]);
  if (parentSchema) {
    var tmp_required = parentSchema.get('required');
    if (tmp_required) {
      required = tmp_required;
    }
  }
  var stack = _react["default"].createElement(NextPluginRenderer, _extends({}, meta, config, props, {
    currentPluginIndex: -1,
    widgets: activeWidgets,
    level: level,
    storeKeys: currentStoreKeys,
    schemaKeys: currentSchemaKeys,
    ownKey: storeKeys.last(),
    requiredList: required,
    required: false,
    errors: errorContainer,
    isVirtual: isVirtual,
    valid: true
  }));
  var wrappedStack = StackWrapper && !isVirtual ? _react["default"].createElement(StackWrapper, _extends({
    schema: schema,
    storeKeys: currentStoreKeys,
    schemaKeys: currentSchemaKeys
  }, wrapperProps || {}), stack) : stack;
  return props.schema ? activeWidgets !== null && activeWidgets !== void 0 && activeWidgets.ErrorFallback ? _react["default"].createElement(_PluginStack.PluginStackErrorBoundary, {
    FallbackComponent: activeWidgets.ErrorFallback,
    type: schema.get('type'),
    widget: schema.get('widget'),
    storeKeys: currentStoreKeys
  }, wrappedStack) : wrappedStack : null;
};
exports.PluginStack = PluginStack;
var getNextPlugin = function getNextPlugin(next, _ref2) {
  var ps = _ref2.pluginStack,
    WidgetRenderer = _ref2.WidgetRenderer;
  return next < ps.length ? ps[next] || function () {
    return 'plugin-error';
  } : WidgetRenderer;
};
exports.getNextPlugin = getNextPlugin;
var NextPluginRenderer = function NextPluginRenderer(_ref3) {
  var currentPluginIndex = _ref3.currentPluginIndex,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var next = currentPluginIndex + 1;
  var Plugin = getNextPlugin(next, props.widgets);
  return _react["default"].createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next
  }));
};
exports.NextPluginRenderer = NextPluginRenderer;
var NextPluginRendererMemo = (0, _memo.memo)(NextPluginRenderer);
exports.NextPluginRendererMemo = NextPluginRendererMemo;