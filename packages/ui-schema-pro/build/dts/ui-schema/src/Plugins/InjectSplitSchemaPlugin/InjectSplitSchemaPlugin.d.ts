import React from 'react';
import { PluginProps } from '@ui-schema/ui-schema/PluginStack';
import { StoreSchemaType } from '@ui-schema/ui-schema';
export interface InjectSplitSchemaRootContext {
    schemaStyle?: StoreSchemaType;
}
export declare const InjectSplitSchemaPlugin: React.ComponentType<PluginProps>;
