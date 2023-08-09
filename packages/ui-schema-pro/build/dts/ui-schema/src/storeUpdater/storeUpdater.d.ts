import { StoreKeys, UIStoreType, UIStoreStateData, UIStoreUpdaterFn } from '@ui-schema/ui-schema/UIStore';
import { UIStoreAction, UIStoreActions, UIStoreUpdaterData } from '@ui-schema/ui-schema/UIStoreActions';
export type ScopeOnChangeHandler<S extends UIStoreType = UIStoreType, D extends UIStoreUpdaterData = UIStoreUpdaterData, A = UIStoreActions<S, D>> = (store: S, storeKeys: StoreKeys, newValue: any, action?: A | undefined) => S;
export type ScopeUpdaterMapType<S extends UIStoreType = UIStoreType, D extends UIStoreUpdaterData = UIStoreUpdaterData, A = UIStoreActions<S, D>> = {
    [k in keyof D]: ({
        setter: <S extends UIStoreType>(store: S, storeKeys: StoreKeys, newValue: any, action?: A | undefined) => S;
        getter: <S extends UIStoreType>(storeKeys: StoreKeys, store: S) => any;
    } | {
        /**
         * experimental, skips the store setter/getter for a specific scope
         */
        noStore: true;
    });
};
export declare const getScopedValueFactory: <D extends UIStoreStateData<any> = UIStoreStateData<any>>(scope: keyof D, nestKey?: string) => <S extends UIStoreType<any>>(storeKeys: StoreKeys, store: S) => unknown;
export declare const scopeUpdaterMapDefault: ScopeUpdaterMapType;
export declare const createStoreUpdater: <S extends UIStoreType<any> = UIStoreType<any>, D extends UIStoreUpdaterData = UIStoreUpdaterData, A extends UIStoreAction<S, D> = UIStoreActions<S, D>, SM extends ScopeUpdaterMapType<S, D, A> = ScopeUpdaterMapType<S, D, A>>(actionReducers: (action: A) => D | UIStoreUpdaterFn<D>, scopeUpdaterMap: SM) => (actions: A | A[]) => (oldStore: S) => S;
export declare const storeUpdater: <S extends UIStoreType<any> = UIStoreType<any>, D extends UIStoreUpdaterData = UIStoreUpdaterData, A extends UIStoreActions<S, D> = UIStoreActions<S, D>>(actions: A | A[]) => (oldStore: S) => S;
