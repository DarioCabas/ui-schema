"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveItem = void 0;
var _immutable = require("immutable");
var moveItem = function moveItem(value, oldI, newI) {
  if (!value || newI < 0 || value.size <= newI || oldI < 0 || value.size <= oldI) return value;
  if (_immutable.List.isList(value)) {
    var srcItem = value.get(oldI);
    return value.splice(oldI, 1).splice(newI, 0, srcItem);
  }
  return value;
};
exports.moveItem = moveItem;