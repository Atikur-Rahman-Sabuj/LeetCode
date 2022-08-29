/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    const arr = [];
    const n2 = 2 * n;
    generate(0, 0, 0);
    function generate(left, right){
        if(arr.length === n2){
            ans.push(arr.join(""));
        }else{
            if(left < n){
                arr.push("(");
                generate(left + 1, right);
                arr.pop();
            }
            if(right < left){
                arr.push(")");
                generate(left, right + 1);
                arr.pop();
            }
        }
    }
    return ans;
};