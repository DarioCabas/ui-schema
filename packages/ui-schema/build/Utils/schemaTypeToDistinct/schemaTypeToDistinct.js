"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaTypeToDistinct = void 0;
var _immutable = require("immutable");
var schemaTypeToDistinct = function schemaTypeToDistinct(schemaType) {
  var noInputTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['null'];
  var distinctInputType;
  if (!schemaType) return distinctInputType;
  if (typeof schemaType === 'string') {
    distinctInputType = schemaType;
  } else if (Array.isArray(schemaType) && schemaType.length === 1 || 'size' in schemaType && schemaType.size === 1) {
    distinctInputType = schemaType.join();
  } else {
    var reducedTypes = schemaType.reduce(function (c, v) {
      return noInputTypes.includes(v) ? c : c.push(v);
    }, (0, _immutable.List)());
    if (reducedTypes.size === 1) {
      distinctInputType = reducedTypes.join();
    }
  }
  return distinctInputType;
};
exports.schemaTypeToDistinct = schemaTypeToDistinct;