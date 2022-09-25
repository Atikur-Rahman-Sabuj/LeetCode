/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
    const n = nums.length;
    const dp1= new Array(n+1).fill(1)
    const dp2= new Array(n+1).fill(1)
    const ans = []

    for(let i = 1 ; i < n ; i++)  
        if(nums[i-1] >= nums[i]) dp1[i] = dp1[i-1]+1;

    for(let i = n-2 ; i>=0 ; i--)
        if(nums[i]<=nums[i+1]) dp2[i] = dp2[i+1]+1;

    for(let i=k ; i<n-k ; i++)
        if(dp1[i-1]>=k && dp2[i+1]>=k) ans.push(i);
    return ans;
};