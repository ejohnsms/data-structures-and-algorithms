export const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2);

    // while the value is not found
    while (arr[middle] !== val && left <= right) {
        if (val > arr[middle]) {
            left = middle + 1;
        } else if (val < arr[middle]) {
            right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
    }

    if (arr[middle] === val) {
        console.log(middle);
        return middle;
    } else {
        console.log('-1');
        return -1;
    }

    console.log(middle);
    return middle;
}

