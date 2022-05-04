/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
   let max = 0;
   let start = 0;
   let map = new Map();
   for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
         start = Math.max(start, map.get(s[i]) + 1);
      }
      map.set(s[i], i);
      max = Math.max(max, i - start + 1);
   }
   return max;
}
// @lc code=end
