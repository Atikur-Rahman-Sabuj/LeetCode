/*
 * @lc app=leetcode id=2164 lang=typescript
 *
 * [2164] Sort Even and Odd Indices Independently
 */

// @lc code=start
function sortEvenOdd(nums: number[]): number[] {
   let indices = [];
   let evenValues = [];
   const oddValues = [];
   for (let i = 0; i < nums.length; i++) {
      if (i & 1) {
         oddValues.push(nums[i]);
         indices.push(1);
      } else {
         indices.push(0);
         evenValues.push(nums[i]);
      }
   }
   evenValues.sort((a, b) => a - b);
   oddValues.sort((a, b) => b - a);
   for (let i = 0; i < indices.length; i++) {
      if (indices[i] & 1) {
         nums[i] = oddValues.shift();
      } else {
         nums[i] = evenValues.shift();
      }
   }
   return nums;
}
// @lc code=end
