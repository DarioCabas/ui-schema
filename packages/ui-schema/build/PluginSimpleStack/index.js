"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _PluginSimpleStack = require("./PluginSimpleStack");
Object.keys(_PluginSimpleStack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PluginSimpleStack[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PluginSimpleStack[key];
    }
  });
});