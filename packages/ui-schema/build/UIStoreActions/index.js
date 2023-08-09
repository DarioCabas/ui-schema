"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _UIStoreActions = require("./UIStoreActions");
Object.keys(_UIStoreActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UIStoreActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UIStoreActions[key];
    }
  });
});
var _UIStoreActionsProvider = require("./UIStoreActionsProvider");
Object.keys(_UIStoreActionsProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UIStoreActionsProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UIStoreActionsProvider[key];
    }
  });
});