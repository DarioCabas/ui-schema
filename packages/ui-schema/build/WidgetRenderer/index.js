"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _WidgetRenderer = require("./WidgetRenderer");
Object.keys(_WidgetRenderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetRenderer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetRenderer[key];
    }
  });
});
var _VirtualWidgetRenderer = require("./VirtualWidgetRenderer");
Object.keys(_VirtualWidgetRenderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _VirtualWidgetRenderer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VirtualWidgetRenderer[key];
    }
  });
});