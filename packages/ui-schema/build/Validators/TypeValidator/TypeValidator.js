"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateTypes = exports.validateType = exports.typeValidator = exports.ERROR_WRONG_TYPE = void 0;
var _immutable = require("immutable");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var ERROR_WRONG_TYPE = 'wrong-type';
exports.ERROR_WRONG_TYPE = ERROR_WRONG_TYPE;
var validateType = function validateType(value, type) {
  if (typeof value === 'undefined' || typeof type === 'undefined') return true;
  var isValidType = function isValidType(value, type) {
    return _typeof(value) === type;
  };
  if (type === 'string') {
    return isValidType(value, 'string');
  }
  if (type === 'number') {
    return isValidType(value, 'number');
  }
  if (type === 'integer') {
    return !isNaN(value) && Number.isInteger(value);
  }
  if (type === 'boolean') {
    return isValidType(value, 'boolean');
  }
  if (type === 'array') {
    return Array.isArray(value) || _immutable.List.isList(value);
  }
  if (type === 'object') {
    return null !== value && !(Array.isArray(value) || _immutable.List.isList(value)) && (_typeof(value) === 'object' || _immutable.Map.isMap(value) || _immutable.Record.isRecord(value));
  }
  if (type === 'null') {
    return null === value;
  }
  return false;
};
exports.validateType = validateType;
var validateTypes = function validateTypes(value, type) {
  if (typeof value === 'undefined') return true;
  if (typeof type === 'string') {
    type = (0, _immutable.List)([type]);
  }
  return type.reduce(function (c, t) {
    return c || validateType(value, t);
  }, false);
};
exports.validateTypes = validateTypes;
var typeValidator = {
  handle: function handle(_ref) {
    var schema = _ref.schema,
      value = _ref.value,
      errors = _ref.errors,
      valid = _ref.valid;
    var type = schema.get('type');
    if (typeof type !== 'undefined' && !validateTypes(value, type)) {
      valid = false;
      errors = errors.addError(ERROR_WRONG_TYPE, (0, _immutable.Map)({
        actual: value === null ? 'null' : _immutable.List.isList(value) ? 'array' : _immutable.Map.isMap(value) || _immutable.Record.isRecord(value) ? 'object' : _typeof(value)
      }));
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.typeValidator = typeValidator;