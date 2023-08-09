"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isEqual = require("./isEqual");
Object.keys(_isEqual).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isEqual[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isEqual[key];
    }
  });
});