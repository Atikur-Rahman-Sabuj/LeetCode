/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    let adj = new Array(n);
    for (let i = 0; i < n; i++) {
        adj[i] = new Array()
    }

    for (let e of edges) {
        adj[e[0]].push(e[1]);
        adj[e[1]].push(e[0])
    }

    let count = new Array(n).fill(1);
    let ans = new Array(n).fill(0)
    let dfs1 = function(node, parent) {
        for (let child of adj[node]){
            if (child != parent) {
                dfs1(child, node)
                count[node] += count[child]
                ans[node] += ans[child] + count[child]
            }
        }
    }

    let dfs2 = function(node, parent) {
        for (let child of adj[node]) {
            if (child != parent) {
                ans[child] = n - count[child] + ans[node] - count[child]
                dfs2(child, node)
            }
        }
    }

    dfs1(0,-1)
    dfs2(0,-1)
    return ans;
    
};
