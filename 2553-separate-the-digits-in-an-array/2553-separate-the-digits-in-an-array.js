/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = [];
    for(const num of nums){
        let n = num;
        const temp = [];
        while(n > 0){
            temp.unshift(n % 10);
            n = Math.floor(n / 10);
        }
        ans = [...ans, ...temp]
    }
    return ans;
};