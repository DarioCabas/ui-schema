export const ERROR_WRONG_TYPE: "wrong-type";
export function validateType(value: any, type: any): boolean;
export function validateTypes(value: any, type: any): any;
export namespace typeValidator {
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
