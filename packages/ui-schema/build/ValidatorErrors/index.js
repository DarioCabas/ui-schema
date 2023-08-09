"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ValidatorErrors = require("./ValidatorErrors");
Object.keys(_ValidatorErrors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ValidatorErrors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ValidatorErrors[key];
    }
  });
});