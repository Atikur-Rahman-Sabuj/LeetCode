/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let N = nums.length, ans = [,]
    for (let i = 0; i < N; i++)
        nums[(nums[i] - 1) % 10000] += 10000
    for (let i = 0; i < N; i++)
        if (nums[i] > 20000) ans[0] = i + 1
        else if (nums[i] < 10001) ans[1] = i + 1
    return ans
    // nums.sort((a,b)=>a-b);
    // let twice = -1;
    // let missing = -1
    // for(let i = 1 ; i < nums.length ; i++){
    //     if(nums[i] === nums[i-1])
    //         twice = nums[i];
    //     else if(nums[i] === nums[i-1]+2)
    //         missing = nums[i] - 1;
    // }
    // if(missing === -1){
    //     if(nums[0] === 2) {
    //         missing = 1;
    //     }else{
    //         missing = nums.length;
    //     }
    // }
    // return [twice, missing];
};