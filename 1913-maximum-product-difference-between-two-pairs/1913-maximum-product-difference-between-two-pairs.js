/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let min1 = 10000, min2 = 10000, max1 = 0, max2 = 0;
    for(const num of nums){
        if(num <= min1){
            min2 = min1;
            min1 = num;
        }
        else if(num < min2){
            min2 = num;
        }
        
        if(num >= max1){
            max2 = max1;
            max1 = num;
        }
        else if(num > max2){
            max2 = num;
        }
    }
    return (max1 * max2) - (min1 * min2)
};