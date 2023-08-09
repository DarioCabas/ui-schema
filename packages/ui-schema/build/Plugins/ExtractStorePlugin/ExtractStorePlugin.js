"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtractStorePlugin = void 0;
var _UIStore = require("@ui-schema/ui-schema/UIStore");
var _PluginStack = require("@ui-schema/ui-schema/PluginStack");
var ExtractStorePlugin = (0, _UIStore.extractValue)(_PluginStack.NextPluginRendererMemo);
exports.ExtractStorePlugin = ExtractStorePlugin;