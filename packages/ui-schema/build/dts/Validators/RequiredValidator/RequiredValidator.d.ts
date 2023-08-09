export namespace requiredValidator {
    function should({ requiredList, storeKeys }: {
        requiredList: any;
        storeKeys: any;
    }): boolean;
    function noHandle(): {
        required: boolean;
    };
    function handle({ schema, value, errors, valid }: {
        schema: any;
        value: any;
        errors: any;
        valid: any;
    }): {
        errors: any;
        valid: any;
        required: boolean;
    };
}
export const ERROR_NOT_SET: "required-not-set";
export function checkValueExists(type: any, value: any): boolean;
