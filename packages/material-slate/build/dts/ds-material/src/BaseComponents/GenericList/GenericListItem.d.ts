import React from 'react';
import { StoreSchemaType, onChangeHandler, StoreKeys } from '@ui-schema/ui-schema';
import { ListButtonOverwrites } from '@ui-schema/ds-material/Component/ListButton';
import { GridSpacing } from '@mui/material/Grid/Grid';
export interface GenericListItemSharedProps {
    index: number;
    listSize: number;
    listRequired: boolean;
    schema: StoreSchemaType;
    onChange: onChangeHandler;
    storeKeys: StoreKeys;
    schemaKeys: StoreKeys | undefined;
    level: number;
    notSortable: boolean | undefined;
    notDeletable: boolean | undefined;
    showValidity: boolean | undefined;
    btnSize?: ListButtonOverwrites['btnSize'];
}
export interface GenericListItemComponents {
    ComponentPos?: React.ComponentType<GenericListItemSharedProps>;
    ComponentMore?: React.ComponentType<GenericListItemSharedProps>;
}
export type GenericListItemProps = GenericListItemSharedProps & GenericListItemComponents & {
    spacing?: GridSpacing;
};
export declare const GenericListItemBase: ({ ComponentPos, ComponentMore, spacing, btnSize, ...props }: GenericListItemProps) => React.ReactElement;
export declare const GenericListItem: ({ ComponentPos, ComponentMore, spacing, btnSize, ...props }: GenericListItemProps) => React.ReactElement;
