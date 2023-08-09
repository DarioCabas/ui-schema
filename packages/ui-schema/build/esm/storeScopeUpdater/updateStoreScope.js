import { prependKey } from '@ui-schema/ui-schema/UIStore';
export const updateStoreScope = (store, scope, storeKeys, newValue) => {
  return store.setIn(storeKeys.size ? prependKey(storeKeys, scope) : [scope], newValue);
};