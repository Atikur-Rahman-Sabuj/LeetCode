/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const n = nums.length, sums = [];
    let sum = 0;
    for(let i = n-1 ; i >= 0 ; i--){
        sum += nums[i];
        sums[i] = sum;
    }
    sums[n] = 0;
    let minAvg = Number.MAX_SAFE_INTEGER, ans = 0;
    sum = 0;
    for(let i = 0 ; i < n ; i++){
        sum += nums[i];
        let avg1 = Math.floor(sum/(i+1));
        let avg2 = i === n-1 ? 0: Math.floor(sums[i+1]/(n-i-1));
        let avg = Math.abs(avg1 - avg2);
        if(avg < minAvg){
            minAvg = avg;
            ans = i;
        }
        
    }
    return ans;
};