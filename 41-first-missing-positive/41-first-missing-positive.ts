function firstMissingPositive(nums: number[]): number {
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] <= 0) nums[i] = nums.length + 1;
    }
    
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] <= nums.length + 1)
            nums[Math.abs(nums[i])] = -1 * Math.abs(nums[Math.abs(nums[i])]);
    }
    //console.log(nums)
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] > 0 || nums[i] === undefined) return i;
    }
    
    return nums.length;
};