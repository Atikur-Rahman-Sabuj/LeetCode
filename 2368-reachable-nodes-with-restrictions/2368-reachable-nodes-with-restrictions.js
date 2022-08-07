/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const edgeMap = [];
    edges.sort((a,b)=>a[0])
    
    for(let edge of edges){
        if(edgeMap[edge[0]] === undefined){
            edgeMap[edge[0]] = [edge[1]];
        }else{
            edgeMap[edge[0]].push(edge[1]);
        }
        
        if(edgeMap[edge[1]] === undefined){
            edgeMap[edge[1]] = [edge[0]];
        }else{
            edgeMap[edge[1]].push(edge[0]);
        }
    }
    //console.log(edgeMap)
    let queue = [0];
    const visited = new Set([0]);
    const rest = new Set();
    for(const r of restricted){
        rest.add(r);
    }
    while(queue.length > 0){
        const temp = queue.shift();
        if(edgeMap[temp] !== undefined){
            for(const item of edgeMap[temp]){
                if(!visited.has(item) && !restricted.includes(item)){
                    queue.push(item);
                    visited.add(item);
                }
            }
        }
    }
    //console.log(visited)
    return visited.size;
};