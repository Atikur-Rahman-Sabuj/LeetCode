/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let ans = [];
    findPath(0, [0])
    function findPath(from, path){
        if(from === graph.length - 1){
            ans.push([...path]);
        }
        
        for(const node of graph[from]){
            path.push(node);
            findPath(node, path);
            path.pop(node);
        }
    }
    return ans;
};