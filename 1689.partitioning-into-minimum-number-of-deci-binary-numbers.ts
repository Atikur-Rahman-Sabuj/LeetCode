/*
 * @lc app=leetcode id=1689 lang=typescript
 *
 * [1689] Partitioning Into Minimum Number Of Deci-Binary Numbers
 */

// @lc code=start
function minPartitions(n: string): number {
   let ans = 0;
   for (const char of n) {
      ans = Math.max(ans, Number(char));
   }
   return ans;
}
// @lc code=end

//9 = 9;
//99 = 9
//999
