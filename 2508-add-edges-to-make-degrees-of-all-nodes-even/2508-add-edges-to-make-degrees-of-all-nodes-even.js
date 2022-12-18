/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function(n, edges) {
    const edgeCount = new Array(n).fill(0);
    const edgeMap = new Map();
    for(const edge of edges){
        edge.sort((a,b) => a-b)
        edgeCount[edge[0]-1]++;
        edgeCount[edge[1]-1]++;
        edgeMap.set(edge[0]+"-"+edge[1], 1);
    }
    const oddNodes = [];
    for(let i = 0 ; i < n ; i++ ){
        if(edgeCount[i] & 1) oddNodes.push(i+1);
    }

    if(oddNodes.length === 0) return true;
    
    if(oddNodes.length === 2){
        if(!edgeMap.has(oddNodes[0]+"-"+oddNodes[1])) return true;
        for(let i = 1 ; i <= n ; i++){
            if(i !== oddNodes[0] && i !== oddNodes[1]){
                let node1 = [i, oddNodes[0]].sort((a,b)=>a-b).join("-");
                let node2 = [i, oddNodes[1]].sort((a,b)=>a-b).join("-");
                if(!edgeMap.has(node1) && !edgeMap.has(node2)) return true;
            }
        }
    }
    
    if(oddNodes.length === 4){
        let node1 = ([oddNodes[0], oddNodes[1]]).join("-");
        let node2 = ([oddNodes[0], oddNodes[2]]).join("-");
        let node3 = ([oddNodes[0], oddNodes[3]]).join("-");
        let node4 = ([oddNodes[1], oddNodes[2]]).join("-");
        let node5 = ([oddNodes[1], oddNodes[3]]).join("-");
        let node6 = ([oddNodes[2], oddNodes[3]]).join("-");
        
        if(!edgeMap.has(node1) && !edgeMap.has(node6) ||
          !edgeMap.has(node2) && !edgeMap.has(node5) ||
           !edgeMap.has(node3) && !edgeMap.has(node4)
          
          ) return true;
    }
    
    return false;
};