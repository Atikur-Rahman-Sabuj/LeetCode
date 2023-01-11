/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(tn, edges, hasApple) {
    const graph = [];
    for(const edge of edges){
        if(graph[edge[0]]){
            graph[edge[0]].push(edge[1])
        }else{
            graph[edge[0]] = [edge[1]];
        }
        if(graph[edge[1]]){
            graph[edge[1]].push(edge[0])
        }else{
            graph[edge[1]] = [edge[0]];
        }
    }
    
    let ans = find(0)
    if(ans === 0) return ans;
    return ans - 2;
    
    function find(n, parent){
        let val = 0;
        for(let i = 0; i < graph[n].length ; i++){
            if(graph[n][i] !== parent){
                val += find(graph[n][i], n)
            }
        }
        
        if(val > 0){
            return val + 2;
        }
        if(hasApple[n]){
            return 2;
        }
        return 0;
        
        
    }
    
};