"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Trans = require("./Trans");
Object.keys(_Trans).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Trans[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Trans[key];
    }
  });
});