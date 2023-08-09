"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMinMax = exports.minMaxValidator = exports.ERROR_MIN_LENGTH = exports.ERROR_MAX_LENGTH = void 0;
var _immutable = require("immutable");
var _ValidatorErrors = require("@ui-schema/ui-schema/ValidatorErrors");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var ERROR_MIN_LENGTH = 'min-length';
exports.ERROR_MIN_LENGTH = ERROR_MIN_LENGTH;
var ERROR_MAX_LENGTH = 'max-length';
exports.ERROR_MAX_LENGTH = ERROR_MAX_LENGTH;
var validateMinMax = function validateMinMax(schema, value) {
  var errors = (0, _ValidatorErrors.createValidatorErrors)();
  if (typeof value === 'undefined') return errors;
  if (typeof value === 'string') {
    var minLength = schema.get('minLength');
    var maxLength = schema.get('maxLength');
    if (minLength) {
      if (value.length < minLength) {
        errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
          min: minLength
        }));
      }
    }
    if (maxLength) {
      if (value.length > maxLength) {
        errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
          max: maxLength
        }));
      }
    }
  }
  var minItems = schema.get('minItems');
  var maxItems = schema.get('maxItems');
  if (minItems) {
    if (_immutable.List.isList(value)) {
      if (value.size < minItems) {
        errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
          min: minItems
        }));
      }
    } else if (Array.isArray(value)) {
      if (value.length < minItems) {
        errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
          min: minItems
        }));
      }
    }
  }
  if (maxItems) {
    if (_immutable.List.isList(value)) {
      if (value.size > maxItems) {
        errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
          max: maxItems
        }));
      }
    } else if (Array.isArray(value)) {
      if (value.length > maxItems) {
        errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
          max: maxItems
        }));
      }
    }
  }
  var minProperties = schema.get('minProperties');
  var maxProperties = schema.get('maxProperties');
  if (minProperties) {
    if (_immutable.Map.isMap(value) || _immutable.Record.isRecord(value)) {
      if (value.keySeq().size < minProperties) {
        errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
          min: minProperties
        }));
      }
    } else if (_typeof(value) === 'object') {
      if (Object.keys(value).length < minProperties) {
        errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
          min: minProperties
        }));
      }
    }
  }
  if (maxProperties) {
    if (_immutable.Map.isMap(value) || _immutable.Record.isRecord(value)) {
      if (value.keySeq().size > maxProperties) {
        errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
          max: maxProperties
        }));
      }
    } else if (_typeof(value) === 'object') {
      if (Object.keys(value).length > maxProperties) {
        errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
          max: maxProperties
        }));
      }
    }
  }
  var minimum = schema.get('minimum');
  var exclusiveMinimum = schema.get('exclusiveMinimum');
  var maximum = schema.get('maximum');
  var exclusiveMaximum = schema.get('exclusiveMaximum');
  if (typeof value === 'number') {
    if (typeof minimum === 'number') {
      if (typeof exclusiveMinimum === 'boolean') {
        if (exclusiveMinimum && value <= minimum) {
          errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
            exclMin: minimum
          }));
        }
      } else if (value < minimum) {
        errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
          min: minimum
        }));
      }
    }
    if (typeof exclusiveMinimum === 'number') {
      if (value <= exclusiveMinimum) {
        errors = errors.addError(ERROR_MIN_LENGTH, (0, _immutable.Map)({
          exclMin: exclusiveMinimum
        }));
      }
    }
    if (typeof maximum === 'number') {
      if (typeof exclusiveMaximum === 'boolean') {
        if (value >= maximum) {
          errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
            exclMax: maximum
          }));
        }
      } else if (value > maximum) {
        errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
          max: maximum
        }));
      }
    }
    if (typeof exclusiveMaximum === 'number') {
      if (value >= exclusiveMaximum) {
        errors = errors.addError(ERROR_MAX_LENGTH, (0, _immutable.Map)({
          exclMax: exclusiveMaximum
        }));
      }
    }
  }
  return errors;
};
exports.validateMinMax = validateMinMax;
var minMaxValidator = {
  handle: function handle(_ref) {
    var schema = _ref.schema,
      value = _ref.value,
      errors = _ref.errors,
      valid = _ref.valid;
    var err = validateMinMax(schema, value);
    if (err.hasError()) {
      valid = false;
      errors = errors.addErrors(err);
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.minMaxValidator = minMaxValidator;