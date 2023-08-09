"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueValidatorConst = exports.validateConst = exports.ERROR_CONST_MISMATCH = void 0;
var _isEqual = require("@ui-schema/ui-schema/Utils/isEqual");
var _immutable = require("immutable");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var ERROR_CONST_MISMATCH = 'const-mismatch';
exports.ERROR_CONST_MISMATCH = ERROR_CONST_MISMATCH;
var validateConst = function validateConst(_const, value) {
  if (typeof _const === 'undefined' || typeof value === 'undefined') return true;
  var tValue = value;
  if (Array.isArray(value)) {
    tValue = (0, _immutable.List)((0, _immutable.fromJS)(value));
  } else if (_typeof(value) === 'object' && value !== null && !_immutable.List.isList(value) && !_immutable.Map.isMap(value) && !_immutable.Record.isRecord(value)) {
    tValue = (0, _immutable.Map)((0, _immutable.fromJS)(value));
  }
  return (0, _isEqual.isEqual)(tValue, _const);
};
exports.validateConst = validateConst;
var valueValidatorConst = {
  should: function should(_ref) {
    var schema = _ref.schema,
      value = _ref.value;
    var _const = schema.get('const');
    return typeof _const !== 'undefined' && typeof value !== 'undefined';
  },
  handle: function handle(_ref2) {
    var schema = _ref2.schema,
      value = _ref2.value,
      errors = _ref2.errors,
      valid = _ref2.valid;
    if (!validateConst(schema.get('const'), value)) {
      valid = false;
      errors = errors.addError(ERROR_CONST_MISMATCH, (0, _immutable.Map)({
        "const": schema.get('const')
      }));
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.valueValidatorConst = valueValidatorConst;