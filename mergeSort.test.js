import {mergeSort} from "./mergeSort.mjs";

test('merge sorts an array', () => {
  expect(mergeSort([1,5,2,4,3])).toEqual([1,2,3,4,5]);
});