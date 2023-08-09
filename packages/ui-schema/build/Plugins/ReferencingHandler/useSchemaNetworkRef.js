"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSchemaNetworkRef = exports.useNetworkRef = void 0;
var _react = _interopRequireDefault(require("react"));
var _UIApi = require("@ui-schema/ui-schema/UIApi");
var _ReferencingHandler = require("@ui-schema/ui-schema/Plugins/ReferencingHandler");
var _SchemaRootProvider = require("@ui-schema/ui-schema/SchemaRootProvider");
var _JSONPointer = require("@ui-schema/ui-schema/JSONPointer");
var _useImmutable = require("@ui-schema/ui-schema/Utils/useImmutable");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var getUrls = function getUrls(schemaRef, id) {
  var schemaUrl = schemaRef;
  if ((0, _ReferencingHandler.isRelUrl)(schemaRef)) {
    schemaUrl = (0, _ReferencingHandler.makeUrlFromRef)(schemaRef, id);
  }
  var cleanUrl = (0, _ReferencingHandler.getCleanRefUrl)(schemaUrl);
  return {
    cleanUrl: cleanUrl,
    schemaUrl: schemaUrl
  };
};
var useSchemaNetworkRef = function useSchemaNetworkRef() {
  var _useUIApi = (0, _UIApi.useUIApi)(),
    loader = _useUIApi.loadSchema,
    schemas = _useUIApi.schemas;
  var _useSchemaRoot = (0, _SchemaRootProvider.useSchemaRoot)(),
    id = _useSchemaRoot.id;
  var loadSchema = _react["default"].useCallback(function (ref) {
    var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
    var versions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var _getUrls = getUrls(ref, rootId === '#' ? id : rootId),
      cleanUrl = _getUrls.cleanUrl;
    if (loader && cleanUrl) {
      loader(cleanUrl, versions).then();
    }
    if (!loader) {
      if (process.env.NODE_ENV === 'development') {
        console.error('ReferencingNetworkLoader `loadSchema` not defined, maybe missing `UIApiProvider`');
      }
    }
  }, [id, loader]);
  var currentSchemas = (0, _useImmutable.useImmutable)(schemas);
  var getSchema = _react["default"].useCallback(function (ref) {
    var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
    var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var _getUrls2 = getUrls(ref, rootId === '#' ? id : rootId),
      cleanUrl = _getUrls2.cleanUrl,
      schemaUrl = _getUrls2.schemaUrl;
    var schema;
    if (typeof cleanUrl === 'string' && schemaUrl && currentSchemas !== null && currentSchemas !== void 0 && currentSchemas.has(cleanUrl)) {
      var tmpSchema = currentSchemas === null || currentSchemas === void 0 ? void 0 : currentSchemas.get(cleanUrl);
      var fragment = (0, _ReferencingHandler.getFragmentFromUrl)(schemaUrl);
      if (fragment) {
        tmpSchema = (0, _JSONPointer.resolvePointer)('#/' + fragment, tmpSchema);
      }
      if (typeof version === 'undefined' || version === tmpSchema.get('version') || version === '*') {
        schema = tmpSchema;
      } else if (process.env.NODE_ENV === 'development') {
        console.log('getSchema.not-found-version', ref, rootId, version, tmpSchema.get('version'));
      }
    }
    return schema;
  }, [id, currentSchemas]);
  return {
    getSchema: getSchema,
    loadSchema: loadSchema
  };
};
exports.useSchemaNetworkRef = useSchemaNetworkRef;
var useNetworkRef = useSchemaNetworkRef;
exports.useNetworkRef = useNetworkRef;