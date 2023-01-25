/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) { 
    const n = edges.length;
    const n1 = new Array(n).fill(Infinity);
    const n2 = new Array(n).fill(Infinity);
    
    let visited = new Map();
    bfs(node1, 0, n1);
    visited = new Map();
    bfs(node2, 0, n2);
    
    function bfs(node , val, c){
        c[node] = val;
        visited.set(node, val);
        if(edges[node] !== -1 && !visited.has(edges[node])){
            bfs(edges[node], val + 1, c);
        }
    }
    
    let ans = -1, val = Infinity
    for(let i = 0 ; i < n ; i++){
        let temp = Math.max(n1[i], n2[i])
        if(temp < val){
            val = temp;
            ans = i;
        }
    }
    return ans;
    
};