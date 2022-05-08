/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
   const map = new Map<string, number>();
   for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
         map.set(s[i], -1);
      } else {
         map.set(s[i], i);
      }
   }
   let min = Number.MAX_SAFE_INTEGER;
   for (const [key, value] of map.entries()) {
      if (value !== -1) {
         min = Math.min(min, value);
      }
   }
   return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}
// @lc code=end
