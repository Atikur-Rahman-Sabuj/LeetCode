class Solution {
public:
    int dp[1000][1001] = {};
int dfs(int d, int k) {
    if (d >= k)
        return d == k;
    if (dp[d][k] == 0)
        dp[d][k] = (1 + dfs(d + 1, k - 1) + dfs(d + (d ? -1 : 1), k - 1)) % 1000000007;
    return dp[d][k] - 1;
} 
int numberOfWays(int startPos, int endPos, int k) {
    return dfs(abs(startPos - endPos), k);
}
};