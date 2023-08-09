import { StoreKeys, StoreSchemaType, WidgetProps } from '@ui-schema/ui-schema';
import React from 'react';
export interface InfoRendererProps {
    variant: 'icon' | 'preview' | 'open';
    openAs: 'embed' | 'modal';
    dense?: boolean;
    align?: 'right' | 'left';
    schema: StoreSchemaType;
    storeKeys: StoreKeys;
    valid?: boolean;
    errors?: WidgetProps['errors'];
}
export declare const InfoRenderer: React.ComponentType<InfoRendererProps>;
