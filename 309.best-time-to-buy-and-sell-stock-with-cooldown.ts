/*
 * @lc app=leetcode id=309 lang=typescript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
function maxProfit(prices: number[]): number {
   let own = 0,
      notOwn = 0,
      ownLast = -prices[0],
      notOwnLast = 0,
      notOwnLast2 = 0;
   for (let i = 1; i < prices.length; i++) {
      own = Math.max(ownLast, notOwnLast2 - prices[i]);
      notOwn = Math.max(notOwnLast, ownLast + prices[i]);
      notOwnLast2 = notOwnLast;
      notOwnLast = notOwn;
      ownLast = own;
   }
   return notOwnLast;
}
// @lc code=end
