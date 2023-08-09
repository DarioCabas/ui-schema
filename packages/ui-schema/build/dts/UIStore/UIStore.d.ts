export const UIStore: Record.Factory<{
    values: undefined;
    internals: Map<any, any>;
    validity: Map<any, any>;
    meta: Map<any, any>;
    valuesToJS: () => any;
    getValues: () => any;
    getInternals: () => any;
    getValidity: () => any;
    extractValues: (storeKeys: any) => any;
}>;
export function createStore(values: any): Record<{
    values: undefined;
    internals: Map<any, any>;
    validity: Map<any, any>;
    meta: Map<any, any>;
    valuesToJS: () => any;
    getValues: () => any;
    getInternals: () => any;
    getValidity: () => any;
    extractValues: (storeKeys: any) => any;
}> & Readonly<{
    values: undefined;
    internals: Map<any, any>;
    validity: Map<any, any>;
    meta: Map<any, any>;
    valuesToJS: () => any;
    getValues: () => any;
    getInternals: () => any;
    getValidity: () => any;
    extractValues: (storeKeys: any) => any;
}>;
export function createEmptyStore(type?: string): Record<{
    values: undefined;
    internals: Map<any, any>;
    validity: Map<any, any>;
    meta: Map<any, any>;
    valuesToJS: () => any;
    getValues: () => any;
    getInternals: () => any;
    getValidity: () => any;
    extractValues: (storeKeys: any) => any;
}> & Readonly<{
    values: undefined;
    internals: Map<any, any>;
    validity: Map<any, any>;
    meta: Map<any, any>;
    valuesToJS: () => any;
    getValues: () => any;
    getInternals: () => any;
    getValidity: () => any;
    extractValues: (storeKeys: any) => any;
}>;
export function prependKey(storeKeys: any, key: any): any;
export function shouldDeleteOnEmpty(value: any, force: any, type: any): boolean;
export function addNestKey(storeKeysNestedKey: any, storeKeys: any): any;
import { Map } from "immutable";
import { Record } from "immutable";
