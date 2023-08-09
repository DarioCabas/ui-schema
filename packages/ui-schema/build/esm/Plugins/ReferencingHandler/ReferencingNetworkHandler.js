const _excluded = ["Plugin", "currentPluginIndex"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { getNextPlugin } from '@ui-schema/ui-schema/PluginStack';
import { Trans } from '@ui-schema/ui-schema/Translate/Trans';
import { useSchemaNetworkRef } from '@ui-schema/ui-schema/Plugins/ReferencingHandler';
const RefLoader = _ref => {
  var _schema;
  let {
      Plugin,
      currentPluginIndex
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  let {
    schema,
    schemaRef,
    isVirtual
  } = props;
  const {
    loadSchema,
    getSchema
  } = useSchemaNetworkRef();
  const schemaVersion = (_schema = schema) === null || _schema === void 0 ? void 0 : _schema.get('version');
  const loadedSchema = getSchema(schemaRef, undefined, schemaVersion);
  const loaded = Boolean(loadedSchema);
  if (loaded) {
    schema = loadedSchema;
  }
  React.useEffect(() => {
    if (!loaded) {
      loadSchema(schemaRef, undefined, [schemaVersion]);
    }
  }, [loadSchema, schemaRef, schemaVersion, loaded]);
  return !loaded ? isVirtual ? null : React.createElement(Trans, {
    text: 'labels.loading',
    fallback: 'Loading'
  }) : React.createElement(Plugin, _extends({}, props, {
    currentPluginIndex: currentPluginIndex,
    schema: schema
  }));
};
export const ReferencingNetworkHandler = props => {
  const {
    schema,
    currentPluginIndex
  } = props;
  const next = currentPluginIndex + 1;
  const Plugin = getNextPlugin(next, props.widgets);
  const ref = schema.get('$ref');
  return ref && ref.indexOf('#') !== 0 ? React.createElement(RefLoader, _extends({}, props, {
    Plugin: Plugin,
    currentPluginIndex: next,
    schemaRef: ref
  })) : React.createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next
  }));
};