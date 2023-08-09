import { UIStoreType, UIStoreUpdaterFn } from '@ui-schema/ui-schema/UIStore';
import { UIStoreActions, UIStoreUpdaterData } from '@ui-schema/ui-schema/UIStoreActions';
export declare const storeActionReducers: <S extends UIStoreType<any> = UIStoreType<any>, D extends UIStoreUpdaterData = UIStoreUpdaterData, A extends UIStoreActions<S, D> = UIStoreActions<S, D>>(action: A) => D | UIStoreUpdaterFn<D>;
