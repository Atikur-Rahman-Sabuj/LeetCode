/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {
    const m = new Map();
    for(const edge of edges){
        if(!m.has(edge[0])){
            m.set(edge[0], new MaxPriorityQueue());
        }
        m.get(edge[0]).enqueue(vals[edge[1]]);
        
        
        if(!m.has(edge[1])){
            m.set(edge[1], new MaxPriorityQueue());
        }
        m.get(edge[1]).enqueue(vals[edge[0]]);
    }
    let ans = Math.max(...vals)
    m.forEach((val, key)=>{
        let temp = k;
        let sum = vals[key];
        while(temp-- && val.size() > 0){
            let val1 = val.dequeue().element;
            //console.log(vals[key], val1)
            if(val1 <= 0)break;
            sum += val1;
        }
        ans = Math.max(ans, sum)
    })
    
    return ans;
    
    
};