/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
   let result = -1;
   //console.log("--------")
   const find = (start: number, end: number) => {
      const m = Math.floor((start + end) / 2);
      //console.log(start, end, m)
      if (nums[m] === target) {
         result = m;
         return;
      }
      if (start >= end) {
         if (nums[m] < target && nums[m + 1] > target) {
            result = m + 1;
            return;
         }
         if ((m === 0 || nums[m - 1] < target) && nums[m] > target) {
            result = m;
            return;
         }
         if ((m === 0 || nums[m - 1] < target) && nums[m] < target) {
            result = m + 1;
            return;
         }
         if (start === 0) {
            result = start;
         } else {
            result = start + 1;
         }
         return;
      }

      if (nums[m] > target) {
         find(start, m - 1);
      } else {
         find(m + 1, end);
      }
   };
   find(0, nums.length - 1);
   return result;
}
// @lc code=end
