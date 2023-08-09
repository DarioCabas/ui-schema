"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isEqualObject = require("./isEqualObject");
Object.keys(_isEqualObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isEqualObject[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isEqualObject[key];
    }
  });
});