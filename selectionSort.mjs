import {swap} from './swap.mjs';

// selection sort is O(n^2)
// selection sort does less swapping
// space complexity is O(1)
export function selectionSort(arr) {
    // compare item to next item
    // if the next item is smaller set the new min
    // and swap the values if the min is not the initial index then swap
    // shrink the portion of the array that is looked at
    for (let i = 0; i < arr.length; i += 1) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            swap(arr, lowest, i);  
        } 
    }

    return arr;
}