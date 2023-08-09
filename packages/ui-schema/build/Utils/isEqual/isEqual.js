"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqual = void 0;
var _immutable = require("immutable");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var isEqual = function isEqual(a, b) {
  if (_immutable.List.isList(b) || _immutable.Map.isMap(b) || _immutable.Record.isRecord(b)) {
    return b.equals(a);
  } else if (Array.isArray(b)) {
    return a === b;
  } else if (_typeof(b) === 'object') {
    return Object.is(a, b);
  }
  return a === b;
};
exports.isEqual = isEqual;