function removeDuplicates(nums: number[]): number {
    let ci = 2;
    for(let i = 2 ; i < nums.length ; i++){
        if(nums[i] !== nums[ci-1] || nums[ci-1] !== nums[ci-2]){
            nums[ci] = nums[i];
            ci++;
        }
    }
    return ci;
};