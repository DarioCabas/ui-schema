function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useUIStoreActions } from '@ui-schema/ui-schema/UIStoreActions';
import { getDisplayName } from '@ui-schema/ui-schema/Utils/memo';
import { useUIStore } from '@ui-schema/ui-schema/UIStore';
export const extractValidity = Component => {
  const ExtractValidity = p => {
    const {
      store,
      showValidity
    } = useUIStore();
    const {
      onChange
    } = useUIStoreActions();
    return React.createElement(Component, _extends({}, p, {
      validity: p.storeKeys.size ? store === null || store === void 0 ? void 0 : store.getValidity().getIn(p.storeKeys) : store === null || store === void 0 ? void 0 : store.getValidity(),
      onChange: onChange,
      showValidity: p.showValidity || showValidity
    }));
  };
  ExtractValidity.displayName = "ExtractValidity(".concat(getDisplayName(Component), ")");
  return ExtractValidity;
};