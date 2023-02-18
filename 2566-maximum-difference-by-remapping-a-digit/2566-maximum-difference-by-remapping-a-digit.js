/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const sn = num.toString()
    let minI = 0, maxI = 0;
    for(let i = 0 ; i < sn.length ; i++){
        if(sn[i] !== "9"){
            maxI = i;
            break;
        }
    }
    const min = parseInt(sn.replaceAll(sn[minI], "0"));
    const max = parseInt(sn.replaceAll(sn[maxI], "9"))
    //console.log(max, min)
    return max - min
};