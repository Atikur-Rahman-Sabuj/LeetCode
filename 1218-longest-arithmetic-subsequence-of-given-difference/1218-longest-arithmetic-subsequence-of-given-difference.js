/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const m = new Map();
    const dp = new Array(arr.length).fill(1);
    let ans = 1;
    for(let i = 0 ; i < arr.length ; i++){
        if(m.has(arr[i] - difference)){
            m.set(arr[i], m.get(arr[i] - difference) + 1);
        }else{
            m.set(arr[i], 1);
        }
        ans = Math.max(ans, m.get(arr[i]));
    }
    return ans;
};