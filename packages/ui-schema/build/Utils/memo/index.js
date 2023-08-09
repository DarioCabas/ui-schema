"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _memo = require("./memo");
Object.keys(_memo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _memo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memo[key];
    }
  });
});
var _getDisplayName = require("./getDisplayName");
Object.keys(_getDisplayName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDisplayName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getDisplayName[key];
    }
  });
});