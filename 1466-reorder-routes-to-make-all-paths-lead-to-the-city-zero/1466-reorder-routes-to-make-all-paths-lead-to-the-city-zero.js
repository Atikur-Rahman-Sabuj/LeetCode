/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const m = new Map();
    for(const conn of connections){
        if(m.has(conn[0])){
            m.get(conn[0]).push([conn[1], 1])
        }else{
            m.set(conn[0], [[conn[1], 1]]);
        }
        
        if(m.has(conn[1])){
            m.get(conn[1]).push([conn[0], 0])
        }else{
            m.set(conn[1], [[conn[0], 0]]);
        }
    }
    
    const v = [];
    const q = [0];
    let ans = 0;
    
    while(q.length){
        const elem = q.pop();
        v[elem] = true;
        for(const child of m.get(elem) || []){
            if(!v[child[0]]){
                if(child[1] === 1){
                    //console.log(child[0])
                    ans++;
                    
                }
                    
                q.push(child[0]);
            }
        }
    }
    
    return ans;
};