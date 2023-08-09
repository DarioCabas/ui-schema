"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _uiSchema = require("@ui-schema/ui-schema");
var _SlateRenderer = require("@ui-schema/material-slate/Slate/SlateRenderer");
var _ElementMapper = require("@ui-schema/material-slate/SlateElements/ElementMapper");
var _FormWrapper = require("@ui-schema/material-slate/EditorWrapper/FormWrapper");
var _useSlate2 = require("@ui-schema/material-slate/Slate/useSlate");
var _slatePlugins = require("@ui-schema/material-slate/Slate/slatePlugins");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var RichContentBase = function RichContentBase(props) {
  var value = props.value,
    schema = props.schema,
    storeKeys = props.storeKeys,
    errors = props.errors,
    showValidity = props.showValidity,
    valid = props.valid;
  var _useSlate = (0, _useSlate2.useSlate)(schema, value),
    dense = _useSlate.dense,
    focused = _useSlate.focused,
    empty = _useSlate.empty,
    onFocus = _useSlate.onFocus,
    onBlur = _useSlate.onBlur;
  var classes = (0, _FormWrapper.useFormEditorStyles)({
    dense: dense,
    focused: focused
  });
  return _react["default"].createElement(_FormWrapper.FormWrapper, {
    storeKeys: storeKeys,
    schema: schema,
    dense: dense,
    focused: focused,
    empty: empty,
    errors: errors,
    showValidity: showValidity,
    valid: valid,
    classes: classes
  }, _react["default"].createElement(_SlateRenderer.SlateRenderer, _extends({}, props, {
    ElementMapper: _ElementMapper.ElementMapper,
    plugins: _slatePlugins.slatePlugins,
    withPlugins: _slatePlugins.withPlugins,
    onFocus: onFocus,
    onBlur: onBlur
  })));
};
var RichContent = (0, _uiSchema.extractValue)((0, _uiSchema.memo)(RichContentBase));
exports.RichContent = RichContent;