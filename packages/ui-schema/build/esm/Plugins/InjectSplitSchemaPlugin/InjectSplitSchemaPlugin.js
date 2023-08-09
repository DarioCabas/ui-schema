function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { getNextPlugin } from '@ui-schema/ui-schema/PluginStack';
import { useSchemaRoot } from '@ui-schema/ui-schema/SchemaRootProvider';
import { escapePointer } from '@ui-schema/ui-schema/JSONPointer/escapePointer';
import { Map } from 'immutable';
export const InjectSplitSchemaPlugin = props => {
  const {
    schema,
    storeKeys,
    currentPluginIndex
  } = props;
  const {
    schemaStyle
  } = useSchemaRoot();
  const next = currentPluginIndex + 1;
  const Plugin = getNextPlugin(next, props.widgets);
  const pointer = storeKeys.size > 0 ? '/' + storeKeys.map(k => escapePointer(String(k))).join('/') : '';
  const schemaStyleLevel = schemaStyle === null || schemaStyle === void 0 ? void 0 : schemaStyle.get(pointer);
  let schemaStyleClean;
  if (schemaStyleLevel && Map.isMap(schemaStyleLevel)) {
    schemaStyleClean = schemaStyleLevel.delete('properties').delete('items').delete('if').delete('else').delete('then').delete('not').delete('allOf').delete('anyOf').delete('required');
  }
  return React.createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next,
    schema: schemaStyleClean ? schema.mergeDeep(schemaStyleClean) : schema
  }));
};