"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqualObject = void 0;
var _isEqual = require("@ui-schema/ui-schema/Utils/isEqual");
var isEqualObject = function isEqualObject(a, b) {
  var prevKeys = Object.keys(a);
  var nextKeys = Object.keys(b);
  if (prevKeys.length !== nextKeys.length || !prevKeys.every(function (v) {
    return nextKeys.includes(v);
  })) {
    return false;
  }
  for (var next in b) {
    if (!(0, _isEqual.isEqual)(a[next], b[next])) {
      return false;
    }
  }
  return true;
};
exports.isEqualObject = isEqualObject;