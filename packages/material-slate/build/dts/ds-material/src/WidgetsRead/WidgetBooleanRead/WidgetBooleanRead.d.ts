import React from 'react';
import { WidgetProps, WithScalarValue } from '@ui-schema/ui-schema';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
import { UIMetaReadContextType } from '@ui-schema/ui-schema/UIMetaReadContext';
export interface WidgetBooleanReadProps {
    style?: React.CSSProperties;
    IconYes?: React.ComponentType<{
        fontSize?: 'default' | 'inherit' | 'large' | 'medium' | 'small';
    }>;
    IconNo?: React.ComponentType<{
        fontSize?: 'default' | 'inherit' | 'large' | 'medium' | 'small';
    }>;
}
export declare const WidgetBooleanRead: <P extends WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType = WidgetProps<MuiWidgetBinding<{}>> & UIMetaReadContextType>({ storeKeys, schema, value, showValidity, valid, errors, style, widgets, IconYes, IconNo, readDense, }: P & WithScalarValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & WidgetBooleanReadProps) => React.ReactElement;
