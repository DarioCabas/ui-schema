import React from 'react';
import { StoreKeys, WidgetProps, WithOnChange } from '@ui-schema/ui-schema';
import { ListButtonOverwrites } from '@ui-schema/ds-material/Component/ListButton';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
import { GenericListFooterProps, GenericListItemProps, GenericListItemSharedProps } from '@ui-schema/ds-material/BaseComponents';
import { GridSpacing } from '@mui/material/Grid/Grid';
export interface GenericListContentProps extends ListButtonOverwrites {
    btnAddShowLabel?: boolean;
    btnAddStyle?: React.CSSProperties;
    ComponentItemPos?: React.ComponentType<GenericListItemSharedProps>;
    ComponentItemMore?: React.ComponentType<GenericListItemSharedProps>;
    ComponentItem: React.ComponentType<GenericListItemProps>;
    ComponentFooter?: React.ComponentType<GenericListFooterProps>;
    listSize: number;
    schemaKeys?: StoreKeys;
    listSpacing?: GridSpacing;
}
export declare const GenericListContent: <P extends WidgetProps<MuiWidgetBinding<{}>>>({ storeKeys, schemaKeys, schema, listSize, onChange, showValidity, valid, errors, required, level, widgets, ComponentItemMore, ComponentItemPos, ComponentItem, ComponentFooter, btnAddShowLabel, btnAddStyle, btnSize: btnSizeProp, btnVariant: btnVariantProp, btnColor: btnColorProp, listSpacing, }: P & WithOnChange<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & GenericListContentProps) => React.ReactElement;
