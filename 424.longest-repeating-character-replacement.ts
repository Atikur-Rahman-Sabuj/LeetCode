/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
   let len = s.length;
   const count: number[] = Array(26);
   for (let i = 0; i < count.length; i++) {
      count[i] = 0;
   }
   let start = 0,
      maxCount = 0,
      maxLength = 0;
   for (let end = 0; end < len; end++) {
      maxCount = Math.max(maxCount, ++count[s[end].charCodeAt(0) - "A".charCodeAt(0)]);
      while (end - start + 1 - maxCount > k) {
         count[s[start].charCodeAt(0) - "A".charCodeAt(0)]--;
         start++;
      }
      maxLength = Math.max(maxLength, end - start + 1);
   }
   return maxLength;
}
// @lc code=end
