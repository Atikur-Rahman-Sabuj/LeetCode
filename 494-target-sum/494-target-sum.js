/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let ans = 0;
    find(0, 0);
    function find(index, sum){
        if(index === nums.length){
            if(sum === target) ans++;
        }else{
            find(index + 1, sum + nums[index]);
            find(index + 1, sum - nums[index]);
        }
    }
    return ans;
};