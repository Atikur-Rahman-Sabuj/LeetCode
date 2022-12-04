/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const m = new Map();
    for(const road of roads){
        if(m.has(road[0])){
            m.get(road[0]).push([road[1], road[2]]);
        }else{
            m.set(road[0], [[road[1], road[2]]]);
        }
        
        if(m.has(road[1])){
            m.get(road[1]).push([road[0], road[2]]);
        }else{
            m.set(road[1], [[road[0], road[2]]]);
        }
    }
    let ans = 1000000;
    const q = [1, n];
    const visited = new Map();
    while(q.length > 0){
        let current = q.pop();
        visited.set(current, 1);
        let g = m.get(current);
        for(let i = 0 ; i < g.length ; i++){
            let temp = g[i];
            if(!visited.has(temp[0])){
                q.push(temp[0]);
                ans = Math.min(ans, temp[1]);
            }
        }
    }
    
    return ans;
};