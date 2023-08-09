import { UIStoreType, UIStoreUpdaterFn } from '@ui-schema/ui-schema/UIStore';
import { UIStoreActions, UIStoreUpdaterData } from '@ui-schema/ui-schema/UIStoreActions';
/**
 * @deprecated use `storeActionReducers` instead
 */
export declare const storeActionHandler: <S extends UIStoreType<any> = UIStoreType<any>, D extends UIStoreUpdaterData = UIStoreUpdaterData, A = UIStoreActions<S, D>>(action: A) => D | UIStoreUpdaterFn<D>;
