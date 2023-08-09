"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SchemaRootProvider = require("./SchemaRootProvider");
Object.keys(_SchemaRootProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SchemaRootProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SchemaRootProvider[key];
    }
  });
});