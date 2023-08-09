export namespace multipleOfValidator {
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
export const ERROR_MULTIPLE_OF: "multiple-of";
export function validateMultipleOf(schema: any, value: any): boolean;
