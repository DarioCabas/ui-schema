"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailValidator = exports.ERROR_EMAIL_INVALID = void 0;
var ERROR_EMAIL_INVALID = 'email-invalid';
exports.ERROR_EMAIL_INVALID = ERROR_EMAIL_INVALID;
var emailValidator = {
  should: function should(_ref) {
    var schema = _ref.schema,
      value = _ref.value;
    return Boolean(schema && typeof value === 'string' && schema.get('format') === 'email');
  },
  handle: function handle(_ref2) {
    var value = _ref2.value,
      errors = _ref2.errors,
      valid = _ref2.valid;
    if (typeof value === 'string' && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
      var _errors;
      valid = false;
      errors = (_errors = errors) === null || _errors === void 0 ? void 0 : _errors.addError(ERROR_EMAIL_INVALID);
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.emailValidator = emailValidator;