function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { DEFAULTS_ALIGN, DEFAULTS_BLOCKQUOTE, DEFAULTS_BOLD, DEFAULTS_CODE, DEFAULTS_CODE_BLOCK, DEFAULTS_HEADING, DEFAULTS_HIGHLIGHT, DEFAULTS_IMAGE, DEFAULTS_ITALIC, DEFAULTS_KBD, DEFAULTS_LINK, DEFAULTS_LIST, DEFAULTS_MEDIA_EMBED, DEFAULTS_MENTION, DEFAULTS_PARAGRAPH, DEFAULTS_SEARCH_HIGHLIGHT, DEFAULTS_STRIKETHROUGH, DEFAULTS_SUBSUPSCRIPT, DEFAULTS_TABLE, DEFAULTS_TODO_LIST, DEFAULTS_UNDERLINE, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, setDefaults } from '@udecode/slate-plugins';
export const headingOptions = _objectSpread(_objectSpread({}, DEFAULTS_HEADING), {}, {
  h1: _objectSpread(_objectSpread({}, DEFAULTS_HEADING.h1), {}, {
    hotkey: ['mod+opt+1', 'mod+shift+1']
  }),
  h2: _objectSpread(_objectSpread({}, DEFAULTS_HEADING.h2), {}, {
    hotkey: ['mod+opt+2', 'mod+shift+2']
  }),
  h3: _objectSpread(_objectSpread({}, DEFAULTS_HEADING.h3), {}, {
    hotkey: ['mod+opt+3', 'mod+shift+3']
  }),
  h4: _objectSpread(_objectSpread({}, DEFAULTS_HEADING.h4), {}, {
    hotkey: ['mod+opt+4', 'mod+shift+4']
  }),
  h5: _objectSpread(_objectSpread({}, DEFAULTS_HEADING.h5), {}, {
    hotkey: ['mod+opt+5', 'mod+shift+5']
  }),
  h6: _objectSpread(_objectSpread({}, DEFAULTS_HEADING.h6), {}, {
    hotkey: ['mod+opt+6', 'mod+shift+6']
  })
});
export const headingTypes = [ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6];
export const pluginOptions = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, setDefaults(DEFAULTS_PARAGRAPH, {})), setDefaults(DEFAULTS_MENTION, {})), setDefaults(DEFAULTS_BLOCKQUOTE, {})), setDefaults(DEFAULTS_CODE_BLOCK, {})), setDefaults(DEFAULTS_LINK, {})), setDefaults(DEFAULTS_IMAGE, {})), setDefaults(DEFAULTS_MEDIA_EMBED, {})), setDefaults({
  'todo_li': {
    hotkey: 'mod+shift+i'
  }
}, DEFAULTS_TODO_LIST)), setDefaults(DEFAULTS_TABLE, {})), setDefaults(DEFAULTS_LIST, {})), setDefaults(headingOptions, {})), setDefaults(DEFAULTS_ALIGN, {})), setDefaults(DEFAULTS_BOLD, {})), setDefaults(DEFAULTS_ITALIC, {})), setDefaults(DEFAULTS_UNDERLINE, {})), setDefaults(DEFAULTS_STRIKETHROUGH, {})), setDefaults(DEFAULTS_CODE, {})), setDefaults(DEFAULTS_KBD, {})), setDefaults(DEFAULTS_SUBSUPSCRIPT, {})), setDefaults(DEFAULTS_HIGHLIGHT, {})), setDefaults(DEFAULTS_SEARCH_HIGHLIGHT, {}));