"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSchemaId = void 0;
var getSchemaId = function getSchemaId(schema) {
  return (schema === null || schema === void 0 ? void 0 : schema.get('$id')) || (schema === null || schema === void 0 ? void 0 : schema.get('id'));
};
exports.getSchemaId = getSchemaId;