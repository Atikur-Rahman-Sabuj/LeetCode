/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let i = 0, j = nums.length - 1, ans = 0;
    while(i < j){
        let temp = nums[i] + nums[j].toString();
        ans += parseInt(temp);
        i++; j--;
    }
    if(i === j){
        ans += nums[i]
    }
    return ans;
};
