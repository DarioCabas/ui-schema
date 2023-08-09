import { Record, Map, List } from 'immutable';
import { schemaTypeIs, schemaTypeIsNumeric } from '@ui-schema/ui-schema/Utils/schemaTypeIs';
import { doExtractValues } from '@ui-schema/ui-schema/UIStore';
const STR_INTERNALS = 'internals';
const STR_VALUES = 'values';
const STR_VALIDITY = 'validity';
export const UIStore = Record({
  values: undefined,
  internals: Map(),
  validity: Map(),
  meta: Map(),
  valuesToJS: function () {
    const values = this.get(STR_VALUES);
    if (Map.isMap(values) || List.isList(values) || Record.isRecord(values)) return values.toJS();
    return values;
  },
  getValues: function () {
    return this.get(STR_VALUES);
  },
  getInternals: function () {
    return this.get(STR_INTERNALS);
  },
  getValidity: function () {
    return this.get(STR_VALIDITY);
  },
  extractValues: function (storeKeys) {
    return doExtractValues(storeKeys, this);
  }
});
export const createStore = values => {
  return new UIStore({
    values,
    internals: Map({
      internals: List.isList(values) ? List() : Map()
    }),
    validity: Map(),
    meta: Map()
  });
};
export const createEmptyStore = (type = 'object') => createStore(type === 'array' ? List([]) : type === 'string' ? '' : type === 'number' || type === 'integer' ? 0 : type === 'boolean' ? false : Map());
export const prependKey = (storeKeys, key) => Array.isArray(storeKeys) ? [key, ...storeKeys] : storeKeys.splice(0, 0, key);
export const shouldDeleteOnEmpty = (value, force, type) => {
  const valueTypeOf = typeof value;
  if (!force && !schemaTypeIsNumeric(type)) return false;
  if (valueTypeOf === 'undefined') return true;
  if (schemaTypeIs(type, 'string') && valueTypeOf === 'string' || schemaTypeIs(type, 'number') && (valueTypeOf === 'number' || valueTypeOf === 'string') || schemaTypeIs(type, 'integer') && (valueTypeOf === 'number' || valueTypeOf === 'string')) {
    return value === '' || valueTypeOf === 'undefined' || valueTypeOf === 'string' && 0 === value.trim().length;
  } else if (schemaTypeIs(type, 'boolean') && valueTypeOf === 'boolean') {
    return !value;
  } else if (schemaTypeIs(type, 'array') && (List.isList(value) || Array.isArray(value))) {
    return List.isList(value) && value.size === 0 || Array.isArray(value) && value.length === 0;
  } else if (schemaTypeIs(type, 'object') && (Map.isMap(value) || Record.isRecord(value) || valueTypeOf === 'object')) {
    return (Map.isMap(value) || Record.isRecord(value)) && value.keySeq().size === 0 || valueTypeOf === 'object' && Object.keys(value).length === 0;
  }
  return false;
};
export const addNestKey = (storeKeysNestedKey, storeKeys) => storeKeysNestedKey ? storeKeys.reduce((nk, sk) => nk === null || nk === void 0 ? void 0 : nk.concat(sk, List([storeKeysNestedKey])), List([storeKeysNestedKey])).splice(-1, 1) : storeKeys;