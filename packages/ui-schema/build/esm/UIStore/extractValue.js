function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { getDisplayName } from '@ui-schema/ui-schema/Utils/memo';
import { useUIStore } from '@ui-schema/ui-schema/UIStore';
import { useUIStoreActions } from '@ui-schema/ui-schema/UIStoreActions';
export function extractValue(Component) {
  const ExtractValue = p => {
    const {
      store,
      showValidity
    } = useUIStore();
    const {
      onChange
    } = useUIStoreActions();
    const values = store === null || store === void 0 ? void 0 : store.extractValues(p.storeKeys);
    return React.createElement(Component, _extends({}, p, {
      showValidity: p.showValidity || showValidity,
      onChange: onChange
    }, values || {}));
  };
  ExtractValue.displayName = "ExtractValue(".concat(getDisplayName(Component), ")");
  return ExtractValue;
}