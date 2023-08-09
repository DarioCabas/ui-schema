import { prependKey, addNestKey } from '@ui-schema/ui-schema/UIStore';
import { scopeUpdaterValues, scopeUpdaterInternals, scopeUpdaterValidity } from '@ui-schema/ui-schema/storeScopeUpdater';
import { storeActionReducers } from '@ui-schema/ui-schema/storeUpdater';
export const getScopedValueFactory = (scope, nestKey) => (storeKeys, store) => store.getIn(storeKeys.size ? prependKey(nestKey ? addNestKey(nestKey, storeKeys) : storeKeys, scope) : [scope]);
export const scopeUpdaterMapDefault = {
  value: {
    setter: scopeUpdaterValues,
    getter: getScopedValueFactory('values')
  },
  internal: {
    setter: scopeUpdaterInternals,
    getter: getScopedValueFactory('internals', 'internals')
  },
  valid: {
    setter: scopeUpdaterValidity,
    getter: getScopedValueFactory('validity')
  },
  meta: {
    setter: (store, _storeKeys, newValue) => store.set('meta', newValue),
    getter: (_storeKeys, store) => store.meta
  }
};
export const createStoreUpdater = (actionReducers, scopeUpdaterMap) => {
  return actions => {
    if (!Array.isArray(actions)) {
      actions = [actions];
    }
    return oldStore => actions.reduce((store, action) => {
      const {
        scopes,
        effect,
        storeKeys
      } = action;
      const scopeUpdater = scopes.reduce((su, scope) => {
        if (!scopeUpdaterMap[scope]) {
          throw new Error('scopeUpdater for `' + scope + '` not found');
        }
        su[scope] = scopeUpdaterMap[scope];
        return su;
      }, {});
      const handler = actionReducers(action);
      let res;
      if (typeof handler === 'function') {
        const values = scopes.reduce((vs, scope) => {
          const su = scopeUpdater[scope];
          if (!su || 'noStore' in su && su.noStore) return vs;
          if ('getter' in su) {
            vs[scope] = su.getter(storeKeys, store);
          }
          return vs;
        }, {});
        res = handler(values);
      } else {
        res = handler;
      }
      store = scopes.reduce((s, scope) => {
        const su = scopeUpdater[scope];
        if (!su || 'noStore' in su && su.noStore) return s;
        if ('setter' in su) {
          s = su.setter(s, storeKeys, res[scope], action);
        }
        return s;
      }, store);
      if (effect) {
        effect(res, store);
      }
      return store;
    }, oldStore);
  };
};
export const storeUpdater = actions => {
  return createStoreUpdater(storeActionReducers, scopeUpdaterMapDefault)(actions);
};