"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownLabel = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));
var _Trans = require("@ui-schema/ui-schema/Translate/Trans");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var MarkdownIcon = _react["default"].forwardRef(function (_ref, ref) {
  var color = _ref.color;
  return _react["default"].createElement("svg", {
    viewBox: "0 0 16 16",
    fill: color,
    style: {
      width: '20px',
      display: 'block',
      opacity: 0.6
    },
    ref: ref
  }, _react["default"].createElement("g", {
    transform: "translate(-71.09-24.1)"
  }, _react["default"].createElement("path", {
    d: "m10.509 2.01c-5.82 0-10.509 4.689-10.509 10.509v102.96c0 5.82 4.689 10.509 10.509 10.509h186.98c5.82 0 10.509-4.689 10.509-10.509v-102.96c0-5.82-4.689-10.509-10.509-10.509h-186.98m15.764 26.27h20.992l21.02 26.27 21.02-26.27h20.992v71.43h-20.992v-40.971l-21.02 26.27-21.02-26.27v40.971h-20.992v-71.43m120.8 0h20.992v36.756h21.02l-31.501 34.676-31.528-34.676h21.02v-36.756",
    stroke: "none",
    transform: "matrix(.06731 0 0 .06731 72.08 27.814)"
  })));
});
var MarkdownLink = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement("a", _extends({
    target: "_blank",
    rel: "noopener noreferrer"
  }, props, {
    ref: ref
  }));
});
var useMarkdownStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    markdown: {
      position: 'absolute',
      top: function top(_ref2) {
        var _top = _ref2.top;
        return theme.spacing(_top);
      },
      right: '4px',
      zIndex: 1
    },
    markdownLabel: {
      position: 'absolute',
      right: 0,
      bottom: '-50%',
      whiteSpace: 'pre'
    }
  };
});
var MarkdownLabel = function MarkdownLabel(_ref3) {
  var href = _ref3.href,
    parentFocused = _ref3.parentFocused,
    enableKeyboard = _ref3.enableKeyboard,
    _ref3$top = _ref3.top,
    top = _ref3$top === void 0 ? 0 : _ref3$top;
  var classes = useMarkdownStyles({
    top: top
  });
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focus = _React$useState2[0],
    setFocus = _React$useState2[1];
  return _react["default"].createElement("div", {
    className: classes.markdown
  }, _react["default"].createElement(_IconButton["default"], {
    component: MarkdownLink,
    href: href || 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet',
    style: {
      position: 'relative'
    },
    tabIndex: enableKeyboard ? undefined : -1,
    color: parentFocused ? 'primary' : 'inherit',
    onMouseEnter: function onMouseEnter() {
      return setFocus(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setFocus(false);
    },
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    },
    size: 'small'
  }, _react["default"].createElement(MarkdownIcon, {
    color: 'currentColor'
  }), focus ? _react["default"].createElement(_Typography["default"], {
    component: 'span',
    variant: 'caption',
    className: classes.markdownLabel
  }, _react["default"].createElement(_Trans.Trans, {
    text: 'labels.rich-text-enabled-markdown'
  })) : null));
};
exports.MarkdownLabel = MarkdownLabel;
exports.MarkdownLabel = MarkdownLabel = _react["default"].memo(MarkdownLabel);