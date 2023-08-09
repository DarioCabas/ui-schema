export const ERROR_EMAIL_INVALID = 'email-invalid';
export const emailValidator = {
  should: ({
    schema,
    value
  }) => {
    return Boolean(schema && typeof value === 'string' && schema.get('format') === 'email');
  },
  handle: ({
    value,
    errors,
    valid
  }) => {
    if (typeof value === 'string' && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
      var _errors;
      valid = false;
      errors = (_errors = errors) === null || _errors === void 0 ? void 0 : _errors.addError(ERROR_EMAIL_INVALID);
    }
    return {
      errors,
      valid
    };
  }
};