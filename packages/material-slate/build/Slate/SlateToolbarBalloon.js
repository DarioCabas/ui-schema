"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlateToolbarBalloon = void 0;
var _react = _interopRequireDefault(require("react"));
var _FormatBold = _interopRequireDefault(require("@mui/icons-material/FormatBold"));
var _FormatItalic = _interopRequireDefault(require("@mui/icons-material/FormatItalic"));
var _FormatUnderlined = _interopRequireDefault(require("@mui/icons-material/FormatUnderlined"));
var _FormatStrikethrough = _interopRequireDefault(require("@mui/icons-material/FormatStrikethrough"));
var _Code = _interopRequireDefault(require("@mui/icons-material/Code"));
var _slateReact = require("slate-react");
var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));
var _slatePlugins = require("@udecode/slate-plugins");
var _IcSuperscript = require("@ui-schema/material-slate/Icons/IcSuperscript");
var _IcSubscript = require("@ui-schema/material-slate/Icons/IcSubscript");
var _SlateToolbarButtons = require("@ui-schema/material-slate/Slate/SlateToolbarButtons");
var _editorIsEnabled = require("@ui-schema/material-slate/Slate/editorIsEnabled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    wrapper: {
      position: 'absolute',
      zIndex: 500,
      background: theme.palette.background.paper,
      whiteSpace: 'nowrap',
      display: function display(_ref) {
        var hidden = _ref.hidden;
        return hidden ? 'none' : 'flex';
      },
      border: '1px solid ' + theme.palette.divider,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1),
      marginTop: function marginTop(_ref2) {
        var direction = _ref2.direction;
        return direction === 'top' ? -9 : 9;
      },
      transition: function transition(_ref3) {
        var hiddenDelay = _ref3.hiddenDelay;
        return hiddenDelay ? '' : 'top 75ms ease-out,left 75ms ease-out';
      },
      boxShadow: theme.shadows[3],
      '&:before': {
        left: '50%',
        content: '" "',
        position: 'absolute',
        transform: 'translateX(-50%)',
        borderColor: theme.palette.divider + ' transparent',
        borderStyle: 'solid',
        top: function top(_ref4) {
          var direction = _ref4.direction;
          return direction === 'top' ? '100%' : 'auto';
        },
        bottom: function bottom(_ref5) {
          var direction = _ref5.direction;
          return direction === 'top' ? 'auto' : '100%';
        },
        borderWidth: function borderWidth(_ref6) {
          var direction = _ref6.direction;
          return direction === 'top' ? '9px 9px 0px' : '0px 8px 8px';
        }
      },
      '&:after': {
        left: '50%',
        content: '" "',
        position: 'absolute',
        marginTop: '-1px',
        transform: 'translateX(-50%)',
        borderColor: theme.palette.divider + ' transparent',
        borderStyle: 'solid',
        top: function top(_ref7) {
          var direction = _ref7.direction;
          return direction === 'top' ? '100%' : 'auto';
        },
        bottom: function bottom(_ref8) {
          var direction = _ref8.direction;
          return direction === 'top' ? 'auto' : '100%';
        },
        borderWidth: function borderWidth(_ref9) {
          var direction = _ref9.direction;
          return direction === 'top' ? '8px 8px 0px' : '0px 8px 8px';
        }
      }
    }
  };
});
var SlateToolbarBalloon = function SlateToolbarBalloon(_ref10) {
  var _ref10$direction = _ref10.direction,
    direction = _ref10$direction === void 0 ? 'top' : _ref10$direction,
    _ref10$hiddenDelay = _ref10.hiddenDelay,
    hiddenDelay = _ref10$hiddenDelay === void 0 ? 0 : _ref10$hiddenDelay,
    enableOnly = _ref10.enableOnly;
  var ref = _react["default"].useRef(null);
  var editor = (0, _slateReact.useSlate)();
  var _useBalloonShow = (0, _slatePlugins.useBalloonShow)({
      editor: editor,
      ref: ref,
      hiddenDelay: hiddenDelay
    }),
    _useBalloonShow2 = _slicedToArray(_useBalloonShow, 1),
    hidden = _useBalloonShow2[0];
  var classes = useStyles({
    hidden: hidden,
    hiddenDelay: hiddenDelay,
    direction: direction
  });
  (0, _slatePlugins.useBalloonMove)({
    editor: editor,
    ref: ref,
    direction: direction
  });
  return _react["default"].createElement(_slatePlugins.PortalBody, null, _react["default"].createElement("div", {
    className: classes.wrapper,
    ref: ref
  }, (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _slatePlugins.MARK_BOLD) && _react["default"].createElement(_SlateToolbarButtons.ToolbarMark, {
    type: _slatePlugins.MARK_BOLD,
    icon: _react["default"].createElement(_FormatBold["default"], null)
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _slatePlugins.MARK_ITALIC) && _react["default"].createElement(_SlateToolbarButtons.ToolbarMark, {
    type: _slatePlugins.MARK_ITALIC,
    icon: _react["default"].createElement(_FormatItalic["default"], null)
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _slatePlugins.MARK_UNDERLINE) && _react["default"].createElement(_SlateToolbarButtons.ToolbarMark, {
    type: _slatePlugins.MARK_UNDERLINE,
    icon: _react["default"].createElement(_FormatUnderlined["default"], null)
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _slatePlugins.MARK_STRIKETHROUGH) && _react["default"].createElement(_SlateToolbarButtons.ToolbarMark, {
    type: _slatePlugins.MARK_STRIKETHROUGH,
    icon: _react["default"].createElement(_FormatStrikethrough["default"], null)
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _slatePlugins.MARK_CODE) && _react["default"].createElement(_SlateToolbarButtons.ToolbarMark, {
    type: _slatePlugins.MARK_CODE,
    icon: _react["default"].createElement(_Code["default"], null)
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _slatePlugins.MARK_SUPERSCRIPT) && _react["default"].createElement(_SlateToolbarButtons.ToolbarMark, {
    type: _slatePlugins.MARK_SUPERSCRIPT,
    clear: _slatePlugins.MARK_SUBSCRIPT,
    icon: _react["default"].createElement(_IcSuperscript.IcSuperscript, null)
  }), (0, _editorIsEnabled.editorIsEnabled)(enableOnly, _slatePlugins.MARK_SUBSCRIPT) && _react["default"].createElement(_SlateToolbarButtons.ToolbarMark, {
    type: _slatePlugins.MARK_SUBSCRIPT,
    clear: _slatePlugins.MARK_SUPERSCRIPT,
    icon: _react["default"].createElement(_IcSubscript.IcSubscript, null)
  })));
};
exports.SlateToolbarBalloon = SlateToolbarBalloon;