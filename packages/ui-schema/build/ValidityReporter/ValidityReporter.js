"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidityReporter = void 0;
var _react = _interopRequireDefault(require("react"));
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _useImmutable = require("@ui-schema/ui-schema/Utils/useImmutable");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ValidityReporter = function ValidityReporter(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    customError = _React$useState2[0],
    setCustomError = _React$useState2[1];
  var onChange = props.onChange,
    showValidity = props.showValidity,
    storeKeys = props.storeKeys,
    valid = props.valid,
    currentPluginIndex = props.currentPluginIndex;
  var storeKeysRef = (0, _useImmutable.useImmutable)(storeKeys);
  var realValid = !customError && valid;
  _react["default"].useEffect(function () {
    onChange({
      type: 'set',
      storeKeys: storeKeysRef,
      scopes: ['valid'],
      data: {
        valid: realValid
      }
    });
  }, [realValid, onChange, storeKeysRef]);
  _react["default"].useEffect(function () {
    return function () {
      return onChange({
        type: 'set',
        storeKeys: storeKeysRef,
        scopes: ['valid'],
        data: {
          valid: undefined
        }
      });
    };
  }, [onChange, storeKeysRef]);
  var next = currentPluginIndex + 1;
  var Plugin = (0, _PluginStack.getNextPlugin)(next, props.widgets);
  return _react["default"].createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next,
    valid: valid,
    showValidity: showValidity,
    setCustomError: setCustomError
  }));
};
exports.ValidityReporter = ValidityReporter;