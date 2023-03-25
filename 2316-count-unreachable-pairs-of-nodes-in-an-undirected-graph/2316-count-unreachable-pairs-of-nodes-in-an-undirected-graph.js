/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    const m = new Map();
    for(const edge of edges){
        if(m.has(edge[0])){
            m.get(edge[0]).push(edge[1])
        }else{
            m.set(edge[0], [edge[1]])
        }
        
        if(m.has(edge[1])){
            m.get(edge[1]).push(edge[0])
        }else{
            m.set(edge[1], [edge[0]])
        }
    }
    let ans = 0, vl = 0;
    const v = []
    for(let i = 0 ; i < n ; i++){
        if(!v[i]){
            let tempVl = vl;
            dfs(i);
            ans += ((vl - tempVl) * (n - vl))
            //console.log(tempVl, vl, ans)
        }
    }
    return ans;
    function dfs(i){
        v[i] = 1; vl++;
        for(let x of m.get(i) || []){
            if(!v[x]) dfs(x)
        }
    }
    
};