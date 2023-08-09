"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _EditorJSWidget = require("./EditorJSWidget");
Object.keys(_EditorJSWidget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EditorJSWidget[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EditorJSWidget[key];
    }
  });
});