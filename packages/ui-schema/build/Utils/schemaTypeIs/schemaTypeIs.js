"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaTypeIsNumeric = exports.schemaTypeIsAny = exports.schemaTypeIs = void 0;
var schemaTypeIs = function schemaTypeIs(isType, expectedType) {
  return Boolean(typeof isType !== 'undefined' && (typeof isType === 'string' ? isType === expectedType : isType.includes(expectedType)));
};
exports.schemaTypeIs = schemaTypeIs;
var schemaTypeIsNumeric = function schemaTypeIsNumeric(type) {
  return schemaTypeIs(type, 'number') || schemaTypeIs(type, 'integer');
};
exports.schemaTypeIsNumeric = schemaTypeIsNumeric;
var schemaTypeIsAny = function schemaTypeIsAny(isType, expectedTypes) {
  return Boolean(typeof isType !== 'undefined' && (typeof isType === 'string' ? expectedTypes.includes(isType) : expectedTypes.reduce(function (c, v) {
    return c || isType.includes(v);
  }, false)));
};
exports.schemaTypeIsAny = schemaTypeIsAny;