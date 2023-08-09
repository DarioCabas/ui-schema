"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUrlFromRef = exports.isRelUrl = exports.getFragmentFromUrl = exports.getCleanRefUrl = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var isRelUrl = function isRelUrl(schemaRef) {
  return schemaRef.indexOf('https://') !== 0 && schemaRef.indexOf('http://') !== 0 && schemaRef.indexOf('ftp://') !== 0 && schemaRef.indexOf('ftps://') !== 0 && schemaRef.indexOf('#') !== 0;
};
exports.isRelUrl = isRelUrl;
var removeFragmentFromRevUrl = function removeFragmentFromRevUrl(url) {
  return url.slice(url.indexOf('#/') !== -1 ? url.indexOf('#/') + 2 : url.indexOf('#') !== -1 ? url.indexOf('#') + 1 : 0);
};
var getFragmentFromUrl = function getFragmentFromUrl(url) {
  var revUrl = _toConsumableArray(url).reverse().join('');
  var revUrlFragment = revUrl.slice(0, revUrl.indexOf('#/') !== -1 ? revUrl.indexOf('#/') : revUrl.indexOf('#') !== -1 ? revUrl.indexOf('#') : 0);
  return _toConsumableArray(revUrlFragment).reverse().join('');
};
exports.getFragmentFromUrl = getFragmentFromUrl;
var getCleanRefUrl = function getCleanRefUrl(schemaRef) {
  if (typeof schemaRef === 'string') {
    var revId = _toConsumableArray(schemaRef).reverse().join('');
    var revIdNoFragment = removeFragmentFromRevUrl(revId);
    schemaRef = _toConsumableArray(revIdNoFragment).reverse().join('');
  }
  return schemaRef;
};
exports.getCleanRefUrl = getCleanRefUrl;
var makeUrlFromRef = function makeUrlFromRef(schemaRef, id) {
  var schemaUrl = schemaRef;
  if (id) {
    var revId = _toConsumableArray(id).reverse().join('');
    var revIdNoFragment = removeFragmentFromRevUrl(revId);
    var uriBase = _toConsumableArray(revIdNoFragment.slice(revIdNoFragment.indexOf('/'))).reverse().join('');
    schemaUrl = uriBase + schemaRef;
  } else if (process.env.NODE_ENV === 'development') {
    console.warn('relative uri ref without root id', schemaRef);
  }
  return schemaUrl;
};
exports.makeUrlFromRef = makeUrlFromRef;