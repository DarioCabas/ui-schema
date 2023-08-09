"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePattern = exports.patternValidator = exports.ERROR_PATTERN = void 0;
var _immutable = require("immutable");
var ERROR_PATTERN = 'pattern-not-matching';
exports.ERROR_PATTERN = ERROR_PATTERN;
var validatePattern = function validatePattern(type, value, pattern) {
  if (typeof value === 'string' && pattern) {
    return null !== value.match(pattern);
  }
  return true;
};
exports.validatePattern = validatePattern;
var patternValidator = {
  handle: function handle(_ref) {
    var schema = _ref.schema,
      value = _ref.value,
      errors = _ref.errors,
      valid = _ref.valid;
    var type = schema.get('type');
    var pattern = schema.get('pattern');
    if (!validatePattern(type, value, pattern)) {
      valid = false;
      errors = errors.addError(ERROR_PATTERN, (0, _immutable.Map)({
        pattern: pattern,
        patternError: schema.get('patternError')
      }));
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.patternValidator = patternValidator;