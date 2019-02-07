import {swap} from './swap.mjs';

// for more information on comparison sorts
// https://en.wikipedia.org/wiki/Comparison_sort

// time complexity:
// best: O(n log n) -- if there are 32 items there are 5 decompositions O(log n) and O(n) comparisons
// average: O(n log n)
// worst: O(n^2) -- if the pivot is min or max element then we have n decompositions and n comparisons
// pick a random number or the median, etc.

// space complexity:
// O(log n)


// picking a pivot
// first, middle, ideally it should be the median of the data set
const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
    let pivotIndex = start;
    let pivot = arr[start];

    // this is really important - first bug was 
    // start after the pivot which is the first array index
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            pivotIndex += 1;
            swap(arr, i, pivotIndex);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

export const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        // recursively call quicksort on left and right of pivot index
        // left
        quickSort(arr, left, pivotIndex - 1);
    
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
