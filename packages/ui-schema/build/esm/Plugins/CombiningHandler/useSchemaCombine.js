import { handleIfElseThen } from '@ui-schema/ui-schema/Plugins/ConditionalHandler';
import { mergeSchema } from '@ui-schema/ui-schema/Utils/mergeSchema';
import React from 'react';
export const handleSchemaCombine = (schema, value) => {
  const allOf = schema.get('allOf');
  if (allOf) {
    allOf.forEach(subSchema => {
      schema = mergeSchema(schema, subSchema.delete('if').delete('else').delete('then').delete('allOf'));
      schema = handleIfElseThen(subSchema, value, schema);
      const allOf1 = subSchema.get('allOf');
      if (allOf1) {
        allOf1.forEach(subSchema1 => {
          schema = mergeSchema(schema, subSchema1.delete('if').delete('else').delete('then'));
          schema = handleIfElseThen(subSchema1, value, schema);
        });
      }
    });
  }
  return schema;
};
export const useSchemaCombine = (schema, value) => {
  return React.useMemo(() => handleSchemaCombine(schema, value), [schema, value]);
};