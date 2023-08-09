import { ListButtonOverwrites } from '@ui-schema/ds-material/Component/ListButton';
import { onChangeHandler, StoreKeys, StoreSchemaType, WidgetProps } from '@ui-schema/ui-schema';
import React from 'react';
export interface GenericListFooterProps extends ListButtonOverwrites {
    schema: StoreSchemaType;
    notAddable?: boolean;
    notSortable?: boolean;
    notDeletable?: boolean;
    onChange: onChangeHandler;
    storeKeys: StoreKeys;
    required?: boolean;
    btnAddShowLabel?: boolean;
    btnAddStyle?: React.CSSProperties;
    errors: WidgetProps['errors'];
    showValidity: WidgetProps['showValidity'];
}
export declare const GenericListFooter: React.ComponentType<GenericListFooterProps>;
