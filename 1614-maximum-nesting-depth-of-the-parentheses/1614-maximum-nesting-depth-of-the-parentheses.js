/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let ans = 0, lb = 0, rb = 0;
    for(const char of s){
        if(char == "("){
            lb++;
        }else if(char == ")"){
            rb++;
        }
        ans = Math.max(ans, lb - rb);
    }
    return ans;
};