export function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// es6
export const swap2 = (arr, idx1, idx2) => { [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] };
