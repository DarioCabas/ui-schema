const _excluded = ["value", "internalValue", "WidgetOverride", "NoWidget", "errors", "onErrors", "requiredList", "currentPluginIndex"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { useImmutable } from '@ui-schema/ui-schema/Utils';
import { widgetMatcher } from '@ui-schema/ui-schema/widgetMatcher';
import { List } from 'immutable';
export const WidgetRenderer = _ref => {
  let {
      value,
      internalValue,
      WidgetOverride,
      NoWidget,
      errors,
      onErrors,
      requiredList,
      currentPluginIndex
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    schema,
    widgets,
    isVirtual
  } = props;
  const currentErrors = useImmutable(errors);
  React.useEffect(() => onErrors && onErrors(currentErrors), [onErrors, currentErrors]);
  const schemaType = schema.get('type');
  const widgetName = schema.get('widget');
  const Widget = widgetMatcher({
    isVirtual: Boolean(isVirtual),
    WidgetOverride: WidgetOverride,
    NoWidget: NoWidget,
    widgetName: widgetName,
    schemaType: schemaType,
    widgets: widgets
  });
  const noExtractValue = !isVirtual && (schemaType === 'array' || schemaType === 'object' || List.isList(schemaType) && (schemaType.indexOf('array') !== -1 || schemaType.indexOf('object') !== -1));
  return Widget ? React.createElement(Widget, _extends({}, props, {
    value: noExtractValue ? undefined : value,
    internalValue: noExtractValue ? undefined : internalValue,
    errors: currentErrors
  })) : null;
};