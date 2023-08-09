"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateOneOf = exports.oneOfValidator = exports.ERROR_ONE_OF_INVALID = void 0;
var _immutable = require("immutable");
var _validateSchema = require("@ui-schema/ui-schema/validateSchema");
var _ValidatorErrors = require("@ui-schema/ui-schema/ValidatorErrors");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ERROR_ONE_OF_INVALID = 'one-of-is-invalid';
exports.ERROR_ONE_OF_INVALID = ERROR_ONE_OF_INVALID;
var validateOneOf = function validateOneOf(oneOfSchemas, value) {
  var recursively = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var errors = (0, _ValidatorErrors.createValidatorErrors)();
  var errorCount = 0;
  if (_immutable.List.isList(oneOfSchemas) || Array.isArray(oneOfSchemas)) {
    var schemas = _immutable.List.isList(oneOfSchemas) ? oneOfSchemas.toArray() : oneOfSchemas;
    var _iterator = _createForOfIteratorHelper(schemas),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var schema = _step.value;
        var tmpErr = (0, _validateSchema.validateSchema)(schema, value, recursively);
        if (tmpErr.hasError()) {
          errors = errors.addErrors(tmpErr);
          errorCount++;
        } else {
          errors = (0, _ValidatorErrors.createValidatorErrors)();
          errorCount = 0;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return {
    errors: errors,
    errorCount: errorCount
  };
};
exports.validateOneOf = validateOneOf;
var oneOfValidator = {
  should: function should(_ref) {
    var schema = _ref.schema;
    return _immutable.List.isList(schema === null || schema === void 0 ? void 0 : schema.get('oneOf'));
  },
  handle: function handle(_ref2) {
    var schema = _ref2.schema,
      value = _ref2.value,
      errors = _ref2.errors,
      valid = _ref2.valid;
    var tmpErrors = validateOneOf(schema === null || schema === void 0 ? void 0 : schema.get('oneOf'), value);
    if (tmpErrors.errorCount > 0) {
      var _errors, _errors2;
      valid = false;
      errors = (_errors = errors) === null || _errors === void 0 ? void 0 : _errors.addChildErrors(tmpErrors.errors);
      errors = (_errors2 = errors) === null || _errors2 === void 0 ? void 0 : _errors2.addError(ERROR_ONE_OF_INVALID, schema);
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.oneOfValidator = oneOfValidator;