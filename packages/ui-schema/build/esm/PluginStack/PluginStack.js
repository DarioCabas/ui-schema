const _excluded = ["StackWrapper", "wrapperProps"],
  _excluded2 = ["widgets"],
  _excluded3 = ["currentPluginIndex"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { List } from 'immutable';
import { memo } from '@ui-schema/ui-schema/Utils/memo';
import { useUIMeta } from '@ui-schema/ui-schema/UIMeta';
import { createValidatorErrors } from '@ui-schema/ui-schema/ValidatorErrors';
import { useUIConfig } from '@ui-schema/ui-schema/UIStore';
import { useImmutable } from '@ui-schema/ui-schema/Utils/useImmutable';
import { PluginStackErrorBoundary } from '@ui-schema/ui-schema/PluginStack';
const errorContainer = createValidatorErrors();
export const PluginStack = _ref => {
  let {
      StackWrapper,
      wrapperProps
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const _useUIMeta = useUIMeta(),
    {
      widgets
    } = _useUIMeta,
    meta = _objectWithoutProperties(_useUIMeta, _excluded2);
  const config = useUIConfig();
  const {
    level = 0,
    parentSchema,
    storeKeys = List([]),
    schemaKeys = List([]),
    schema,
    widgets: customWidgets
  } = props;
  const currentStoreKeys = useImmutable(storeKeys);
  const currentSchemaKeys = useImmutable(schemaKeys);
  const activeWidgets = customWidgets || widgets;
  const isVirtual = Boolean(props.isVirtual || (schema === null || schema === void 0 ? void 0 : schema.get('hidden')));
  let required = List([]);
  if (parentSchema) {
    let tmp_required = parentSchema.get('required');
    if (tmp_required) {
      required = tmp_required;
    }
  }
  const stack = React.createElement(NextPluginRenderer, _extends({}, meta, config, props, {
    currentPluginIndex: -1,
    widgets: activeWidgets,
    level: level,
    storeKeys: currentStoreKeys,
    schemaKeys: currentSchemaKeys,
    ownKey: storeKeys.last(),
    requiredList: required,
    required: false,
    errors: errorContainer,
    isVirtual: isVirtual,
    valid: true
  }));
  const wrappedStack = StackWrapper && !isVirtual ? React.createElement(StackWrapper, _extends({
    schema: schema,
    storeKeys: currentStoreKeys,
    schemaKeys: currentSchemaKeys
  }, wrapperProps || {}), stack) : stack;
  return props.schema ? activeWidgets !== null && activeWidgets !== void 0 && activeWidgets.ErrorFallback ? React.createElement(PluginStackErrorBoundary, {
    FallbackComponent: activeWidgets.ErrorFallback,
    type: schema.get('type'),
    widget: schema.get('widget'),
    storeKeys: currentStoreKeys
  }, wrappedStack) : wrappedStack : null;
};
export const getNextPlugin = (next, {
  pluginStack: ps,
  WidgetRenderer
}) => next < ps.length ? ps[next] || (() => 'plugin-error') : WidgetRenderer;
export const NextPluginRenderer = _ref2 => {
  let {
      currentPluginIndex
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded3);
  const next = currentPluginIndex + 1;
  const Plugin = getNextPlugin(next, props.widgets);
  return React.createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next
  }));
};
export const NextPluginRendererMemo = memo(NextPluginRenderer);