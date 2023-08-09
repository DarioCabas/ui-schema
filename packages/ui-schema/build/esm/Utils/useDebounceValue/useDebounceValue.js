import React from 'react';
export const useDebounceValue = (value, debounceTime, setter) => {
  const timer = React.useRef(undefined);
  const [bounceVal, setBounceVal] = React.useState({
    changed: false,
    value: undefined
  });
  React.useLayoutEffect(() => {
    setBounceVal({
      changed: false,
      value: value
    });
    return () => window.clearTimeout(timer.current);
  }, [value, timer]);
  React.useEffect(() => {
    if (typeof bounceVal.value === 'undefined' || !bounceVal.changed) return;
    timer.current = window.setTimeout(() => {
      setter(bounceVal.value);
    }, debounceTime);
    return () => window.clearTimeout(timer.current);
  }, [bounceVal, setBounceVal, debounceTime, timer, setter]);
  const bubbleBounce = React.useCallback(currentVal => {
    if (bounceVal.value === currentVal) return;
    window.clearTimeout(timer.current);
    setter(bounceVal.value);
  }, [setter, bounceVal]);
  const changeBounceVal = React.useCallback(nextVal => {
    setBounceVal({
      changed: true,
      value: nextVal
    });
  }, [setBounceVal]);
  return {
    bubbleBounce: bubbleBounce,
    bounceVal: bounceVal,
    setBounceVal: setBounceVal,
    changeBounceVal: changeBounceVal
  };
};