"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractValue = extractValue;
var _react = _interopRequireDefault(require("react"));
var _memo = require("@ui-schema/ui-schema/Utils/memo");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _UIStoreActions = require("@ui-schema/ui-schema/UIStoreActions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function extractValue(Component) {
  var ExtractValue = function ExtractValue(p) {
    var _useUIStore = (0, _UIStore.useUIStore)(),
      store = _useUIStore.store,
      showValidity = _useUIStore.showValidity;
    var _useUIStoreActions = (0, _UIStoreActions.useUIStoreActions)(),
      onChange = _useUIStoreActions.onChange;
    var values = store === null || store === void 0 ? void 0 : store.extractValues(p.storeKeys);
    return _react["default"].createElement(Component, _extends({}, p, {
      showValidity: p.showValidity || showValidity,
      onChange: onChange
    }, values || {}));
  };
  ExtractValue.displayName = "ExtractValue(".concat((0, _memo.getDisplayName)(Component), ")");
  return ExtractValue;
}