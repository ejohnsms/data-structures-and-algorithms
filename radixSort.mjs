// works on lists of numbers
// does not do comparison of two numbers

// helper functions
// return the number from num at the place
const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// return the number of digits
const getDigitCount = (num) => {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// return the most number of digits of all the numbers in the array
const mostDigits = (arr) => {
    let maxDigits = 0;

    for (let num of arr) {
        maxDigits = Math.max(maxDigits, getDigitCount(num));
    }

    return maxDigits;
}

// time complexity:
// there is more info about the efficiency: https://en.wikipedia.org/wiki/Radix_sortcl 
// best: O(nk) - k is the number of digits of the number
// average: O(nk)
// worst: O(nk)

// space complexity:
// O(n + k)
export const radixSort = (nums) => {
    let maxDigits = mostDigits(nums);

    // make the buckets
    for (let k = 0; k < maxDigits; k += 1) {
        let buckets = Array.from(Array(10), () => []);
        // place the items in the buckets
        for (let i = 0; i < nums.length; i += 1) {
            let digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }
        nums = Array.prototype.concat(...buckets);
    }

    return nums;
}