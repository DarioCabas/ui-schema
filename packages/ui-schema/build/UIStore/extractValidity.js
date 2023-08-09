"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractValidity = void 0;
var _react = _interopRequireDefault(require("react"));
var _UIStoreActions = require("@ui-schema/ui-schema/UIStoreActions");
var _memo = require("@ui-schema/ui-schema/Utils/memo");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var extractValidity = function extractValidity(Component) {
  var ExtractValidity = function ExtractValidity(p) {
    var _useUIStore = (0, _UIStore.useUIStore)(),
      store = _useUIStore.store,
      showValidity = _useUIStore.showValidity;
    var _useUIStoreActions = (0, _UIStoreActions.useUIStoreActions)(),
      onChange = _useUIStoreActions.onChange;
    return _react["default"].createElement(Component, _extends({}, p, {
      validity: p.storeKeys.size ? store === null || store === void 0 ? void 0 : store.getValidity().getIn(p.storeKeys) : store === null || store === void 0 ? void 0 : store.getValidity(),
      onChange: onChange,
      showValidity: p.showValidity || showValidity
    }));
  };
  ExtractValidity.displayName = "ExtractValidity(".concat((0, _memo.getDisplayName)(Component), ")");
  return ExtractValidity;
};
exports.extractValidity = extractValidity;