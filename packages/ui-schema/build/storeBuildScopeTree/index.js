"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _storeBuildScopeTree = require("./storeBuildScopeTree");
Object.keys(_storeBuildScopeTree).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _storeBuildScopeTree[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _storeBuildScopeTree[key];
    }
  });
});