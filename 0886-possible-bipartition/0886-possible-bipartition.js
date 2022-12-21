/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    const graph = [...Array(N+1)].map(() => []);
    const visited = Array(N+1).fill(false);
    const color = Array(N+1).fill(0);

    for(let [u, v] of dislikes) {
        graph[u].push(v);
        graph[v].push(u);
    }

    for(let i = 1; i <= N; i++) {
        if(!colorNodes(i)) return false;
    }
    return true;

    function colorNodes(node) {
        if(visited[node]) return true;
        const currColor = new Set([1, 2]);

		// remove colors used by neighbors
        for(let child of graph[node]) {
            if(color[child] === 1) currColor.delete(1);
            if(color[child] === 2) currColor.delete(2);
        }

		// no color is available return false
        if(currColor.size === 0) return false;
		
		// assign the smallest available color
        color[node] = Math.min(...currColor);
        visited[node] = true;  

        for(let child of graph[node]) {
            if(!colorNodes(child)) return false; 
        }
        return true;
    }
};
// var possibleBipartition = function(n, dislikes) {
//     const g1 = new Set(), g2 = new Set()
//     const m = new Map();
//     for(const dislike of dislikes){
//         if(m.has(dislike[0])){
//             m.get(dislike[0]).push(dislike[1])
//         }else{
//              m.set(dislike[0],[dislike[1]])
//         }
        
//         if(m.has(dislike[1])){
//             m.get(dislike[1]).push(dislike[0])
//         }else{
//              m.set(dislike[1],[dislike[0]])
//         }
//     }
//     console.log(m)
//     for (const key of m.keys()) {
//         if(!g1.has(key) && !g2.has(key)){
//             const q = [[key, 1]];
//             g1.add(q);
//             while(q.length > 0){
//                 let t = q.pop();
//                 let temp = m.get(t[0]) ||[];
//                 for(let i = 0 ; i < temp.length ; i++){
//                     if(t[1] === 1){
//                         if(g1.has(temp[i]))
//                             return false;
//                         if(!g2.has(key)){
//                             q.push([temp[i], 2]);
//                             g2.add(temp[i]);
//                         }
                        
                        
//                     }else{
//                         if(g2.has(temp[i]))
//                             return false;
//                         if(!g1.has(key)){
//                             q.push([temp[i], 1]);
//                             g1.add(temp[i]);
//                         }
                        
//                     }
//                 }
//             }
//         }
//     }
    
//     return true;
    

    
    
// };