export const schemaTypeIs = (isType, expectedType) => {
  return Boolean(typeof isType !== 'undefined' && (typeof isType === 'string' ? isType === expectedType : isType.includes(expectedType)));
};
export const schemaTypeIsNumeric = type => schemaTypeIs(type, 'number') || schemaTypeIs(type, 'integer');
export const schemaTypeIsAny = (isType, expectedTypes) => {
  return Boolean(typeof isType !== 'undefined' && (typeof isType === 'string' ? expectedTypes.includes(isType) : expectedTypes.reduce((c, v) => c || isType.includes(v), false)));
};