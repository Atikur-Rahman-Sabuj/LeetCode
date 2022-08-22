/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1;
    const find = (start, end) => {
      const m = Math.floor((start + end) / 2);
      if (nums[m] === target) {
         result = m;
         return;
      }
      if (start > end) return;
      if (nums[m] > target) {
         find(start, m-1);
      } else {
         find(m + 1, end);
      }
    };
    find(0, nums.length - 1);
    return result;
};