/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let val = 0, occ = 0, maxOcc = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > val){
            val = nums[i];
            occ = 1;
            maxOcc[val] = 1;
        }else if(nums[i] === val){
            if(nums[i] === nums[i-1]){
                occ++;
                maxOcc[val] = Math.max(maxOcc[val], occ);
            }else{
                occ = 1;
            }
        }else{
            occ = 0;
        }
    }
    return maxOcc[val];
};