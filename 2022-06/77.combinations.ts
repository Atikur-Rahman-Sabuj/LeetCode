/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
   const ans: number[][] = [];
   const arr: number[] = [];
   const find = (index: number) => {
      if (arr.length === k) ans.push(arr);
      for (let i = index; i <= n; i++) {
         arr.push(i);
         find(i + 1);
         arr.pop();
      }
   };
   find(1);
   return ans;
}
// @lc code=end
