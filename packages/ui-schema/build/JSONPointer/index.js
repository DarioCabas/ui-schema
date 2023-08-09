"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _escapePointer = require("./escapePointer");
Object.keys(_escapePointer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _escapePointer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _escapePointer[key];
    }
  });
});
var _pointerToKeySeq = require("./pointerToKeySeq");
Object.keys(_pointerToKeySeq).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pointerToKeySeq[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pointerToKeySeq[key];
    }
  });
});
var _resolvePointer = require("./resolvePointer");
Object.keys(_resolvePointer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _resolvePointer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resolvePointer[key];
    }
  });
});
var _unescapePointer = require("./unescapePointer");
Object.keys(_unescapePointer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _unescapePointer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unescapePointer[key];
    }
  });
});