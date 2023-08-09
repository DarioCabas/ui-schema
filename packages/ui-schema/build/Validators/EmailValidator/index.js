"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _EmailValidator = require("./EmailValidator");
Object.keys(_EmailValidator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EmailValidator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EmailValidator[key];
    }
  });
});