import { SchemaTypesType } from '@ui-schema/ui-schema/CommonTypings';
export declare const schemaTypeIs: (isType: SchemaTypesType, expectedType: string) => boolean;
export declare const schemaTypeIsNumeric: (type: SchemaTypesType) => boolean;
export declare const schemaTypeIsAny: (isType: SchemaTypesType, expectedTypes: string[]) => boolean;
