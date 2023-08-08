import React from "react";

function longestCommonSubsequence(str1, str2) {
    const n = str1.length;
    const m = str2.length;
    
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[n][m];
}

// Example usage
const str1 = "ABCDGH";
const str2 = "AEDFHR";
console.log("Longest Common Subsequence:", longestCommonSubsequence(str1, str2)); // Output: 3

const str3 = "ABC";
const str4 = "AC";
console.log("Longest Common Subsequence:", longestCommonSubsequence(str3, str4)); // Output: 2


export default longestCommonSubsequence;