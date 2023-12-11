/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let freq = 0, maxFreq = 0, prevNum = -1, ans = -1;
    for(const num of arr){
        if(num == prevNum){
            freq++;
        }else{
            if(freq > maxFreq){
                ans = prevNum;
                maxFreq = freq;
            }
            freq = 1;
        }
        prevNum = num;
    }
    if(freq > maxFreq){
        ans = prevNum;
    }
    return ans;
};