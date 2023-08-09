"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgetMatcher = widgetMatcher;
var _react = _interopRequireDefault(require("react"));
var _ObjectRenderer = require("@ui-schema/ui-schema/ObjectRenderer");
var _VirtualWidgetRenderer = require("@ui-schema/ui-schema/WidgetRenderer/VirtualWidgetRenderer");
var _schemaTypeToDistinct = require("@ui-schema/ui-schema/Utils/schemaTypeToDistinct");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NoWidget = function NoWidget(_ref) {
  var scope = _ref.scope,
    matching = _ref.matching;
  return _react["default"].createElement(_react["default"].Fragment, null, "missing-", scope, matching ? '-' + matching : '');
};
function widgetMatcher(_ref2) {
  var isVirtual = _ref2.isVirtual,
    WidgetOverride = _ref2.WidgetOverride,
    widgetName = _ref2.widgetName,
    schemaType = _ref2.schemaType,
    widgets = _ref2.widgets,
    NoWidgetCustom = _ref2.NoWidget;
  var NoW = NoWidgetCustom || NoWidget;
  var Widget = null;
  if (isVirtual) {
    Widget = _VirtualWidgetRenderer.VirtualWidgetRenderer;
  } else if (WidgetOverride) {
    Widget = WidgetOverride;
  } else if (widgetName && widgets.custom) {
    if (widgets.custom[widgetName]) {
      Widget = widgets.custom[widgetName];
    } else {
      Widget = function Widget() {
        return _react["default"].createElement(NoW, {
          scope: 'custom',
          matching: widgetName
        });
      };
      Widget.displayName = 'NoWidgetCustom';
    }
  } else if (schemaType && widgets.types) {
    var distinctInputType = (0, _schemaTypeToDistinct.schemaTypeToDistinct)(schemaType);
    if (distinctInputType) {
      if (distinctInputType === 'object') {
        Widget = _ObjectRenderer.ObjectRenderer;
      } else if (widgets.types[distinctInputType]) {
        Widget = widgets.types[distinctInputType];
      } else if (distinctInputType === 'null') {
        Widget = null;
      } else {
        Widget = function Widget() {
          return _react["default"].createElement(NoW, {
            scope: 'type',
            matching: distinctInputType
          });
        };
        Widget.displayName = 'NoWidgetType';
      }
    }
  }
  return Widget;
}