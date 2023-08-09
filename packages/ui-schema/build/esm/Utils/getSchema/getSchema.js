export const getSchemaId = schema => {
  return (schema === null || schema === void 0 ? void 0 : schema.get('$id')) || (schema === null || schema === void 0 ? void 0 : schema.get('id'));
};