"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _beautify = require("./beautify");
Object.keys(_beautify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _beautify[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _beautify[key];
    }
  });
});