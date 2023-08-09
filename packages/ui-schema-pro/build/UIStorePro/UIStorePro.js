"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStorePro = exports.toHistory = exports.makeStorePro = exports.UIStorePro = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _storeUpdater = require("@ui-schema/ui-schema/storeUpdater");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var defaultDebounceTime = 380;
var defaultUpdateRate = 6;
var defaultMaxItems = 1000;
var UIStoreProRecord = (0, _immutable.Record)({
  activeIndex: 0,
  current: (0, _UIStore.createEmptyStore)('object'),
  list: (0, _immutable.List)([(0, _UIStore.createEmptyStore)('object')]),
  opts: (0, _immutable.Map)()
});
var UIStorePro = function (_UIStoreProRecord) {
  _inherits(UIStorePro, _UIStoreProRecord);
  var _super = _createSuper(UIStorePro);
  function UIStorePro() {
    _classCallCheck(this, UIStorePro);
    return _super.apply(this, arguments);
  }
  return _createClass(UIStorePro);
}(UIStoreProRecord);
exports.UIStorePro = UIStorePro;
var makeStorePro = function makeStorePro(type) {
  var initialStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return new UIStorePro({
    activeIndex: 0,
    current: initialStore || (0, _UIStore.createEmptyStore)(type),
    list: (0, _immutable.List)([initialStore || (0, _UIStore.createEmptyStore)(type)]),
    opts: (0, _immutable.Map)()
  });
};
exports.makeStorePro = makeStorePro;
var initialChangeRater = {
  current: 0,
  last: undefined
};
var defaultStoreOptions = {
  debounceTime: defaultDebounceTime,
  updateRate: defaultUpdateRate,
  initialStore: undefined,
  type: ''
};
var toHistory = function toHistory(prevStore, index) {
  if (index >= 0 && index < prevStore.list.size) {
    return prevStore.set('current', prevStore.list.get(index)).set('activeIndex', index);
  }
  return prevStore;
};
exports.toHistory = toHistory;
var doingValueSelector = ['opts', 'doingValue'];
var useStorePro = function useStorePro() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStoreOptions,
    _ref$debounceTime = _ref.debounceTime,
    debounceTime = _ref$debounceTime === void 0 ? defaultDebounceTime : _ref$debounceTime,
    _ref$updateRate = _ref.updateRate,
    updateRate = _ref$updateRate === void 0 ? defaultUpdateRate : _ref$updateRate,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? defaultStoreOptions.type : _ref$type,
    _ref$initialStore = _ref.initialStore,
    initialStore = _ref$initialStore === void 0 ? undefined : _ref$initialStore;
  var timer = _react["default"].useRef();
  var historyChangeRater = _react["default"].useRef(initialChangeRater);
  var historyDebounce = _react["default"].useRef([]);
  var _React$useState = _react["default"].useState(function () {
      return makeStorePro(type, initialStore);
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    store = _React$useState2[0],
    setStore = _React$useState2[1];
  var onChange = _react["default"].useCallback(function (actions) {
    if (!Array.isArray(actions)) {
      actions = [actions];
    }
    var doValue = actions.reduce(function (doV, action) {
      return doV || action.scopes.indexOf('value') !== -1;
    }, false);
    setStore(function (prevStore) {
      var newStore = prevStore.set('current', (0, _storeUpdater.storeUpdater)(actions)(prevStore.current));
      if (!doValue) {
        if (!newStore.getIn(doingValueSelector)) {
          return newStore.setIn(['list', newStore.activeIndex], newStore.current);
        }
        return newStore;
      }
      newStore = newStore.setIn(doingValueSelector, true);
      historyChangeRater.current.current = historyChangeRater.current.current > defaultMaxItems ? 0 : historyChangeRater.current.current + 1;
      historyChangeRater.current.last = newStore.current.setIn(doingValueSelector, false);
      var historyAdded = false;
      if (historyChangeRater.current.current % updateRate === 0) {
        historyAdded = true;
        historyDebounce.current.push(newStore.current.setIn(doingValueSelector, false));
      }
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(function () {
        if (!historyAdded && updateRate !== 1 && historyChangeRater.current.last) {
          historyDebounce.current.push(historyChangeRater.current.last);
        }
        if (historyDebounce.current.length === 0) return;
        setStore(function (prevStore) {
          var _list;
          var activeIndex = prevStore.activeIndex;
          var list = prevStore.list;
          if (activeIndex < list.size - 1) {
            list = list.splice(activeIndex + 1, list.size - activeIndex);
          }
          list = (_list = list).push.apply(_list, _toConsumableArray(historyDebounce.current));
          historyDebounce.current = [];
          historyChangeRater.current = initialChangeRater;
          return prevStore.set('list', list).set('activeIndex', list.size - 1).setIn(doingValueSelector, false);
        });
      }, debounceTime);
      return newStore;
    });
    return function () {
      return window.clearTimeout(timer.current);
    };
  }, [setStore, timer, historyDebounce, historyChangeRater, debounceTime, updateRate]);
  var redoHistory = _react["default"].useCallback(function () {
    var steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    setStore(function (prevStore) {
      var nextIndex = prevStore.activeIndex + steps;
      return toHistory(prevStore, nextIndex);
    });
  }, [setStore]);
  var undoHistory = _react["default"].useCallback(function () {
    var steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    setStore(function (prevStore) {
      var nextIndex = prevStore.activeIndex - steps;
      return toHistory(prevStore, nextIndex);
    });
  }, [setStore]);
  var reset = _react["default"].useCallback(function (type, initialStore) {
    window.clearTimeout(timer.current);
    historyDebounce.current = [];
    historyChangeRater.current = initialChangeRater;
    setStore(makeStorePro(type, initialStore));
  }, [timer, historyDebounce, historyChangeRater, setStore]);
  return {
    reset: reset,
    onChange: onChange,
    redoHistory: redoHistory,
    undoHistory: undoHistory,
    store: store,
    setStore: setStore
  };
};
exports.useStorePro = useStorePro;