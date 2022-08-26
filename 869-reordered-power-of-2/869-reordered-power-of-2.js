/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const nString = n.toString();
    const nLen = nString.length;
    const nf = new Array(10).fill(0);
    
    for(const char of nString){
        nf[parseInt(char)]++;
    }
    
    let it = 1;
    let itString = it.toString();
    let itLen = itString.length;
    while(itLen <= nLen && it < 10000000000){
        if(checkMatch(itString)){
            return true;
        }
        it = it << 1;
        itString = it.toString();
        itLen = itString.length;
    }
    
    return false;
    
    function checkMatch(valueString){
        const tempFreq = new Array(10).fill(0);
        for(const char of valueString){
            tempFreq[parseInt(char)]++;
        }
        let match = true;
        for(let i = 0 ; i < 10 ; i++){
            match = match && tempFreq[i] === nf[i];
        }
        return match;
    }
    
};