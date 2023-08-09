import { resolvePointer } from '@ui-schema/ui-schema/JSONPointer/resolvePointer';
export class SchemaRefPending extends Error {}
export const resolveRef = (ref, context, schemaVersion) => {
  const {
    id,
    defs,
    root: rootSchema,
    getLoadedSchema
  } = context;
  let schema;
  if (ref.indexOf('#/definitions/') === 0 || ref.indexOf('#/$defs/') === 0) {
    const refId = ref.replace(/^#\/definitions\//, '').replace(/^#\/\$defs\//, '');
    if (!defs) {
      if (process.env.NODE_ENV === 'development') {
        console.error('definitions needed for $ref resolution', ref);
      }
    } else if (defs.get(refId)) {
      schema = resolvePointer('#/' + refId, defs);
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.error('definition not found for $ref', ref, refId);
      }
    }
  } else if (ref.indexOf('#/') === 0 || ref === '#') {
    if (!rootSchema) {
      if (process.env.NODE_ENV === 'development') {
        console.error('rootSchema needed for $ref resolution', ref);
      }
    } else {
      const targeted = resolvePointer(ref, rootSchema);
      if (targeted) {
        schema = targeted;
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('JSON Pointer target schema not found for $ref', ref, rootSchema === null || rootSchema === void 0 ? void 0 : rootSchema.toJS());
        }
      }
    }
  } else if (ref.indexOf('#') === 0) {
    if (!defs) {
      if (process.env.NODE_ENV === 'development') {
        console.error('definitions needed for $ref resolution', ref);
      }
    } else {
      const def = defs.find(def => {
        return def.get('id') === ref || def.get('$id') === ref || def.get('$anchor') === ref.slice(1);
      });
      if (def) {
        schema = def;
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('definition not found for $ref', ref);
        }
      }
    }
  } else {
    if (getLoadedSchema) {
      const loadedSchema = getLoadedSchema(ref, id, schemaVersion);
      if (loadedSchema) {
        return loadedSchema;
      }
    } else if (process.env.NODE_ENV === 'development') {
      console.error('getLoadedSchema does not exist in resolveRef, maybe UIApiProvider missing?');
    }
    throw new SchemaRefPending(ref);
  }
  return schema;
};