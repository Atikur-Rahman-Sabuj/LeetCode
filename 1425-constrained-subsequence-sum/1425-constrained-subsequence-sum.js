/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    var window = [[0,nums[0]]];
    var max = nums[0];
    for(var i=1; i<nums.length; i++){
        var [index,lastKsum] = window[0];
        if(index == i-k){
            window.shift();
        }
        var sum = Math.max(lastKsum, 0) + nums[i]
        max = Math.max(max, sum);
        while(window.length>0 && window[window.length-1][1] < sum){
            window.pop();
        }
        window.push([i,sum]);
    }
    return max;
};