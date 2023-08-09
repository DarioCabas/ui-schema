const _excluded = ["children"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { fromJS, List, Map } from 'immutable';
import { Slate, withReact } from 'slate-react';
import { EditablePlugins as Editable, pipe } from '@udecode/slate-plugins';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { memo } from '@ui-schema/ui-schema/Utils/memo';
import { withPlugins } from '@ui-schema/material-slate/Slate/slatePlugins';
import { SlateToolbarBalloon } from '@ui-schema/material-slate/Slate/SlateToolbarBalloon';
import { SlateToolbarHead } from '@ui-schema/material-slate/Slate/SlateToolbarHead';
import { pluginOptions } from '@ui-schema/material-slate/Slate/pluginOptions';
import { isSlateEmpty } from '@ui-schema/material-slate/Slate/useSlate';
const initialValue = [{
  type: pluginOptions.p.type,
  children: [{
    text: ''
  }]
}];
let SlateRenderer = ({
  value,
  internalValue,
  onChange,
  storeKeys,
  required,
  schema,
  onFocus,
  onBlur,
  ElementMapper,
  className,
  onlyInline = false,
  plugins,
  renderLeaf,
  withPlugins: withPluginsProp
}) => {
  var _valueRef$current;
  const enableOnly = schema.getIn(['editor', 'enableOnly']);
  const renderElements = React.useMemo(() => {
    return [_ref => {
      let {
          children
        } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);
      return React.createElement(ElementMapper, _extends({}, props, {
        enableOnly: enableOnly
      }), children);
    }];
  }, [ElementMapper, enableOnly]);
  const valueRef = React.useRef(value);
  const handledInitial = React.useRef(false);
  const valueIsSameOrInitialised = handledInitial.current && ((_valueRef$current = valueRef.current) === null || _valueRef$current === void 0 ? void 0 : _valueRef$current.equals(value));
  React.useEffect(() => {
    if (!valueIsSameOrInitialised) {
      const handledInitialTemp = handledInitial.current;
      handledInitial.current = true;
      onChange({
        storeKeys,
        scopes: ['internal', 'value'],
        type: 'update',
        updater: ({
          internal: currentInternal = Map(),
          value: storeValue
        }) => {
          if (storeValue && storeValue.size) {
            valueRef.current = storeValue;
          } else {
            valueRef.current = !handledInitialTemp && schema.get('default') ? schema.get('default') : List();
          }
          if (valueRef.current.size) {
            currentInternal = currentInternal.set('value', valueRef.current.toJS());
          } else {
            const initial = [...initialValue];
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
        schema,
        required
      });
    }
  }, [valueIsSameOrInitialised, handledInitial, valueRef, schema, required, onChange, onlyInline, storeKeys]);
  const withPluginFn = withPluginsProp || withPlugins;
  const editor = React.useMemo(() => pipe(createEditor(), withReact, withHistory, ...withPluginFn({
    enableOnly,
    onlyInline
  })), [withPluginFn, enableOnly, onlyInline]);
  const onChangeHandler = React.useCallback(editorValue => {
    onChange({
      storeKeys,
      scopes: ['value', 'internal'],
      type: 'update',
      updater: ({
        internal: currentInternal = Map()
      }) => {
        let newValue = fromJS(editorValue);
        if (isSlateEmpty(newValue)) {
          newValue = List();
        }
        valueRef.current = newValue;
        return {
          value: newValue,
          internal: currentInternal.set('value', editorValue)
        };
      },
      schema,
      required
    });
  }, [valueRef, onChange, storeKeys, schema, required]);
  return internalValue.get('value') ? React.createElement(Slate, {
    editor: editor,
    value: internalValue.get('value') || initialValue,
    onChange: onChangeHandler
  }, !schema.getIn(['editor', 'hideToolbar']) ? React.createElement(SlateToolbarHead, {
    enableOnly: enableOnly,
    onlyInline: onlyInline,
    onFocus: onFocus,
    onBlur: onBlur
  }) : null, !schema.getIn(['editor', 'hideBalloon']) ? React.createElement(SlateToolbarBalloon, {
    enableOnly: enableOnly
  }) : null, React.createElement(Editable, {
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
SlateRenderer = memo(SlateRenderer);
export { SlateRenderer };