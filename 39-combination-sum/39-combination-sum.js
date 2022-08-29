/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const arr = [];
    findSum(0, 0);
    function findSum(index, sum){
        if(sum === target){
            ans.push([...arr]);
            return;
        }
        if(sum > target) return;
        for(let i = index; i < candidates.length ; i++){
            arr.push(candidates[i]);
            findSum(i, sum + candidates[i]);
            arr.pop();
        }
    }
    return ans;
};