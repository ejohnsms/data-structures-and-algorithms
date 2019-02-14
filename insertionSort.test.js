import {insertionSort} from "./insertionSort.mjs";

test('insertion sort an array', () => {
  expect(insertionSort([1,5,2,4,3])).toEqual([1,2,3,4,5]);
});