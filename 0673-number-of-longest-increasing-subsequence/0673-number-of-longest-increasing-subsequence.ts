function findNumberOfLIS(nums: number[]): number {
    let dp = [];
    let count = [];
    let maxValue = 1;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        count[i] = 1;
    }
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if(dp[i] < dp[j] + 1){
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                    maxValue = Math.max(maxValue, dp[i]);
                }else if(dp[i] === dp[j] + 1){
                    count[i] += count[j];
                }    
            }
        }
    }
    let result = 0;
    for(let i = 0 ; i < dp.length; i++){
        if(dp[i] === maxValue){
            result += count[i];
        }
    }
    return result;
};