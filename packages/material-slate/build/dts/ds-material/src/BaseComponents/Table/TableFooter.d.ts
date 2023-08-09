import React from 'react';
import { WidgetProps } from '@ui-schema/ui-schema';
import { TableFooterProps } from '@ui-schema/ds-material/BaseComponents/Table/TableTypes';
import { TableContextType } from '@ui-schema/ds-material/BaseComponents/Table/TableContext';
export interface TableFooterErrorsBaseProps {
    colSize: number | undefined;
    showValidity: WidgetProps['showValidity'];
    schema: WidgetProps['schema'];
}
export declare const TableFooterErrorsBase: React.ComponentType<TableFooterErrorsBaseProps & TableContextType>;
export declare const TableFooterErrors: React.ComponentType<TableFooterErrorsBaseProps>;
export declare const TableFooterBase: React.ComponentType<TableFooterProps>;
export declare const TableFooter: React.ComponentType<TableFooterProps>;
