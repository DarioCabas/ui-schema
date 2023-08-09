"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSchemaRef = void 0;
var _ReferencingHandler = require("@ui-schema/ui-schema/Plugins/ReferencingHandler");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useSchemaRef = function useSchemaRef(maybeRootSchema, definitions, isRoot, schema) {
  var _useSchemaNetworkRef = (0, _ReferencingHandler.useSchemaNetworkRef)(),
    getSchema = _useSchemaNetworkRef.getSchema,
    loadSchema = _useSchemaNetworkRef.loadSchema;
  var parseRes = _react["default"].useMemo(function () {
    return (0, _ReferencingHandler.parseRefs)(schema, {
      defs: definitions,
      root: isRoot ? schema : maybeRootSchema,
      getLoadedSchema: getSchema
    });
  }, [schema, definitions, isRoot, maybeRootSchema, getSchema]);
  var refsPending = parseRes.pending;
  if (refsPending.size <= 0) {
    schema = parseRes.schema;
  }
  _react["default"].useEffect(function () {
    if (refsPending.size > 0) {
      refsPending.forEach(function (refs, rootId) {
        refs.forEach(function (versions, refId) {
          loadSchema(refId, rootId, versions === null || versions === void 0 ? void 0 : versions.toArray());
        });
      });
    }
  }, [refsPending, loadSchema]);
  return {
    schema: schema,
    refsPending: refsPending
  };
};
exports.useSchemaRef = useSchemaRef;