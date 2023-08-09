"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DependentHandler = require("./DependentHandler");
Object.keys(_DependentHandler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DependentHandler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DependentHandler[key];
    }
  });
});