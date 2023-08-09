import React from 'react';
import { List, Map, Record, RecordOf } from 'immutable';
import { onChangeHandler, UIStoreType } from '@ui-schema/ui-schema/UIStore';
export type redoHistory = (steps?: number) => void;
export type undoHistory = (steps?: number) => void;
declare const defaultDebounceTime: number;
declare const defaultUpdateRate: number;
export interface UIStoreProData {
    activeIndex: number;
    current: UIStoreType;
    list: List<UIStoreType>;
    opts: Map<string, any>;
}
declare const UIStoreProRecord: Record.Factory<UIStoreProData>;
export declare class UIStorePro extends UIStoreProRecord {
}
export type UIStoreProType = RecordOf<UIStoreProData>;
export declare const makeStorePro: (type: string, initialStore?: UIStoreType | any) => UIStoreProType;
export interface UIStoreProOptions {
    debounceTime?: typeof defaultDebounceTime;
    updateRate?: typeof defaultUpdateRate;
    initialStore?: UIStoreType | any;
    type: string;
}
export declare const toHistory: (prevStore: UIStoreProType, index: number) => UIStoreProType;
export type setStorePro = React.Dispatch<React.SetStateAction<UIStoreProType>>;
export declare const useStorePro: ({ debounceTime, updateRate, type, initialStore }?: UIStoreProOptions) => {
    reset: (type: string, initialStore?: UIStoreType) => void;
    onChange: onChangeHandler;
    redoHistory: redoHistory;
    undoHistory: undoHistory;
    store: UIStoreProType;
    setStore: setStorePro;
};
export {};
