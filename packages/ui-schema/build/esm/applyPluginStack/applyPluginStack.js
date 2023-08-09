function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { PluginStack } from '@ui-schema/ui-schema/PluginStack';
import { getDisplayName, memo } from '@ui-schema/ui-schema/Utils/memo';
export function applyPluginStack(CustomWidget) {
  const CustomStack = p => React.createElement(PluginStack, _extends({}, p, {
    WidgetOverride: CustomWidget
  }));
  CustomStack.displayName = "ApplyPluginStack(".concat(getDisplayName(CustomWidget), ")");
  return memo(CustomStack);
}
export function injectPluginStack(Wrapper, CustomWidget) {
  const CustomStack = p => React.createElement(PluginStack, _extends({}, p, {
    StackWrapper: Wrapper,
    WidgetOverride: CustomWidget
  }));
  CustomStack.displayName = "InjectPluginStack(".concat(getDisplayName(Wrapper)).concat(CustomWidget ? "(".concat(getDisplayName(CustomWidget), ")") : '', ")");
  return memo(CustomStack);
}