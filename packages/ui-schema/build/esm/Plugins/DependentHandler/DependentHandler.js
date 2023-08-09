const _excluded = ["dependencies", "dependentSchemas", "dependentRequired"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { getNextPlugin, NextPluginRendererMemo } from '@ui-schema/ui-schema/PluginStack';
import { useUIStore } from '@ui-schema/ui-schema/UIStore';
import { mergeSchema } from '@ui-schema/ui-schema/Utils/mergeSchema';
import { List, Map } from 'immutable';
const DependentRenderer = _ref => {
  var _store$getValues;
  let {
      dependencies,
      dependentSchemas,
      dependentRequired
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  let {
    schema,
    storeKeys
  } = props;
  const {
    store
  } = useUIStore();
  const currentValues = storeKeys.size ? store === null || store === void 0 ? void 0 : (_store$getValues = store.getValues()) === null || _store$getValues === void 0 ? void 0 : _store$getValues.getIn(storeKeys) : store === null || store === void 0 ? void 0 : store.getValues();
  const parsedSchema = React.useMemo(() => {
    let parsedSchema = schema;
    if (!currentValues) return parsedSchema;
    currentValues.keySeq().forEach(key => {
      const key_dependencies = dependencies ? dependencies.get(key) : undefined;
      const key_dependentSchemas = dependentSchemas ? dependentSchemas.get(key) : undefined;
      const key_dependentRequired = dependentRequired ? dependentRequired.get(key) : undefined;
      if (typeof currentValues.get(key) !== 'undefined') {
        if (Map.isMap(key_dependencies) || Map.isMap(key_dependentSchemas)) {
          if (Map.isMap(key_dependencies)) {
            parsedSchema = mergeSchema(parsedSchema, key_dependencies);
          } else {
            parsedSchema = mergeSchema(parsedSchema, key_dependentSchemas);
          }
        }
        if (List.isList(key_dependencies) || List.isList(key_dependentRequired)) {
          const currentRequired = parsedSchema.get('required') || List();
          if (List.isList(key_dependencies)) {
            parsedSchema = parsedSchema.set('required', currentRequired.concat(key_dependencies));
          } else {
            parsedSchema = parsedSchema.set('required', currentRequired.concat(key_dependentRequired));
          }
        }
      }
    });
    return parsedSchema;
  }, [currentValues, schema, dependencies, dependentSchemas, dependentRequired]);
  return React.createElement(NextPluginRendererMemo, _extends({}, props, {
    schema: parsedSchema
  }));
};
export const DependentHandler = props => {
  let {
    storeKeys,
    schema,
    currentPluginIndex
  } = props;
  const next = currentPluginIndex + 1;
  const Plugin = getNextPlugin(next, props.widgets);
  const dependencies = schema.get('dependencies');
  const dependentSchemas = schema.get('dependentSchemas');
  const dependentRequired = schema.get('dependentRequired');
  return dependencies || dependentSchemas || dependentRequired ? React.createElement(DependentRenderer, _extends({
    dependencies: dependencies,
    dependentSchemas: dependentSchemas,
    dependentRequired: dependentRequired,
    storeKeys: storeKeys
  }, props)) : React.createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next
  }));
};