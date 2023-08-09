import React from 'react';
import { StoreSchemaType, WidgetProps, WithValidity, StoreKeys } from '@ui-schema/ui-schema';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
export interface AccordionStackBaseProps {
    isOpen: boolean;
    setOpen: (handler: (ownKey: string) => string) => void;
    SummaryTitle?: AccordionsRendererProps['SummaryTitle'];
}
export declare const AccordionStack: React.ComponentType<Omit<WidgetProps<MuiWidgetBinding<{}>> & AccordionStackBaseProps & WithValidity<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>>, keyof WithValidity<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>>> & import("@ui-schema/ui-schema").ExtractValueOverwriteProps>;
export interface AccordionsRendererProps {
    SummaryTitle?: React.ComponentType<{
        childInvalid: boolean;
        valid: boolean;
        isOpen: boolean;
        schema: StoreSchemaType;
        parentSchema: StoreSchemaType | undefined;
        storeKeys: StoreKeys;
    }>;
}
export declare const AccordionsRendererBase: <W extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>({ schema, storeKeys, level, errors, showValidity, ...props }: W) => React.ReactElement;
export declare const AccordionsRenderer: <W extends WidgetProps<MuiWidgetBinding<{}>> = WidgetProps<MuiWidgetBinding<{}>>>({ schema, storeKeys, level, errors, showValidity, ...props }: W) => React.ReactElement;
