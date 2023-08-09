import { addNestKey } from '@ui-schema/ui-schema/UIStore';
import { updateStoreScope } from '@ui-schema/ui-schema/storeScopeUpdater';
import { storeBuildScopeTree } from '@ui-schema/ui-schema/storeBuildScopeTree';
export const scopeUpdaterInternals = (store, storeKeys, newValue) => {
  store = storeBuildScopeTree(storeKeys, 'internals', store, 'internals', false);
  return updateStoreScope(store, 'internals', storeKeys.size ? addNestKey('internals', storeKeys) : storeKeys, newValue);
};