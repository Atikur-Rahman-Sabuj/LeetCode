/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let ans = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(!set.has(nums[i] - 1)){
            let x = nums[i];
            while(set.has(++x)){}
            ans = Math.max(ans, x - nums[i]);
        }
    }
    return ans;
};