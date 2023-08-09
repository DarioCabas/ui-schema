"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSchemaCombine = exports.handleSchemaCombine = void 0;
var _ConditionalHandler = require("@ui-schema/ui-schema/Plugins/ConditionalHandler");
var _mergeSchema = require("@ui-schema/ui-schema/Utils/mergeSchema");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var handleSchemaCombine = function handleSchemaCombine(schema, value) {
  var allOf = schema.get('allOf');
  if (allOf) {
    allOf.forEach(function (subSchema) {
      schema = (0, _mergeSchema.mergeSchema)(schema, subSchema["delete"]('if')["delete"]('else')["delete"]('then')["delete"]('allOf'));
      schema = (0, _ConditionalHandler.handleIfElseThen)(subSchema, value, schema);
      var allOf1 = subSchema.get('allOf');
      if (allOf1) {
        allOf1.forEach(function (subSchema1) {
          schema = (0, _mergeSchema.mergeSchema)(schema, subSchema1["delete"]('if')["delete"]('else')["delete"]('then'));
          schema = (0, _ConditionalHandler.handleIfElseThen)(subSchema1, value, schema);
        });
      }
    });
  }
  return schema;
};
exports.handleSchemaCombine = handleSchemaCombine;
var useSchemaCombine = function useSchemaCombine(schema, value) {
  return _react["default"].useMemo(function () {
    return handleSchemaCombine(schema, value);
  }, [schema, value]);
};
exports.useSchemaCombine = useSchemaCombine;