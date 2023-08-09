function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Map } from 'immutable';
import { getNextPlugin } from '@ui-schema/ui-schema/PluginStack/PluginStack';
const DefaultHandler = props => {
  const {
    schema,
    currentPluginIndex,
    doNotDefault,
    readOnly
  } = props;
  const next = currentPluginIndex + 1;
  const Plugin = getNextPlugin(next, props.widgets);
  let defaultVal = schema.get('default');
  const {
    onChange,
    storeKeys
  } = props;
  let {
    value,
    internalValue
  } = props;
  const valRef = React.useRef(value);
  valRef.current = value;
  const defaultHandled = Boolean((internalValue === null || internalValue === void 0 ? void 0 : internalValue.get('defaultHandled')) || doNotDefault || readOnly || (schema === null || schema === void 0 ? void 0 : schema.get('readOnly')));
  React.useEffect(() => {
    if (defaultHandled) return;
    if (typeof defaultVal === 'undefined') return;
    if (typeof valRef.current === 'undefined') {
      onChange({
        type: 'update',
        storeKeys: storeKeys,
        scopes: ['value', 'internal'],
        updater: ({
          internal = Map()
        }) => ({
          value: defaultVal,
          internal: internal.set('defaultHandled', true)
        })
      });
    } else {
      onChange({
        type: 'update',
        storeKeys: storeKeys,
        scopes: ['internal'],
        updater: ({
          internal = Map()
        }) => ({
          internal: internal.set('defaultHandled', true)
        })
      });
    }
  }, [onChange, storeKeys, defaultHandled, defaultVal, valRef]);
  let nextValue = value;
  if (typeof value === 'undefined' && !defaultHandled) {
    nextValue = defaultVal;
  }
  return React.createElement(Plugin, _extends({}, props, {
    value: nextValue,
    currentPluginIndex: currentPluginIndex
  }));
};
export { DefaultHandler };