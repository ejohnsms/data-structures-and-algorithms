import {bubbleSort} from "./bubbleSort.mjs";

test('bubble sort an array', () => {
  expect(bubbleSort([1,5,2,4,3])).toEqual([1,2,3,4,5]);
});