/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) { 
    const evenN = nums.filter(a=>!(a & 1)).sort((a,b)=> a - b)
    const evenT = target.filter(a=>!(a & 1)).sort((a,b)=> a - b)
    const oddN = nums.filter(a=>(a & 1)).sort((a,b)=> a - b)
    const oddT = target.filter(a=>(a & 1)).sort((a,b)=> a - b)
    nums.sort((a,b)=> a - b)
    target.sort((a,b)=> a - b)
    let changes = 0;
    for(let i = 0 ; i < evenN.length ; i++){
        changes += Math.abs(evenN[i] - evenT[i]);
    }
    for(let i = 0 ; i < oddN.length ; i++){
        changes += Math.abs(oddN[i] - oddT[i]);
    }
    return changes/4;
};