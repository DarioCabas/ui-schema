"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleIfElseThen = void 0;
var _validateSchema = require("@ui-schema/ui-schema/validateSchema");
var _mergeSchema = require("@ui-schema/ui-schema/Utils/mergeSchema");
var handleIfElseThen = function handleIfElseThen(schema, value, distSchema) {
  var keyIf = schema.get('if');
  var keyThen = schema.get('then');
  var keyElse = schema.get('else');
  if (keyIf) {
    if (0 === (0, _validateSchema.validateSchema)(keyIf, value, true).errCount) {
      if (keyThen) {
        distSchema = (0, _mergeSchema.mergeSchema)(distSchema, keyThen);
      }
    } else {
      if (keyElse) {
        distSchema = (0, _mergeSchema.mergeSchema)(distSchema, keyElse);
      }
    }
  }
  return distSchema;
};
exports.handleIfElseThen = handleIfElseThen;