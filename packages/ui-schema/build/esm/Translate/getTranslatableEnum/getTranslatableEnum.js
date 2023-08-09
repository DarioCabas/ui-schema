export const getTranslatableEnum = value => {
  return typeof value === 'boolean' ? value ? 'yes' : 'no' : value === null ? 'null' : value;
};