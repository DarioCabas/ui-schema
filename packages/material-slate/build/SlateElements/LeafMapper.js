"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeafMapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var LeafMapper = function LeafMapper(_ref) {
  var attributes = _ref.attributes,
    children = _ref.children,
    leaf = _ref.leaf;
  var Comp = leaf.code ? 'code' : 'span';
  return _react["default"].createElement(Comp, _extends({}, attributes, {
    className: (0, _clsx["default"])([leaf.strikethrough && 'slate-strikethrough', leaf.code && 'slate-code', leaf.superscript && 'slate-superscript', leaf.subscript && 'slate-subscript'])
  }), children);
};
exports.LeafMapper = LeafMapper;