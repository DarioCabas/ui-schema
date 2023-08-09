"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _getTranslatableEnum = require("./getTranslatableEnum");
Object.keys(_getTranslatableEnum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getTranslatableEnum[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getTranslatableEnum[key];
    }
  });
});