/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
   let maxProfit = Number.MIN_SAFE_INTEGER;
   let minPrice = Number.MAX_SAFE_INTEGER;
   for (let i = 0; i < prices.length; i++) {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      minPrice = Math.min(minPrice, prices[i]);
   }
   return maxProfit > 0 ? maxProfit : 0;
}
// @lc code=end
