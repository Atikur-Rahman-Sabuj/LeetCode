/*
 * @lc app=leetcode id=792 lang=typescript
 *
 * [792] Number of Matching Subsequences
 */

// @lc code=start
function numMatchingSubseq(s: string, words: string[]): number {
   //Time limit with commented code
   //    const wordsA: number[] = Array(words.length);
   //    for (let i = 0; i < wordsA.length; i++) {
   //       wordsA[i] = 0;
   //    }
   //    for (let i = 0; i < s.length; i++) {
   //       for (let j = 0; j < words.length; j++) {
   //          if (s[i] === words[j][wordsA[j]]) {
   //             wordsA[j]++;
   //          }
   //       }
   //    }
   //    let ans = 0;
   //    for (let i = 0; i < words.length; i++) {
   //       if (words[i].length -1 === wordsA[i]) {
   //          ans++;
   //       }
   //    }
   //    return ans;
   const alp: Array<Array<string>> = Array(26);
   for (let i = 0; i < alp.length; i++) {
      alp[i] = [];
   }
   for (let i = 0; i < words.length; i++) {
      alp[words[i][0].charCodeAt(0) - "a".charCodeAt(0)].push(words[i]);
   }

   for (let i = 0; i < s.length; i++) {
      let index = s[i].charCodeAt(0) - "a".charCodeAt(0);
      let len = alp[index].length;
      for (let j = 0; j < len; j++) {
         const _st = alp[index][j].substring(1);
         if (_st.length > 0) {
            alp[_st[0].charCodeAt(0) - "a".charCodeAt(0)].push(_st);
         }
         alp[index].splice(j, 1);
         len--;
         j--;
      }
   }
   let ans = words.length;
   for (let i = 0; i < alp.length; i++) {
      ans -= alp[i].length;
   }
   return ans;
}
// @lc code=end
