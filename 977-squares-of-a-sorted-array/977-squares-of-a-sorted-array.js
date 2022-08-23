/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let num = Number.MIN_SAFE_INTEGER;
    if (nums[0] < 0) {
      num = nums[0] * nums[0];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
      const currentNumber = nums[i] * nums[i];
      if (currentNumber <= num) {
         nums.shift()
         nums.splice(i, 0, num);
         if (nums[0] < 0) {
            num = nums[0] * nums[0];
         } else {
            num = Number.MIN_SAFE_INTEGER;
         }
      } else {
         nums[i] = currentNumber;
      }
    }
    return nums;
};