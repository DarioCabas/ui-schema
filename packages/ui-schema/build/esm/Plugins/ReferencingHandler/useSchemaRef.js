import { parseRefs, useSchemaNetworkRef } from '@ui-schema/ui-schema/Plugins/ReferencingHandler';
import React from 'react';
export const useSchemaRef = (maybeRootSchema, definitions, isRoot, schema) => {
  const {
    getSchema,
    loadSchema
  } = useSchemaNetworkRef();
  const parseRes = React.useMemo(() => {
    return parseRefs(schema, {
      defs: definitions,
      root: isRoot ? schema : maybeRootSchema,
      getLoadedSchema: getSchema
    });
  }, [schema, definitions, isRoot, maybeRootSchema, getSchema]);
  const refsPending = parseRes.pending;
  if (refsPending.size <= 0) {
    schema = parseRes.schema;
  }
  React.useEffect(() => {
    if (refsPending.size > 0) {
      refsPending.forEach((refs, rootId) => {
        refs.forEach((versions, refId) => {
          loadSchema(refId, rootId, versions === null || versions === void 0 ? void 0 : versions.toArray());
        });
      });
    }
  }, [refsPending, loadSchema]);
  return {
    schema,
    refsPending
  };
};