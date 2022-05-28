/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
   let totalProfit = 0;
   let buyPrice = prices[0];
   for (let i = 1; i < prices.length; i++) {
      if (buyPrice > prices[i]) {
         buyPrice = prices[i];
      } else if (buyPrice < prices[i]) {
         totalProfit += prices[i] - buyPrice;
         buyPrice = prices[i];
      }
   }
   return totalProfit;
}
// @lc code=end
