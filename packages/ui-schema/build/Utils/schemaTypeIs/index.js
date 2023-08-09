"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _schemaTypeIs = require("./schemaTypeIs");
Object.keys(_schemaTypeIs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _schemaTypeIs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schemaTypeIs[key];
    }
  });
});