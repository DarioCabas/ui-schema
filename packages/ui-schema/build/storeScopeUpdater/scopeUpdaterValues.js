"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scopeUpdaterValues = void 0;
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _immutable = require("immutable");
var _updateStoreScope = require("@ui-schema/ui-schema/storeScopeUpdater/updateStoreScope");
var _storeBuildScopeTree = require("@ui-schema/ui-schema/storeBuildScopeTree");
var scopeUpdaterValues = function scopeUpdaterValues(store, storeKeys, newValue, action) {
  var _action$schema, _action$schema2;
  store = (0, _storeBuildScopeTree.storeBuildScopeTree)(storeKeys, 'values', store, undefined, true);
  if ((0, _UIStore.shouldDeleteOnEmpty)(newValue, (action === null || action === void 0 ? void 0 : (_action$schema = action.schema) === null || _action$schema === void 0 ? void 0 : _action$schema.get('deleteOnEmpty')) || (action === null || action === void 0 ? void 0 : action.required), action === null || action === void 0 ? void 0 : (_action$schema2 = action.schema) === null || _action$schema2 === void 0 ? void 0 : _action$schema2.get('type'))) {
    if (storeKeys.size) {
      var parentStore = store.getIn((0, _UIStore.prependKey)(storeKeys.splice(storeKeys.size - 1, 1), 'values'));
      if (_immutable.List.isList(parentStore)) {
        store = store.setIn((0, _UIStore.prependKey)(storeKeys, 'values'), null);
      } else if (_immutable.Map.isMap(parentStore) || _immutable.Record.isRecord(parentStore)) {
        store = store.deleteIn((0, _UIStore.prependKey)(storeKeys, 'values'));
      }
    } else {
      store = store.deleteIn(['values']);
    }
    return store;
  }
  return (0, _updateStoreScope.updateStoreScope)(store, 'values', storeKeys, newValue);
};
exports.scopeUpdaterValues = scopeUpdaterValues;