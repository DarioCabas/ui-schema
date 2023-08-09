import React from 'react';
import { Map, List } from 'immutable';
import { beautifyKey } from '../../Utils/beautify';
import { Trans } from '../Trans';
export const TransTitle = ({
  schema,
  storeKeys,
  ownKey
}) => React.createElement(Trans, {
  schema: schema.get('t'),
  text: schema.get('title') || storeKeys.insert(0, 'widget').push('title').join('.'),
  context: Map({
    'relative': List(['title'])
  }),
  fallback: schema.get('title') || beautifyKey(typeof ownKey === 'undefined' ? storeKeys.last() : ownKey, schema.get('tt'))
});