"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SortPlugin = require("./SortPlugin");
Object.keys(_SortPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SortPlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SortPlugin[key];
    }
  });
});