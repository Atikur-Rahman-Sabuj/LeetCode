/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function jump(nums: number[]): number {
   let target = nums.length - 1;
   let step = 0;
   while (target > 0) {
      for (let i = 0; i < target; i++) {
         if (nums[i] + i >= target) {
            target = i;
            step++;
            break;
         }
      }
   }
   return step;
}
// @lc code=end
