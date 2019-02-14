// start by picking the second element in the array
// compare it to the first element and swap if necesary
// continue to the next element and insert it in the proper location
// of the sorted array
// selection sort is good as an "online" algorithm for sorting incoming data
// because the left side of the array is sorted.
// time complexity is O(n^2)
// space complexity is O(1)
export function insertionSort(arr) {
    let i;
    let j;
    for (i = 1; i < arr.length; i += 1) {
        let curVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > curVal; j -= 1) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = curVal;
    }

    return arr;
}