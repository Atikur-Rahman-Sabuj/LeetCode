/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const m = new Map();
    for(const [winner, loser] of matches){
        if(!m.has(winner)){
            m.set(winner, 0);
        }
        if(m.has(loser)){
            m.set(loser, m.get(loser) + 1)
        }else{
            m.set(loser, 1);
        }
    }
    const ans = [[],[]];
    m.forEach((value, key)=>{
        if(value === 0){
            ans[0].push(key);
        }else if(value === 1){
            ans[1].push(key);
        }
    })
    ans[0].sort((a,b)=>a-b);
    ans[1].sort((a,b)=>a-b);
    return ans;
};