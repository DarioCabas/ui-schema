"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trans = void 0;
var _react = _interopRequireDefault(require("react"));
var _UIMeta = require("@ui-schema/ui-schema/UIMeta");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Trans = function Trans(_ref) {
  var customT = _ref.t,
    text = _ref.text,
    context = _ref.context,
    schema = _ref.schema,
    fallback = _ref.fallback;
  var _useUIMeta = (0, _UIMeta.useUIMeta)(),
    t = _useUIMeta.t;
  var Translated = customT ? customT(text, context, schema) : t(text, context, schema);
  return !Translated && Translated !== 0 && Translated !== '0' ? typeof fallback !== 'undefined' && fallback !== '' ? fallback : text : typeof Translated === 'string' || typeof Translated === 'number' || _typeof(Translated) === 'object' ? Translated : typeof Translated === 'function' ? _react["default"].createElement(Translated, null) : text;
};
exports.Trans = Trans;