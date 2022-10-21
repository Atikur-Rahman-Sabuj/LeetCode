/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const m = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        if(m.has(nums[i])){
            //console.log(m.get(nums[i]), i)
            if((i - m.get(nums[i])) <= k){
                return true;
            }
        }
        m.set(nums[i], i);
    }
    return false;
};