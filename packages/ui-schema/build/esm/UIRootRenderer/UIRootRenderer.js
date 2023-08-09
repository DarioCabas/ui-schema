const _excluded = ["rootRenderer"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { List } from 'immutable';
import { PluginStack } from '@ui-schema/ui-schema/PluginStack';
import { memo } from '@ui-schema/ui-schema/Utils/memo';
import { useUIMeta } from '@ui-schema/ui-schema/UIMeta';
let DumpRootRenderer = _ref => {
  let {
      rootRenderer: RootRenderer
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return props.isVirtual ? React.createElement(PluginStack, props) : React.createElement(RootRenderer, null, React.createElement(PluginStack, props));
};
DumpRootRenderer = memo(DumpRootRenderer);
const mustBeSet = name => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    console.error(name + ' must be set');
  }
  return null;
};
export const UIRootRenderer = ({
  schema,
  rootContext
}) => {
  const {
    widgets
  } = useUIMeta();
  if (!schema) {
    return mustBeSet('schema');
  }
  if (!widgets) {
    return mustBeSet('widgets');
  }
  const {
    RootRenderer
  } = widgets;
  if (!RootRenderer) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      console.error('Widget RootRenderer not existing');
    }
    return null;
  }
  return React.createElement(DumpRootRenderer, {
    rootRenderer: RootRenderer,
    isVirtual: schema === null || schema === void 0 ? void 0 : schema.get('hidden'),
    schema: schema,
    storeKeys: List([]),
    schemaKeys: List([]),
    rootContext: rootContext
  });
};