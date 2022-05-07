/*
 * @lc app=leetcode id=2135 lang=typescript
 *
 * [2135] Count Words Obtained After Adding a Letter
 */

// @lc code=start
function wordCount(startWords: string[], targetWords: string[]): number {
   let startSet = new Set();
   let count = 0;
   for (const word of startWords) {
      let bitMap = 0;
      for (const char of word) {
         bitMap ^= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));
      }
      startSet.add(bitMap);
   }
   for (const word of targetWords) {
      let bitMap = 0;
      let found = false;
      for (const char of word) {
         bitMap ^= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));
      }
      for (const char of word) {
         let nBitMap = bitMap;
         nBitMap ^= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));
         if (startSet.has(nBitMap)) {
            count++;
            found = true;
            break;
         }
      }
   }
   return count;
}
// @lc code=end
