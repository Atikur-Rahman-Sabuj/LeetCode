function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    map.set(nums[0], 0);
    for (let index = 1; index < nums.length; index++) {
        if(map.has(target-nums[index]))
        {
            return [map.get(target-nums[index]), index];
        }
        map.set(nums[index], index);
    }
}