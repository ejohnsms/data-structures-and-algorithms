import {quickSort} from "./quickSort.mjs";

test('quick sorts an array', () => {
  expect(quickSort([1,5,2,4,3])).toEqual([1,2,3,4,5]);
});