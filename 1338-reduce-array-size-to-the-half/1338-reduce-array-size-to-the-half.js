/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let size = arr.length;
    const half = Math.ceil(size/2);
    const map = new Map();
    for(const num of arr){
        if(map.has(num)){
            map.set(num, map.get(num)+1);
        }else{
            map.set(num, 1);
        }
    }
    
    const weightArray = [];
    for(const value of map.values()){
        weightArray.push(value);
    }
    weightArray.sort((a,b) => b - a);
    console.log(weightArray)
    let total = 0;
    for(let i = 0 ; i < weightArray.length ; i++){
        total += weightArray[i];
        if(total >= half) return i+1;
    }
    return 0;
    
};