"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSlateEmpty = isSlateEmpty;
exports.useSlate = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function isSlateEmpty(value) {
  var _value$get, _value$get$get, _value$get$get$get;
  return !(value !== null && value !== void 0 && value.size) || !((_value$get = value.get(0)) !== null && _value$get !== void 0 && (_value$get$get = _value$get.get('children')) !== null && _value$get$get !== void 0 && _value$get$get.size) || ((_value$get$get$get = value.get(0).get('children').get(0)) === null || _value$get$get$get === void 0 ? void 0 : _value$get$get$get.get('text')) === '';
}
var useSlate = function useSlate(schema, value) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focused = _React$useState2[0],
    setFocus = _React$useState2[1];
  var onBlur = _react["default"].useCallback(function () {
    setFocus(false);
  }, [setFocus]);
  var onFocus = _react["default"].useCallback(function () {
    setFocus(true);
  }, [setFocus]);
  var dense = schema.getIn(['view', 'dense']);
  var empty = isSlateEmpty(value);
  return {
    focused: focused,
    setFocus: setFocus,
    onFocus: onFocus,
    onBlur: onBlur,
    dense: dense,
    empty: empty
  };
};
exports.useSlate = useSlate;