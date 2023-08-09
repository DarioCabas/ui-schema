"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImmutableDeep = isImmutableDeep;
var _immutable = require("immutable");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function isImmutableDeep(maybeImmutable) {
  var curr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (_typeof(maybeImmutable) !== 'object' || maybeImmutable === null) {
    if (typeof maybeImmutable !== 'string' && typeof maybeImmutable !== 'boolean' && typeof maybeImmutable !== 'number') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('is immutable, non convertible found', maybeImmutable);
      }
      curr = false;
    }
  } else {
    if (_immutable.List.isList(maybeImmutable)) {
      (0, _immutable.Seq)(maybeImmutable).forEach(function (e) {
        return curr = isImmutableDeep(e, curr);
      });
    } else if (_immutable.Map.isMap(maybeImmutable)) {
      (0, _immutable.Seq)(maybeImmutable).forEach(function (e) {
        return curr = isImmutableDeep(e, curr);
      });
    } else if (_immutable.Record.isRecord(maybeImmutable)) {
      (0, _immutable.Seq)(maybeImmutable).forEach(function (e) {
        return curr = isImmutableDeep(e, curr);
      });
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.warn('is immutable, not converted found', maybeImmutable);
      }
      curr = false;
    }
  }
  return curr;
}