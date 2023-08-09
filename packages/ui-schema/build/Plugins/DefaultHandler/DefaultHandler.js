"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultHandler = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _PluginStack = require("@ui-schema/ui-schema/PluginStack/PluginStack");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var DefaultHandler = function DefaultHandler(props) {
  var schema = props.schema,
    currentPluginIndex = props.currentPluginIndex,
    doNotDefault = props.doNotDefault,
    readOnly = props.readOnly;
  var next = currentPluginIndex + 1;
  var Plugin = (0, _PluginStack.getNextPlugin)(next, props.widgets);
  var defaultVal = schema.get('default');
  var onChange = props.onChange,
    storeKeys = props.storeKeys;
  var value = props.value,
    internalValue = props.internalValue;
  var valRef = _react["default"].useRef(value);
  valRef.current = value;
  var defaultHandled = Boolean((internalValue === null || internalValue === void 0 ? void 0 : internalValue.get('defaultHandled')) || doNotDefault || readOnly || (schema === null || schema === void 0 ? void 0 : schema.get('readOnly')));
  _react["default"].useEffect(function () {
    if (defaultHandled) return;
    if (typeof defaultVal === 'undefined') return;
    if (typeof valRef.current === 'undefined') {
      onChange({
        type: 'update',
        storeKeys: storeKeys,
        scopes: ['value', 'internal'],
        updater: function updater(_ref) {
          var _ref$internal = _ref.internal,
            internal = _ref$internal === void 0 ? (0, _immutable.Map)() : _ref$internal;
          return {
            value: defaultVal,
            internal: internal.set('defaultHandled', true)
          };
        }
      });
    } else {
      onChange({
        type: 'update',
        storeKeys: storeKeys,
        scopes: ['internal'],
        updater: function updater(_ref2) {
          var _ref2$internal = _ref2.internal,
            internal = _ref2$internal === void 0 ? (0, _immutable.Map)() : _ref2$internal;
          return {
            internal: internal.set('defaultHandled', true)
          };
        }
      });
    }
  }, [onChange, storeKeys, defaultHandled, defaultVal, valRef]);
  var nextValue = value;
  if (typeof value === 'undefined' && !defaultHandled) {
    nextValue = defaultVal;
  }
  return _react["default"].createElement(Plugin, _extends({}, props, {
    value: nextValue,
    currentPluginIndex: currentPluginIndex
  }));
};
exports.DefaultHandler = DefaultHandler;