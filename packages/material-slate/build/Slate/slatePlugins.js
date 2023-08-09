"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPlugins = exports.slatePlugins = exports.optionsResetBlockTypes = void 0;
var _slatePlugins = require("@udecode/slate-plugins");
var _pluginOptions = require("@ui-schema/material-slate/Slate/pluginOptions");
var _withShortcuts = require("@ui-schema/material-slate/Slate/withShortcuts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var resetBlockTypesCommonRule = {
  types: ['blockquote', 'todo_li'],
  defaultType: 'p'
};
var optionsResetBlockTypes = {
  rules: [_objectSpread(_objectSpread({}, resetBlockTypesCommonRule), {}, {
    hotkey: 'Enter',
    predicate: _slatePlugins.isBlockAboveEmpty
  }), _objectSpread(_objectSpread({}, resetBlockTypesCommonRule), {}, {
    hotkey: 'Backspace',
    predicate: _slatePlugins.isSelectionAtBlockStart
  })]
};
exports.optionsResetBlockTypes = optionsResetBlockTypes;
var slatePlugins = [(0, _slatePlugins.ResetBlockTypePlugin)(optionsResetBlockTypes), (0, _slatePlugins.ParagraphPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.HeadingPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.BoldPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.ItalicPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.UnderlinePlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.ListPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.TodoListPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.AlignPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.BlockquotePlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.CodeBlockPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.CodePlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.StrikethroughPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.SubscriptPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.SuperscriptPlugin)(_pluginOptions.pluginOptions), (0, _slatePlugins.ExitBreakPlugin)({
  rules: [{
    hotkey: 'mod+enter'
  }, {
    hotkey: 'mod+shift+enter',
    before: true
  }, {
    hotkey: 'enter',
    query: {
      start: true,
      end: true,
      allow: _pluginOptions.headingTypes
    }
  }]
})];
exports.slatePlugins = slatePlugins;
var withPlugins = function withPlugins(options) {
  return [(0, _slatePlugins.withList)(_pluginOptions.pluginOptions), (0, _slatePlugins.withCodeBlock)(_pluginOptions.pluginOptions), (0, _withShortcuts.withShortcuts)(options)];
};
exports.withPlugins = withPlugins;