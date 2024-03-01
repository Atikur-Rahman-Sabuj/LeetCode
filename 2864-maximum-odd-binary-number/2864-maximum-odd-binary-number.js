/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const ans = new Array(s.length).fill("0");
    ans[ans.length - 1] = "1";
    let i = 0, isMore = false;
    for(const char of s){
        if(char === '1'){
            if(isMore){
                ans[i] = "1";
                i++;
            }
            isMore = true;
        }
    }
    return ans.join("");
};