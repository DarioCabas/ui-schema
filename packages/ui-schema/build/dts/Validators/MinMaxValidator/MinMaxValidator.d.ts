export const ERROR_MIN_LENGTH: "min-length";
export const ERROR_MAX_LENGTH: "max-length";
export function validateMinMax(schema: any, value: any): import("@ui-schema/ui-schema/ValidatorErrors").ValidatorErrorsType;
export namespace minMaxValidator {
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
