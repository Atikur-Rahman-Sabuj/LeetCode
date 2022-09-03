/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const ans = [];
    for(let i = 1 ; i <= 9 ; i++){
        findSame(1, [i]);
    }
    function findSame(i, nums){
        if(i === n)
        {
            ans.push(nums.join(""));
        }else{
            for(let j = 0 ; j<= 9 ; j++){
                if(Math.abs(nums[i-1] - j) === k){
                    findSame(i+1, [...nums, j]);
                }
            }
        }
    }
    return ans;
};