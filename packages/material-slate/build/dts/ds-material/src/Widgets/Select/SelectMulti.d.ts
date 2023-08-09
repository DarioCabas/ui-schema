import React from 'react';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { WithValue } from '@ui-schema/ui-schema/UIStore';
import { WidgetProps } from '@ui-schema/ui-schema/Widget';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
export interface SelectMultiProps {
    variant?: MuiSelectProps['variant'];
}
export declare const SelectMultiBase: React.ComponentType<WidgetProps<MuiWidgetBinding> & WithValue & SelectMultiProps>;
export declare const SelectMulti: React.ComponentType<WidgetProps<MuiWidgetBinding<{}>>>;
