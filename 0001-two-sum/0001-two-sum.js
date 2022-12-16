/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    map.set(nums[0], 0);
    for (let index = 1; index < nums.length; index++) {
        if(map.has(target-nums[index]))
        {
            return [map.get(target-nums[index]), index];
        }
        map.set(nums[index], index);
    }
};
