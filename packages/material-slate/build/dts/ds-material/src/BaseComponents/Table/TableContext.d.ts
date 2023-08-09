import React from 'react';
import { WidgetProps } from '@ui-schema/ui-schema';
export interface TableContextType {
    valid: WidgetProps['valid'];
    errors: WidgetProps['errors'];
}
export declare const TableContext: React.Context<TableContextType>;
export declare function withTable<P extends {}>(Component: React.ComponentType<P & TableContextType>): React.ComponentType<P>;
export declare const useTable: () => TableContextType;
