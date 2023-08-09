"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaLocalCachePath = exports.isLoaded = exports.UIApiProvider = exports.UIApiContext = exports.PROGRESS_START = exports.PROGRESS_NONE = exports.PROGRESS_ERROR = exports.PROGRESS_DONE = void 0;
exports.useProgress = useProgress;
exports.useUIApi = void 0;
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _createMap = require("@ui-schema/ui-schema/Utils/createMap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PROGRESS_NONE = false;
exports.PROGRESS_NONE = PROGRESS_NONE;
var PROGRESS_START = 'start';
exports.PROGRESS_START = PROGRESS_START;
var PROGRESS_DONE = true;
exports.PROGRESS_DONE = PROGRESS_DONE;
var PROGRESS_ERROR = 'error';
exports.PROGRESS_ERROR = PROGRESS_ERROR;
function useProgress() {
  return _react["default"].useState(PROGRESS_NONE);
}
var UIApiContext = _react["default"].createContext({});
exports.UIApiContext = UIApiContext;
var useUIApi = function useUIApi() {
  return _react["default"].useContext(UIApiContext);
};
exports.useUIApi = useUIApi;
var schemaLocalCachePath = 'uischema-cache' + (typeof window === 'undefined' ? 0 : window.location.port);
exports.schemaLocalCachePath = schemaLocalCachePath;
var initialState = function initialState(_ref) {
  var _ref$noCache = _ref.noCache,
    noCache = _ref$noCache === void 0 ? false : _ref$noCache;
  var cached;
  if (!noCache) {
    var _window, _window$localStorage;
    var cachedRaw = (_window = window) === null || _window === void 0 ? void 0 : (_window$localStorage = _window.localStorage) === null || _window$localStorage === void 0 ? void 0 : _window$localStorage.getItem(schemaLocalCachePath);
    if (cachedRaw) {
      try {
        cached = JSON.parse(cachedRaw);
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.error('invalid localStorage schema cache', e);
        }
      }
    }
  }
  return (0, _immutable.Map)({
    schemas: cached ? (0, _createMap.createOrderedMap)(cached) : (0, _immutable.Map)()
  });
};
function reducer(state) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (action.type === 'SCHEMA_LOADED') {
    return function () {
      var tmpState = state.setIn(['schemas', action.id], (0, _createMap.createOrderedMap)(action.value));
      if (!action.noCache) {
        var _window2, _window2$localStorage;
        (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$localStorage = _window2.localStorage) === null || _window2$localStorage === void 0 ? void 0 : _window2$localStorage.setItem(schemaLocalCachePath, JSON.stringify(tmpState.get('schemas').toJS()));
      }
      return tmpState;
    }();
  }
  return state;
}
var schemasLoaded = {
  schemas: {}
};
var isLoaded = function isLoaded(schemas, ref, version) {
  return !ref ? false : ref && (schemas === null || schemas === void 0 ? void 0 : schemas.get(ref)) && (version && (schemas === null || schemas === void 0 ? void 0 : schemas.getIn([ref, 'version'])) === version || (schemas === null || schemas === void 0 ? void 0 : schemas.getIn([ref, 'version'])) === '*' || !(schemas !== null && schemas !== void 0 && schemas.getIn([ref, 'version'])));
};
exports.isLoaded = isLoaded;
var UIApiProvider = function UIApiProvider(_ref2) {
  var loadSchema = _ref2.loadSchema,
    noCache = _ref2.noCache,
    children = _ref2.children;
  var _React$useReducer = _react["default"].useReducer(reducer, {
      noCache: noCache
    }, initialState),
    _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var loadSchemaFn = _react["default"].useCallback(function (url) {
    if (schemasLoaded.schemas[url] === PROGRESS_START || schemasLoaded.schemas[url] === PROGRESS_DONE) return Promise.resolve(schemasLoaded.schemas[url]);
    schemasLoaded.schemas[url] = PROGRESS_START;
    return loadSchema(url).then(function (loadedSchema) {
      schemasLoaded.schemas[url] = PROGRESS_DONE;
      dispatch({
        type: 'SCHEMA_LOADED',
        id: url,
        value: loadedSchema,
        noCache: noCache
      });
      return PROGRESS_DONE;
    })["catch"](function () {
      schemasLoaded.schemas[url] = PROGRESS_ERROR;
      return PROGRESS_ERROR;
    });
  }, [loadSchema, noCache]);
  var contextValue = _react["default"].useMemo(function () {
    return {
      schemas: state.get('schemas'),
      loadSchema: loadSchemaFn
    };
  }, [state, loadSchemaFn]);
  return _react["default"].createElement(UIApiContext.Provider, {
    value: contextValue
  }, children);
};
exports.UIApiProvider = UIApiProvider;