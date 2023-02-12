/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    if(roads.length === 0) return 0;
    const m = new Map();
    for(const road of roads){
        if(m.has(road[0])){
            m.get(road[0]).push(road[1])
        }else{
            m.set(road[0], [road[1]]);
        }
        
        if(m.has(road[1])){
            m.get(road[1]).push(road[0])
        }else{
            m.set(road[1], [road[0]]);
        }
    }
    return cost(0, -1)[0]
    function cost(node, parent){
        if(m.get(node).length === 1 && node !== 0){
            return [1, 1]
        }
        let fuel = 0, s = 0;
        for(const n of m.get(node) || []){
            if(n !== parent){
                let temp = cost(n, node);
                fuel += temp[0];
                s += temp[1];
            }
        }
        if(node === 0) return [fuel];
        s++;
        return [fuel+Math.ceil(s/seats), s]
    }
    
    
};