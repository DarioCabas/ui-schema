"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ObjectValidator = require("./ObjectValidator");
Object.keys(_ObjectValidator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ObjectValidator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ObjectValidator[key];
    }
  });
});