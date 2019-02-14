import {selectionSort} from "./selectionSort.mjs";

test('selection sort an array', () => {
  expect(selectionSort([1,5,2,4,3])).toEqual([1,2,3,4,5]);
});