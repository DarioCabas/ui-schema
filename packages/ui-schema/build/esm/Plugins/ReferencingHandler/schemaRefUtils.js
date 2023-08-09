export const isRelUrl = schemaRef => {
  return schemaRef.indexOf('https://') !== 0 && schemaRef.indexOf('http://') !== 0 && schemaRef.indexOf('ftp://') !== 0 && schemaRef.indexOf('ftps://') !== 0 && schemaRef.indexOf('#') !== 0;
};
const removeFragmentFromRevUrl = url => url.slice(url.indexOf('#/') !== -1 ? url.indexOf('#/') + 2 : url.indexOf('#') !== -1 ? url.indexOf('#') + 1 : 0);
export const getFragmentFromUrl = url => {
  const revUrl = [...url].reverse().join('');
  const revUrlFragment = revUrl.slice(0, revUrl.indexOf('#/') !== -1 ? revUrl.indexOf('#/') : revUrl.indexOf('#') !== -1 ? revUrl.indexOf('#') : 0);
  return [...revUrlFragment].reverse().join('');
};
export const getCleanRefUrl = schemaRef => {
  if (typeof schemaRef === 'string') {
    const revId = [...schemaRef].reverse().join('');
    const revIdNoFragment = removeFragmentFromRevUrl(revId);
    schemaRef = [...revIdNoFragment].reverse().join('');
  }
  return schemaRef;
};
export const makeUrlFromRef = (schemaRef, id) => {
  let schemaUrl = schemaRef;
  if (id) {
    const revId = [...id].reverse().join('');
    const revIdNoFragment = removeFragmentFromRevUrl(revId);
    const uriBase = [...revIdNoFragment.slice(revIdNoFragment.indexOf('/'))].reverse().join('');
    schemaUrl = uriBase + schemaRef;
  } else if (process.env.NODE_ENV === 'development') {
    console.warn('relative uri ref without root id', schemaRef);
  }
  return schemaUrl;
};