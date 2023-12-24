/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let ans1 = 0, ans2 = 0, expect1 = '0', expect2 = '1';
    for(const char of s){
        if(char != expect1) ans1++;
        if(char != expect2) ans2++;
        expect1 = alterExpect(expect1);
        expect2 = alterExpect(expect2);
    }
    return Math.min(ans1, ans2);
};

function alterExpect(current){
    return current == '0' ? '1' : '0';
}