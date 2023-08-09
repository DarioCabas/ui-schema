"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ConditionalHandler = require("./ConditionalHandler");
Object.keys(_ConditionalHandler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ConditionalHandler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ConditionalHandler[key];
    }
  });
});
var _handleIfElseThen = require("./handleIfElseThen");
Object.keys(_handleIfElseThen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _handleIfElseThen[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _handleIfElseThen[key];
    }
  });
});