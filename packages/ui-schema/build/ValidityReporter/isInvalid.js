"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInvalid = void 0;
var _immutable = require("immutable");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var searchRecursive = function searchRecursive(immutable, val, keys) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!immutable || immutable.size === 0) return 0;
  var found = 0;
  var further = [];
  var _iterator = _createForOfIteratorHelper(immutable),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        _value = _step$value[1];
      if (_immutable.Map.isMap(_value)) {
        if (keys) {
          var t = _value.getIn(keys);
          if (typeof t !== 'undefined' || typeof val === 'undefined') {
            if (t === val) {
              found++;
              if (!count) {
                break;
              }
            }
          }
          further.push(_value.deleteIn(keys));
        } else {
          further.push(_value);
        }
      } else if (_value === val) {
        found++;
        if (!count) {
          break;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (further.length && (!found || found && count)) {
    var _iterator2 = _createForOfIteratorHelper(further),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var value = _step2.value;
        found += searchRecursive(value, val, keys, count);
        if (found && !count) {
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return found;
};
var isInvalid = function isInvalid(validity) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!validity) return 0;
  return searchRecursive(validity.getIn(scope), false, ['__valid'], count);
};
exports.isInvalid = isInvalid;