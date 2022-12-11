/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    nums.sort((a,b)=>a-b);
    const m = new Map();
    for(const num of nums){
        m.set(num, num*num);
    }
    let ans = -1;
    for(const num of nums){
        let tAns = 0;
        let temp = num;
        while(m.has(temp)){
            tAns++;
            let tTemp = m.get(temp);
            m.delete(temp);
            temp = tTemp;
            
        }
        if(tAns > 1){
            ans = Math.max(ans, tAns);
        }
    }
    return ans;
};