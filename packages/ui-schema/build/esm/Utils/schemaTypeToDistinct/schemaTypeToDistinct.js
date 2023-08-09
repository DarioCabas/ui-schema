import { List } from 'immutable';
export const schemaTypeToDistinct = (schemaType, noInputTypes = ['null']) => {
  let distinctInputType;
  if (!schemaType) return distinctInputType;
  if (typeof schemaType === 'string') {
    distinctInputType = schemaType;
  } else if (Array.isArray(schemaType) && schemaType.length === 1 || 'size' in schemaType && schemaType.size === 1) {
    distinctInputType = schemaType.join();
  } else {
    const reducedTypes = schemaType.reduce((c, v) => noInputTypes.includes(v) ? c : c.push(v), List());
    if (reducedTypes.size === 1) {
      distinctInputType = reducedTypes.join();
    }
  }
  return distinctInputType;
};