const _excluded = ["rootContext"],
  _excluded2 = ["schema", "definitions"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Trans } from '@ui-schema/ui-schema/Translate';
import { isRootSchema, SchemaRootProvider, useSchemaRoot } from '@ui-schema/ui-schema/SchemaRootProvider';
import { useSchemaRef } from '@ui-schema/ui-schema/Plugins/ReferencingHandler';
import { NextPluginRendererMemo } from '@ui-schema/ui-schema/PluginStack';
import { getSchemaId } from '@ui-schema/ui-schema/Utils/getSchema';
export const ReferencingHandler = _ref => {
  let {
      rootContext
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    schema: baseSchema,
    isVirtual
  } = props;
  const _useSchemaRoot = useSchemaRoot(),
    {
      schema: maybeRootSchema,
      definitions: maybeDefinitions
    } = _useSchemaRoot,
    nestedRootProps = _objectWithoutProperties(_useSchemaRoot, _excluded2);
  const isRoot = Boolean(isRootSchema(baseSchema) || rootContext || baseSchema.get('definitions') || baseSchema.get('$defs'));
  const definitions = isRoot ? baseSchema.get('definitions') || baseSchema.get('$defs') : maybeDefinitions;
  const {
    schema,
    refsPending
  } = useSchemaRef(maybeRootSchema, definitions, isRoot, baseSchema);
  return refsPending && refsPending.size > 0 ? isVirtual ? null : React.createElement(Trans, {
    text: 'labels.loading',
    fallback: 'Loading'
  }) : isRoot ? React.createElement(SchemaRootProvider, _extends({}, nestedRootProps, rootContext || {}, {
    id: getSchemaId(schema),
    schema: schema,
    definitions: definitions
  }), React.createElement(NextPluginRendererMemo, _extends({}, props, {
    schema: schema
  }))) : React.createElement(NextPluginRendererMemo, _extends({}, props, {
    schema: schema
  }));
};