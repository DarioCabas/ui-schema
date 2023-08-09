import React from 'react';
import { WidgetOverrideType, WidgetType } from '@ui-schema/ui-schema/Widget';
import { WidgetsBindingFactory, WidgetsBindingLooseComponents } from '@ui-schema/ui-schema/WidgetsBinding';
import { SchemaTypesType } from '@ui-schema/ui-schema';
export interface NoWidgetProps {
    scope: string;
    matching?: string;
}
export declare function widgetMatcher<W extends WidgetsBindingFactory<{}, WidgetsBindingLooseComponents, WidgetsBindingLooseComponents>>({ isVirtual, WidgetOverride, widgetName, schemaType, widgets, NoWidget: NoWidgetCustom, }: {
    isVirtual: boolean;
    WidgetOverride?: WidgetOverrideType<{}, {}, W>;
    widgetName: string | undefined;
    schemaType: SchemaTypesType;
    widgets: W;
    NoWidget?: React.ComponentType<NoWidgetProps>;
}): WidgetType<{}, W> | null;
