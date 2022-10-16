/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
const minDifficulty = (jobDifficulty, d) => {
  const LEN = jobDifficulty.length;
  if (LEN < d) return -1;
  const dp = new Uint16Array(LEN + 1);

  for (let i = LEN - 1; i >= 0; --i) {
    dp[i] = jobDifficulty[i] > dp[i + 1] ? jobDifficulty[i] : dp[i + 1];
  }

  for (let i = 2; i <= d; ++i) {
    for (let j = 0; j <= LEN - i; ++j) {
      let max = 0;
      dp[j] = 10000;
      for (let k = j; k <= LEN - i; ++k) {
        jobDifficulty[k] > max && (max = jobDifficulty[k]);
        dp[j] > dp[k + 1] + max && (dp[j] = dp[k + 1] + max);
      }
    }
  }

  return dp[0];
};
