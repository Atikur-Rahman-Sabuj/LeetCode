/*
 * @lc app=leetcode id=1423 lang=typescript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
function maxScore(cardPoints: number[], k: number): number {
   let minSum = 0;
   let currentSum = 0;
   let totalSum = 0;
   const m = cardPoints.length;
   const l = m - k;
   for (let i = 0; i < l; i++) {
      minSum += cardPoints[i];
   }
   totalSum = minSum;
   currentSum = minSum;
   for (let i = l; i < m; i++) {
      totalSum += cardPoints[i];
      currentSum += cardPoints[i] - cardPoints[i - l];
      minSum = Math.min(minSum, currentSum);
   }
   return totalSum - minSum;
}
// @lc code=end
