import { PluginSimple, StoreSchemaType } from '@ui-schema/ui-schema';
export declare const ERROR_ONE_OF_INVALID = "one-of-is-invalid";
export declare const validateOneOf: (oneOfSchemas: StoreSchemaType<import("@ui-schema/ui-schema").JsonSchema & {
    [k: string]: unknown;
}>, value: any, recursively?: boolean) => {
    errors: import("@ui-schema/ui-schema").ValidatorErrorsType;
    errorCount: number;
};
export declare const oneOfValidator: PluginSimple;
