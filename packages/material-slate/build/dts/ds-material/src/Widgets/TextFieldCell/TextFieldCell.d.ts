import React, { CSSProperties, EventHandler } from 'react';
import { WidgetProps, WithScalarValue } from '@ui-schema/ui-schema';
import { InputBaseComponentProps } from '@mui/material/InputBase';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
export interface StringRendererCellProps {
    type?: string;
    multiline?: boolean;
    rows?: number;
    rowsMax?: number;
    style?: CSSProperties;
    onClick?: EventHandler<any>;
    onFocus?: EventHandler<any>;
    onBlur?: EventHandler<any>;
    onKeyUp?: EventHandler<any>;
    onKeyDown?: EventHandler<any>;
    onKeyPress?: EventHandler<any>;
    inputProps?: Partial<InputBaseComponentProps>;
    inputRef?: null | React.RefObject<any>;
    labelledBy?: string;
}
export declare const StringRendererCell: React.ComponentType<WidgetProps<MuiWidgetBinding> & WithScalarValue & StringRendererCellProps>;
export declare const TextRendererCell: React.ComponentType<WidgetProps<MuiWidgetBinding> & WithScalarValue & StringRendererCellProps>;
export declare const NumberRendererCell: React.ComponentType<WidgetProps<MuiWidgetBinding> & WithScalarValue & StringRendererCellProps>;
