"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueValidatorEnum = exports.validateEnum = exports.ERROR_ENUM_MISMATCH = void 0;
var _immutable = require("immutable");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var ERROR_ENUM_MISMATCH = 'enum-mismatch';
exports.ERROR_ENUM_MISMATCH = ERROR_ENUM_MISMATCH;
var validateEnum = function validateEnum(_enum, value) {
  if (typeof _enum === 'undefined' || typeof value === 'undefined') return true;
  if (Array.isArray(_enum)) {
    _enum = (0, _immutable.List)((0, _immutable.fromJS)(_enum));
  }
  if (value !== null && _typeof(value) === 'object') {
    if (Array.isArray(value)) {
      value = (0, _immutable.List)((0, _immutable.fromJS)(value));
    } else if (!_immutable.List.isList(value) && !_immutable.Map.isMap(value)) {
      value = (0, _immutable.Map)((0, _immutable.fromJS)(value));
    }
    if (_immutable.List.isList(value) || _immutable.Map.isMap(value)) {
      var _iterator = _createForOfIteratorHelper(_enum),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var enm = _step.value;
          if (value.equals(enm)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
  }
  if (_immutable.List.isList(_enum)) {
    if (!_enum.contains(value)) {
      return false;
    }
  }
  return true;
};
exports.validateEnum = validateEnum;
var valueValidatorEnum = {
  should: function should(_ref) {
    var schema = _ref.schema,
      value = _ref.value;
    var _enum = schema.get('enum');
    return typeof _enum !== 'undefined' && typeof value !== 'undefined';
  },
  handle: function handle(_ref2) {
    var schema = _ref2.schema,
      value = _ref2.value,
      errors = _ref2.errors,
      valid = _ref2.valid;
    if (!validateEnum(schema.get('enum'), value)) {
      valid = false;
      errors = errors.addError(ERROR_ENUM_MISMATCH, (0, _immutable.Map)({
        "enum": schema.get('enum')
      }));
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.valueValidatorEnum = valueValidatorEnum;