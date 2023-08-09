const _excluded = ["type", "icon", "onBlur", "onFocus"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import { useSlate } from 'slate-react';
import ToggleButton from '@mui/material/ToggleButton';
import { getPreventDefaultHandler, someNode, toggleNodeType, isMarkActive, toggleMark, toggleList, setDefaults, DEFAULTS_CODE_BLOCK, insertEmptyCodeBlock, ELEMENT_ALIGN_LEFT, ELEMENT_ALIGN_CENTER, ELEMENT_ALIGN_RIGHT, ELEMENT_ALIGN_JUSTIFY, upsertAlign } from '@udecode/slate-plugins';
export const ToolbarButton = ({
  selected,
  type,
  icon,
  onClick,
  onBlur,
  onFocus
}) => {
  return React.createElement(ToggleButton, {
    selected: selected,
    onMouseDown: onClick,
    onKeyDown: e => {
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
export const ToolbarElement = ({
  type,
  inactiveType,
  icon,
  onBlur,
  onFocus
}) => {
  const editor = useSlate();
  return React.createElement(ToolbarButton, {
    selected: someNode(editor, {
      match: {
        type
      }
    }),
    onClick: getPreventDefaultHandler(toggleNodeType, editor, {
      activeType: type,
      inactiveType
    }),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
export const ToolbarList = _ref => {
  let {
      type,
      icon,
      onBlur,
      onFocus
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const editor = useSlate();
  return React.createElement(ToolbarButton, {
    selected: someNode(editor, {
      match: {
        type
      }
    }),
    onClick: getPreventDefaultHandler(toggleList, editor, _objectSpread(_objectSpread({}, props), {}, {
      typeList: type
    })),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
export const ToolbarCodeBlock = ({
  options = {},
  icon,
  onBlur,
  onFocus
}) => {
  const {
    code_block
  } = setDefaults(options, DEFAULTS_CODE_BLOCK);
  const editor = useSlate();
  const type = code_block.type;
  return React.createElement(ToolbarButton, {
    selected: someNode(editor, {
      match: {
        type
      }
    }),
    onClick: getPreventDefaultHandler(insertEmptyCodeBlock, editor, {
      select: true
    }, options),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
export const ToolbarAlign = ({
  type,
  icon,
  unwrapTypes = [ELEMENT_ALIGN_LEFT, ELEMENT_ALIGN_CENTER, ELEMENT_ALIGN_RIGHT, ELEMENT_ALIGN_JUSTIFY],
  onBlur,
  onFocus
}) => {
  const editor = useSlate();
  return React.createElement(ToolbarButton, {
    selected: !!type && someNode(editor, {
      match: {
        type
      }
    }),
    onClick: getPreventDefaultHandler(upsertAlign, editor, {
      type,
      unwrapTypes
    }),
    type: type,
    icon: icon,
    onFocus: onFocus,
    onBlur: onBlur
  });
};
export const ToolbarMark = ({
  type,
  icon,
  clear
}) => {
  const editor = useSlate();
  return React.createElement(ToolbarButton, {
    selected: isMarkActive(editor, type),
    onClick: getPreventDefaultHandler(toggleMark, editor, type, clear),
    type: type,
    icon: icon
  });
};