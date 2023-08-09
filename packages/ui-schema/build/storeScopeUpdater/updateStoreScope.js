"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStoreScope = void 0;
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var updateStoreScope = function updateStoreScope(store, scope, storeKeys, newValue) {
  return store.setIn(storeKeys.size ? (0, _UIStore.prependKey)(storeKeys, scope) : [scope], newValue);
};
exports.updateStoreScope = updateStoreScope;