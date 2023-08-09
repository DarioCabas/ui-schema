"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetRenderer = void 0;
var _react = _interopRequireDefault(require("react"));
var _Utils = require("@ui-schema/ui-schema/Utils");
var _widgetMatcher = require("@ui-schema/ui-schema/widgetMatcher");
var _immutable = require("immutable");
var _excluded = ["value", "internalValue", "WidgetOverride", "NoWidget", "errors", "onErrors", "requiredList", "currentPluginIndex"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var WidgetRenderer = function WidgetRenderer(_ref) {
  var value = _ref.value,
    internalValue = _ref.internalValue,
    WidgetOverride = _ref.WidgetOverride,
    NoWidget = _ref.NoWidget,
    errors = _ref.errors,
    onErrors = _ref.onErrors,
    requiredList = _ref.requiredList,
    currentPluginIndex = _ref.currentPluginIndex,
    props = _objectWithoutProperties(_ref, _excluded);
  var schema = props.schema,
    widgets = props.widgets,
    isVirtual = props.isVirtual;
  var currentErrors = (0, _Utils.useImmutable)(errors);
  _react["default"].useEffect(function () {
    return onErrors && onErrors(currentErrors);
  }, [onErrors, currentErrors]);
  var schemaType = schema.get('type');
  var widgetName = schema.get('widget');
  var Widget = (0, _widgetMatcher.widgetMatcher)({
    isVirtual: Boolean(isVirtual),
    WidgetOverride: WidgetOverride,
    NoWidget: NoWidget,
    widgetName: widgetName,
    schemaType: schemaType,
    widgets: widgets
  });
  var noExtractValue = !isVirtual && (schemaType === 'array' || schemaType === 'object' || _immutable.List.isList(schemaType) && (schemaType.indexOf('array') !== -1 || schemaType.indexOf('object') !== -1));
  return Widget ? _react["default"].createElement(Widget, _extends({}, props, {
    value: noExtractValue ? undefined : value,
    internalValue: noExtractValue ? undefined : internalValue,
    errors: currentErrors
  })) : null;
};
exports.WidgetRenderer = WidgetRenderer;