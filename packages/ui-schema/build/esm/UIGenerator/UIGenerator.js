const _excluded = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { UIStoreProvider } from '@ui-schema/ui-schema/UIStore';
import { UIMetaProvider } from '@ui-schema/ui-schema/UIMeta';
import { UIRootRenderer } from '@ui-schema/ui-schema/UIRootRenderer';
export const UIGenerator = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(UIProvider, props, React.createElement(UIRootRenderer, {
    schema: props.schema
  }), children);
};
export const UIProvider = ({
  children,
  store,
  onChange,
  widgets,
  t,
  showValidity
}) => {
  return React.createElement(UIMetaProvider, {
    widgets: widgets,
    t: t
  }, React.createElement(UIStoreProvider, {
    store: store,
    onChange: onChange,
    showValidity: showValidity
  }, children));
};