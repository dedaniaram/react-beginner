import React from "react";

function mergeArrays(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let i = n - 1;  // Index for the last element of arr1
    let j = m - 1;  // Index for the last element of arr2
    let k = n + m - 1;  // Index for the last position in arr1

    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in arr2
    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }
}

// Example usage
let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];

mergeArrays(arr1, arr2);

console.log("Modified arr1:", arr1);
console.log("Modified arr2:", arr2);



export default mergeArrays;