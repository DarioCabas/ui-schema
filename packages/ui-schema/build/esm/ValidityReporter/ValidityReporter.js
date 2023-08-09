function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { getNextPlugin } from '@ui-schema/ui-schema/PluginStack';
import { useImmutable } from '@ui-schema/ui-schema/Utils/useImmutable';
export const ValidityReporter = props => {
  const [customError, setCustomError] = React.useState(false);
  const {
    onChange,
    showValidity,
    storeKeys,
    valid,
    currentPluginIndex
  } = props;
  const storeKeysRef = useImmutable(storeKeys);
  const realValid = !customError && valid;
  React.useEffect(() => {
    onChange({
      type: 'set',
      storeKeys: storeKeysRef,
      scopes: ['valid'],
      data: {
        valid: realValid
      }
    });
  }, [realValid, onChange, storeKeysRef]);
  React.useEffect(() => {
    return () => onChange({
      type: 'set',
      storeKeys: storeKeysRef,
      scopes: ['valid'],
      data: {
        valid: undefined
      }
    });
  }, [onChange, storeKeysRef]);
  const next = currentPluginIndex + 1;
  const Plugin = getNextPlugin(next, props.widgets);
  return React.createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next,
    valid: valid,
    showValidity: showValidity,
    setCustomError: setCustomError
  }));
};