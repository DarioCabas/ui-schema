import React from 'react';
import { WidgetProps } from '@ui-schema/ui-schema';
import { List, OrderedMap } from 'immutable';
export type SlateImmutableType = List<OrderedMap<'children', List<OrderedMap<'text' | 'children', string | List<any>>>>>;
export declare function isSlateEmpty(value: List<any> | undefined): boolean;
export declare const useSlate: (schema: WidgetProps['schema'], value: SlateImmutableType | undefined) => {
    focused: boolean;
    setFocus: React.Dispatch<React.SetStateAction<boolean>>;
    onFocus: React.FocusEventHandler<Element>;
    onBlur: React.FocusEventHandler<Element>;
    dense: unknown;
    empty: boolean;
};
