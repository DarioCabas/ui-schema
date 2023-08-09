import { StoreKeys, UIStoreStateData, UIStoreType } from '@ui-schema/ui-schema/UIStore';
export type ScopeOnChangeHandlerInternal = <S extends UIStoreType>(store: S, scope: keyof UIStoreStateData, storeKeys: StoreKeys, newValue: any) => S;
export declare const updateStoreScope: ScopeOnChangeHandlerInternal;
