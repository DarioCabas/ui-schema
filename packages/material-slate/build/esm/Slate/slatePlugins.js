function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ParagraphPlugin, HeadingPlugin, BoldPlugin, ItalicPlugin, UnderlinePlugin, ListPlugin, AlignPlugin, BlockquotePlugin, CodeBlockPlugin, CodePlugin, StrikethroughPlugin, SubscriptPlugin, SuperscriptPlugin, ResetBlockTypePlugin, TodoListPlugin, ExitBreakPlugin, withList, withCodeBlock, isBlockAboveEmpty, isSelectionAtBlockStart } from '@udecode/slate-plugins';
import { headingTypes, pluginOptions } from '@ui-schema/material-slate/Slate/pluginOptions';
import { withShortcuts } from '@ui-schema/material-slate/Slate/withShortcuts';
const resetBlockTypesCommonRule = {
  types: ['blockquote', 'todo_li'],
  defaultType: 'p'
};
export const optionsResetBlockTypes = {
  rules: [_objectSpread(_objectSpread({}, resetBlockTypesCommonRule), {}, {
    hotkey: 'Enter',
    predicate: isBlockAboveEmpty
  }), _objectSpread(_objectSpread({}, resetBlockTypesCommonRule), {}, {
    hotkey: 'Backspace',
    predicate: isSelectionAtBlockStart
  })]
};
export const slatePlugins = [ResetBlockTypePlugin(optionsResetBlockTypes), ParagraphPlugin(pluginOptions), HeadingPlugin(pluginOptions), BoldPlugin(pluginOptions), ItalicPlugin(pluginOptions), UnderlinePlugin(pluginOptions), ListPlugin(pluginOptions), TodoListPlugin(pluginOptions), AlignPlugin(pluginOptions), BlockquotePlugin(pluginOptions), CodeBlockPlugin(pluginOptions), CodePlugin(pluginOptions), StrikethroughPlugin(pluginOptions), SubscriptPlugin(pluginOptions), SuperscriptPlugin(pluginOptions), ExitBreakPlugin({
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
      allow: headingTypes
    }
  }]
})];
export const withPlugins = options => [withList(pluginOptions), withCodeBlock(pluginOptions), withShortcuts(options)];