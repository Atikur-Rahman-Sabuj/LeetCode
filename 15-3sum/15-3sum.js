/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    const map = new Map();
    const ans = [];
    for(let i = 0 ; i < nums.length; i++){
        map.set(nums[i], i);
    }
    
    for(let i = 0 ; i < nums.length-2; i++){
        for(let j = i+1 ; j < nums.length-1; j++){
            let target = 0 - nums[i] - nums[j];
            if(map.has(target) && map.get(target) > j){
                ans.push([nums[i], nums[j], target]);
            }
            j = map.get(nums[j]);
        }
        i = map.get(nums[i]);
    }
    
    return ans;
    
};