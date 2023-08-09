"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappingList = void 0;
var _pluginOptions = require("@ui-schema/material-slate/Slate/pluginOptions");
var _react = _interopRequireDefault(require("react"));
var _mappingList;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var mappingList = (_mappingList = {}, _defineProperty(_mappingList, _pluginOptions.pluginOptions.ul.type, function (_ref) {
  var attributes = _ref.attributes,
    children = _ref.children;
  return _react["default"].createElement("ul", attributes, children);
}), _defineProperty(_mappingList, _pluginOptions.pluginOptions.ol.type, function (_ref2) {
  var attributes = _ref2.attributes,
    children = _ref2.children;
  return _react["default"].createElement("ol", attributes, children);
}), _defineProperty(_mappingList, _pluginOptions.pluginOptions.li.type, function (_ref3) {
  var attributes = _ref3.attributes,
    children = _ref3.children;
  return _react["default"].createElement("li", attributes, children);
}), _mappingList);
exports.mappingList = mappingList;