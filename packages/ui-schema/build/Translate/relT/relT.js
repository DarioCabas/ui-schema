"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relTranslator = exports.relT = void 0;
var _immutable = require("immutable");
var relT = function relT(schema, context, locale) {
  if (_immutable.Map.isMap(schema) && context && context.get('relative')) {
    var relSchema = locale ? schema.get(locale) : schema;
    if (relSchema) {
      var schemaT = relSchema.getIn(context.get('relative'));
      if (schemaT) return schemaT;
    }
  }
  return undefined;
};
exports.relT = relT;
var relTranslator = function relTranslator(_text, context) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return relT(schema, context);
};
exports.relTranslator = relTranslator;