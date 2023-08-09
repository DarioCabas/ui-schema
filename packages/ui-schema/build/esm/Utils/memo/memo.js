import React from 'react';
import { getDisplayName } from './getDisplayName';
import { isEqualObject } from '@ui-schema/ui-schema/Utils/isEqualObject';
export const isEqual = isEqualObject;
export const memo = Component => {
  const Memoized = React.memo(Component, isEqualObject);
  Memoized.displayName = getDisplayName(Component);
  return Memoized;
};