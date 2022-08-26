/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length;
    const ans = [];
    findSubSets(0,[]);
    function findSubSets(index, arr){
        //console.log(index, arr)
        if(index === n){ 
            ans.push(arr);
            return;
        }
        findSubSets(index+1, [...arr,nums[index]]);
        findSubSets(index+1, arr)
    }
    return ans;
};