"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortScalarList = void 0;
var sortScalarList = function sortScalarList(list) {
  return list.sort(function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return typeof a === 'string' ? a.localeCompare(b) : typeof a === 'number' ? a > b : 1;
  });
};
exports.sortScalarList = sortScalarList;