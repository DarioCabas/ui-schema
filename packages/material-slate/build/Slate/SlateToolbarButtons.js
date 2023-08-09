"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarMark = exports.ToolbarList = exports.ToolbarElement = exports.ToolbarCodeBlock = exports.ToolbarButton = exports.ToolbarAlign = void 0;
var React = _interopRequireWildcard(require("react"));
var _slateReact = require("slate-react");
var _ToggleButton = _interopRequireDefault(require("@mui/material/ToggleButton"));
var _slatePlugins = require("@udecode/slate-plugins");
var _excluded = ["type", "icon", "onBlur", "onFocus"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ToolbarButton = function ToolbarButton(_ref) {
  var selected = _ref.selected,
    type = _ref.type,
    icon = _ref.icon,
    onClick = _ref.onClick,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus;
  return React.createElement(_ToggleButton["default"], {
    selected: selected,
    onMouseDown: onClick,
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        onClick(e);
      }
    },
    "aria-label": type,
    value: type,
    size: 'small',
    style: {
      border: 0,
      padding: 3
    },
    onBlur: onBlur,
    onFocus: onFocus
  }, icon);
};
exports.ToolbarButton = ToolbarButton;
var ToolbarElement = function ToolbarElement(_ref2) {
  var type = _ref2.type,
    inactiveType = _ref2.inactiveType,
    icon = _ref2.icon,
    onBlur = _ref2.onBlur,
    onFocus = _ref2.onFocus;
  var editor = (0, _slateReact.useSlate)();
  return React.createElement(ToolbarButton, {
    selected: (0, _slatePlugins.someNode)(editor, {
      match: {
        type: type
      }
    }),
    onClick: (0, _slatePlugins.getPreventDefaultHandler)(_slatePlugins.toggleNodeType, editor, {
      activeType: type,
      inactiveType: inactiveType
    }),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
exports.ToolbarElement = ToolbarElement;
var ToolbarList = function ToolbarList(_ref3) {
  var type = _ref3.type,
    icon = _ref3.icon,
    onBlur = _ref3.onBlur,
    onFocus = _ref3.onFocus,
    props = _objectWithoutProperties(_ref3, _excluded);
  var editor = (0, _slateReact.useSlate)();
  return React.createElement(ToolbarButton, {
    selected: (0, _slatePlugins.someNode)(editor, {
      match: {
        type: type
      }
    }),
    onClick: (0, _slatePlugins.getPreventDefaultHandler)(_slatePlugins.toggleList, editor, _objectSpread(_objectSpread({}, props), {}, {
      typeList: type
    })),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
exports.ToolbarList = ToolbarList;
var ToolbarCodeBlock = function ToolbarCodeBlock(_ref4) {
  var _ref4$options = _ref4.options,
    options = _ref4$options === void 0 ? {} : _ref4$options,
    icon = _ref4.icon,
    onBlur = _ref4.onBlur,
    onFocus = _ref4.onFocus;
  var _setDefaults = (0, _slatePlugins.setDefaults)(options, _slatePlugins.DEFAULTS_CODE_BLOCK),
    code_block = _setDefaults.code_block;
  var editor = (0, _slateReact.useSlate)();
  var type = code_block.type;
  return React.createElement(ToolbarButton, {
    selected: (0, _slatePlugins.someNode)(editor, {
      match: {
        type: type
      }
    }),
    onClick: (0, _slatePlugins.getPreventDefaultHandler)(_slatePlugins.insertEmptyCodeBlock, editor, {
      select: true
    }, options),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
exports.ToolbarCodeBlock = ToolbarCodeBlock;
var ToolbarAlign = function ToolbarAlign(_ref5) {
  var type = _ref5.type,
    icon = _ref5.icon,
    _ref5$unwrapTypes = _ref5.unwrapTypes,
    unwrapTypes = _ref5$unwrapTypes === void 0 ? [_slatePlugins.ELEMENT_ALIGN_LEFT, _slatePlugins.ELEMENT_ALIGN_CENTER, _slatePlugins.ELEMENT_ALIGN_RIGHT, _slatePlugins.ELEMENT_ALIGN_JUSTIFY] : _ref5$unwrapTypes,
    onBlur = _ref5.onBlur,
    onFocus = _ref5.onFocus;
  var editor = (0, _slateReact.useSlate)();
  return React.createElement(ToolbarButton, {
    selected: !!type && (0, _slatePlugins.someNode)(editor, {
      match: {
        type: type
      }
    }),
    onClick: (0, _slatePlugins.getPreventDefaultHandler)(_slatePlugins.upsertAlign, editor, {
      type: type,
      unwrapTypes: unwrapTypes
    }),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
exports.ToolbarAlign = ToolbarAlign;
var ToolbarMark = function ToolbarMark(_ref6) {
  var type = _ref6.type,
    icon = _ref6.icon,
    clear = _ref6.clear;
  var editor = (0, _slateReact.useSlate)();
  return React.createElement(ToolbarButton, {
    selected: (0, _slatePlugins.isMarkActive)(editor, type),
    onClick: (0, _slatePlugins.getPreventDefaultHandler)(_slatePlugins.toggleMark, editor, type, clear),
    type: type,
    icon: icon
  });
};
exports.ToolbarMark = ToolbarMark;