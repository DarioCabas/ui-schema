"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferencingHandler = void 0;
var _react = _interopRequireDefault(require("react"));
var _Translate = require("@ui-schema/ui-schema/Translate");
var _SchemaRootProvider = require("@ui-schema/ui-schema/SchemaRootProvider");
var _ReferencingHandler = require("@ui-schema/ui-schema/Plugins/ReferencingHandler");
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var _getSchema = require("@ui-schema/ui-schema/Utils/getSchema");
var _excluded = ["rootContext"],
  _excluded2 = ["schema", "definitions"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ReferencingHandler = function ReferencingHandler(_ref) {
  var rootContext = _ref.rootContext,
    props = _objectWithoutProperties(_ref, _excluded);
  var baseSchema = props.schema,
    isVirtual = props.isVirtual;
  var _useSchemaRoot = (0, _SchemaRootProvider.useSchemaRoot)(),
    maybeRootSchema = _useSchemaRoot.schema,
    maybeDefinitions = _useSchemaRoot.definitions,
    nestedRootProps = _objectWithoutProperties(_useSchemaRoot, _excluded2);
  var isRoot = Boolean((0, _SchemaRootProvider.isRootSchema)(baseSchema) || rootContext || baseSchema.get('definitions') || baseSchema.get('$defs'));
  var definitions = isRoot ? baseSchema.get('definitions') || baseSchema.get('$defs') : maybeDefinitions;
  var _useSchemaRef = (0, _ReferencingHandler.useSchemaRef)(maybeRootSchema, definitions, isRoot, baseSchema),
    schema = _useSchemaRef.schema,
    refsPending = _useSchemaRef.refsPending;
  return refsPending && refsPending.size > 0 ? isVirtual ? null : _react["default"].createElement(_Translate.Trans, {
    text: 'labels.loading',
    fallback: 'Loading'
  }) : isRoot ? _react["default"].createElement(_SchemaRootProvider.SchemaRootProvider, _extends({}, nestedRootProps, rootContext || {}, {
    id: (0, _getSchema.getSchemaId)(schema),
    schema: schema,
    definitions: definitions
  }), _react["default"].createElement(_PluginStack.NextPluginRendererMemo, _extends({}, props, {
    schema: schema
  }))) : _react["default"].createElement(_PluginStack.NextPluginRendererMemo, _extends({}, props, {
    schema: schema
  }));
};
exports.ReferencingHandler = ReferencingHandler;