import React from 'react';
import { onChangeHandler, StoreSchemaType, WidgetProps } from '@ui-schema/ui-schema';
import { TableRowProps } from '@ui-schema/ds-material';
export interface TableRowActionDeleteProps {
    onChange: onChangeHandler;
    storeKeys: WidgetProps['storeKeys'];
    showRows: TableRowProps['showRows'];
    setPage: TableRowProps['setPage'];
    index: number;
    deleteOnEmpty: boolean;
    schema: StoreSchemaType | undefined;
}
export declare const TableRowActionDelete: React.ComponentType<TableRowActionDeleteProps>;
