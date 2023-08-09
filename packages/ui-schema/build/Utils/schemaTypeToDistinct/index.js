"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _schemaTypeToDistinct = require("./schemaTypeToDistinct");
Object.keys(_schemaTypeToDistinct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _schemaTypeToDistinct[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schemaTypeToDistinct[key];
    }
  });
});