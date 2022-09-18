/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let ans = 1;
    let cl = 1;
    
    for(let i = 1 ; i < s.length ; i++){
        if(s[i-1].charCodeAt(0) + 1 === s[i].charCodeAt(0)){
            cl++;
            ans = Math.max(ans, cl);
        }else{
            cl = 1;
        }
    }
    return ans;
};