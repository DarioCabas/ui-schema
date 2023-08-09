import React from 'react';
import { GridSize } from '@mui/material/Grid';
import { StoreSchemaType } from '@ui-schema/ui-schema/CommonTypings';
import { PluginProps } from '@ui-schema/ui-schema/PluginStack';
import { GroupRendererProps } from '@ui-schema/ui-schema';
export declare const SchemaGridItem: React.ComponentType<React.PropsWithChildren<{
    schema: StoreSchemaType;
    defaultMd?: GridSize;
    style?: React.CSSProperties;
    className?: string;
    classes?: any;
}>>;
export declare const RootRenderer: React.ComponentType<React.PropsWithChildren<{}>>;
export declare const GroupRenderer: React.ComponentType<React.PropsWithChildren<GroupRendererProps>>;
export declare const SchemaGridHandler: React.ComponentType<PluginProps>;
