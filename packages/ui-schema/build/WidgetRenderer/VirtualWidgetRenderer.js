"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualWidgetRenderer = exports.VirtualArrayRenderer = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _ObjectRenderer = require("@ui-schema/ui-schema/ObjectRenderer");
var _schemaTypeToDistinct = require("@ui-schema/ui-schema/Utils/schemaTypeToDistinct");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var VirtualArrayRenderer = function VirtualArrayRenderer(_ref) {
  var storeKeys = _ref.storeKeys,
    value = _ref.value,
    schema = _ref.schema,
    virtualWidgets = _ref.virtualWidgets,
    widgets = _ref.widgets;
  return value ? value.map(function (val, i) {
    return _react["default"].createElement(_PluginStack.PluginStack, {
      key: i,
      schema: _immutable.List.isList(schema.get('items')) ? schema.get('items').get(i) : schema.get('items'),
      parentSchema: schema,
      storeKeys: storeKeys.push(i),
      level: 0,
      virtualWidgets: virtualWidgets,
      widgets: widgets,
      isVirtual: true
    });
  }).valueSeq() : null;
};
exports.VirtualArrayRenderer = VirtualArrayRenderer;
var VirtualWidgetRenderer = function VirtualWidgetRenderer(props) {
  var schema = props.schema,
    value = props.value,
    _props$virtualWidgets = props.virtualWidgets,
    virtualWidgets = _props$virtualWidgets === void 0 ? {
      'default': null,
      'object': _ObjectRenderer.ObjectRenderer,
      'array': VirtualArrayRenderer
    } : _props$virtualWidgets;
  var type = (0, _schemaTypeToDistinct.schemaTypeToDistinct)(schema.get('type'));
  var Widget = virtualWidgets['default'];
  if (type) {
    if (type === 'object') {
      Widget = virtualWidgets['object'];
    } else if (type === 'array') {
      Widget = virtualWidgets['array'];
    }
  }
  return Widget ? _react["default"].createElement(Widget, _extends({}, props, {
    value: value
  })) : null;
};
exports.VirtualWidgetRenderer = VirtualWidgetRenderer;