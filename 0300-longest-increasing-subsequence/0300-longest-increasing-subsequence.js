/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const ans = [nums[0]];
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i]>ans[ans.length - 1]){
            ans.push(nums[i]);
        }else{
            const lb = lower_bound(ans, 0, ans.length-1, nums[i]);
            if(lb !== -1)
                ans[lb] = nums[i];   
        }
        //console.log(nums[i], ans)
    }
    //console.log(ans)
    return ans.length;
};

function lower_bound(nums, min, max, value){
    let mid = Math.ceil((min + max) / 2);
    //console.log(mid, max, mid)
    if(mid === 0)
        return (nums[mid] > value) ? 0 : -1;
    if((nums[mid] >= value && nums[mid-1] < value)){
        return mid;
    }
    return nums[mid] < value ? lower_bound(nums, mid, max, value) : lower_bound(nums, min, mid-1, value);
}