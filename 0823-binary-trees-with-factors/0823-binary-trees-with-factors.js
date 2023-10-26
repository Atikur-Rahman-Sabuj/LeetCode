/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const MODULO = 1e9 + 7;
    
    const n = arr.length;
    const dp = new Map();
    
    arr.sort((a,b)=>a-b);
    
    dp.set(arr[0], 1);
    
    for(let i = 1 ; i < n ; i++){
        let value = 1;
        for(let j = 0 ; j < i ; j++){
            
            if(arr[i] % arr[j] === 0){
                const temp = arr[i]/arr[j];
                let tempVal = 0;
                if(temp === arr[j]){
                    tempVal = dp.has(temp)?dp.get(temp): 0;
                    value = (value + (dp.get(arr[j]) * tempVal)) % MODULO;
                }
                else if(temp > arr[j]){
                    tempVal = dp.has(temp)?dp.get(temp): 0;
                    value = (value + ((dp.get(arr[j]) * tempVal) * 2)) % MODULO;
                }
                //console.log(value)
  
            }
        }
        dp.set(arr[i], value);
    }
    
    let ans = 0;
    //console.log(dp)
    dp.forEach(value=>{
        ans = (ans + value) % MODULO;
    })
    return ans;
    
};