function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { List, Map } from 'immutable';
import { resolveRef, SchemaRefPending } from '@ui-schema/ui-schema/Plugins/ReferencingHandler/resolveRef';
import { isRootSchema } from '@ui-schema/ui-schema/SchemaRootProvider';
import { getSchemaId } from '@ui-schema/ui-schema/Utils/getSchema';
const handleResolve = (keywords, condition, schema, context, recursive, pending) => {
  Object.keys(keywords).forEach(keyword => {
    const schemaMap = schema.get(keyword);
    if (schemaMap && condition(schemaMap)) {
      schema = schema.set(keyword, schemaMap.map(subSchema => {
        const res = parseRefs(subSchema, context, keywords[keyword] || recursive, pending);
        pending = res.pending;
        return res.schema;
      }));
    }
  });
  return {
    schema,
    pending
  };
};
const checkNestedMapSchema = {
  properties: false
};
const checkNestedArraySchema = {};
const parseRefsInRenderingKeywords = (schema, context, recursive, pending = Map()) => {
  let res = {
    schema,
    pending
  };
  res = handleResolve(checkNestedMapSchema, schemaMap => Map.isMap(schemaMap), res.schema, context, recursive, res.pending);
  res = handleResolve(checkNestedArraySchema, schemaList => List.isList(schemaList), res.schema, context, recursive, res.pending);
  return res;
};
const checkConditionalNestedMapSchema = {
  patternProperties: true,
  dependencies: false,
  dependentSchemas: false
};
const checkConditionalNestedArraySchema = {
  allOf: false,
  oneOf: false,
  anyOf: false,
  items: false
};
const checkSchema = {
  if: true,
  else: false,
  then: false,
  not: false,
  propertyNames: true,
  contains: true
};
const parseRefsInConditionalKeywords = (schema, context, recursive = false, pending = Map()) => {
  let res = {
    schema,
    pending
  };
  Object.keys(checkSchema).forEach(keyword => {
    const schemaCond = res.schema.get(keyword);
    if (schemaCond && Map.isMap(schemaCond)) {
      const resCheckSchema = parseRefs(schemaCond, context, checkSchema[keyword] || recursive, res.pending);
      res.schema = res.schema.set(keyword, resCheckSchema.schema);
      res.pending = resCheckSchema.pending;
    }
  });
  res = handleResolve(checkConditionalNestedMapSchema, schemaMap => Map.isMap(schemaMap), res.schema, context, true, res.pending);
  res = handleResolve(checkConditionalNestedArraySchema, schemaList => List.isList(schemaList), res.schema, context, recursive, res.pending);
  const items = res.schema.get('items');
  if (items && Map.isMap(items)) {
    const itemsSchema = parseRefs(items, context, recursive, res.pending);
    res.schema = res.schema.set('items', itemsSchema.schema);
    res.pending = itemsSchema.pending;
  }
  return res;
};
export const parseRefs = (schema, context, recursive = false, pending = Map()) => {
  const ref = schema.get('$ref');
  const schemaVersion = schema.get('version');
  if (ref) {
    try {
      let resolved = resolveRef(ref, context, schemaVersion);
      schema = resolved ? resolved.mergeDeep(schema.delete('version').delete('$ref')) : schema;
    } catch (e) {
      if (e instanceof SchemaRefPending) {
        const id = context.id || '#';
        pending = pending.updateIn([id, ref], (refPref = List()) => {
          const v = schema.get('version') || '*';
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
  if (isRootSchema(schema)) {
    context = _objectSpread({}, context);
    context.id = getSchemaId(schema);
    context.root = schema;
    context.defs = schema.get('definitions') || schema.get('$defs');
  }
  let res = {
    schema,
    pending
  };
  res = parseRefsInConditionalKeywords(res.schema, context, recursive, res.pending);
  if (recursive) {
    res = parseRefsInRenderingKeywords(res.schema, context, recursive, res.pending);
  }
  return res;
};