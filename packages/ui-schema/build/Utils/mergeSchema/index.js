"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _mergeSchema = require("./mergeSchema");
Object.keys(_mergeSchema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mergeSchema[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mergeSchema[key];
    }
  });
});