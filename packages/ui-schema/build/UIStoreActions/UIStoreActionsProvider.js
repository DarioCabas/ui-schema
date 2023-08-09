"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIStoreActionsProvider = UIStoreActionsProvider;
exports.useUIStoreActions = useUIStoreActions;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UIStoreActionsContextObj = _react["default"].createContext({});
function UIStoreActionsProvider(_ref) {
  var children = _ref.children,
    onChange = _ref.onChange;
  var ctx = _react["default"].useMemo(function () {
    return {
      onChange: onChange
    };
  }, [onChange]);
  return _react["default"].createElement(UIStoreActionsContextObj.Provider, {
    value: ctx
  }, children);
}
function useUIStoreActions() {
  return _react["default"].useContext(UIStoreActionsContextObj);
}