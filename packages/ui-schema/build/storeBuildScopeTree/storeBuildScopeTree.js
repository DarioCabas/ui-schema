"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeBuildScopeTree = void 0;
var _immutable = require("immutable");
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var storeBuildScopeTree = function storeBuildScopeTree(storeKeys, scope, store) {
  var nestKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var ordered = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var relativeList = [scope];
  if (nestKey) {
    storeKeys = (0, _UIStore.addNestKey)(nestKey, storeKeys);
  }
  storeKeys.forEach(function (key) {
    if (typeof key === 'undefined') return;
    var value = store.getIn(relativeList);
    if (!_immutable.List.isList(value) && !_immutable.Map.isMap(value) && !_immutable.Record.isRecord(value) || typeof key === 'number' && !_immutable.List.isList(value)) {
      store = store.setIn(relativeList, typeof key === 'number' ? (0, _immutable.List)() : ordered ? (0, _immutable.OrderedMap)() : (0, _immutable.Map)());
    }
    relativeList.push(key);
  });
  return store;
};
exports.storeBuildScopeTree = storeBuildScopeTree;