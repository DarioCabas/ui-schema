"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementMapper = void 0;
var _mappingBasic = require("@ui-schema/material-slate/SlateElements/mappingBasic");
var _mappingBasicInline = require("@ui-schema/material-slate/SlateElements/mappingBasicInline");
var _mappingList = require("@ui-schema/material-slate/SlateElements/mappingList");
var _mappingAdvanced = require("@ui-schema/material-slate/SlateElements/mappingAdvanced");
var _editorIsEnabled = require("@ui-schema/material-slate/Slate/editorIsEnabled");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var elementMapping = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _mappingBasic.mappingBasic), _mappingBasicInline.mappingBasicInline), _mappingList.mappingList), _mappingAdvanced.mappingAdvanced);
var ElementMapper = function ElementMapper(props) {
  var element = props.element,
    enableOnly = props.enableOnly;
  if (!(0, _editorIsEnabled.editorIsEnabled)(enableOnly, element.type)) {
    if (process.env.NODE_ENV === 'development') {
      console.log('editor type disabled in enableOnly for:', element.type);
    }
  }
  if (element.type && elementMapping.hasOwnProperty(element.type)) {
    return elementMapping[element.type](props);
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('no type found for:', element.type);
  }
  return elementMapping['p'](props);
};
exports.ElementMapper = ElementMapper;