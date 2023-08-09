"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateObject = exports.objectValidator = exports.ERROR_ADDITIONAL_PROPERTIES = void 0;
var _immutable = require("immutable");
var _ValidatorErrors = require("@ui-schema/ui-schema/ValidatorErrors");
var _validateSchema = require("@ui-schema/ui-schema/validateSchema");
var _RequiredValidator = require("@ui-schema/ui-schema/Validators/RequiredValidator");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var ERROR_ADDITIONAL_PROPERTIES = 'additional-properties';
exports.ERROR_ADDITIONAL_PROPERTIES = ERROR_ADDITIONAL_PROPERTIES;
var validateObject = function validateObject(schema, value) {
  var recursively = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var err = (0, _ValidatorErrors.createValidatorErrors)();
  var isRealObject = typeof value !== 'undefined' && (_typeof(value) === 'object' && value !== null || _immutable.Map.isMap(value) || _immutable.Record.isRecord(value)) && !(_immutable.List.isList(value) || Array.isArray(value));
  if (schema.get('additionalProperties') === false && schema.get('properties') && isRealObject) {
    var hasAdditional = false;
    var keys = _immutable.Map.isMap(value) || _immutable.Record.isRecord(value) ? value.keySeq() : Object.keys(value);
    var schemaKeys = schema.get('properties').keySeq();
    keys.forEach(function (key) {
      if (schemaKeys.indexOf(key) === -1) hasAdditional = true;
    });
    if (hasAdditional) {
      err = err.addError(ERROR_ADDITIONAL_PROPERTIES);
    }
  }
  if (schema.get('propertyNames') && isRealObject) {
    var _keys = _immutable.Map.isMap(value) || _immutable.Record.isRecord(value) ? value.keySeq() : Object.keys(value);
    _keys.forEach(function (key) {
      var tmp_err = (0, _validateSchema.validateSchema)(schema.get('propertyNames').set('type', 'string'), key, recursively);
      if (tmp_err.hasError()) {
        err = err.addErrors(tmp_err);
      }
    });
  }
  if (recursively && schema.get('properties')) {
    schema.get('properties').forEach(function (subSchema, key) {
      var _schema$get;
      var val = isRealObject ? _immutable.Map.isMap(value) || _immutable.Record.isRecord(value) ? value.get(key) : value[key] : undefined;
      if ((_schema$get = schema.get('required')) !== null && _schema$get !== void 0 && _schema$get.contains(key) && !(0, _RequiredValidator.checkValueExists)(subSchema.get('type'), val)) {
        err = err.addError(_RequiredValidator.ERROR_NOT_SET);
        return;
      }
      var t = (0, _validateSchema.validateSchema)(subSchema, val, recursively);
      if (t.hasError()) {
        err = err.addErrors(t);
      }
    });
  }
  return err;
};
exports.validateObject = validateObject;
var objectValidator = {
  handle: function handle(_ref) {
    var schema = _ref.schema,
      value = _ref.value,
      errors = _ref.errors,
      valid = _ref.valid;
    var objectErrors = validateObject(schema, value);
    if (objectErrors !== null && objectErrors !== void 0 && objectErrors.hasError()) {
      valid = false;
      errors = errors.addErrors(objectErrors);
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.objectValidator = objectValidator;