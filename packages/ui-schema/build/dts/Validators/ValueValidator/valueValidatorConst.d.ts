export const ERROR_CONST_MISMATCH: "const-mismatch";
export function validateConst(_const: any, value: any): boolean;
export namespace valueValidatorConst {
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
