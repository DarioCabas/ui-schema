"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldDeleteOnEmpty = exports.prependKey = exports.createStore = exports.createEmptyStore = exports.addNestKey = exports.UIStore = void 0;
var _immutable = require("immutable");
var _schemaTypeIs = require("@ui-schema/ui-schema/Utils/schemaTypeIs");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var STR_INTERNALS = 'internals';
var STR_VALUES = 'values';
var STR_VALIDITY = 'validity';
var UIStore = (0, _immutable.Record)({
  values: undefined,
  internals: (0, _immutable.Map)(),
  validity: (0, _immutable.Map)(),
  meta: (0, _immutable.Map)(),
  valuesToJS: function valuesToJS() {
    var values = this.get(STR_VALUES);
    if (_immutable.Map.isMap(values) || _immutable.List.isList(values) || _immutable.Record.isRecord(values)) return values.toJS();
    return values;
  },
  getValues: function getValues() {
    return this.get(STR_VALUES);
  },
  getInternals: function getInternals() {
    return this.get(STR_INTERNALS);
  },
  getValidity: function getValidity() {
    return this.get(STR_VALIDITY);
  },
  extractValues: function extractValues(storeKeys) {
    return (0, _UIStore.doExtractValues)(storeKeys, this);
  }
});
exports.UIStore = UIStore;
var createStore = function createStore(values) {
  return new UIStore({
    values: values,
    internals: (0, _immutable.Map)({
      internals: _immutable.List.isList(values) ? (0, _immutable.List)() : (0, _immutable.Map)()
    }),
    validity: (0, _immutable.Map)(),
    meta: (0, _immutable.Map)()
  });
};
exports.createStore = createStore;
var createEmptyStore = function createEmptyStore() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'object';
  return createStore(type === 'array' ? (0, _immutable.List)([]) : type === 'string' ? '' : type === 'number' || type === 'integer' ? 0 : type === 'boolean' ? false : (0, _immutable.Map)());
};
exports.createEmptyStore = createEmptyStore;
var prependKey = function prependKey(storeKeys, key) {
  return Array.isArray(storeKeys) ? [key].concat(_toConsumableArray(storeKeys)) : storeKeys.splice(0, 0, key);
};
exports.prependKey = prependKey;
var shouldDeleteOnEmpty = function shouldDeleteOnEmpty(value, force, type) {
  var valueTypeOf = _typeof(value);
  if (!force && !(0, _schemaTypeIs.schemaTypeIsNumeric)(type)) return false;
  if (valueTypeOf === 'undefined') return true;
  if ((0, _schemaTypeIs.schemaTypeIs)(type, 'string') && valueTypeOf === 'string' || (0, _schemaTypeIs.schemaTypeIs)(type, 'number') && (valueTypeOf === 'number' || valueTypeOf === 'string') || (0, _schemaTypeIs.schemaTypeIs)(type, 'integer') && (valueTypeOf === 'number' || valueTypeOf === 'string')) {
    return value === '' || valueTypeOf === 'undefined' || valueTypeOf === 'string' && 0 === value.trim().length;
  } else if ((0, _schemaTypeIs.schemaTypeIs)(type, 'boolean') && valueTypeOf === 'boolean') {
    return !value;
  } else if ((0, _schemaTypeIs.schemaTypeIs)(type, 'array') && (_immutable.List.isList(value) || Array.isArray(value))) {
    return _immutable.List.isList(value) && value.size === 0 || Array.isArray(value) && value.length === 0;
  } else if ((0, _schemaTypeIs.schemaTypeIs)(type, 'object') && (_immutable.Map.isMap(value) || _immutable.Record.isRecord(value) || valueTypeOf === 'object')) {
    return (_immutable.Map.isMap(value) || _immutable.Record.isRecord(value)) && value.keySeq().size === 0 || valueTypeOf === 'object' && Object.keys(value).length === 0;
  }
  return false;
};
exports.shouldDeleteOnEmpty = shouldDeleteOnEmpty;
var addNestKey = function addNestKey(storeKeysNestedKey, storeKeys) {
  return storeKeysNestedKey ? storeKeys.reduce(function (nk, sk) {
    return nk === null || nk === void 0 ? void 0 : nk.concat(sk, (0, _immutable.List)([storeKeysNestedKey]));
  }, (0, _immutable.List)([storeKeysNestedKey])).splice(-1, 1) : storeKeys;
};
exports.addNestKey = addNestKey;