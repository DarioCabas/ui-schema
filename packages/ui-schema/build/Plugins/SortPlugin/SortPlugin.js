"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortPlugin = void 0;
var _immutable = require("immutable");
var SortPlugin = {
  handle: function handle(_ref) {
    var _schema$get;
    var schema = _ref.schema;
    var sortOrder = schema === null || schema === void 0 ? void 0 : schema.get('sortOrder');
    if (!sortOrder) return {};
    var keys = (_schema$get = schema.get('properties')) === null || _schema$get === void 0 ? void 0 : _schema$get.keySeq();
    if (!keys) return {};
    var nonSortedProps = keys.filter(function (k) {
      return !sortOrder.includes(k);
    });
    return {
      schema: schema.set('properties', sortOrder.filter(function (key) {
        return keys.includes(key);
      }).concat(nonSortedProps).reduce(function (properties, key) {
        return properties.set(key, schema.getIn(['properties', key]));
      }, (0, _immutable.OrderedMap)()))
    };
  }
};
exports.SortPlugin = SortPlugin;