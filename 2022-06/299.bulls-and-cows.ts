/*
 * @lc app=leetcode id=299 lang=typescript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
function getHint(secret: string, guess: string): string {
   const hashTable: number[] = Array(10);
   for (let i = 0; i < hashTable.length; i++) {
      hashTable[i] = 0;
   }
   let bulls = 0,
      cows = 0;
   for (let i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) {
         bulls++;
      } else {
         hashTable[parseInt(secret[i])]++;
      }
   }
   for (let i = 0; i < guess.length; i++) {
      if (secret[i] !== guess[i] && hashTable[parseInt(guess[i])] > 0) {
         cows++;
         hashTable[parseInt(guess[i])]--;
      }
   }
   return bulls + "A" + cows + "B";
}
// @lc code=end
