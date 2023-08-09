"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIProvider = exports.UIGenerator = void 0;
var _react = _interopRequireDefault(require("react"));
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _UIMeta = require("@ui-schema/ui-schema/UIMeta");
var _UIRootRenderer = require("@ui-schema/ui-schema/UIRootRenderer");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UIGenerator = function UIGenerator(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(UIProvider, props, _react["default"].createElement(_UIRootRenderer.UIRootRenderer, {
    schema: props.schema
  }), children);
};
exports.UIGenerator = UIGenerator;
var UIProvider = function UIProvider(_ref2) {
  var children = _ref2.children,
    store = _ref2.store,
    onChange = _ref2.onChange,
    widgets = _ref2.widgets,
    t = _ref2.t,
    showValidity = _ref2.showValidity;
  return _react["default"].createElement(_UIMeta.UIMetaProvider, {
    widgets: widgets,
    t: t
  }, _react["default"].createElement(_UIStore.UIStoreProvider, {
    store: store,
    onChange: onChange,
    showValidity: showValidity
  }, children));
};
exports.UIProvider = UIProvider;