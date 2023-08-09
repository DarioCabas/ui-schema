"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePaneEditorStyles = exports.PaneWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));
var _dsMaterial = require("@ui-schema/ds-material");
var _MarkdownLabel = require("@ui-schema/material-slate/EditorWrapper/MarkdownLabel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var usePaneEditorStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'relative'
    },
    editor: {
      position: 'relative',
      minHeight: theme.spacing(5),
      '& .slate-HeadingToolbar': {
        borderBottom: 0,
        margin: 0,
        padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(1)),
        justifyContent: 'center'
      }
    }
  };
});
exports.usePaneEditorStyles = usePaneEditorStyles;
var PaneWrapper = function PaneWrapper(_ref) {
  var schema = _ref.schema,
    errors = _ref.errors,
    showValidity = _ref.showValidity,
    children = _ref.children,
    focused = _ref.focused,
    classes = _ref.classes;
  var hideMd = schema.getIn(['view', 'hideMd']);
  return _react["default"].createElement("div", {
    className: classes.wrapper
  }, !hideMd ? _react["default"].createElement(_MarkdownLabel.MarkdownLabel, {
    href: schema.getIn(['view', 'linkMd']),
    enableKeyboard: schema.getIn(['view', 'enableKeyMd']),
    parentFocused: focused,
    top: 1
  }) : null, _react["default"].createElement("div", {
    className: classes.editor
  }, children), _react["default"].createElement(_dsMaterial.ValidityHelperText, {
    errors: errors,
    showValidity: showValidity,
    schema: schema
  }));
};
exports.PaneWrapper = PaneWrapper;