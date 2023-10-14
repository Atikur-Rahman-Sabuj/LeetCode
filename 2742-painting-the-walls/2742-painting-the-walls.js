/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    const kMax = 500000000; // A constant representing a very large value (effectively infinity)
    const n = cost.length; // Get the number of walls
    // dp[i] := min cost to paint i walls by painters so far
    const dp = new Array(n + 1).fill(kMax); // Create a dynamic programming array to store the minimum cost
    dp[0] = 0; // The minimum cost to paint 0 walls is 0 (base case)

    // Loop through each wall
    for (let i = 0; i < n; ++i) {
        // Loop through the dynamic programming array in reverse order
        for (let walls = n; walls > 0; --walls) {
            // Calculate the minimum cost to paint 'walls' walls using the current wall 'i'
            // The minimum cost at 'walls' is the minimum of:
            // - The cost of painting the current wall 'i' + the cost of painting the
            // previous walls within the time constraint (dp[walls - time[i] - 1])
            // - The cost of painting the previous walls without using the current wall 'i'
            // (dp[walls])
            dp[walls] = Math.min(dp[walls], dp[Math.max(walls - time[i] - 1, 0)] + cost[i]);
        }
    }
    return dp[n]; // The minimum cost to paint all 'n' walls is stored in dp[n]
};