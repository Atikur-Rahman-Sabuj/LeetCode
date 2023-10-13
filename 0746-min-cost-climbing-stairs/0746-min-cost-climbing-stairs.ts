function minCostClimbingStairs(cost: number[]): number {
    let dp = [0, 0];
   for (let i = 2; i < cost.length; i++) {
      dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
   }
   return Math.min(dp[cost.length - 1] + cost[cost.length - 1], dp[cost.length - 2] + cost[cost.length - 2]);
};