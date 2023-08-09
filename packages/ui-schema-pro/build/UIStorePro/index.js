"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _UIStorePro = require("./UIStorePro");
Object.keys(_UIStorePro).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UIStorePro[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UIStorePro[key];
    }
  });
});