"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMultipleOf = exports.multipleOfValidator = exports.ERROR_MULTIPLE_OF = void 0;
var _immutable = require("immutable");
var ERROR_MULTIPLE_OF = 'multiple-of';
exports.ERROR_MULTIPLE_OF = ERROR_MULTIPLE_OF;
var validateMultipleOf = function validateMultipleOf(schema, value) {
  var multipleOf = schema.get('multipleOf');
  if (typeof value === 'number' && typeof multipleOf === 'number') {
    var str = (Math.abs(multipleOf) - Math.floor(Math.abs(multipleOf))).toLocaleString('fullwide', {
      useGrouping: true,
      maximumSignificantDigits: 9
    });
    str = typeof str === 'string' ? str.replace(/,/g, '.') : str;
    var strValue = (Math.abs(value) - Math.floor(Math.abs(value))).toLocaleString('fullwide', {
      useGrouping: true,
      maximumSignificantDigits: 9
    });
    strValue = typeof strValue === 'string' ? strValue.replace(/,/g, '.') : strValue;
    var decimalPlacesMultipleOf = str.indexOf('.') !== -1 ? str.slice(str.indexOf('.') + 1).length : 0;
    var decimalPlacesValue = strValue.indexOf('.') !== -1 ? strValue.slice(strValue.indexOf('.') + 1).length : 0;
    var precisionFactor = decimalPlacesMultipleOf || decimalPlacesValue ? Math.pow(10, decimalPlacesMultipleOf > decimalPlacesValue ? decimalPlacesMultipleOf : decimalPlacesValue) : 1;
    if ((value * precisionFactor).toFixed(0) % (multipleOf * precisionFactor).toFixed(0) !== 0) {
      return false;
    }
  }
  return true;
};
exports.validateMultipleOf = validateMultipleOf;
var multipleOfValidator = {
  handle: function handle(_ref) {
    var schema = _ref.schema,
      value = _ref.value,
      errors = _ref.errors,
      valid = _ref.valid;
    if (!validateMultipleOf(schema, value)) {
      valid = false;
      errors = errors.addError(ERROR_MULTIPLE_OF, (0, _immutable.Map)({
        multipleOf: schema.get('multipleOf')
      }));
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.multipleOfValidator = multipleOfValidator;