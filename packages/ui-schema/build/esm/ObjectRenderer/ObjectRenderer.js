const _excluded = ["level", "schema", "storeKeys", "schemaKeys", "errors"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { memo } from '@ui-schema/ui-schema/Utils/memo';
import { PluginStack } from '@ui-schema/ui-schema/PluginStack';
const ObjectRendererBase = _ref => {
  let {
      level,
      schema,
      storeKeys,
      schemaKeys,
      errors
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    isVirtual,
    widgets
  } = props;
  const properties = schema.get('properties');
  if (!isVirtual && !widgets.GroupRenderer) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Widget GroupRenderer not existing');
    }
    return null;
  }
  const GroupRenderer = widgets.GroupRenderer;
  const propertyTree = (properties === null || properties === void 0 ? void 0 : properties.map((childSchema, childKey) => React.createElement(PluginStack, _extends({
    key: childKey
  }, props, {
    schema: childSchema,
    parentSchema: schema,
    storeKeys: storeKeys.push(childKey),
    schemaKeys: schemaKeys === null || schemaKeys === void 0 ? void 0 : schemaKeys.push('properties').push(childKey),
    level: level + 1
  }))).valueSeq()) || null;
  return isVirtual ? propertyTree : properties ? React.createElement(GroupRenderer, {
    storeKeys: storeKeys,
    schemaKeys: schemaKeys,
    level: level,
    noGrid: props.noGrid,
    schema: schema
  }, propertyTree) : null;
};
export const ObjectRenderer = memo(ObjectRendererBase);