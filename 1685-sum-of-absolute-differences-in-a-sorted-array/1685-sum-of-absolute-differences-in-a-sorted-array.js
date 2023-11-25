/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let total = 0;
    let sums = nums.map(num => {
        total += num;
        return total;
    })
    const n = nums.length;
    const ans = [];
    for(let i = 0 ; i < n ; i++){
        const pre = sums[i], post = total - sums[i];
        ans[i] = ((nums[i] * (i+1)) - pre) + (post - (nums[i] * (n-i-1)));
    }
    return ans;
};