"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scopeUpdaterValidity = void 0;
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _storeScopeUpdater = require("@ui-schema/ui-schema/storeScopeUpdater");
var scopeUpdaterValidity = function scopeUpdaterValidity(store, storeKeys, newValue) {
  if (storeKeys.contains('__valid')) {
    throw new Error('forbidden property name `__valid` is used, not compatible with UIStore');
  }
  storeKeys = storeKeys.map(function (k) {
    return k === null || k === void 0 ? void 0 : k.toString();
  });
  if (typeof newValue === 'undefined') {
    store = store.deleteIn((0, _UIStore.prependKey)(storeKeys.push('__valid'), 'validity'));
  } else {
    store = (0, _storeScopeUpdater.updateStoreScope)(store, 'validity', storeKeys.push('__valid'), newValue);
  }
  return store;
};
exports.scopeUpdaterValidity = scopeUpdaterValidity;