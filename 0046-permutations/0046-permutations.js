/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    permutation([]);
    function permutation(list){
        if(list.length === nums.length){
            ans.push([...list]);
        }else{
            for(let i = 0 ; i < nums.length ; i++){
                if(!list.includes(nums[i])){
                    list.push(nums[i]);
                    permutation(list);
                    list.pop(nums[i]);
                }
            }
        }
    }
    return ans;
};