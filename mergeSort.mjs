// time complexity:
// O(n log n) -- this is the best we can do
// best, worst, and average
// the number of times that we split the array is log n
// the number of comparisons is O(n)
// the total in O(n log n)

// space complexity:
// O(n)
const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let arr = [];

    // iterate over two uneven arrays
    // push for the minimum length of the two arrays
    while (i < arr1.length && j < arr2.length) {
        // push the smaller of the two items into the merge array
        // then increment the index for the array that was pushed from
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i += 1;
        } else {
            arr.push(arr2[j]);
            j += 1;
        }
    }

    // push everything that wasn't pushed already 
    // the input arrays are sorted 
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i += 1;
    }

    while (j < arr2.length) {
        arr.push(arr2[j]);
        j += 1;
    }

    return arr;
}

export const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
