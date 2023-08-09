import React from 'react';
import { StoreKeys, ExtractValueOverwriteProps, WithValidity } from '@ui-schema/ui-schema/UIStore';
export declare const extractValidity: <P extends WithValidity<import("@ui-schema/ui-schema/UIStoreActions").UIStoreActions<import("@ui-schema/ui-schema/UIStore").UIStoreType<any>, import("@ui-schema/ui-schema/UIStoreActions").UIStoreUpdaterData>> & {
    storeKeys: StoreKeys;
}>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof WithValidity<import("@ui-schema/ui-schema/UIStoreActions").UIStoreActions<import("@ui-schema/ui-schema/UIStore").UIStoreType<any>, import("@ui-schema/ui-schema/UIStoreActions").UIStoreUpdaterData>>> & ExtractValueOverwriteProps>;
