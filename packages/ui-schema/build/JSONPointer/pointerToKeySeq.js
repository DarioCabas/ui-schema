"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointerToKeySeq = void 0;
var _immutable = require("immutable");
var _unescapePointer = require("@ui-schema/ui-schema/JSONPointer/unescapePointer");
function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}
var pointerToKeySeq = function pointerToKeySeq(pointer) {
  var pointerPoints = pointer.split('/');
  pointerPoints.splice(0, 1);
  pointerPoints = pointerPoints.map(function (point) {
    var key = (0, _unescapePointer.unescapePointer)(point);
    var nKey = key.trim() !== '' && Number(key);
    if (!isNaN(nKey) && isInt(nKey) && key.indexOf('.') === -1) {
      key = parseInt(key);
    }
    return key;
  });
  if (pointerPoints.length === 1 && pointerPoints[0] === '') {
    pointerPoints.splice(0, 1);
  }
  return (0, _immutable.List)(pointerPoints);
};
exports.pointerToKeySeq = pointerToKeySeq;