import React, { MouseEventHandler } from 'react';
import { WidgetProps, WithScalarValue } from '@ui-schema/ui-schema';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
import { UIMetaReadContextType } from '@ui-schema/ui-schema/UIMetaReadContext';
export interface StringRendererBaseProps {
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
export interface StringRendererReadProps extends StringRendererBaseProps {
    multiline?: boolean;
    style?: React.CSSProperties;
}
export declare const StringRendererRead: <P extends WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType = WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType>({ multiline, storeKeys, schema, value, showValidity, valid, errors, style, onClick, widgets, readDense, }: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & StringRendererReadProps) => React.ReactElement;
export declare const TextRendererRead: <P extends WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType = WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType>({ schema, ...props }: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & StringRendererBaseProps) => React.ReactElement;
export declare const NumberRendererRead: <P extends WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType = WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType>(props: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & StringRendererBaseProps) => React.ReactElement;
