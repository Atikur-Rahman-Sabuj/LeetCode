/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    let parent = new Array(n);
    let size = new Array(n);
    const critical = [];
    const pseudo_critical = [];
    for(let i = 0; i<edges.length; i++) edges[i].push(i);
    function make_set(){
        for(let i = 0; i<n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }
    const find = function (x) {
        if(parent[x] === x) return x;
        return find(parent[x]);
    }
    const union = function (a,b){
        a = find(a);
        b = find(b);
        if(a === b) return false;
        if(size[a] > size[b]){
            parent[b] = a;
            size[a] += size[b];
        }else{
            parent[a] = b;
            size[b] += size[a];
        }
        return true;
    }
    const getMST = function (blockEdge,preEdge){
        // initialize disjoint set
        make_set();
        //
        let weight = 0;
        if(preEdge != -1){
            weight += edges[preEdge][2];
            union(edges[preEdge][0], edges[preEdge][1]);
        }
        for(let i = 0; i<edges.length; i++){
            if(i===blockEdge) continue;
            if(union(edges[i][0],edges[i][1])) weight += edges[i][2];
        }
        // check whether we can form mst or not 
        for(let i = 0; i<n; i++){
            if(find(i) != find(0)) return Number.MAX_SAFE_INTEGER;
        }
        return weight;
    };
    edges.sort( (a,b) => {return a[2]-b[2]});
    const oriMST = getMST(-1,-1);
    for(let i = 0; i<edges.length; i++){
        if(oriMST < getMST(i,-1)) {
            critical.push(edges[i][3]);
        }
        else if(oriMST === getMST(-1,i)) {
            pseudo_critical.push(edges[i][3]);
        }
    }
    return [critical,pseudo_critical];
};