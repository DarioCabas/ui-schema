"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _TypeValidator = require("./TypeValidator");
Object.keys(_TypeValidator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TypeValidator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TypeValidator[key];
    }
  });
});