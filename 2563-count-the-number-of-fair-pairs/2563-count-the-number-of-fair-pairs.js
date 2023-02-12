/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a,b) => a-b)
    let ans = 0;
    let i = 0, j = nums.length - 1;
    while(i < j){
        const sum = nums[i]+nums[j];
        if(sum < lower){
            i++;
        }
        else if(sum > upper){
            j--;
        }else{
            let l = i, h = j-1;
            while(l < h){
                const m = Math.ceil((l+h) / 2);
                if(nums[j]+nums[m] > upper){
                    h = m-1;
                }else{
                    l = m;
                }
            }
            ans += l - i + 1;
            j--;
        }
    }
    
    return ans;
};