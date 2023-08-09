"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluginOptions = exports.headingTypes = exports.headingOptions = void 0;
var _slatePlugins = require("@udecode/slate-plugins");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var headingOptions = _objectSpread(_objectSpread({}, _slatePlugins.DEFAULTS_HEADING), {}, {
  h1: _objectSpread(_objectSpread({}, _slatePlugins.DEFAULTS_HEADING.h1), {}, {
    hotkey: ['mod+opt+1', 'mod+shift+1']
  }),
  h2: _objectSpread(_objectSpread({}, _slatePlugins.DEFAULTS_HEADING.h2), {}, {
    hotkey: ['mod+opt+2', 'mod+shift+2']
  }),
  h3: _objectSpread(_objectSpread({}, _slatePlugins.DEFAULTS_HEADING.h3), {}, {
    hotkey: ['mod+opt+3', 'mod+shift+3']
  }),
  h4: _objectSpread(_objectSpread({}, _slatePlugins.DEFAULTS_HEADING.h4), {}, {
    hotkey: ['mod+opt+4', 'mod+shift+4']
  }),
  h5: _objectSpread(_objectSpread({}, _slatePlugins.DEFAULTS_HEADING.h5), {}, {
    hotkey: ['mod+opt+5', 'mod+shift+5']
  }),
  h6: _objectSpread(_objectSpread({}, _slatePlugins.DEFAULTS_HEADING.h6), {}, {
    hotkey: ['mod+opt+6', 'mod+shift+6']
  })
});
exports.headingOptions = headingOptions;
var headingTypes = [_slatePlugins.ELEMENT_H1, _slatePlugins.ELEMENT_H2, _slatePlugins.ELEMENT_H3, _slatePlugins.ELEMENT_H4, _slatePlugins.ELEMENT_H5, _slatePlugins.ELEMENT_H6];
exports.headingTypes = headingTypes;
var pluginOptions = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_PARAGRAPH, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_MENTION, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_BLOCKQUOTE, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_CODE_BLOCK, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_LINK, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_IMAGE, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_MEDIA_EMBED, {})), (0, _slatePlugins.setDefaults)({
  'todo_li': {
    hotkey: 'mod+shift+i'
  }
}, _slatePlugins.DEFAULTS_TODO_LIST)), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_TABLE, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_LIST, {})), (0, _slatePlugins.setDefaults)(headingOptions, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_ALIGN, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_BOLD, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_ITALIC, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_UNDERLINE, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_STRIKETHROUGH, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_CODE, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_KBD, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_SUBSUPSCRIPT, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_HIGHLIGHT, {})), (0, _slatePlugins.setDefaults)(_slatePlugins.DEFAULTS_SEARCH_HIGHLIGHT, {}));
exports.pluginOptions = pluginOptions;