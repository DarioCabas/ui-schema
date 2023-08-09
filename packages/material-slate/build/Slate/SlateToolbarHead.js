"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlateToolbarHead = void 0;
var _react = _interopRequireDefault(require("react"));
var _FormatAlignCenter = _interopRequireDefault(require("@mui/icons-material/FormatAlignCenter"));
var _FormatAlignLeft = _interopRequireDefault(require("@mui/icons-material/FormatAlignLeft"));
var _FormatAlignRight = _interopRequireDefault(require("@mui/icons-material/FormatAlignRight"));
var _FormatAlignJustify = _interopRequireDefault(require("@mui/icons-material/FormatAlignJustify"));
var _Code = _interopRequireDefault(require("@mui/icons-material/Code"));
var _FormatQuote = _interopRequireDefault(require("@mui/icons-material/FormatQuote"));
var _FormatListNumbered = _interopRequireDefault(require("@mui/icons-material/FormatListNumbered"));
var _FormatListBulleted = _interopRequireDefault(require("@mui/icons-material/FormatListBulleted"));
var _BallotOutlined = _interopRequireDefault(require("@mui/icons-material/BallotOutlined"));
var _slatePlugins = require("@udecode/slate-plugins");
var _pluginOptions = require("@ui-schema/material-slate/Slate/pluginOptions");
var _SlateToolbarButtons = require("@ui-schema/material-slate/Slate/SlateToolbarButtons");
var _editorIsEnabled = require("@ui-schema/material-slate/Slate/editorIsEnabled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SlateToolbarHead = function SlateToolbarHead(_ref) {
  var enableOnly = _ref.enableOnly,
    onlyInline = _ref.onlyInline,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus;
  return _react["default"].createElement(_slatePlugins.HeadingToolbar, null, !onlyInline && (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.ul.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarList, _extends({}, _pluginOptions.pluginOptions, {
    type: _pluginOptions.pluginOptions.ul.type,
    icon: _react["default"].createElement(_FormatListBulleted["default"], null),
    onFocus: onFocus,
    onBlur: onBlur
  })), !onlyInline && (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.ol.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarList, _extends({}, _pluginOptions.pluginOptions, {
    type: _pluginOptions.pluginOptions.ol.type,
    icon: _react["default"].createElement(_FormatListNumbered["default"], null),
    onFocus: onFocus,
    onBlur: onBlur
  })), !onlyInline && (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.todo_li.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarElement, {
    type: _pluginOptions.pluginOptions.todo_li.type,
    icon: _react["default"].createElement(_BallotOutlined["default"], null),
    onFocus: onFocus,
    onBlur: onBlur
  }), !onlyInline && (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.blockquote.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarElement, {
    type: _pluginOptions.pluginOptions.blockquote.type,
    icon: _react["default"].createElement(_FormatQuote["default"], null),
    onFocus: onFocus,
    onBlur: onBlur
  }), !onlyInline && (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.code_block.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarCodeBlock, {
    type: _pluginOptions.pluginOptions.code_block.type,
    icon: _react["default"].createElement(_Code["default"], null),
    options: _pluginOptions.pluginOptions,
    onFocus: onFocus,
    onBlur: onBlur
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.align_center.type) || (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.align_right.type) || (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.align_justify.type) ? _react["default"].createElement(_SlateToolbarButtons.ToolbarAlign, {
    icon: _react["default"].createElement(_FormatAlignLeft["default"], null),
    type: '',
    onFocus: onFocus,
    onBlur: onBlur
  }) : null, (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.align_center.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarAlign, {
    type: _pluginOptions.pluginOptions.align_center.type,
    icon: _react["default"].createElement(_FormatAlignCenter["default"], null),
    onFocus: onFocus,
    onBlur: onBlur
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.align_right.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarAlign, {
    type: _pluginOptions.pluginOptions.align_right.type,
    icon: _react["default"].createElement(_FormatAlignRight["default"], null),
    onFocus: onFocus,
    onBlur: onBlur
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _pluginOptions.pluginOptions.align_justify.type) && _react["default"].createElement(_SlateToolbarButtons.ToolbarAlign, {
    type: _pluginOptions.pluginOptions.align_justify.type,
    icon: _react["default"].createElement(_FormatAlignJustify["default"], null),
    onFocus: onFocus,
    onBlur: onBlur
  }));
};
exports.SlateToolbarHead = SlateToolbarHead;