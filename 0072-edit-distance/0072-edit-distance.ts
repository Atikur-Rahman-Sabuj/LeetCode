function minDistance(word1: string, word2: string): number {
    const dp: number[][] = [];
    dp[0] = [];
    for (let i = 0; i <= word1.length; i++) {
        dp[i] = [];
        dp[i][0] = i; 
    }
    for (let i = 0; i <= word2.length; i++) {
        
        dp[0][i] = i; 
    }
    for (let i = 0; i < word1.length; i++) {
       {
          for (let j = 0; j < word2.length; j++) {
             if (word1[i] === word2[j]) {
                dp[i + 1][j + 1] = dp[i][j];
             } else {
                dp[i + 1][j + 1] = Math.min(dp[i][j], Math.min(dp[i][j + 1], dp[i + 1][j])) + 1;
             }
          }
       }
    }
     //console.log(dp)
    return dp[word1.length][word2.length];
};