/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    let ans = 0; 
    let gcd = 0;
    for(let i = 0 ; i < nums.length ; i++){
        gcd = nums[i];
        if(gcd === k) ans++;
        if((gcd % k) === 0) 
        for(let j = i+1 ; j < nums.length ;j++){
            gcd = GCD(gcd, nums[j])
            if((gcd % k) !== 0) break;
            if(gcd === k) ans++;
        }
    }
    return ans;
       
    function GCD(a, b) {
        if (!b) {
            return a;
        }

        return GCD(b, a % b);
    }
    
};