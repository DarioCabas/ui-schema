import { List, Map, Record } from 'immutable';
import { addNestKey } from '@ui-schema/ui-schema/UIStore';
export function doExtractValues(storeKeys, store) {
  return {
    value: storeKeys.size ? Record.isRecord(store.getValues()) || Map.isMap(store.getValues()) || List.isList(store.getValues()) ? store.getValues().getIn(storeKeys) : undefined : store.getValues(),
    internalValue: storeKeys.size ? store.getInternals().getIn(addNestKey('internals', storeKeys)) || Map() : store.getInternals()
  };
}