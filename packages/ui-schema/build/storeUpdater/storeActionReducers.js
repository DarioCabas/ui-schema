"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeActionReducers = void 0;
var _immutable = require("immutable");
var _moveItem = require("@ui-schema/ui-schema/Utils/moveItem");
var _excluded = ["value", "internal"],
  _excluded2 = ["value", "internal"],
  _excluded3 = ["value", "internal"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var storeActionReducers = function storeActionReducers(action) {
  switch (action.type) {
    case 'list-item-add':
      return function (_ref) {
        var _ref$value = _ref.value,
          value = _ref$value === void 0 ? (0, _immutable.List)() : _ref$value,
          _ref$internal = _ref.internal,
          internal = _ref$internal === void 0 ? (0, _immutable.Map)() : _ref$internal,
          r = _objectWithoutProperties(_ref, _excluded);
        if ('itemValue' in action) {
          value = value.push(action.itemValue);
        } else {
          var schema = action.schema;
          var items = schema.get('items');
          var type = schema.getIn(['items', 'type']);
          value = value.push(type === 'object' ? (0, _immutable.OrderedMap)() : _immutable.List.isList(items) || type === 'array' ? (0, _immutable.List)() : type === 'string' ? '' : type === 'null' ? null : undefined);
        }
        return _objectSpread({
          value: value,
          internal: internal.update('internals', function () {
            var internalInternals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)();
            return internalInternals.push((0, _immutable.Map)());
          })
        }, r);
      };
    case 'list-item-delete':
      return function (_ref2) {
        var _ref2$value = _ref2.value,
          value = _ref2$value === void 0 ? (0, _immutable.List)() : _ref2$value,
          _ref2$internal = _ref2.internal,
          internal = _ref2$internal === void 0 ? (0, _immutable.Map)() : _ref2$internal,
          r = _objectWithoutProperties(_ref2, _excluded2);
        return _objectSpread({
          value: value.splice(action.index, 1),
          internal: internal.update('internals', function () {
            var internalInternals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)();
            return internalInternals.splice(action.index, 1);
          })
        }, r);
      };
    case 'list-item-move':
      return function (_ref3) {
        var _ref3$value = _ref3.value,
          value = _ref3$value === void 0 ? (0, _immutable.List)() : _ref3$value,
          _ref3$internal = _ref3.internal,
          internal = _ref3$internal === void 0 ? (0, _immutable.Map)() : _ref3$internal,
          r = _objectWithoutProperties(_ref3, _excluded3);
        return _objectSpread({
          value: (0, _moveItem.moveItem)(value, action.fromIndex, action.toIndex),
          internal: internal.update('internals', function () {
            var internalInternals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)();
            return (0, _moveItem.moveItem)(internalInternals.size - 1 < action.toIndex ? internalInternals.set(action.toIndex, undefined) : internalInternals.size - 1 < action.fromIndex ? internalInternals.set(action.fromIndex, undefined) : internalInternals, action.fromIndex, action.toIndex);
          })
        }, r);
      };
    case 'set':
      return action.data;
    case 'update':
      return action.updater;
    default:
      throw new Error('store updater for type not found: ' + action.type);
  }
};
exports.storeActionReducers = storeActionReducers;