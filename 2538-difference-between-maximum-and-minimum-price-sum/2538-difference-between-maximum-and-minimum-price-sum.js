/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
var maxOutput = function(n, edges, price) {
    const m = new Array(n).fill(null).map(_=> new Map());
    for(const edge of edges){
       m[edge[0]].set(edge[1], 0);
       m[edge[1]].set(edge[0], 0);
    }
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        ans = Math.max(ans, dfs(i, -1) - price[i]);
    }
    return ans;
    
    function dfs(i, p){
        let maxPath = 0;
        for(const child of m[i].keys()){
            if(child != p){
                let path = m[i].get(child);
                if(path === 0){
                    path = dfs(child, i);
                    m[i].set(child, path);    
                }
                maxPath = Math.max(maxPath, path);
            }
        }
        return maxPath + price[i];
    }
    
};