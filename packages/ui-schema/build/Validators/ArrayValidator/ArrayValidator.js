"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUniqueItems = exports.validateItems = exports.validateContains = exports.validateArrayContent = exports.validateAdditionalItems = exports.arrayValidator = exports.ERROR_NOT_FOUND_CONTAINS = exports.ERROR_MIN_CONTAINS = exports.ERROR_MAX_CONTAINS = exports.ERROR_DUPLICATE_ITEMS = exports.ERROR_ADDITIONAL_ITEMS = void 0;
var _immutable = require("immutable");
var _validateSchema = require("@ui-schema/ui-schema/validateSchema");
var _ValidatorErrors = require("@ui-schema/ui-schema/ValidatorErrors");
var _TypeValidator = require("@ui-schema/ui-schema/Validators/TypeValidator");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var ERROR_DUPLICATE_ITEMS = 'duplicate-items';
exports.ERROR_DUPLICATE_ITEMS = ERROR_DUPLICATE_ITEMS;
var ERROR_NOT_FOUND_CONTAINS = 'not-found-contains';
exports.ERROR_NOT_FOUND_CONTAINS = ERROR_NOT_FOUND_CONTAINS;
var ERROR_MIN_CONTAINS = 'min-contains';
exports.ERROR_MIN_CONTAINS = ERROR_MIN_CONTAINS;
var ERROR_MAX_CONTAINS = 'max-contains';
exports.ERROR_MAX_CONTAINS = ERROR_MAX_CONTAINS;
var ERROR_ADDITIONAL_ITEMS = 'additional-items';
exports.ERROR_ADDITIONAL_ITEMS = ERROR_ADDITIONAL_ITEMS;
var findDuplicates = function findDuplicates(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) !== index;
  });
};
var validateArrayContent = function validateArrayContent(itemsSchema, value) {
  var additionalItems = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var err = (0, _ValidatorErrors.createValidatorErrors)();
  var found = 0;
  if (_immutable.List.isList(itemsSchema) || Array.isArray(itemsSchema)) {
    if (_immutable.List.isList(value) || Array.isArray(value)) {
      if (!validateAdditionalItems(additionalItems, value, itemsSchema)) {
        err = err.addError(ERROR_ADDITIONAL_ITEMS, (0, _immutable.Map)({}));
        found++;
      }
    } else {
      err = err.addError(_TypeValidator.ERROR_WRONG_TYPE, (0, _immutable.Map)({
        actual: _typeof(value),
        arrayTupleValidation: true
      }));
      found++;
    }
  } else if (Array.isArray(value) || _immutable.List.isList(value)) {
    var _iterator = _createForOfIteratorHelper(value),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var val = _step.value;
        var tmpErr = (0, _ValidatorErrors.createValidatorErrors)();
        var tmpErr2 = (0, _validateSchema.validateSchema)(itemsSchema, val);
        if (tmpErr2.hasError()) {
          tmpErr = tmpErr.addErrors(tmpErr2);
        }
        if (tmpErr.errCount === 0) {
          found++;
        } else {
          err = err.addErrors(tmpErr);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return {
    err: err,
    found: found
  };
};
exports.validateArrayContent = validateArrayContent;
var validateAdditionalItems = function validateAdditionalItems(additionalItems, value, schema) {
  return additionalItems === true || additionalItems === false && (_immutable.List.isList(value) && value.size <= schema.size || Array.isArray(value) && value.length <= schema.size);
};
exports.validateAdditionalItems = validateAdditionalItems;
var validateItems = function validateItems(schema, value) {
  var items = schema.get('items');
  if (items && value) {
    var item_err = validateArrayContent(items, value, schema.get('additionalItems'));
    return item_err.err;
  }
  return (0, _ValidatorErrors.createValidatorErrors)();
};
exports.validateItems = validateItems;
var validateContains = function validateContains(schema, value) {
  var errors = (0, _ValidatorErrors.createValidatorErrors)();
  if (!(Array.isArray(value) || _immutable.List.isList(value))) return errors;
  var contains = schema.get('contains');
  if (!contains) return errors;
  var contains_type = contains.get('type');
  if (!contains_type) return errors;
  var minContains = schema.get('minContains');
  var maxContains = schema.get('maxContains');
  var item_err = validateArrayContent(contains, value, undefined);
  if (item_err.found < 1 && typeof minContains === 'undefined' && typeof maxContains === 'undefined' || typeof minContains === 'number' && minContains > item_err.found || typeof maxContains === 'number' && maxContains < item_err.found) {
    if (item_err.err.errCount !== 0) {
      errors = errors.addErrors(item_err.err);
    }
  }
  if (typeof minContains === 'number' && minContains > item_err.found) {
    errors = errors.addError(ERROR_MIN_CONTAINS, (0, _immutable.Map)({
      minContains: minContains
    }));
  }
  if (typeof maxContains === 'number' && maxContains < item_err.found) {
    errors = errors.addError(ERROR_MAX_CONTAINS, (0, _immutable.Map)({
      maxContains: maxContains
    }));
  }
  if (minContains !== 0 && (Array.isArray(value) && value.length === 0 || _immutable.List.isList(value) && value.size === 0)) {
    errors = errors.addError(ERROR_NOT_FOUND_CONTAINS);
  }
  return errors;
};
exports.validateContains = validateContains;
var validateUniqueItems = function validateUniqueItems(schema, value) {
  var uniqueItems = schema.get('uniqueItems');
  if (uniqueItems && (_immutable.List.isList(value) || Array.isArray(value))) {
    var duplicates = findDuplicates(value);
    if (Array.isArray(duplicates)) {
      return duplicates.length === 0;
    } else if (_immutable.List.isList(duplicates)) {
      return duplicates.size === 0;
    }
  }
  return true;
};
exports.validateUniqueItems = validateUniqueItems;
var arrayValidator = {
  should: function should(_ref) {
    var value = _ref.value;
    return _immutable.List.isList(value) || Array.isArray(value);
  },
  handle: function handle(_ref2) {
    var schema = _ref2.schema,
      value = _ref2.value,
      errors = _ref2.errors,
      valid = _ref2.valid;
    var uniqueItems = schema.get('uniqueItems');
    if (uniqueItems && value) {
      if (!validateUniqueItems(schema, value)) {
        valid = false;
        errors = errors.addError(ERROR_DUPLICATE_ITEMS);
      }
    }
    var items = schema.get('items');
    if (items && value) {
      var items_err = validateItems(schema, value);
      if (items_err.hasError()) {
        valid = false;
        errors = errors.addErrorsToChild(items_err);
      }
    }
    var contains = schema.get('contains');
    if (contains && value) {
      var containsError = validateContains(schema, value);
      if (containsError.hasError()) {
        valid = false;
        errors = errors.addErrors(containsError);
      }
    }
    return {
      errors: errors,
      valid: valid
    };
  }
};
exports.arrayValidator = arrayValidator;