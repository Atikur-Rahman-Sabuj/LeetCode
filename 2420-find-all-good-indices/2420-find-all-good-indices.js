/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
    let rl = 0, n = nums.length;
    const ans = [];
    if(k === 1){
        for(let i = 1; i<n-1; i++){
            ans.push(i);
        }
        return ans;
    }
    for(let i = 1 ; i < n-k ; i++){
        //console.log(i, nums[i], rl)
        if(rl >= k - 1){
            let mis = 0;
            for(let j = i + 1 ; j < i + k ; j++){
                if(nums[j+1] - nums[j] < 0){
                    mis = 1;
                    break;
                }
            }
            if(mis === 0){
                ans.push(i);
            }
        }
        
        if(nums[i-1]-nums[i] < 0){
            rl = 0;
        }else{
            rl++;
        }
    }
    return ans;
};