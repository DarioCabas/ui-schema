import { List, Map, OrderedMap, Record } from 'immutable';
import { addNestKey } from '@ui-schema/ui-schema/UIStore';
export const storeBuildScopeTree = (storeKeys, scope, store, nestKey = undefined, ordered = false) => {
  const relativeList = [scope];
  if (nestKey) {
    storeKeys = addNestKey(nestKey, storeKeys);
  }
  storeKeys.forEach(key => {
    if (typeof key === 'undefined') return;
    const value = store.getIn(relativeList);
    if (!List.isList(value) && !Map.isMap(value) && !Record.isRecord(value) || typeof key === 'number' && !List.isList(value)) {
      store = store.setIn(relativeList, typeof key === 'number' ? List() : ordered ? OrderedMap() : Map());
    }
    relativeList.push(key);
  });
  return store;
};