"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvePointer = void 0;
var _pointerToKeySeq = require("@ui-schema/ui-schema/JSONPointer/pointerToKeySeq");
var resolvePointer = function resolvePointer(pointer, data) {
  var keySeq = (0, _pointerToKeySeq.pointerToKeySeq)(pointer);
  return keySeq.size ? data.getIn(keySeq) : data;
};
exports.resolvePointer = resolvePointer;