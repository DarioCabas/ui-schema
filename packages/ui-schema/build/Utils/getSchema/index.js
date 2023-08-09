"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _getSchema = require("./getSchema");
Object.keys(_getSchema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getSchema[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getSchema[key];
    }
  });
});