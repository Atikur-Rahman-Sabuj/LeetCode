/*
 * @lc app=leetcode id=518 lang=typescript
 *
 * [518] Coin Change 2
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
   const dp: number[] = new Array(amount + 1).fill(0);
   dp[0] = 1;
   for (let i = 0; i < coins.length; i++) {
      for (let j = 1; j <= amount; j++) {
         if (j >= coins[i]) {
            dp[j] += dp[j - coins[i]];
         }
      }
   }
   return dp[amount];
}
// @lc code=end
