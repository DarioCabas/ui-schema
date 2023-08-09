import { List } from 'immutable';
import { validateSchema } from '@ui-schema/ui-schema/validateSchema';
import { createValidatorErrors } from '@ui-schema/ui-schema/ValidatorErrors';
export const ERROR_ONE_OF_INVALID = 'one-of-is-invalid';
export const validateOneOf = (oneOfSchemas, value, recursively = false) => {
  let errors = createValidatorErrors();
  let errorCount = 0;
  if (List.isList(oneOfSchemas) || Array.isArray(oneOfSchemas)) {
    const schemas = List.isList(oneOfSchemas) ? oneOfSchemas.toArray() : oneOfSchemas;
    for (const schema of schemas) {
      const tmpErr = validateSchema(schema, value, recursively);
      if (tmpErr.hasError()) {
        errors = errors.addErrors(tmpErr);
        errorCount++;
      } else {
        errors = createValidatorErrors();
        errorCount = 0;
        break;
      }
    }
  }
  return {
    errors,
    errorCount
  };
};
export const oneOfValidator = {
  should: ({
    schema
  }) => {
    return List.isList(schema === null || schema === void 0 ? void 0 : schema.get('oneOf'));
  },
  handle: ({
    schema,
    value,
    errors,
    valid
  }) => {
    const tmpErrors = validateOneOf(schema === null || schema === void 0 ? void 0 : schema.get('oneOf'), value);
    if (tmpErrors.errorCount > 0) {
      var _errors, _errors2;
      valid = false;
      errors = (_errors = errors) === null || _errors === void 0 ? void 0 : _errors.addChildErrors(tmpErrors.errors);
      errors = (_errors2 = errors) === null || _errors2 === void 0 ? void 0 : _errors2.addError(ERROR_ONE_OF_INVALID, schema);
    }
    return {
      errors,
      valid
    };
  }
};