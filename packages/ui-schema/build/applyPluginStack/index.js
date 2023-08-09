"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _applyPluginStack = require("./applyPluginStack");
Object.keys(_applyPluginStack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _applyPluginStack[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _applyPluginStack[key];
    }
  });
});