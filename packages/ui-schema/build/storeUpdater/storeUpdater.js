"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeUpdater = exports.scopeUpdaterMapDefault = exports.getScopedValueFactory = exports.createStoreUpdater = void 0;
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _storeScopeUpdater = require("@ui-schema/ui-schema/storeScopeUpdater");
var _storeUpdater = require("@ui-schema/ui-schema/storeUpdater");
var getScopedValueFactory = function getScopedValueFactory(scope, nestKey) {
  return function (storeKeys, store) {
    return store.getIn(storeKeys.size ? (0, _UIStore.prependKey)(nestKey ? (0, _UIStore.addNestKey)(nestKey, storeKeys) : storeKeys, scope) : [scope]);
  };
};
exports.getScopedValueFactory = getScopedValueFactory;
var scopeUpdaterMapDefault = {
  value: {
    setter: _storeScopeUpdater.scopeUpdaterValues,
    getter: getScopedValueFactory('values')
  },
  internal: {
    setter: _storeScopeUpdater.scopeUpdaterInternals,
    getter: getScopedValueFactory('internals', 'internals')
  },
  valid: {
    setter: _storeScopeUpdater.scopeUpdaterValidity,
    getter: getScopedValueFactory('validity')
  },
  meta: {
    setter: function setter(store, _storeKeys, newValue) {
      return store.set('meta', newValue);
    },
    getter: function getter(_storeKeys, store) {
      return store.meta;
    }
  }
};
exports.scopeUpdaterMapDefault = scopeUpdaterMapDefault;
var createStoreUpdater = function createStoreUpdater(actionReducers, scopeUpdaterMap) {
  return function (actions) {
    if (!Array.isArray(actions)) {
      actions = [actions];
    }
    return function (oldStore) {
      return actions.reduce(function (store, action) {
        var scopes = action.scopes,
          effect = action.effect,
          storeKeys = action.storeKeys;
        var scopeUpdater = scopes.reduce(function (su, scope) {
          if (!scopeUpdaterMap[scope]) {
            throw new Error('scopeUpdater for `' + scope + '` not found');
          }
          su[scope] = scopeUpdaterMap[scope];
          return su;
        }, {});
        var handler = actionReducers(action);
        var res;
        if (typeof handler === 'function') {
          var values = scopes.reduce(function (vs, scope) {
            var su = scopeUpdater[scope];
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
        store = scopes.reduce(function (s, scope) {
          var su = scopeUpdater[scope];
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
};
exports.createStoreUpdater = createStoreUpdater;
var storeUpdater = function storeUpdater(actions) {
  return createStoreUpdater(_storeUpdater.storeActionReducers, scopeUpdaterMapDefault)(actions);
};
exports.storeUpdater = storeUpdater;