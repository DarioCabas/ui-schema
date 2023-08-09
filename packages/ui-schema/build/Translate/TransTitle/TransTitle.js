"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransTitle = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _beautify = require("../../Utils/beautify");
var _Trans = require("../Trans");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TransTitle = function TransTitle(_ref) {
  var schema = _ref.schema,
    storeKeys = _ref.storeKeys,
    ownKey = _ref.ownKey;
  return _react["default"].createElement(_Trans.Trans, {
    schema: schema.get('t'),
    text: schema.get('title') || storeKeys.insert(0, 'widget').push('title').join('.'),
    context: (0, _immutable.Map)({
      'relative': (0, _immutable.List)(['title'])
    }),
    fallback: schema.get('title') || (0, _beautify.beautifyKey)(typeof ownKey === 'undefined' ? storeKeys.last() : ownKey, schema.get('tt'))
  });
};
exports.TransTitle = TransTitle;