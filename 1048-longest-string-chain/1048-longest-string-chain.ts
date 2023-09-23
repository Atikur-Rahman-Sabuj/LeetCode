function longestStrChain(words: string[]): number {
   words.sort((a, b) => a.length - b.length);
    console.log(words);
   const dp: number[] = new Array(words.length).fill(1);
   for (let i = 1; i < words.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
         if (words[i].length - words[j].length > 1) {
            break;
         }
         if (words[i].length - words[j].length === 1 && isValid(words[i], words[j])) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
         }
      }
   }
//console.log(dp);
   return Math.max(...dp);
   function isValid(big: string, small: string): boolean {
    let notMatch = 0;
    for (let i = 0; i < small.length; i++) {
         if (small[i] !== big[i + notMatch]) {
            notMatch++;
            i--;
            if (notMatch > 1) {
               return false;
            }
         }
    }
    return true;
 }
};