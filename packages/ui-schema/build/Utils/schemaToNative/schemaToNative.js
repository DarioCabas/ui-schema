"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapSchema = exports.checkNativeValidity = void 0;
var mapSchema = function mapSchema() {
  var inputProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var schema = arguments.length > 1 ? arguments[1] : undefined;
  if (typeof schema.get('minLength') === 'number') {
    inputProps['minLength'] = schema.get('minLength');
  }
  if (typeof schema.get('maxLength') === 'number') {
    inputProps['maxLength'] = schema.get('maxLength');
  }
  if (typeof schema.get('minimum') === 'number') {
    inputProps['min'] = schema.get('minimum');
  }
  if (typeof schema.get('maximum') === 'number') {
    inputProps['max'] = schema.get('maximum');
  }
  if (typeof schema.get('multipleOf') === 'number') {
    inputProps['step'] = schema.get('multipleOf');
  }
  if (schema.get('pattern')) {
    inputProps['pattern'] = schema.get('pattern');
  }
  return inputProps;
};
exports.mapSchema = mapSchema;
var checkNativeValidity = function checkNativeValidity(currentRef, valid) {
  if (currentRef) {
    for (var error in currentRef.validity) {
      if (error === 'valid') continue;
      valid = !valid ? false : !currentRef.validity[error];
    }
  }
  return valid;
};
exports.checkNativeValidity = checkNativeValidity;