"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scopeUpdaterInternals = void 0;
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _storeScopeUpdater = require("@ui-schema/ui-schema/storeScopeUpdater");
var _storeBuildScopeTree = require("@ui-schema/ui-schema/storeBuildScopeTree");
var scopeUpdaterInternals = function scopeUpdaterInternals(store, storeKeys, newValue) {
  store = (0, _storeBuildScopeTree.storeBuildScopeTree)(storeKeys, 'internals', store, 'internals', false);
  return (0, _storeScopeUpdater.updateStoreScope)(store, 'internals', storeKeys.size ? (0, _UIStore.addNestKey)('internals', storeKeys) : storeKeys, newValue);
};
exports.scopeUpdaterInternals = scopeUpdaterInternals;