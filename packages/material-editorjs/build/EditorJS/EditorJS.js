"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorJS = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactEditorJs = _interopRequireDefault(require("react-editor-js"));
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _immutable = require("immutable");
var _createMap = require("@ui-schema/ui-schema/Utils/createMap/createMap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EditorJSBase = function EditorJSBase(_ref) {
  var _value$get;
  var uid = _ref.uid,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onReady = _ref.onReady,
    ready = _ref.ready,
    onChange = _ref.onChange,
    storeKeys = _ref.storeKeys,
    required = _ref.required,
    value = _ref.value,
    internalValue = _ref.internalValue,
    onEmptyChange = _ref.onEmptyChange,
    tools = _ref.tools;
  var editorRef = _react["default"].useRef();
  var currentState = _react["default"].useRef(undefined);
  var onChangeEditor = _react["default"].useCallback(function (_api, newData) {
    var _currentState$current, _currentState$current2;
    var newValue = (0, _createMap.fromJSOrdered)(newData);
    if (!((_currentState$current = currentState.current) !== null && _currentState$current !== void 0 && (_currentState$current2 = _currentState$current.get('blocks')) !== null && _currentState$current2 !== void 0 && _currentState$current2.equals(newValue === null || newValue === void 0 ? void 0 : newValue.get('blocks')))) {
      onChange({
        storeKeys: storeKeys,
        scopes: ['value', 'internal'],
        type: 'update',
        updater: function updater(_ref2) {
          var _currentState$current3, _currentState$current4;
          var _ref2$internal = _ref2.internal,
            currentInternal = _ref2$internal === void 0 ? (0, _immutable.Map)() : _ref2$internal;
          currentState.current = newValue;
          return {
            value: currentState.current,
            internal: currentInternal.set('isEmpty', Boolean(!(((_currentState$current3 = currentState.current) === null || _currentState$current3 === void 0 ? void 0 : (_currentState$current4 = _currentState$current3.get('blocks')) === null || _currentState$current4 === void 0 ? void 0 : _currentState$current4.size) > 0)))
          };
        },
        schema: (0, _immutable.Map)({
          type: 'object'
        }),
        required: required
      });
    }
  }, [onChange, storeKeys, required, currentState]);
  var isEmpty = internalValue.get('isEmpty') || !((value === null || value === void 0 ? void 0 : (_value$get = value.get('blocks')) === null || _value$get === void 0 ? void 0 : _value$get.size) > 0);
  _react["default"].useEffect(function () {
    var _currentState$current5, _currentState$current6, _currentState$current7;
    if (ready && editorRef.current && (value && !((_currentState$current5 = currentState.current) !== null && _currentState$current5 !== void 0 && (_currentState$current6 = _currentState$current5.get('blocks')) !== null && _currentState$current6 !== void 0 && _currentState$current6.equals(value === null || value === void 0 ? void 0 : value.get('blocks'))) || !value && currentState.current && !((_currentState$current7 = currentState.current) !== null && _currentState$current7 !== void 0 && _currentState$current7.get('blocks').equals((0, _immutable.List)())))) {
      editorRef.current.clear();
      if (value) {
        currentState.current = value;
        editorRef.current.render(value.toJS());
      } else {
        currentState.current = (0, _createMap.fromJSOrdered)({
          blocks: []
        });
      }
      onChange({
        storeKeys: storeKeys,
        scopes: ['internal'],
        type: 'update',
        updater: function updater(_ref3) {
          var _value$get2;
          var _ref3$internal = _ref3.internal,
            currentInternal = _ref3$internal === void 0 ? (0, _immutable.Map)() : _ref3$internal;
          return {
            internal: currentInternal.set('isEmpty', Boolean(!((value === null || value === void 0 ? void 0 : (_value$get2 = value.get('blocks')) === null || _value$get2 === void 0 ? void 0 : _value$get2.size) > 0)))
          };
        },
        schema: (0, _immutable.Map)({
          type: 'object'
        }),
        required: required
      });
    }
  }, [value, ready, editorRef, currentState, isEmpty, onChange, required, storeKeys, onEmptyChange]);
  _react["default"].useEffect(function () {
    onEmptyChange(Boolean(typeof isEmpty === 'undefined' ? true : isEmpty));
  }, [isEmpty, onEmptyChange]);
  return _react["default"].createElement(_reactEditorJs["default"], {
    data: undefined,
    tools: tools,
    instanceRef: function instanceRef(instance) {
      return editorRef.current = instance;
    },
    enableReInitialize: false,
    onReady: onReady,
    onChange: onChangeEditor,
    holder: 'uis-' + uid + '-editor',
    minHeight: 0
  }, _react["default"].createElement("div", {
    id: 'uis-' + uid + '-editor',
    tabIndex: -1,
    onFocus: onFocus,
    onBlur: onBlur,
    style: {
      visibility: ready ? 'visible' : 'hidden',
      height: ready ? 'auto' : 0
    }
  }));
};
var EditorJS = (0, _UIStore.extractValue)(EditorJSBase);
exports.EditorJS = EditorJS;