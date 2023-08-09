import { validateSchema } from '@ui-schema/ui-schema/validateSchema';
import { mergeSchema } from '@ui-schema/ui-schema/Utils/mergeSchema';
export const handleIfElseThen = (schema, value, distSchema) => {
  const keyIf = schema.get('if');
  const keyThen = schema.get('then');
  const keyElse = schema.get('else');
  if (keyIf) {
    if (0 === validateSchema(keyIf, value, true).errCount) {
      if (keyThen) {
        distSchema = mergeSchema(distSchema, keyThen);
      }
    } else {
      if (keyElse) {
        distSchema = mergeSchema(distSchema, keyElse);
      }
    }
  }
  return distSchema;
};