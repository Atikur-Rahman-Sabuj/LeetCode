/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    nums.sort((a,b)=>b-a)
    let pre = 0, ans = 0
    for(let i = 0 ; i < nums.length ; i++){
        pre += nums[i]
        if(pre > 0) ans++
        else break
    }
    return ans
};