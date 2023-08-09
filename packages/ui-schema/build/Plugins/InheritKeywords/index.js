"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _InheritKeywords = require("./InheritKeywords");
Object.keys(_InheritKeywords).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InheritKeywords[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InheritKeywords[key];
    }
  });
});