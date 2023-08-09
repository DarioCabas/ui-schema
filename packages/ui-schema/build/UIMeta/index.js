"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _UIMetaProvider = require("./UIMetaProvider");
Object.keys(_UIMetaProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UIMetaProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UIMetaProvider[key];
    }
  });
});