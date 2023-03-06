/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function(nums) {
    let max = 0;
    for(let i = 0 ; i < nums.length - 1 ; i++){
        for(let j = max+1; j < nums.length ; j++){
            if(gcd(nums[i], nums[j]) > 1){
                max = j;
            }
        }
        if(max === i) return i
    }
    return -1;
    
};


var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}