"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferencingNetworkHandler = void 0;
var _react = _interopRequireDefault(require("react"));
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _Trans = require("@ui-schema/ui-schema/Translate/Trans");
var _ReferencingHandler = require("@ui-schema/ui-schema/Plugins/ReferencingHandler");
var _excluded = ["Plugin", "currentPluginIndex"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RefLoader = function RefLoader(_ref) {
  var _schema;
  var Plugin = _ref.Plugin,
    currentPluginIndex = _ref.currentPluginIndex,
    props = _objectWithoutProperties(_ref, _excluded);
  var schema = props.schema,
    schemaRef = props.schemaRef,
    isVirtual = props.isVirtual;
  var _useSchemaNetworkRef = (0, _ReferencingHandler.useSchemaNetworkRef)(),
    loadSchema = _useSchemaNetworkRef.loadSchema,
    getSchema = _useSchemaNetworkRef.getSchema;
  var schemaVersion = (_schema = schema) === null || _schema === void 0 ? void 0 : _schema.get('version');
  var loadedSchema = getSchema(schemaRef, undefined, schemaVersion);
  var loaded = Boolean(loadedSchema);
  if (loaded) {
    schema = loadedSchema;
  }
  _react["default"].useEffect(function () {
    if (!loaded) {
      loadSchema(schemaRef, undefined, [schemaVersion]);
    }
  }, [loadSchema, schemaRef, schemaVersion, loaded]);
  return !loaded ? isVirtual ? null : _react["default"].createElement(_Trans.Trans, {
    text: 'labels.loading',
    fallback: 'Loading'
  }) : _react["default"].createElement(Plugin, _extends({}, props, {
    currentPluginIndex: currentPluginIndex,
    schema: schema
  }));
};
var ReferencingNetworkHandler = function ReferencingNetworkHandler(props) {
  var schema = props.schema,
    currentPluginIndex = props.currentPluginIndex;
  var next = currentPluginIndex + 1;
  var Plugin = (0, _PluginStack.getNextPlugin)(next, props.widgets);
  var ref = schema.get('$ref');
  return ref && ref.indexOf('#') !== 0 ? _react["default"].createElement(RefLoader, _extends({}, props, {
    Plugin: Plugin,
    currentPluginIndex: next,
    schemaRef: ref
  })) : _react["default"].createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next
  }));
};
exports.ReferencingNetworkHandler = ReferencingNetworkHandler;