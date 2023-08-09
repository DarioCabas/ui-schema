import { StoreSchemaType } from '@ui-schema/ui-schema';
/**
 * @deprecated use `loadSchemaRefPlugin`, will be removed at v0.3.0
 */
export type loadSchema = loadSchemaRefPlugin;
export type loadSchemaRefPlugin = (ref: string, rootId?: string, versions?: string[]) => void;
/**
 * @deprecated use `loadSchemaRefPlugin`, will be removed at v0.3.0
 */
export type getSchema = getSchemaRefPlugin;
export type getSchemaRefPlugin = (ref: string, rootId?: string, version?: string) => StoreSchemaType | null;
export declare const useSchemaNetworkRef: () => {
    getSchema: getSchemaRefPlugin;
    loadSchema: loadSchemaRefPlugin;
};
/**
 * @deprecated
 */
export declare const useNetworkRef: () => {
    getSchema: getSchemaRefPlugin;
    loadSchema: loadSchemaRefPlugin;
};
