import React from 'react';
import { onChangeHandler, UIStoreType } from '@ui-schema/ui-schema/UIStore';
import { UIStoreActionsContext, UIStoreActions } from '@ui-schema/ui-schema/UIStoreActions';
export interface UIStoreContext<D = any> {
    store: UIStoreType<D> | undefined;
    showValidity?: boolean;
}
export declare const UIConfigProvider: React.ComponentType<React.PropsWithChildren<{}>>;
export declare function UIStoreProvider<C extends {} = {}, D = any, A = UIStoreActions>({ children, showValidity, onChange, store, ...props }: React.PropsWithChildren<UIStoreContext<D> & UIStoreActionsContext<A> & C>): React.ReactElement;
/**
 * @deprecated
 */
export declare const useUI: () => UIStoreContext;
export declare const useUIStore: <D extends unknown = any>() => UIStoreContext<D>;
export declare function useUIConfig<C extends {} = {}>(): C;
export interface WithOnChange<A = UIStoreActions> {
    onChange: onChangeHandler<A>;
}
export interface WithValue<A = UIStoreActions> {
    value: any | undefined;
    internalValue: any | undefined;
    showValidity?: UIStoreContext['showValidity'];
    onChange: onChangeHandler<A>;
}
export interface WithScalarValue<A = UIStoreActions> {
    value: string | number | boolean | undefined | null;
    internalValue: any;
    showValidity?: UIStoreContext['showValidity'];
    onChange: onChangeHandler<A>;
}
export interface WithValidity<A = UIStoreActions> {
    validity: any;
    onChange: onChangeHandler<A>;
    showValidity?: UIStoreContext['showValidity'];
}
