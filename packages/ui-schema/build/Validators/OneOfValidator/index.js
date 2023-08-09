"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _OneOfValidator = require("./OneOfValidator");
Object.keys(_OneOfValidator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OneOfValidator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OneOfValidator[key];
    }
  });
});