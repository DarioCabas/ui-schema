"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strReplaceAll = exports.beautifyKey = void 0;
var _immutable = require("immutable");
var strReplaceAll = function strReplaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
};
exports.strReplaceAll = strReplaceAll;
var beautified = (0, _immutable.Map)();
var textTransform = function textTransform(name, tt) {
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
        var lastIndex = 0;
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
var beauty = function beauty(name) {
  if (typeof name !== 'string') return name;
  var tmp = beautified.get(name);
  if (tmp) return tmp;
  var beauty = strReplaceAll(strReplaceAll(strReplaceAll(name, '_', ' '), '.', ' '), '-', ' ').replace(/  +/g, ' ').split(' ').map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join(' ');
  beautified = beautified.set(name, beauty);
  return beauty;
};
var beautifyKey = function beautifyKey(name) {
  var tt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!tt) return name;
  if (typeof tt === 'string') return textTransform(name, tt);
  return beauty(name);
};
exports.beautifyKey = beautifyKey;