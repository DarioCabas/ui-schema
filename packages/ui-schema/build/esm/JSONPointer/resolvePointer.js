import { pointerToKeySeq } from '@ui-schema/ui-schema/JSONPointer/pointerToKeySeq';
export const resolvePointer = (pointer, data) => {
  const keySeq = pointerToKeySeq(pointer);
  return keySeq.size ? data.getIn(keySeq) : data;
};