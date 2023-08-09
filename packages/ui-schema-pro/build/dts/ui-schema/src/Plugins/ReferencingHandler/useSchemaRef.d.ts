import { SchemaRefsPending } from '@ui-schema/ui-schema/Plugins/ReferencingHandler';
import { StoreSchemaType } from '@ui-schema/ui-schema/CommonTypings';
import { SchemaRootContext } from '@ui-schema/ui-schema/SchemaRootProvider';
export declare const useSchemaRef: (maybeRootSchema: StoreSchemaType | undefined, definitions: SchemaRootContext['definitions'] | undefined, isRoot: boolean, schema: StoreSchemaType<import("../..").JsonSchema & {
    [k: string]: unknown;
}>) => {
    schema: StoreSchemaType<import("../..").JsonSchema & {
        [k: string]: unknown;
    }>;
    refsPending: SchemaRefsPending;
};
