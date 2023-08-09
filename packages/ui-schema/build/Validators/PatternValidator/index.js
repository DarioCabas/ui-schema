"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _PatternValidator = require("./PatternValidator");
Object.keys(_PatternValidator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PatternValidator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PatternValidator[key];
    }
  });
});