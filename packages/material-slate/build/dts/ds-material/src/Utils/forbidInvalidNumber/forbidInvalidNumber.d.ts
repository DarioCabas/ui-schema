import { SchemaTypesType } from '@ui-schema/ui-schema/CommonTypings';
/**
 * Checks for allowed chars in native HTML `input` fields, to disable anything invalid for number fields
 * @param e
 * @param type
 */
export declare const forbidInvalidNumber: (e: KeyboardEvent, type: SchemaTypesType) => boolean;
