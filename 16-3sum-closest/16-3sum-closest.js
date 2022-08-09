/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const n = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    
    nums.sort((a,b) => a - b);
    for(let i = 0 ; i < n - 1 ; i++){
        let j = i+1, k = n-1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            //console.log(i , j , k , sum)
            if(Math.abs(ans-target) > Math.abs(sum - target)){
                ans = sum;
            }
            if(sum < target){
                j++;
            }
            else if(sum > target){
                k--;
            }
            else{
                break;
            }
        }
    }
    return ans;
};