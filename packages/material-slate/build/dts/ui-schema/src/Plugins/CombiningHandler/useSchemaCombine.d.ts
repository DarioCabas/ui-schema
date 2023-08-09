import { StoreSchemaType } from '@ui-schema/ui-schema/CommonTypings';
import { Map, OrderedMap } from 'immutable';
export declare const handleSchemaCombine: (schema: StoreSchemaType<import("../..").JsonSchema & {
    [k: string]: unknown;
}>, value: Map<string | number, any> | OrderedMap<string | number, any>) => StoreSchemaType<import("../..").JsonSchema & {
    [k: string]: unknown;
}>;
export declare const useSchemaCombine: (schema: StoreSchemaType<import("../..").JsonSchema & {
    [k: string]: unknown;
}>, value: Map<string | number, any> | OrderedMap<string | number, any>) => StoreSchemaType<import("../..").JsonSchema & {
    [k: string]: unknown;
}>;
