/*
 * @lc app=leetcode id=2135 lang=typescript
 *
 * [2135] Count Words Obtained After Adding a Letter
 */

// @lc code=start
function wordCount(startWords: string[], targetWords: string[]): number {
   let count = 0;
   for (const tWord of targetWords) {
      for (const sWord of startWords) {
         if (tWord.length === sWord.length + 1) {
            let o = [...tWord].filter((c, i) => sWord.indexOf(c) == -1);
            if (o.length === 1) {
               count++;
               break;
            }
         }
      }
   }
   return count;
}
// @lc code=end
