/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const ans = [];
    findSubSets(0,[]);
    function findSubSets(index, arr){
        //console.log(index, arr)
        if(index === n){ 
            ans.push(arr);
            return;
        }
        
        findSubSets(index+1, [...arr,nums[index]]);
        if(nums[index] !== arr[arr.length - 1])
            findSubSets(index+1, arr)
    }
    return ans;
};