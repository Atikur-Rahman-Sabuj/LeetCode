/*
 * @lc app=leetcode id=665 lang=typescript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
function checkPossibility(nums: number[]): boolean {
   let count = 0;
   if (nums.length > 1 && nums[0] > nums[1]) {
      nums[0] = Number.MIN_SAFE_INTEGER;
      count++;
   }
   for (let i = 2; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) {
         count++;
         if (count === 2) return false;
         if (nums[i - 2] > nums[i]) nums[i] = nums[i - 1];
         else nums[i - 1] = nums[i];
      }
   }
   return true;
}
// @lc code=end
//4 2  3

checkPossibility([5, 7, 1, 8]);
