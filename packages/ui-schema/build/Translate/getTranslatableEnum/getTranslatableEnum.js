"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslatableEnum = void 0;
var getTranslatableEnum = function getTranslatableEnum(value) {
  return typeof value === 'boolean' ? value ? 'yes' : 'no' : value === null ? 'null' : value;
};
exports.getTranslatableEnum = getTranslatableEnum;