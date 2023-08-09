"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _validateSchema = require("./validateSchema");
Object.keys(_validateSchema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validateSchema[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _validateSchema[key];
    }
  });
});