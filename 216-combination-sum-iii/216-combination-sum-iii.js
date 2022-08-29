/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const ans = [];
    const arr = [];
    findSum(1, 0);
    function findSum(index, sum){
        if(sum === n && arr.length === k){
            ans.push([...arr]);
            return;
        }
        if(sum >= n || arr.length > k) return;
        for(let i = index; i < 10 ; i++){
            arr.push(i);
            findSum(i + 1, sum + i);
            arr.pop();
        }
    }
    return ans;
};