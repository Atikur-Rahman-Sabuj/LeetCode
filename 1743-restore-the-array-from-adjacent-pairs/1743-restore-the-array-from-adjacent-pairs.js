/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const gr = new Map();
    for(const [a, b] of adjacentPairs){
        if(gr.has(a)){
            gr.get(a).push(b);
        }else{
            gr.set(a, [b]);
        }
        
        if(gr.has(b)){
            gr.get(b).push(a);
        }else{
            gr.set(b, [a]);
        }
    }
    const visited = new Map();
    const ans = [],  q = [];
    for (const k of gr.keys()) {
        if(gr.get(k).length === 1){
            q.push(k);
            break;
        }
    }
    while(q.length > 0){
        let item = q.shift();
        ans.push(item);
        visited.set(item, 1);
        for(const nitem of gr.get(item)){
            if(!visited.has(nitem)){
                q.push(nitem);
            }
        }
    }
    return ans;
    
};