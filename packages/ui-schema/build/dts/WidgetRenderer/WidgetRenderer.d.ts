import React from 'react';
import { NoWidgetProps } from '@ui-schema/ui-schema/widgetMatcher';
import { PluginProps } from '@ui-schema/ui-schema/PluginStack/Plugin';
import { PluginStackProps } from '@ui-schema/ui-schema/PluginStack';
import { WithValue } from '@ui-schema/ui-schema/UIStore';
export interface WidgetRendererProps extends Omit<PluginProps, 'currentPluginIndex'>, WithValue {
    WidgetOverride?: PluginStackProps['WidgetOverride'];
    NoWidget?: React.ComponentType<NoWidgetProps>;
    currentPluginIndex?: number;
}
export declare const WidgetRenderer: React.ComponentType<WidgetRendererProps>;
