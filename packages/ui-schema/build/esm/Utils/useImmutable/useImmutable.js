import React from 'react';
import { isImmutable, Record } from 'immutable';
export function useImmutable(value) {
  var _currentState$current;
  const currentState = React.useRef(value);
  if (!isImmutable(currentState.current) && !Record.isRecord(value) || !((_currentState$current = currentState.current) !== null && _currentState$current !== void 0 && _currentState$current.equals(value))) {
    currentState.current = value;
  }
  return currentState.current;
}