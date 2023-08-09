"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTranslator = void 0;
var _relT = require("@ui-schema/ui-schema/Translate/relT");
var _immutable = require("immutable");
var makeTranslator = function makeTranslator(dictionary) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (text) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _immutable.Map)();
    var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var schemaT = (0, _relT.relT)(schema, context, locale);
    if (schemaT) return schemaT;
    if (typeof text !== 'string') return undefined;
    var trans = dictionary.getIn(text.split('.'));
    if (typeof trans === 'function') {
      return trans(context, locale);
    }
    return trans;
  };
};
exports.makeTranslator = makeTranslator;