/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ans = [];
    const m = new Map();
    const uniqueNumbers = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(m.has(nums[i])){
            m.set(nums[i], m.get(nums[i]) + 1)
        }else{
            m.set(nums[i], 1)
            uniqueNumbers.push(nums[i]);
        }
    }
    let runningAns = [];
    permutation()
    function permutation(){
        if(runningAns.length === nums.length){
            ans.push([...runningAns]);
        }else{
            for(let i = 0 ; i < uniqueNumbers.length ; i++){
                if(m.get(uniqueNumbers[i]) > 0){
                    runningAns.push(uniqueNumbers[i])
                    m.set(uniqueNumbers[i], m.get(uniqueNumbers[i]) - 1);
                    permutation();
                    runningAns.pop(nums[i]);
                    m.set(uniqueNumbers[i], m.get(uniqueNumbers[i]) + 1);
                }
            }
        }
    }
    return ans;
};