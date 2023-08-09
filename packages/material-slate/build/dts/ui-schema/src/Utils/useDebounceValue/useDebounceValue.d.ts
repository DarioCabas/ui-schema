import React from 'react';
export interface DebounceValue<T> {
    changed?: boolean;
    value: T | undefined;
}
export declare const useDebounceValue: <T>(value: T | undefined, debounceTime: number, setter: (val: T | undefined) => void) => {
    bubbleBounce: (currentVal: T | undefined) => void;
    bounceVal: DebounceValue<T>;
    setBounceVal: React.Dispatch<React.SetStateAction<DebounceValue<T>>>;
    changeBounceVal: (value: T | undefined) => void;
};
