/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
   for (let i = 0; i < k; i++) {
      const lastNumber = nums.pop();
      nums.unshift(lastNumber as number);
   }
}
// @lc code=end
