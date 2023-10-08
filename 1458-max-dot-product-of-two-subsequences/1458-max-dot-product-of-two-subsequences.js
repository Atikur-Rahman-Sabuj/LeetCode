/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    const dp = new Array(len1+1).fill(null).map( _ => new Array(len2+1).fill(-2000));
    
    for(let i = 0 ; i < len1 ; i++){
        for(let j = 0 ; j < len2 ; j++){
            const adder = (i === 0 || j === 0)?0:dp[i][j]
            const product = nums1[i] * nums2[j]
            dp[i+1][j+1] = Math.max(dp[i+1][j], adder+product, product, dp[i][j+1]);
        }
    }
    return dp[len1][len2]
};