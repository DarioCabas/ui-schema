"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unescapePointer = void 0;
var unescapePointer = function unescapePointer(pointer) {
  return pointer.replace(/~1/g, '/').replace(/~0/g, '~');
};
exports.unescapePointer = unescapePointer;