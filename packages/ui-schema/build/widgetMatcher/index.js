"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _widgetMatcher = require("./widgetMatcher");
Object.keys(_widgetMatcher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _widgetMatcher[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _widgetMatcher[key];
    }
  });
});