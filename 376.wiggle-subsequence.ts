/*
 * @lc app=leetcode id=376 lang=typescript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
function wiggleMaxLength(nums: number[]): number {
   let length = 1;
   let prev = nums[0];
   let isBigger = true;
   for (let i = 1; i < nums.length; i++) {
      if (nums[i] < prev) {
         isBigger = false;
         break;
      }
      if (nums[i] > prev) {
         break;
      }
   }
   for (let i = 1; i < nums.length; i++) {
      if ((isBigger && nums[i] > prev) || (!isBigger && nums[i] < prev)) {
         length++;
         isBigger = !isBigger;
      }
      prev = nums[i];
   }
   return length;
}
// @lc code=end
