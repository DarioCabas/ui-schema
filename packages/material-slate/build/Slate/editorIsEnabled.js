"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editorIsEnabled = void 0;
var editorIsEnabled = function editorIsEnabled(enableOnly, type) {
  return !enableOnly || !type || enableOnly.contains(type);
};
exports.editorIsEnabled = editorIsEnabled;