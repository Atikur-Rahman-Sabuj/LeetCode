/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let ans = 0;
    let lz = -1, llz = -2, cl = 0;
    for(let i = 0 ; i <= nums.length ; i++){
        if(nums[i] !== 1){

            //console.log(lz, llz, i)
            ans = Math.max(ans, i-2 - llz)
            llz = lz;
            lz = i;
        }
    }
    if(ans === nums.length) return ans-1
    return ans;
};