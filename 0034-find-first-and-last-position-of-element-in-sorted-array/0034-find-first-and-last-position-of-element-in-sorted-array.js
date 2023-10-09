/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binarySearch = (min, max) => {
        if(max < min) return -1;
        const mid = Math.floor((max+min)/2);
        if(nums[mid] === target) return mid;
        return nums[mid]<target? binarySearch(mid+1, max):binarySearch(min, mid-1);
    }
    let index = binarySearch(0, nums.length - 1);
    if(index === -1) return [-1, -1];
    let minI = index-1, maxI = index+1;
    while(nums[minI] === target){
        minI--;
    }
    minI++;
    
    while(nums[maxI] === target){
        maxI++;
    }
    maxI--;
    return [minI, maxI];
    
};