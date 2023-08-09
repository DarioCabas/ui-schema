"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DependentHandler = void 0;
var _react = _interopRequireDefault(require("react"));
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _mergeSchema = require("@ui-schema/ui-schema/Utils/mergeSchema");
var _immutable = require("immutable");
var _excluded = ["dependencies", "dependentSchemas", "dependentRequired"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DependentRenderer = function DependentRenderer(_ref) {
  var _store$getValues;
  var dependencies = _ref.dependencies,
    dependentSchemas = _ref.dependentSchemas,
    dependentRequired = _ref.dependentRequired,
    props = _objectWithoutProperties(_ref, _excluded);
  var schema = props.schema,
    storeKeys = props.storeKeys;
  var _useUIStore = (0, _UIStore.useUIStore)(),
    store = _useUIStore.store;
  var currentValues = storeKeys.size ? store === null || store === void 0 ? void 0 : (_store$getValues = store.getValues()) === null || _store$getValues === void 0 ? void 0 : _store$getValues.getIn(storeKeys) : store === null || store === void 0 ? void 0 : store.getValues();
  var parsedSchema = _react["default"].useMemo(function () {
    var parsedSchema = schema;
    if (!currentValues) return parsedSchema;
    currentValues.keySeq().forEach(function (key) {
      var key_dependencies = dependencies ? dependencies.get(key) : undefined;
      var key_dependentSchemas = dependentSchemas ? dependentSchemas.get(key) : undefined;
      var key_dependentRequired = dependentRequired ? dependentRequired.get(key) : undefined;
      if (typeof currentValues.get(key) !== 'undefined') {
        if (_immutable.Map.isMap(key_dependencies) || _immutable.Map.isMap(key_dependentSchemas)) {
          if (_immutable.Map.isMap(key_dependencies)) {
            parsedSchema = (0, _mergeSchema.mergeSchema)(parsedSchema, key_dependencies);
          } else {
            parsedSchema = (0, _mergeSchema.mergeSchema)(parsedSchema, key_dependentSchemas);
          }
        }
        if (_immutable.List.isList(key_dependencies) || _immutable.List.isList(key_dependentRequired)) {
          var currentRequired = parsedSchema.get('required') || (0, _immutable.List)();
          if (_immutable.List.isList(key_dependencies)) {
            parsedSchema = parsedSchema.set('required', currentRequired.concat(key_dependencies));
          } else {
            parsedSchema = parsedSchema.set('required', currentRequired.concat(key_dependentRequired));
          }
        }
      }
    });
    return parsedSchema;
  }, [currentValues, schema, dependencies, dependentSchemas, dependentRequired]);
  return _react["default"].createElement(_PluginStack.NextPluginRendererMemo, _extends({}, props, {
    schema: parsedSchema
  }));
};
var DependentHandler = function DependentHandler(props) {
  var storeKeys = props.storeKeys,
    schema = props.schema,
    currentPluginIndex = props.currentPluginIndex;
  var next = currentPluginIndex + 1;
  var Plugin = (0, _PluginStack.getNextPlugin)(next, props.widgets);
  var dependencies = schema.get('dependencies');
  var dependentSchemas = schema.get('dependentSchemas');
  var dependentRequired = schema.get('dependentRequired');
  return dependencies || dependentSchemas || dependentRequired ? _react["default"].createElement(DependentRenderer, _extends({
    dependencies: dependencies,
    dependentSchemas: dependentSchemas,
    dependentRequired: dependentRequired,
    storeKeys: storeKeys
  }, props)) : _react["default"].createElement(Plugin, _extends({}, props, {
    currentPluginIndex: next
  }));
};
exports.DependentHandler = DependentHandler;