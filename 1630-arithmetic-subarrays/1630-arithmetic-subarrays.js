/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const ans = [];
    for(let i = 0 ; i < l.length ;i++){
        let temp = [];
        for(let j = l[i]; j <= r[i] ; j++){
            temp.push(nums[j]);
        }
        ans.push(isArithmatic(temp))
    }
    return ans;
};

function isArithmatic(arr){
    arr.sort((a,b) => a - b);
    let diff = arr[1] - arr[0]
    for(let i = 2 ; i < arr.length ; i++){
        if(arr[i]-arr[i-1] !== diff) return false;
    }
    return true;
}