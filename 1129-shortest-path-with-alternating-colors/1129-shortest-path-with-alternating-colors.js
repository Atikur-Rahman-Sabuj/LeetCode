/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const redMap = new Map(), blueMap = new Map();
    for(const red of redEdges){
        if(redMap.has(red[0])){
            redMap.get(red[0]).push(red[1])
        }else{
            redMap.set(red[0], [red[1]])
        }
    }
    
    for(const blue of blueEdges){
        if(blueMap.has(blue[0])){
            blueMap.get(blue[0]).push(blue[1])
        }else{
            blueMap.set(blue[0], [blue[1]])
        }
    }
    
    const ans = new Array(n).fill(null);
    
    const visited = new Array(n).fill(null).map( _ => new Array(2))
    const pq  = [[0, 0, 0], [0, 1, 0]];
    
    while(pq.length){
        const node = pq.shift();
        //console.log(node)
        if(ans[node[0]] === null){
            ans[node[0]] = node[2];
        }
        
    
        if(node[1] === 0){
            for(const p of blueMap.get(node[0]) || []){
                if(!visited[p][1]){
                    pq.push([p, 1, node[2]+1])
                    visited[p][1] = 1;
                }
            }
        }else{
            for(const p of redMap.get(node[0]) || []){
                //console.log(p, visited[p][0])
                if(!visited[p][0]){
                    pq.push([p, 0, node[2]+1])
                    visited[p][0] = 1;
                }
            }
        }
    }
    
    return ans.map(a => a == null ? -1 : a)

};