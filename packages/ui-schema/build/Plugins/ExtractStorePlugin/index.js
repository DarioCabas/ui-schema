"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ExtractStorePlugin = require("./ExtractStorePlugin");
Object.keys(_ExtractStorePlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ExtractStorePlugin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ExtractStorePlugin[key];
    }
  });
});