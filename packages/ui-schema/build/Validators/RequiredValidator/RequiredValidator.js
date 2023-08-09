"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredValidator = exports.checkValueExists = exports.ERROR_NOT_SET = void 0;
var _immutable = require("immutable");
var _uiSchema = require("@ui-schema/ui-schema");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var ERROR_NOT_SET = 'required-not-set';
exports.ERROR_NOT_SET = ERROR_NOT_SET;
var checkValueExists = function checkValueExists(type, value) {
  var valType = _typeof(value);
  if (valType === 'undefined') {
    return false;
  }
  if ((0, _uiSchema.schemaTypeIs)(type, 'string') && valType === 'string') {
    return value !== '';
  } else if (valType === 'string' && (0, _uiSchema.schemaTypeIsNumeric)(type)) {
    return value !== '';
  }
  return true;
};
exports.checkValueExists = checkValueExists;
var requiredValidator = {
  should: function should(_ref) {
    var requiredList = _ref.requiredList,
      storeKeys = _ref.storeKeys;
    if (requiredList && _immutable.List.isList(requiredList)) {
      return requiredList.contains(storeKeys.last());
    }
    return false;
  },
  noHandle: function noHandle() {
    return {
      required: false
    };
  },
  handle: function handle(_ref2) {
    var schema = _ref2.schema,
      value = _ref2.value,
      errors = _ref2.errors,
      valid = _ref2.valid;
    var type = schema.get('type');
    if (!checkValueExists(type, value)) {
      valid = false;
      errors = errors.addError(ERROR_NOT_SET);
    }
    return {
      errors: errors,
      valid: valid,
      required: true
    };
  }
};
exports.requiredValidator = requiredValidator;