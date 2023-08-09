"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _UIGenerator = require("./UIGenerator");
Object.keys(_UIGenerator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UIGenerator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UIGenerator[key];
    }
  });
});