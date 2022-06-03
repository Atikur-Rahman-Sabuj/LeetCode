/*
 * @lc app=leetcode id=714 lang=typescript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
   let own = 0,
      notOwn = 0,
      ownLast = -prices[0] - fee,
      notOwnLast = 0;
   for (let i = 1; i < prices.length; i++) {
      own = Math.max(ownLast, notOwnLast - prices[i] - fee);
      notOwn = Math.max(notOwnLast, ownLast + prices[i]);
      notOwnLast = notOwn;
      ownLast = own;
   }
   return notOwnLast;
}
// @lc code=end
