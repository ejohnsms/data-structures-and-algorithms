import {binarySearch} from "./binarySearch.mjs";

test('quick sorts an array', () => {
  expect(binarySearch([1,3,6,9,27,30,60], 6)).toEqual(2);
});