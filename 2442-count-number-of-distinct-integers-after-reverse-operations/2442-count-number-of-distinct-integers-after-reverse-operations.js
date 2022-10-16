/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const set = new Set();
    for(const num of nums){
        set.add(num);
        set.add(reverse(num));
    }
    function reverse(num){
        let res = 0;
        while(num > 0){
            res = (res*10) + (num % 10);
            num = Math.floor(num / 10);
        }
        return res;
    }
    return set.size;
};