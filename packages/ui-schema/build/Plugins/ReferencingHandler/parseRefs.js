"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRefs = void 0;
var _immutable = require("immutable");
var _resolveRef = require("@ui-schema/ui-schema/Plugins/ReferencingHandler/resolveRef");
var _SchemaRootProvider = require("@ui-schema/ui-schema/SchemaRootProvider");
var _getSchema = require("@ui-schema/ui-schema/Utils/getSchema");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var handleResolve = function handleResolve(keywords, condition, schema, context, recursive, pending) {
  Object.keys(keywords).forEach(function (keyword) {
    var schemaMap = schema.get(keyword);
    if (schemaMap && condition(schemaMap)) {
      schema = schema.set(keyword, schemaMap.map(function (subSchema) {
        var res = parseRefs(subSchema, context, keywords[keyword] || recursive, pending);
        pending = res.pending;
        return res.schema;
      }));
    }
  });
  return {
    schema: schema,
    pending: pending
  };
};
var checkNestedMapSchema = {
  properties: false
};
var checkNestedArraySchema = {};
var parseRefsInRenderingKeywords = function parseRefsInRenderingKeywords(schema, context, recursive) {
  var pending = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _immutable.Map)();
  var res = {
    schema: schema,
    pending: pending
  };
  res = handleResolve(checkNestedMapSchema, function (schemaMap) {
    return _immutable.Map.isMap(schemaMap);
  }, res.schema, context, recursive, res.pending);
  res = handleResolve(checkNestedArraySchema, function (schemaList) {
    return _immutable.List.isList(schemaList);
  }, res.schema, context, recursive, res.pending);
  return res;
};
var checkConditionalNestedMapSchema = {
  patternProperties: true,
  dependencies: false,
  dependentSchemas: false
};
var checkConditionalNestedArraySchema = {
  allOf: false,
  oneOf: false,
  anyOf: false,
  items: false
};
var checkSchema = {
  "if": true,
  "else": false,
  then: false,
  not: false,
  propertyNames: true,
  contains: true
};
var parseRefsInConditionalKeywords = function parseRefsInConditionalKeywords(schema, context) {
  var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var pending = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _immutable.Map)();
  var res = {
    schema: schema,
    pending: pending
  };
  Object.keys(checkSchema).forEach(function (keyword) {
    var schemaCond = res.schema.get(keyword);
    if (schemaCond && _immutable.Map.isMap(schemaCond)) {
      var resCheckSchema = parseRefs(schemaCond, context, checkSchema[keyword] || recursive, res.pending);
      res.schema = res.schema.set(keyword, resCheckSchema.schema);
      res.pending = resCheckSchema.pending;
    }
  });
  res = handleResolve(checkConditionalNestedMapSchema, function (schemaMap) {
    return _immutable.Map.isMap(schemaMap);
  }, res.schema, context, true, res.pending);
  res = handleResolve(checkConditionalNestedArraySchema, function (schemaList) {
    return _immutable.List.isList(schemaList);
  }, res.schema, context, recursive, res.pending);
  var items = res.schema.get('items');
  if (items && _immutable.Map.isMap(items)) {
    var itemsSchema = parseRefs(items, context, recursive, res.pending);
    res.schema = res.schema.set('items', itemsSchema.schema);
    res.pending = itemsSchema.pending;
  }
  return res;
};
var parseRefs = function parseRefs(schema, context) {
  var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var pending = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _immutable.Map)();
  var ref = schema.get('$ref');
  var schemaVersion = schema.get('version');
  if (ref) {
    try {
      var resolved = (0, _resolveRef.resolveRef)(ref, context, schemaVersion);
      schema = resolved ? resolved.mergeDeep(schema["delete"]('version')["delete"]('$ref')) : schema;
    } catch (e) {
      if (e instanceof _resolveRef.SchemaRefPending) {
        var id = context.id || '#';
        pending = pending.updateIn([id, ref], function () {
          var refPref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.List)();
          var v = schema.get('version') || '*';
          if (!refPref.contains(v)) {
            refPref = refPref.push(v);
          }
          return refPref;
        });
      } else {
        throw e;
      }
    }
  }
  if ((0, _SchemaRootProvider.isRootSchema)(schema)) {
    context = _objectSpread({}, context);
    context.id = (0, _getSchema.getSchemaId)(schema);
    context.root = schema;
    context.defs = schema.get('definitions') || schema.get('$defs');
  }
  var res = {
    schema: schema,
    pending: pending
  };
  res = parseRefsInConditionalKeywords(res.schema, context, recursive, res.pending);
  if (recursive) {
    res = parseRefsInRenderingKeywords(res.schema, context, recursive, res.pending);
  }
  return res;
};
exports.parseRefs = parseRefs;