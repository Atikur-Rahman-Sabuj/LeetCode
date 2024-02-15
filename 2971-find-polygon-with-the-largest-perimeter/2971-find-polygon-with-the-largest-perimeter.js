/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a - b);
    let ans = nums[0] + nums[1]
    let fans = -1;
    for(let i = 2 ; i < nums.length ; i++){
        if(ans > nums[i]){
            ans += nums[i]
            fans = Math.max(fans, ans)
        }
        else{
            ans += nums[i]
        }
    }
    return fans;
};