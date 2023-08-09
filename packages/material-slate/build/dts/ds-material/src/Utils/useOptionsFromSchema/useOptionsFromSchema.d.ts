import { StoreSchemaType } from '@ui-schema/ui-schema/CommonTypings';
import { List } from 'immutable';
import { StoreKeys } from '@ui-schema/ui-schema';
export interface OptionValueSchema<V = string | number> {
    value: V;
    text: string;
    fallback: string;
    context: any;
    schema: StoreSchemaType | undefined;
}
export declare const useOptionsFromSchema: <V = string | number>(storeKeys: StoreKeys, schema: StoreSchemaType | undefined) => {
    enumValues: List<V> | undefined;
    valueSchemas: List<OptionValueSchema> | undefined;
};
