/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
   const pLen = p.length;
   const sLen = s.length;
   const pArray: number[] = Array(26);
   for (const char of p) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (pArray[index] === undefined) pArray[index] = 1;
      else pArray[index]++;
   }

   let isEqual = (a: string): boolean => {
      const aArray: number[] = Array(26);
      for (const char of a) {
         let index = char.charCodeAt(0) - "a".charCodeAt(0);
         if (aArray[index] === undefined) aArray[index] = 1;
         else aArray[index]++;
      }
      let isEqual = true;
      for (let i = 0; i < 26; i++) {
         if (pArray[i] !== aArray[i]) {
            isEqual = false;
            break;
         }
      }
      return isEqual;
   };

   const ans: number[] = [];

   for (let i = 0; i < sLen - pLen; i++) {
      let temp = s.slice(i, i + pLen);
      if (isEqual(temp)) {
         ans.push(i);
      }
   }

   return ans;
}
// @lc code=end
