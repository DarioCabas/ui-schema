"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isImmutableDeep = require("./isImmutableDeep");
Object.keys(_isImmutableDeep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isImmutableDeep[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isImmutableDeep[key];
    }
  });
});