/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const ans = [];
    const m = new Map();
    for(let i = 0 ; i < groupSizes.length ; i++){
        let g = groupSizes[i]
        if(m.has(g)){
            m.get(g).push(i);
        }else{
            m.set(g, [i]);
        }
        
        if(m.get(g).length === g){
            ans.push(m.get(g));
            m.delete(g)
        }
    }
    return ans;
};