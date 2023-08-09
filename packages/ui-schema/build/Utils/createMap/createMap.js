"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrderedMap = exports.createMap = void 0;
exports.fromJSOrdered = fromJSOrdered;
var _immutable = require("immutable");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function fromJSOrdered(js) {
  if (_immutable.Map.isMap(js) || _immutable.OrderedMap.isOrderedMap(js) || _immutable.List.isList(js)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('converting immutable to immutable may lead to wrong types');
    }
  }
  return _typeof(js) !== 'object' || js === null ? js : Array.isArray(js) ? (0, _immutable.Seq)(js).map(fromJSOrdered).toList() : (0, _immutable.Seq)(js).map(fromJSOrdered).toOrderedMap();
}
var createOrderedMap = function createOrderedMap() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new _immutable.OrderedMap(fromJSOrdered(data));
};
exports.createOrderedMap = createOrderedMap;
var createMap = function createMap() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new _immutable.Map((0, _immutable.fromJS)(data));
};
exports.createMap = createMap;