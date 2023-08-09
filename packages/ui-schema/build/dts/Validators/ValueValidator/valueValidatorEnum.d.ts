export const ERROR_ENUM_MISMATCH: "enum-mismatch";
export function validateEnum(_enum: any, value: any): boolean;
export namespace valueValidatorEnum {
    function should({ schema, value }: {
        schema: any;
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
