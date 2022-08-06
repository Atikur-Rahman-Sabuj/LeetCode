/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const n = nums.length;
    let total = Math.floor(((n)*(n-1))/2);
    const m = [];
    for(let i = 0 ; i < n ; i++){
        const temp = nums[i] - i;
        if(m[temp] === undefined){
            m[temp] = 1;
        }else{
            total -= m[temp];
            m[temp]++;
        }
    }
    
    
    return total 
};