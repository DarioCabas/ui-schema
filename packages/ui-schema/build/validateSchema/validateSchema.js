"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchemaObject = exports.validateSchema = void 0;
var _TypeValidator = require("@ui-schema/ui-schema/Validators/TypeValidator");
var _PatternValidator = require("@ui-schema/ui-schema/Validators/PatternValidator");
var _MinMaxValidator = require("@ui-schema/ui-schema/Validators/MinMaxValidator");
var _ValueValidator = require("@ui-schema/ui-schema/Validators/ValueValidator");
var _MultipleOfValidator = require("@ui-schema/ui-schema/Validators/MultipleOfValidator");
var _ArrayValidator = require("@ui-schema/ui-schema/Validators/ArrayValidator");
var _RequiredValidator = require("@ui-schema/ui-schema/Validators/RequiredValidator");
var _ObjectValidator = require("@ui-schema/ui-schema/Validators/ObjectValidator");
var _ValidatorErrors = require("@ui-schema/ui-schema/ValidatorErrors");
var _OneOfValidator = require("@ui-schema/ui-schema/Validators/OneOfValidator");
var validateSchema = function validateSchema(schema, value) {
  var recursively = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var type = schema.get('type');
  var pattern = schema.get('pattern');
  var err = (0, _ValidatorErrors.createValidatorErrors)();
  var not = schema.get('not');
  if (not) {
    var tmpNot = validateSchema(not, value, recursively);
    return tmpNot.hasError() ? tmpNot.addError('not-is-valid') : err;
  }
  if (!(0, _TypeValidator.validateType)(value, type)) {
    err = err.addError(_TypeValidator.ERROR_WRONG_TYPE);
  } else if (!(0, _PatternValidator.validatePattern)(type, value, pattern)) {
    err = err.addError(_PatternValidator.ERROR_PATTERN);
  } else if (!(0, _ValueValidator.validateConst)(schema.get('const'), value)) {
    err = err.addError(_ValueValidator.ERROR_CONST_MISMATCH);
  } else if (!(0, _ValueValidator.validateEnum)(schema.get('enum'), value)) {
    err = err.addError(_ValueValidator.ERROR_ENUM_MISMATCH);
  } else if (!(0, _MultipleOfValidator.validateMultipleOf)(schema, value)) {
    err = err.addError(_MultipleOfValidator.ERROR_MULTIPLE_OF);
  } else {
    var errMinMax = (0, _MinMaxValidator.validateMinMax)(schema, value);
    if (errMinMax.hasError()) {
      return errMinMax;
    }
    var errObj = (0, _ObjectValidator.validateObject)(schema, value, recursively);
    if (errObj.hasError()) {
      return errObj;
    }
    var errContains = (0, _ArrayValidator.validateContains)(schema, value);
    if (errContains.hasError()) {
      return errContains;
    }
    var errOneOf = (0, _OneOfValidator.validateOneOf)(schema.get('oneOf'), value, recursively);
    if (errOneOf.errors.hasError()) {
      return errOneOf.errors;
    }
  }
  return err;
};
exports.validateSchema = validateSchema;
var validateSchemaObject = function validateSchemaObject(schema, value) {
  var err = (0, _ValidatorErrors.createValidatorErrors)();
  var properties = schema.get('properties');
  if (!properties) return err;
  properties.forEach(function (subSchema, key) {
    var val = value.get(key);
    if (typeof val === 'undefined') {
      err = err.addError(_RequiredValidator.ERROR_NOT_SET);
      return;
    }
    var t = validateSchema(subSchema, val);
    if (t.hasError()) {
      err = err.addErrors(t);
    }
  });
  return err;
};
exports.validateSchemaObject = validateSchemaObject;