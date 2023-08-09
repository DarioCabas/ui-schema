import { prependKey } from '@ui-schema/ui-schema/UIStore';
import { updateStoreScope } from '@ui-schema/ui-schema/storeScopeUpdater';
export const scopeUpdaterValidity = (store, storeKeys, newValue) => {
  if (storeKeys.contains('__valid')) {
    throw new Error('forbidden property name `__valid` is used, not compatible with UIStore');
  }
  storeKeys = storeKeys.map(k => k === null || k === void 0 ? void 0 : k.toString());
  if (typeof newValue === 'undefined') {
    store = store.deleteIn(prependKey(storeKeys.push('__valid'), 'validity'));
  } else {
    store = updateStoreScope(store, 'validity', storeKeys.push('__valid'), newValue);
  }
  return store;
};