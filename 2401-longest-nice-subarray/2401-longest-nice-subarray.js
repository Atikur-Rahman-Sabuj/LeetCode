/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let i = 0;
    let ans = 1;
    for(let j = 1; j < nums.length ; j++){
        let k = j - 1;
        while(k >= i){
            if((nums[j] & nums[k]) !== 0) break;
            k--;
        }

        i = k + 1;
        //console.log(i, j)
        ans = Math.max(ans , j - i + 1);
    }
    return ans;
};