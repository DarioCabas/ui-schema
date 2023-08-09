import { prependKey, shouldDeleteOnEmpty } from '@ui-schema/ui-schema/UIStore';
import { List, Map, Record } from 'immutable';
import { updateStoreScope } from '@ui-schema/ui-schema/storeScopeUpdater/updateStoreScope';
import { storeBuildScopeTree } from '@ui-schema/ui-schema/storeBuildScopeTree';
export const scopeUpdaterValues = (store, storeKeys, newValue, action) => {
  var _action$schema, _action$schema2;
  store = storeBuildScopeTree(storeKeys, 'values', store, undefined, true);
  if (shouldDeleteOnEmpty(newValue, (action === null || action === void 0 ? void 0 : (_action$schema = action.schema) === null || _action$schema === void 0 ? void 0 : _action$schema.get('deleteOnEmpty')) || (action === null || action === void 0 ? void 0 : action.required), action === null || action === void 0 ? void 0 : (_action$schema2 = action.schema) === null || _action$schema2 === void 0 ? void 0 : _action$schema2.get('type'))) {
    if (storeKeys.size) {
      const parentStore = store.getIn(prependKey(storeKeys.splice(storeKeys.size - 1, 1), 'values'));
      if (List.isList(parentStore)) {
        store = store.setIn(prependKey(storeKeys, 'values'), null);
      } else if (Map.isMap(parentStore) || Record.isRecord(parentStore)) {
        store = store.deleteIn(prependKey(storeKeys, 'values'));
      }
    } else {
      store = store.deleteIn(['values']);
    }
    return store;
  }
  return updateStoreScope(store, 'values', storeKeys, newValue);
};