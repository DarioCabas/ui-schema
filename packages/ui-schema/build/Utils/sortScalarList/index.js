"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _sortScalarList = require("./sortScalarList");
Object.keys(_sortScalarList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sortScalarList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sortScalarList[key];
    }
  });
});