/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let res = 0;
    let ans = 0, minI = -1, maxI = -1;
    let lastValid = -1;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] >= minK && nums[i] <= maxK){
            if(nums[i] === minK) {
                minI = i;
            }
            if(nums[i] === maxK){ 
                maxI = i;
            }
            if(lastValid === -1){
                lastValid = i;
            }
            if(lastValid !== -1 && minI !== -1 && maxI !== -1){
                ans += Math.min(minI, maxI) - lastValid + 1;
            }
            
        }else{
            lastValid = -1;
            minI = -1;
            maxI = -1;
        }
    }
    return ans;
};