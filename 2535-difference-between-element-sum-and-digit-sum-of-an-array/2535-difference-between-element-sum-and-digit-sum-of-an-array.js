/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let eSum = 0, dSum = 0;
    for(const num of nums){
        eSum += num;
        let temp = num;
        while(temp > 0){
            dSum += temp % 10;
            temp = Math.floor(temp / 10);
        }
    }
    return Math.abs(eSum - dSum);
};