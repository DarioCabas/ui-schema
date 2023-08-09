"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _UIApi = require("./UIApi");
Object.keys(_UIApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UIApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UIApi[key];
    }
  });
});