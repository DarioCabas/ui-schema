import { Map, List, OrderedMap } from 'immutable';
import { ValidatorErrorsType } from '@ui-schema/ui-schema/ValidatorErrors';
import { JsonSchema } from '@ui-schema/ui-schema/JsonSchema';
export type showValidity = boolean;
export type Errors = ValidatorErrorsType;
export type required = boolean;
export type valid = boolean;
export type StoreSchemaTypeValuesJS = string | number | boolean | null | any[] | undefined | {
    [key: string]: StoreSchemaTypeValuesJS;
};
export type StoreSchemaTypeValues = StoreSchemaType | List<any> | Map<any, any> | StoreSchemaTypeValuesJS;
export type StoreSchemaType<S extends JsonSchema = JsonSchema & {
    [k: string]: unknown;
}> = OrderedMap<keyof S, S[keyof S]>;
export type SchemaTypesType = List<string> | string | undefined;
