"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappingBasic = void 0;
var _react = _interopRequireDefault(require("react"));
var _pluginOptions = require("@ui-schema/material-slate/Slate/pluginOptions");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));
var _mappingBasic;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var useStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    quote: {
      padding: theme.spacing(1) + ' ' + theme.spacing(2) + ' ' + theme.spacing(0.5) + ' ' + theme.spacing(2),
      position: 'relative',
      borderLeft: '0 solid ' + theme.palette.divider,
      '&:before': {
        content: '"“"',
        fontSize: '4em',
        position: 'relative',
        left: -theme.spacing(1),
        lineHeight: 0,
        verticalAlign: 'bottom',
        pointerEvents: 'none'
      }
    }
  };
});
var mappingBasic = (_mappingBasic = {}, _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.h1.type, function (_ref) {
  var attributes = _ref.attributes,
    children = _ref.children;
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'h1',
    component: 'h1'
  }, attributes, {
    style: {
      fontSize: '2.7rem'
    },
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.h2.type, function (_ref2) {
  var attributes = _ref2.attributes,
    children = _ref2.children;
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'h2',
    component: 'h2'
  }, attributes, {
    style: {
      fontSize: '2.3rem'
    },
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.h3.type, function (_ref3) {
  var attributes = _ref3.attributes,
    children = _ref3.children;
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'h3',
    component: 'h3'
  }, attributes, {
    style: {
      fontSize: '2.1rem'
    },
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.h4.type, function (_ref4) {
  var attributes = _ref4.attributes,
    children = _ref4.children;
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'h4',
    component: 'h4'
  }, attributes, {
    style: {
      fontSize: '1.75rem'
    },
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.h5.type, function (_ref5) {
  var attributes = _ref5.attributes,
    children = _ref5.children;
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'h5',
    component: 'h5'
  }, attributes, {
    style: {
      fontSize: '1.5rem'
    },
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.h6.type, function (_ref6) {
  var attributes = _ref6.attributes,
    children = _ref6.children;
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'h6',
    component: 'h6'
  }, attributes, {
    style: {
      fontSize: '1.25rem'
    },
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.p.type, function (_ref7) {
  var attributes = _ref7.attributes,
    children = _ref7.children;
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'body1',
    component: 'p'
  }, attributes, {
    style: {
      lineHeight: 'normal'
    },
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.blockquote.type, function (_ref8) {
  var attributes = _ref8.attributes,
    children = _ref8.children;
  var classes = useStyles();
  return _react["default"].createElement(_Typography["default"], _extends({
    variant: 'body1',
    component: 'blockquote'
  }, attributes, {
    className: classes.quote,
    gutterBottom: true
  }), children);
}), _defineProperty(_mappingBasic, _pluginOptions.pluginOptions.code_block.type, function (_ref9) {
  var attributes = _ref9.attributes,
    children = _ref9.children;
  return _react["default"].createElement("pre", attributes, _react["default"].createElement("code", null, children));
}), _mappingBasic);
exports.mappingBasic = mappingBasic;