/*
 * @lc app=leetcode id=1461 lang=typescript
 *
 * [1461] Check If a String Contains All Binary Codes of Size K
 */

// @lc code=start
function hasAllCodes(s: string, k: number): boolean {
   const allSubstrings = new Set<string>();
   for (let i = 0; i < s.length - k + 1; i++) {
      allSubstrings.add(s.substring(i, i + k));
   }
   return allSubstrings.size === 1 << k;
}
// @lc code=end
