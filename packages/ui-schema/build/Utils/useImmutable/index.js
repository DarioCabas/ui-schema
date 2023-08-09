"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useImmutable = require("./useImmutable");
Object.keys(_useImmutable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useImmutable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useImmutable[key];
    }
  });
});