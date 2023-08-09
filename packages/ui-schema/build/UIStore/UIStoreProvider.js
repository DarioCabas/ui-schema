"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIConfigProvider = void 0;
exports.UIStoreProvider = UIStoreProvider;
exports.useUI = void 0;
exports.useUIConfig = useUIConfig;
exports.useUIStore = void 0;
var _react = _interopRequireDefault(require("react"));
var _UIStoreActions = require("@ui-schema/ui-schema/UIStoreActions");
var _excluded = ["children"],
  _excluded2 = ["children", "showValidity", "onChange", "store"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UIStoreContextObj = _react["default"].createContext({});
var UIConfigContextObj = _react["default"].createContext({});
var UIConfigProvider = function UIConfigProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var value = _react["default"].useMemo(function () {
    return _objectSpread({}, props);
  }, _toConsumableArray(Object.values(props)));
  return _react["default"].createElement(UIConfigContextObj.Provider, {
    value: value
  }, children);
};
exports.UIConfigProvider = UIConfigProvider;
function UIStoreProvider(_ref2) {
  var children = _ref2.children,
    showValidity = _ref2.showValidity,
    onChange = _ref2.onChange,
    store = _ref2.store,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var ctx = _react["default"].useMemo(function () {
    return {
      showValidity: showValidity,
      store: store
    };
  }, [showValidity, store]);
  return _react["default"].createElement(UIStoreContextObj.Provider, {
    value: ctx
  }, _react["default"].createElement(UIConfigProvider, props, _react["default"].createElement(_UIStoreActions.UIStoreActionsProvider, {
    onChange: onChange
  }, children)));
}
var useUI = function useUI() {
  return useUIStore();
};
exports.useUI = useUI;
var useUIStore = function useUIStore() {
  return _react["default"].useContext(UIStoreContextObj);
};
exports.useUIStore = useUIStore;
function useUIConfig() {
  return _react["default"].useContext(UIConfigContextObj);
}