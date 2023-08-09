import { StoreKeys, UIStoreInternalsType, UIStoreType } from '@ui-schema/ui-schema/UIStore';
export type ExtractValueOverwriteProps = {
    showValidity?: boolean;
};
export declare function doExtractValues<S extends UIStoreType>(storeKeys: StoreKeys, store: S): {
    value: any;
    internalValue: UIStoreInternalsType;
};
