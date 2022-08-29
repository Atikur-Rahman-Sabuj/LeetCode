/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const ans = [];
    const arr = [];
    candidates.sort((a, b) => a - b)
    findSum(0, 0);
    function findSum(index, sum){
        if(sum === target){
            ans.push([...arr]);
            return;
        }
        if(sum > target) return;
        for(let i = index; i < candidates.length ; i++){
            arr.push(candidates[i]);
            findSum(i + 1, sum + candidates[i]);
            arr.pop();
            while(candidates[i] === candidates[i+1])i++;
        }
    }
    return ans;
};