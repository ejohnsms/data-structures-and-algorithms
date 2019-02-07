import {radixSort} from "./radixSort.mjs";

test('radix sorts an array of numbers', () => {
  expect(radixSort([23, 345, 5467, 12, 2345, 9852])).toEqual([12, 23, 345, 2345, 5467, 9852]);
});