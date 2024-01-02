/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const freq = new Array(nums.length + 1).fill(null).map((_, i)=>[i, 0]);
    for(const num of nums){
        freq[num][1]++;
    }
    freq.sort((a,b) => b[1]-a[1])
    const len = freq[0][1];
    const ans = new Array(len).fill(null).map(_ => new Array().fill(null));
    let k = 0, j = 0;
    while(freq[k][1] > 0){
        ans[j].push(freq[k][0]);
        j++;
        if(j == len) j = 0;
        freq[k][1]--;
        if(freq[k][1] == 0) k++;
    }
    return ans;
};