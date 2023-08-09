export const ERROR_ADDITIONAL_PROPERTIES: "additional-properties";
export function validateObject(schema: any, value: any, recursively?: boolean): import("@ui-schema/ui-schema/ValidatorErrors").ValidatorErrorsType;
export namespace objectValidator {
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
