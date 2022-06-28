/*
 * @lc app=leetcode id=1647 lang=typescript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
function minDeletions(s: string): number {
   const alp: number[] = Array(26);
   for (let i = 0; i < 26; i++) {
      alp[i] = 0;
   }
   for (const char of s) {
      alp[char.charCodeAt(0) - "a".charCodeAt(0)]++;
   }
   alp.sort((a, b) => b - a);
   let ans = 0;
   for (let i = 1; i < 26; i++) {
      if (alp[i] === 0) break;
      if (alp[i] >= alp[i - 1]) {
         alp[i] = alp[i - 1] - 1;
         if (alp[i] === 0) alp[i] = 1;
      }
   }
   return ans;
}
// @lc code=end
