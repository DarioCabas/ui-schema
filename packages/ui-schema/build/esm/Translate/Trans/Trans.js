import React from 'react';
import { useUIMeta } from '@ui-schema/ui-schema/UIMeta';
export const Trans = ({
  t: customT,
  text,
  context,
  schema,
  fallback
}) => {
  const {
    t
  } = useUIMeta();
  const Translated = customT ? customT(text, context, schema) : t(text, context, schema);
  return !Translated && Translated !== 0 && Translated !== '0' ? typeof fallback !== 'undefined' && fallback !== '' ? fallback : text : typeof Translated === 'string' || typeof Translated === 'number' || typeof Translated === 'object' ? Translated : typeof Translated === 'function' ? React.createElement(Translated, null) : text;
};