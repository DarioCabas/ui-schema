import React from 'react';
import { useUIApi } from '@ui-schema/ui-schema/UIApi';
import { getCleanRefUrl, getFragmentFromUrl, isRelUrl, makeUrlFromRef } from '@ui-schema/ui-schema/Plugins/ReferencingHandler';
import { useSchemaRoot } from '@ui-schema/ui-schema/SchemaRootProvider';
import { resolvePointer } from '@ui-schema/ui-schema/JSONPointer';
import { useImmutable } from '@ui-schema/ui-schema/Utils/useImmutable';
const getUrls = (schemaRef, id) => {
  let schemaUrl = schemaRef;
  if (isRelUrl(schemaRef)) {
    schemaUrl = makeUrlFromRef(schemaRef, id);
  }
  const cleanUrl = getCleanRefUrl(schemaUrl);
  return {
    cleanUrl: cleanUrl,
    schemaUrl: schemaUrl
  };
};
export const useSchemaNetworkRef = () => {
  const {
    loadSchema: loader,
    schemas
  } = useUIApi();
  const {
    id
  } = useSchemaRoot();
  const loadSchema = React.useCallback((ref, rootId = '#', versions = undefined) => {
    const {
      cleanUrl
    } = getUrls(ref, rootId === '#' ? id : rootId);
    if (loader && cleanUrl) {
      loader(cleanUrl, versions).then();
    }
    if (!loader) {
      if (process.env.NODE_ENV === 'development') {
        console.error('ReferencingNetworkLoader `loadSchema` not defined, maybe missing `UIApiProvider`');
      }
    }
  }, [id, loader]);
  const currentSchemas = useImmutable(schemas);
  const getSchema = React.useCallback((ref, rootId = '#', version = undefined) => {
    const {
      cleanUrl,
      schemaUrl
    } = getUrls(ref, rootId === '#' ? id : rootId);
    let schema;
    if (typeof cleanUrl === 'string' && schemaUrl && currentSchemas !== null && currentSchemas !== void 0 && currentSchemas.has(cleanUrl)) {
      let tmpSchema = currentSchemas === null || currentSchemas === void 0 ? void 0 : currentSchemas.get(cleanUrl);
      const fragment = getFragmentFromUrl(schemaUrl);
      if (fragment) {
        tmpSchema = resolvePointer('#/' + fragment, tmpSchema);
      }
      if (typeof version === 'undefined' || version === tmpSchema.get('version') || version === '*') {
        schema = tmpSchema;
      } else if (process.env.NODE_ENV === 'development') {
        console.log('getSchema.not-found-version', ref, rootId, version, tmpSchema.get('version'));
      }
    }
    return schema;
  }, [id, currentSchemas]);
  return {
    getSchema,
    loadSchema
  };
};
export const useNetworkRef = useSchemaNetworkRef;