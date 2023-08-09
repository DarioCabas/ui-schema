import { StoreKeys, UIStoreType } from '@ui-schema/ui-schema/UIStore';
import { UIStoreActions } from '@ui-schema/ui-schema';
export declare const scopeUpdaterValues: <S extends UIStoreType<any> = UIStoreType<any>, A extends UIStoreActions<UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData> = UIStoreActions<UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>>(store: S, storeKeys: StoreKeys, newValue: any, action: A) => S;
