"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _EditorJS = require("./EditorJS");
Object.keys(_EditorJS).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EditorJS[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EditorJS[key];
    }
  });
});