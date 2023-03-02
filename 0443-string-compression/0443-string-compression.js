/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const n = chars.length;
    let r = 0;
    let co  = 1 , c = chars[0];
    for(let i = 1 ; i < n ; i++){
        if(chars[i] !== c){
            pushC(c, co);
            c = chars[i];
            co = 1;
        }else{
            co++;
        }
    }
    if(co > 0){
        pushC(c, co)
    }
    return r;
    function pushC(char, count){
        const ans = count === 1 ? char: char+count;
        for(let i = 0 ; i < ans.length ; i++){
            chars[r] = ans[i];
            r++;
        }
    }
};