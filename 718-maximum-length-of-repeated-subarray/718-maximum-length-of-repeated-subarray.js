/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const dp = [];
    dp[0] = new Array(nums2.length + 1).fill(0);
    let ans = 0;
    for(let i = 0 ; i < nums1.length ; i++){
        dp[i+1] = [0]
        for(let j = 0 ; j < nums2.length ; j++){
            dp[i+1][j+1] = nums1[i] === nums2[j] ? 1 + dp[i][j] : 0;
            ans = Math.max(ans, dp[i+1][j+1]);
        }
    }
    return ans;
    
};