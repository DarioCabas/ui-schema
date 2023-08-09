"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEditorStyles = exports.EditorJSWidget = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactUid = require("react-uid");
var _clsx = _interopRequireDefault(require("clsx"));
var _Translate = require("@ui-schema/ui-schema/Translate");
var _EditorJS = require("@ui-schema/material-editorjs/EditorJS/EditorJS");
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _LocaleHelperText = require("@ui-schema/ds-material/Component/LocaleHelperText");
var _Input = require("@mui/material/Input");
var _styles = require("@mui/material/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useEditorStyles = function useEditorStyles(theme, _ref) {
  var dense = _ref.dense;
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    editor: {
      position: 'relative',
      marginTop: theme.spacing(2),
      minHeight: dense ? theme.spacing(2.375 + 0.375 + 0.875) : theme.spacing(2.375 + 0.75 + 0.875),
      paddingTop: dense ? theme.spacing(0.375) : theme.spacing(0.75),
      paddingBottom: theme.spacing(0.875),
      '& .cdx-block': {
        lineHeight: '1.2em',
        fontSize: theme.typography.body1.fontSize,
        padding: 0
      },
      '& .ce-toolbar__plus': {
        left: 0
      },
      '& .ce-toolbox': {
        left: 34
      },
      '& .ce-block__content': {
        maxWidth: 'none'
      },
      '& .ce-toolbar__content': {
        maxWidth: 'none'
      }
    }
  };
};
exports.useEditorStyles = useEditorStyles;
var EditorJSWidget = function EditorJSWidget(_ref2) {
  var schema = _ref2.schema,
    storeKeys = _ref2.storeKeys,
    showValidity = _ref2.showValidity,
    valid = _ref2.valid,
    errors = _ref2.errors,
    required = _ref2.required,
    tools = _ref2.tools,
    hideTitle = _ref2.hideTitle;
  var uid = (0, _reactUid.useUID)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focused = _React$useState2[0],
    setFocused = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    ready = _React$useState4[0],
    setReady = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    empty = _React$useState6[0],
    setEmpty = _React$useState6[1];
  var dense = schema.getIn(['view', 'dense']);
  var theme = (0, _styles.useTheme)();
  var styles = useEditorStyles(theme, {
    dense: dense
  });
  return _react["default"].createElement(_FormControl["default"], {
    sx: styles.wrapper
  }, !hideTitle && !schema.getIn(['view', 'hideTitle']) ? _react["default"].createElement(_InputLabel["default"], {
    focused: focused,
    shrink: focused || !empty,
    margin: dense ? 'dense' : undefined,
    error: !valid
  }, _react["default"].createElement(_Translate.TransTitle, {
    schema: schema,
    storeKeys: storeKeys
  })) : null, _react["default"].createElement(_Box["default"], {
    sx: styles.editor,
    className: (0, _clsx["default"])(_Input.inputClasses.underline, focused ? _Input.inputClasses.focused : null)
  }, _react["default"].createElement(_EditorJS.EditorJS, {
    uid: uid,
    ready: ready,
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      return setFocused(false);
    },
    onReady: function onReady() {
      return setReady(true);
    },
    onEmptyChange: function onEmptyChange(e) {
      return setEmpty(e);
    },
    storeKeys: storeKeys,
    tools: tools,
    required: Boolean(schema.get('deleteOnEmpty') || required)
  })), _react["default"].createElement(_LocaleHelperText.ValidityHelperText, {
    errors: errors,
    showValidity: showValidity,
    schema: schema
  }));
};
exports.EditorJSWidget = EditorJSWidget;