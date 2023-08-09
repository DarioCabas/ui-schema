import { relT } from '@ui-schema/ui-schema/Translate/relT';
import { Map } from 'immutable';
export const makeTranslator = (dictionary, locale = '') => (text, context = Map(), schema = undefined) => {
  const schemaT = relT(schema, context, locale);
  if (schemaT) return schemaT;
  if (typeof text !== 'string') return undefined;
  let trans = dictionary.getIn(text.split('.'));
  if (typeof trans === 'function') {
    return trans(context, locale);
  }
  return trans;
};