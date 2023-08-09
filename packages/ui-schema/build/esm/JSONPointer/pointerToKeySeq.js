import { List } from 'immutable';
import { unescapePointer } from '@ui-schema/ui-schema/JSONPointer/unescapePointer';
function isInt(value) {
  let x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}
export const pointerToKeySeq = pointer => {
  let pointerPoints = pointer.split('/');
  pointerPoints.splice(0, 1);
  pointerPoints = pointerPoints.map(point => {
    let key = unescapePointer(point);
    const nKey = key.trim() !== '' && Number(key);
    if (!isNaN(nKey) && isInt(nKey) && key.indexOf('.') === -1) {
      key = parseInt(key);
    }
    return key;
  });
  if (pointerPoints.length === 1 && pointerPoints[0] === '') {
    pointerPoints.splice(0, 1);
  }
  return List(pointerPoints);
};