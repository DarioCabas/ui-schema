"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _schemaToNative = require("./schemaToNative");
Object.keys(_schemaToNative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _schemaToNative[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schemaToNative[key];
    }
  });
});