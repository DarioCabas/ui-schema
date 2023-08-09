"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlateRenderer = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _slateReact = require("slate-react");
var _slatePlugins = require("@udecode/slate-plugins");
var _slate = require("slate");
var _slateHistory = require("slate-history");
var _memo = require("@ui-schema/ui-schema/Utils/memo");
var _slatePlugins2 = require("@ui-schema/material-slate/Slate/slatePlugins");
var _SlateToolbarBalloon = require("@ui-schema/material-slate/Slate/SlateToolbarBalloon");
var _SlateToolbarHead = require("@ui-schema/material-slate/Slate/SlateToolbarHead");
var _pluginOptions = require("@ui-schema/material-slate/Slate/pluginOptions");
var _useSlate = require("@ui-schema/material-slate/Slate/useSlate");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var initialValue = [{
  type: _pluginOptions.pluginOptions.p.type,
  children: [{
    text: ''
  }]
}];
var SlateRenderer = function SlateRenderer(_ref) {
  var _valueRef$current;
  var value = _ref.value,
    internalValue = _ref.internalValue,
    onChange = _ref.onChange,
    storeKeys = _ref.storeKeys,
    required = _ref.required,
    schema = _ref.schema,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    ElementMapper = _ref.ElementMapper,
    className = _ref.className,
    _ref$onlyInline = _ref.onlyInline,
    onlyInline = _ref$onlyInline === void 0 ? false : _ref$onlyInline,
    plugins = _ref.plugins,
    renderLeaf = _ref.renderLeaf,
    withPluginsProp = _ref.withPlugins;
  var enableOnly = schema.getIn(['editor', 'enableOnly']);
  var renderElements = _react["default"].useMemo(function () {
    return [function (_ref2) {
      var children = _ref2.children,
        props = _objectWithoutProperties(_ref2, _excluded);
      return _react["default"].createElement(ElementMapper, _extends({}, props, {
        enableOnly: enableOnly
      }), children);
    }];
  }, [ElementMapper, enableOnly]);
  var valueRef = _react["default"].useRef(value);
  var handledInitial = _react["default"].useRef(false);
  var valueIsSameOrInitialised = handledInitial.current && ((_valueRef$current = valueRef.current) === null || _valueRef$current === void 0 ? void 0 : _valueRef$current.equals(value));
  _react["default"].useEffect(function () {
    if (!valueIsSameOrInitialised) {
      var handledInitialTemp = handledInitial.current;
      handledInitial.current = true;
      onChange({
        storeKeys: storeKeys,
        scopes: ['internal', 'value'],
        type: 'update',
        updater: function updater(_ref3) {
          var _ref3$internal = _ref3.internal,
            currentInternal = _ref3$internal === void 0 ? (0, _immutable.Map)() : _ref3$internal,
            storeValue = _ref3.value;
          if (storeValue && storeValue.size) {
            valueRef.current = storeValue;
          } else {
            valueRef.current = !handledInitialTemp && schema.get('default') ? schema.get('default') : (0, _immutable.List)();
          }
          if (valueRef.current.size) {
            currentInternal = currentInternal.set('value', valueRef.current.toJS());
          } else {
            var initial = [].concat(initialValue);
            initial[0] = _objectSpread({}, initial[0]);
            if (schema.getIn(['editor', 'initialRoot'])) {
              initial[0].type = schema.getIn(['editor', 'initialRoot']);
            } else if (onlyInline) {
              initial[0].type = 'span';
            }
            currentInternal = currentInternal.set('value', initial);
          }
          return {
            internal: currentInternal,
            value: valueRef.current
          };
        },
        schema: schema,
        required: required
      });
    }
  }, [valueIsSameOrInitialised, handledInitial, valueRef, schema, required, onChange, onlyInline, storeKeys]);
  var withPluginFn = withPluginsProp || _slatePlugins2.withPlugins;
  var editor = _react["default"].useMemo(function () {
    return _slatePlugins.pipe.apply(void 0, [(0, _slate.createEditor)(), _slateReact.withReact, _slateHistory.withHistory].concat(_toConsumableArray(withPluginFn({
      enableOnly: enableOnly,
      onlyInline: onlyInline
    }))));
  }, [withPluginFn, enableOnly, onlyInline]);
  var onChangeHandler = _react["default"].useCallback(function (editorValue) {
    onChange({
      storeKeys: storeKeys,
      scopes: ['value', 'internal'],
      type: 'update',
      updater: function updater(_ref4) {
        var _ref4$internal = _ref4.internal,
          currentInternal = _ref4$internal === void 0 ? (0, _immutable.Map)() : _ref4$internal;
        var newValue = (0, _immutable.fromJS)(editorValue);
        if ((0, _useSlate.isSlateEmpty)(newValue)) {
          newValue = (0, _immutable.List)();
        }
        valueRef.current = newValue;
        return {
          value: newValue,
          internal: currentInternal.set('value', editorValue)
        };
      },
      schema: schema,
      required: required
    });
  }, [valueRef, onChange, storeKeys, schema, required]);
  return internalValue.get('value') ? _react["default"].createElement(_slateReact.Slate, {
    editor: editor,
    value: internalValue.get('value') || initialValue,
    onChange: onChangeHandler
  }, !schema.getIn(['editor', 'hideToolbar']) ? _react["default"].createElement(_SlateToolbarHead.SlateToolbarHead, {
    enableOnly: enableOnly,
    onlyInline: onlyInline,
    onFocus: onFocus,
    onBlur: onBlur
  }) : null, !schema.getIn(['editor', 'hideBalloon']) ? _react["default"].createElement(_SlateToolbarBalloon.SlateToolbarBalloon, {
    enableOnly: enableOnly
  }) : null, _react["default"].createElement(_slatePlugins.EditablePlugins, {
    renderElement: renderElements,
    renderLeaf: renderLeaf,
    plugins: plugins,
    onFocus: onFocus,
    onBlur: onBlur,
    placeholder: schema.getIn(['editor', 'placeholder']),
    spellCheck: schema.getIn(['editor', 'spellCheck']),
    autoFocus: schema.getIn(['editor', 'autoFocus']),
    className: className
  })) : null;
};
exports.SlateRenderer = SlateRenderer;
exports.SlateRenderer = SlateRenderer = (0, _memo.memo)(SlateRenderer);