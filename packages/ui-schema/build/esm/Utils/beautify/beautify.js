import { Map } from 'immutable';
export const strReplaceAll = (str, search, replacement) => {
  return str.split(search).join(replacement);
};
let beautified = Map();
const textTransform = (name, tt) => {
  switch (tt) {
    case 'ol':
      if (typeof name === 'number') return name + 1 + '.';
      break;
    case 'upper':
      if (typeof name === 'string') return name.toUpperCase();
      break;
    case 'lower':
      if (typeof name === 'string') return name.toLowerCase();
      break;
    case 'upper-beauty':
      if (typeof name === 'string') return beauty(name).toUpperCase();
      break;
    case 'lower-beauty':
      if (typeof name === 'string') return beauty(name).toLowerCase();
      break;
    case 'beauty-text':
      if (typeof name === 'string' && isNaN(name * 1)) return beauty(name);
      break;
    case 'beauty-igno-lead':
      if (typeof name === 'string') {
        let lastIndex = 0;
        do {
          if (new RegExp(/[.\-_]/g).exec(name[lastIndex]) === null) {
            break;
          }
          lastIndex++;
        } while (lastIndex < name.length);
        return name.slice(0, lastIndex) + beauty(name.slice(lastIndex));
      }
      break;
  }
  return name;
};
const beauty = name => {
  if (typeof name !== 'string') return name;
  let tmp = beautified.get(name);
  if (tmp) return tmp;
  let beauty = strReplaceAll(strReplaceAll(strReplaceAll(name, '_', ' '), '.', ' '), '-', ' ').replace(/  +/g, ' ').split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  beautified = beautified.set(name, beauty);
  return beauty;
};
export const beautifyKey = (name, tt = true) => {
  if (!tt) return name;
  if (typeof tt === 'string') return textTransform(name, tt);
  return beauty(name);
};