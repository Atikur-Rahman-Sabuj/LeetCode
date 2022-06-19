/*
 * @lc app=leetcode id=1268 lang=typescript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
function suggestedProducts(products: string[], searchWord: string): string[][] {
   products.sort();
   const result: string[][] = [];
   const findProduct = (words: string[], index: number) => {
      const _words = [];
      for (let i = 0; i < words.length; i++) {
         if (words[i][index] === searchWord[index]) {
            _words.push(words[i]);
         }
      }
      // console.log(_words);
      if (index === searchWord.length) {
         return;
      } else {
         result.push(_words.slice(0, 3));
         findProduct(_words, index + 1);
      }
   };
   findProduct(products, 0);
   return result;
}
// @lc code=end
