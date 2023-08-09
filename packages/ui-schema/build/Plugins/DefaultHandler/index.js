"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DefaultHandler = require("./DefaultHandler");
Object.keys(_DefaultHandler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DefaultHandler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DefaultHandler[key];
    }
  });
});