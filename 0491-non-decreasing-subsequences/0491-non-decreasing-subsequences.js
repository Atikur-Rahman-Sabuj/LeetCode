/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const n = nums.length;
    const arr = [];
    const ans = [];
    const s = new Set();
    
    for(let i = 0 ; i < n-1 ; i++){
        arr.push(nums[i])
        find(i+1);
        arr.pop();
    }
    
    
    return ans;

    function find(i){
        let st = arr.toString()
        if(s.has(st)) return
        s.add(st)
        if(arr.length > 1){
            ans.push([...arr]);
        }
        if(i >= n) return;
        for(let j = i; j < n ; j++){
            if(nums[j] >= arr[arr.length - 1]){
                arr.push(nums[j]);
                find(j+1, [...arr, nums[i]]);
                arr.pop();
            }
        }

    }
};