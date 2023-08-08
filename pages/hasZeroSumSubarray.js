import React from "react";

function hasZeroSumSubarray(arr) {
    const prefixSumSet = new Set();
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0 || prefixSumSet.has(sum)) {
            return true;
        }

        prefixSumSet.add(sum);
    }

    return false;
}

// Example usage
const arr1 = [5, 4, 2, -3, 1, 6];
console.log("Subarray with 0 sum:", hasZeroSumSubarray(arr1)); // Output: true

const arr2 = [5, 4, 2, 0, 1, 6];
console.log("Subarray with 0 sum:", hasZeroSumSubarray(arr2)); // Output: true


export default hasZeroSumSubarray;