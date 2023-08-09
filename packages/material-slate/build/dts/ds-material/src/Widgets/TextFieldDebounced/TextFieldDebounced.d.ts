import React from 'react';
import { NumberRendererProps, StringRendererProps, TextRendererProps } from '@ui-schema/ds-material/Widgets/TextField';
import { WidgetProps, WithScalarValue } from '@ui-schema/ui-schema';
import { MuiWidgetBinding } from '@ui-schema/ds-material';
export interface StringRendererDebouncedProps {
    onKeyPress?: StringRendererProps['onKeyPressNative'];
    debounceTime?: number;
}
export declare const StringRendererDebounced: <P extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>({ type, multiline, rows, rowsMax, minRows, maxRows, storeKeys, schema, value, onChange, showValidity, valid, errors, required, style, onClick, onFocus, onBlur, onKeyUp, onKeyDown, onKeyPress, inputProps, InputProps, inputRef: customInputRef, debounceTime, widgets, }: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & Omit<StringRendererProps, "onKeyPress" | "onKeyPressNative"> & StringRendererDebouncedProps) => React.ReactElement;
export declare const TextRendererDebounced: <P extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>({ schema, ...props }: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & Omit<TextRendererProps, "onKeyPress" | "onKeyPressNative"> & StringRendererDebouncedProps) => React.ReactElement;
export declare const NumberRendererDebounced: <P extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>(props: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & Omit<NumberRendererProps, "onKeyPress" | "onKeyPressNative"> & StringRendererDebouncedProps) => React.ReactElement;
