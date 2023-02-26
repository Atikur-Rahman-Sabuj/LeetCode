/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    const n = nums.length;
    let lt = nums.reduce((it, e)=>{
        return it+e
    }, 0)
    let rt = 0;
    for(let i = n-1 ; i >= 0 ; i--){
        lt -= nums[i]
        rt += nums[i];
        //console.log(i, lt, rt, nums[i])
        nums[i] = Math.abs(lt - rt + nums[i]);
    }
    return nums
};