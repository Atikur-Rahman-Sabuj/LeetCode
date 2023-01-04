/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const freq = new Map();
    let ans = 0;
    for(const task of tasks){
        if(freq.has(task)){
            freq.set(task, freq.get(task)+1)
        }else{
            freq.set(task, 1);
        }
    }
    for(const fr of freq.values()){
        if(fr === 1) return -1;
        ans += Math.floor(fr / 3);
        let temp = fr % 3
        if(temp > 0)
            ans++;
    }
    return ans;
};