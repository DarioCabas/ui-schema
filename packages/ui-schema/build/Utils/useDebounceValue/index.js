"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useDebounceValue = require("./useDebounceValue");
Object.keys(_useDebounceValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDebounceValue[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDebounceValue[key];
    }
  });
});