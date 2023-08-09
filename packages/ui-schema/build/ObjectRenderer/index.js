"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ObjectRenderer = require("./ObjectRenderer");
Object.keys(_ObjectRenderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ObjectRenderer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ObjectRenderer[key];
    }
  });
});