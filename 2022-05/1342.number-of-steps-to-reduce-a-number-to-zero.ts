/*
 * @lc app=leetcode id=1342 lang=typescript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
function numberOfSteps(num: number): number {
   let steps = 0;
   while (num > 0) {
      steps++;
      num = num & 1 ? num - 1 : num >>> 1;
   }
   return steps;
}
// @lc code=end
