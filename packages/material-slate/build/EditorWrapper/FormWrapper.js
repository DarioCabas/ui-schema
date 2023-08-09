"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormEditorStyles = exports.FormWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Input = require("@mui/material/Input");
var _uiSchema = require("@ui-schema/ui-schema");
var _dsMaterial = require("@ui-schema/ds-material");
var _MarkdownLabel = require("@ui-schema/material-slate/EditorWrapper/MarkdownLabel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useFormEditorStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    editor: {
      position: 'relative',
      marginTop: theme.spacing(2),
      minHeight: function minHeight(_ref) {
        var dense = _ref.dense;
        return dense ? theme.spacing(2.375 + 0.375 + 0.875) : theme.spacing(2.375 + 0.75 + 0.875);
      },
      paddingTop: function paddingTop(_ref2) {
        var dense = _ref2.dense;
        return dense ? theme.spacing(0.375) : theme.spacing(0.75);
      },
      '& .slate-HeadingToolbar': {
        borderBottom: 0,
        opacity: function opacity(_ref3) {
          var focused = _ref3.focused;
          return focused ? 1 : 0;
        },
        pointerEvents: function pointerEvents(_ref4) {
          var focused = _ref4.focused;
          return focused ? 'all' : 'none';
        },
        transition: 'opacity 0.25s ease-out',
        margin: 0,
        padding: '0 ' + theme.spacing(1) + ' 0 ' + theme.spacing(1),
        justifyContent: 'center',
        position: 'absolute',
        top: function top(_ref5) {
          var dense = _ref5.dense;
          return dense ? theme.spacing((2 + 0.375) * -1) : theme.spacing((2 + 0.75) * -1);
        },
        left: 0,
        right: 0,
        minHeight: 0
      }
    }
  };
});
exports.useFormEditorStyles = useFormEditorStyles;
var FormWrapper = function FormWrapper(_ref6) {
  var storeKeys = _ref6.storeKeys,
    schema = _ref6.schema,
    errors = _ref6.errors,
    showValidity = _ref6.showValidity,
    valid = _ref6.valid,
    children = _ref6.children,
    dense = _ref6.dense,
    focused = _ref6.focused,
    empty = _ref6.empty,
    classes = _ref6.classes;
  var hideMd = schema.getIn(['view', 'hideMd']);
  return _react["default"].createElement(_FormControl["default"], {
    className: classes.wrapper
  }, !hideMd ? _react["default"].createElement(_MarkdownLabel.MarkdownLabel, {
    href: schema.getIn(['view', 'linkMd']),
    enableKeyboard: schema.getIn(['view', 'enableKeyMd']),
    parentFocused: focused
  }) : null, !schema.getIn(['view', 'hideTitle']) && !schema.getIn(['editor', 'placeholder']) ? _react["default"].createElement(_InputLabel["default"], {
    focused: focused,
    shrink: focused || !empty,
    margin: dense ? 'dense' : undefined,
    error: !valid,
    style: {
      pointerEvents: 'none'
    }
  }, _react["default"].createElement(_uiSchema.TransTitle, {
    schema: schema,
    storeKeys: storeKeys
  })) : null, _react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.editor, !schema.getIn(['view', 'noUnderline']) ? _Input.inputClasses.underline : null, focused ? _Input.inputClasses.focused : null)
  }, children), _react["default"].createElement(_dsMaterial.ValidityHelperText, {
    errors: errors,
    showValidity: showValidity,
    schema: schema
  }));
};
exports.FormWrapper = FormWrapper;