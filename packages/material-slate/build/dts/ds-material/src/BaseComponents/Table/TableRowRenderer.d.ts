import React from 'react';
import { WidgetProps, WithValue } from '@ui-schema/ui-schema';
import { TableRowProps } from '@ui-schema/ds-material/BaseComponents/Table/TableTypes';
export declare const TableRowRenderer: React.ComponentType<WidgetProps & TableRowProps & Pick<WithValue, 'onChange'>>;
