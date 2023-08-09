export namespace patternValidator {
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
export const ERROR_PATTERN: "pattern-not-matching";
export function validatePattern(type: any, value: any, pattern: any): boolean;
