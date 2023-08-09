"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _getTranslatableEnum = require("./getTranslatableEnum");
Object.keys(_getTranslatableEnum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getTranslatableEnum[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getTranslatableEnum[key];
    }
  });
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
var _relT = require("./relT");
Object.keys(_relT).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _relT[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _relT[key];
    }
  });
});
var _Trans = require("./Trans");
Object.keys(_Trans).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Trans[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Trans[key];
    }
  });
});
var _TransTitle = require("./TransTitle");
Object.keys(_TransTitle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TransTitle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TransTitle[key];
    }
  });
});