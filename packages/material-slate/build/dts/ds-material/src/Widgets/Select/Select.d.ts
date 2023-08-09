import React from 'react';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { WithScalarValue } from '@ui-schema/ui-schema/UIStore';
import { WidgetProps } from '@ui-schema/ui-schema/Widget';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
export interface SelectProps {
    variant?: MuiSelectProps['variant'];
}
export declare const Select: React.FC<WidgetProps<MuiWidgetBinding> & WithScalarValue & SelectProps>;
