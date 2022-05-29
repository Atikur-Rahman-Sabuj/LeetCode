/*
 * @lc app=leetcode id=318 lang=typescript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
function maxProduct(words: string[]): number {
   let bitMaps = [];
   let maxProduct = 0;
   for (const word of words) {
      let bitMap = 0;
      for (const char of word) {
         bitMap |= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));
      }
      bitMaps.push(bitMap);
   }
   for (let i = 0; i < words.length - 1; i++) {
      for (let j = i + 1; j < words.length; j++) {
         if ((bitMaps[i] & bitMaps[j]) === 0) {
            maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
         }
      }
   }
   return maxProduct;
}
// @lc code=end
