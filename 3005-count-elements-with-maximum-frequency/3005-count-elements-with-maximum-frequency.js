/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = new Array(101).fill(0);
    let highFreq = 0;
    for(const num of nums){
        freq[num]++;
        highFreq = Math.max(freq[num], highFreq);
    }
    let ans = 0;
    for(const item of freq){
        if(item == highFreq){
            ans += item;
        }
    }
    return ans;
};