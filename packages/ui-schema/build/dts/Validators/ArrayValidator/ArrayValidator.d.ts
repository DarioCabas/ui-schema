export const ERROR_DUPLICATE_ITEMS: "duplicate-items";
export const ERROR_NOT_FOUND_CONTAINS: "not-found-contains";
export const ERROR_MIN_CONTAINS: "min-contains";
export const ERROR_MAX_CONTAINS: "max-contains";
export const ERROR_ADDITIONAL_ITEMS: "additional-items";
export function validateArrayContent(itemsSchema: any, value: any, additionalItems?: boolean): {
    err: ValidatorErrorsType;
    found: number;
};
export function validateAdditionalItems(additionalItems: any, value: any, schema: any): boolean;
export function validateItems(schema: any, value: any): any;
export function validateContains(schema: any, value: any): import("@ui-schema/ui-schema/ValidatorErrors").ValidatorErrorsType;
export function validateUniqueItems(schema: any, value: any): boolean;
export namespace arrayValidator {
    function should({ value }: {
        value: any;
    }): boolean;
    function handle({ schema, value, errors, valid }: {
        schema: any;
        value: any;
        errors: any;
        valid: any;
    }): {
        errors: any;
        valid: any;
    };
}
