import { OrderedMap } from 'immutable';
export const SortPlugin = {
  handle: ({
    schema
  }) => {
    var _schema$get;
    const sortOrder = schema === null || schema === void 0 ? void 0 : schema.get('sortOrder');
    if (!sortOrder) return {};
    const keys = (_schema$get = schema.get('properties')) === null || _schema$get === void 0 ? void 0 : _schema$get.keySeq();
    if (!keys) return {};
    const nonSortedProps = keys.filter(k => !sortOrder.includes(k));
    return {
      schema: schema.set('properties', sortOrder.filter(key => keys.includes(key)).concat(nonSortedProps).reduce((properties, key) => properties.set(key, schema.getIn(['properties', key])), OrderedMap()))
    };
  }
};