import {swap} from './swap.mjs';

// bubble sort is O(n^2)
// but if the data is nearly sorted then it is O(n)
// space complexity is O(1)
export function bubbleSort(arr) {
    let noswaps = true;
    for (let i = arr.length; i > 0; i -= 1) {
        for (let j = 0; j < i - 1; j += 1) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noswaps = false;
            }
        }
        if (noswaps) break;
    }

    return arr;
}