"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useImmutable = useImmutable;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function useImmutable(value) {
  var _currentState$current;
  var currentState = _react["default"].useRef(value);
  if (!(0, _immutable.isImmutable)(currentState.current) && !_immutable.Record.isRecord(value) || !((_currentState$current = currentState.current) !== null && _currentState$current !== void 0 && _currentState$current.equals(value))) {
    currentState.current = value;
  }
  return currentState.current;
}