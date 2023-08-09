"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mappingAdvanced = void 0;
var _react = _interopRequireDefault(require("react"));
var _slate = require("slate");
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _slateReact = require("slate-react");
var _pluginOptions = require("@ui-schema/material-slate/Slate/pluginOptions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var mappingAdvanced = _defineProperty({}, _pluginOptions.pluginOptions.todo_li.type, function (_ref) {
  var element = _ref.element,
    children = _ref.children;
  var editor = (0, _slateReact.useSlateStatic)();
  var checked = element.checked;
  var readOnly = (0, _slateReact.useReadOnly)();
  return _react["default"].createElement("div", {
    contentEditable: false
  }, _react["default"].createElement(_Checkbox["default"], {
    checked: Boolean(checked),
    onChange: function onChange(e) {
      var path = _slateReact.ReactEditor.findPath(editor, element);
      _slate.Transforms.setNodes(editor, {
        checked: e.target.checked
      }, {
        at: path
      });
    },
    disabled: readOnly,
    size: 'small',
    style: {
      padding: 4
    }
  }), _react["default"].createElement("span", {
    contentEditable: !readOnly,
    suppressContentEditableWarning: true,
    style: {
      outline: 0
    }
  }, children));
});
exports.mappingAdvanced = mappingAdvanced;