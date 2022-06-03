/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
   const map: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };
   let result = 0;
   for (let i = 0; i < s.length; i++) {
      if (i + 1 < s.length && map[s[i]] < map[s[i + 1]]) {
         result -= map[s[i]];
      } else {
         result += map[s[i]];
      }
   }
   return result;
}
// @lc code=end
