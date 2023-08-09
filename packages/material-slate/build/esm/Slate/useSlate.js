import React from 'react';
export function isSlateEmpty(value) {
  var _value$get, _value$get$get, _value$get$get$get;
  return !(value !== null && value !== void 0 && value.size) || !((_value$get = value.get(0)) !== null && _value$get !== void 0 && (_value$get$get = _value$get.get('children')) !== null && _value$get$get !== void 0 && _value$get$get.size) || ((_value$get$get$get = value.get(0).get('children').get(0)) === null || _value$get$get$get === void 0 ? void 0 : _value$get$get$get.get('text')) === '';
}
export const useSlate = (schema, value) => {
  const [focused, setFocus] = React.useState(false);
  const onBlur = React.useCallback(() => {
    setFocus(false);
  }, [setFocus]);
  const onFocus = React.useCallback(() => {
    setFocus(true);
  }, [setFocus]);
  const dense = schema.getIn(['view', 'dense']);
  const empty = isSlateEmpty(value);
  return {
    focused,
    setFocus,
    onFocus,
    onBlur,
    dense,
    empty
  };
};