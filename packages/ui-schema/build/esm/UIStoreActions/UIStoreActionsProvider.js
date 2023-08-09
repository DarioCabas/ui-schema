import React from 'react';
const UIStoreActionsContextObj = React.createContext({});
export function UIStoreActionsProvider({
  children,
  onChange
}) {
  const ctx = React.useMemo(() => ({
    onChange
  }), [onChange]);
  return React.createElement(UIStoreActionsContextObj.Provider, {
    value: ctx
  }, children);
}
export function useUIStoreActions() {
  return React.useContext(UIStoreActionsContextObj);
}