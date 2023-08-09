"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _MultipleOfValidator = require("./MultipleOfValidator");
Object.keys(_MultipleOfValidator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MultipleOfValidator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MultipleOfValidator[key];
    }
  });
});