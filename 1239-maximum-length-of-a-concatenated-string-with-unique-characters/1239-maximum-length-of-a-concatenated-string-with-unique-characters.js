/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const freq = new Array(26).fill(0);
    let maxL = 0;
    build(0,0);
    return maxL;
    
    function build(ai, l){
        maxL = Math.max(maxL, l)
        if(ai === arr.length) return;
        let i = 0;
        let duplicate = false;
        for( ; i < arr[ai].length; i++){
            let code = cc(arr[ai][i])
            freq[code]++;
            if(freq[code] > 1){
                duplicate = true;
                backTrack(ai, i);
                break;
            }
        }
        build(ai + 1, duplicate?l:l+arr[ai].length);
        if(!duplicate){
            backTrack(ai, arr[ai].length - 1);
        }
        build(ai + 1, l);  
    }
    
    function backTrack(arrI, to){
        for(let i = 0 ; i <= to ; i++){
            freq[cc(arr[arrI][i])]--;
        }
    }
    
    function cc(char){
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }
};