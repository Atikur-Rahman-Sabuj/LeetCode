/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const vt = new Map();
    const st = [source];
    const eg = new Map();
    for(const edge of edges){
        
        if(eg.has(edge[0])){
            eg.get(edge[0]).push(edge[1]);
        }else{
            eg.set(edge[0], [edge[1]]);
        }
        
        if(eg.has(edge[1])){
            eg.get(edge[1]).push(edge[0]);
        }else{
            eg.set(edge[1], [edge[0]]);
        }
    }
    
    while(st.length > 0){
        const temp = st.pop();
        if(temp === destination) return true;
        vt.set(temp, 1);
        const tNs = eg.get(temp) || [];
        for(let i = 0 ; i < tNs.length ; i++){
            if(!vt.has(tNs[i])){
                st.push(tNs[i]);
            }
        }
    }
    return false;
    
};