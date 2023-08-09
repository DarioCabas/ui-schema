"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _CombiningHandler = require("./CombiningHandler");
Object.keys(_CombiningHandler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CombiningHandler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CombiningHandler[key];
    }
  });
});