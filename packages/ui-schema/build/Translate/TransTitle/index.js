"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _TransTitle = require("./TransTitle");
Object.keys(_TransTitle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TransTitle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TransTitle[key];
    }
  });
});