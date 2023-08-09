"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createMap = require("./createMap");
Object.keys(_createMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createMap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createMap[key];
    }
  });
});