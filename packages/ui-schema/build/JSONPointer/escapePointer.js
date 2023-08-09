"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapePointer = void 0;
var escapePointer = function escapePointer(pointer) {
  return pointer.replace(/~/g, '~0').replace(/\//g, '~1');
};
exports.escapePointer = escapePointer;