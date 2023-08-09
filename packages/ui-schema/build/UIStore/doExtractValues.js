"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doExtractValues = doExtractValues;
var _immutable = require("immutable");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
function doExtractValues(storeKeys, store) {
  return {
    value: storeKeys.size ? _immutable.Record.isRecord(store.getValues()) || _immutable.Map.isMap(store.getValues()) || _immutable.List.isList(store.getValues()) ? store.getValues().getIn(storeKeys) : undefined : store.getValues(),
    internalValue: storeKeys.size ? store.getInternals().getIn((0, _UIStore.addNestKey)('internals', storeKeys)) || (0, _immutable.Map)() : store.getInternals()
  };
}