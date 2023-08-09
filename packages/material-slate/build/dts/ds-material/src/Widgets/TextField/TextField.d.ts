import React, { CSSProperties, FocusEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';
import { InputProps } from '@mui/material/Input';
import { WidgetProps, WithScalarValue } from '@ui-schema/ui-schema';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
export interface StringRendererBaseProps {
    type?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
    /**
     * @deprecated
     */
    onKeyPress?: (e: KeyboardEvent) => void | undefined;
    onKeyPressNative?: KeyboardEventHandler<HTMLDivElement> | undefined;
    inputProps?: InputProps['inputProps'];
    InputProps?: Partial<InputProps>;
    inputRef?: any;
}
export interface StringRendererProps extends StringRendererBaseProps {
    multiline?: boolean;
    /**
     * @deprecated use `minRows` instead
     */
    rows?: number;
    /**
     * @deprecated use `maxRows` instead
     */
    rowsMax?: number;
    minRows?: number;
    maxRows?: number;
}
export interface TextRendererProps extends StringRendererProps {
    multiline?: true;
}
export interface NumberRendererProps extends StringRendererBaseProps {
    steps?: number | 'any';
}
export declare const StringRenderer: <P extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>({ type, multiline, rows, rowsMax, minRows, maxRows, storeKeys, schema, value, onChange, showValidity, valid, errors, required, style, onClick, onFocus, onBlur, onKeyUp, onKeyDown, onKeyPressNative: onKeyPress, onKeyPress: onKeyPressDeprecated, inputProps, InputProps, inputRef: customInputRef, widgets, }: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & StringRendererProps) => React.ReactElement;
export declare const TextRenderer: <P extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>({ schema, ...props }: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & TextRendererProps) => React.ReactElement;
export declare const NumberRenderer: <P extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>(props: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & NumberRendererProps) => React.ReactElement;
