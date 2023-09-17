/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const V = graph.length;
    const currLevel = [];
    
    // Initialize the visited array.
    const allVisited = (1 << V) - 1;
    const visited = new Array(V).fill(null).map(() => new Array(allVisited + 1).fill(false));
    
    // Initialize the queue with initial states.
    for (let u = 0; u < V; u++) {
        currLevel.push([u, 1 << u]);
        visited[u][1 << u] = true;
    }
    
    let pathLength = 0;
    
    while (currLevel.length > 0) {
        let n = currLevel.length;
        
        while (n > 0) {
            const [u, bitMask] = currLevel.shift();
            
            if (bitMask === allVisited) {
                return pathLength;
            }
            
            for (const v of graph[u]) {
                const nextBitMask = bitMask | (1 << v);
                
                if (visited[v][nextBitMask]) {
                    continue;
                }
                
                if (nextBitMask === allVisited) {
                    return pathLength + 1;
                }
                
                currLevel.push([v, nextBitMask]);
                visited[v][nextBitMask] = true;
            }
            
            n--;
        }
        
        pathLength++;
    }
    
    return -1;
};