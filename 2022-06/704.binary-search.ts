/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
   let result = -1;
   const find = (start: number, end: number) => {
      const m = Math.floor((start + end) / 2);
      if (nums[m] === target) {
         result = m;
         return;
      }
      if (start === end) return;
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
