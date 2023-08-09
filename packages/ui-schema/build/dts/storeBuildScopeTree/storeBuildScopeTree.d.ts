import { StoreKeys, UIStoreType, UIStoreStateData } from '@ui-schema/ui-schema/UIStore';
export declare const storeBuildScopeTree: <S extends UIStoreType<any>>(storeKeys: StoreKeys, scope: keyof UIStoreStateData, store: S, nestKey?: string | undefined, ordered?: boolean) => S;
