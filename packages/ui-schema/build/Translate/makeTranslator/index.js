"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _makeTranslator = require("./makeTranslator");
Object.keys(_makeTranslator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _makeTranslator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _makeTranslator[key];
    }
  });
});