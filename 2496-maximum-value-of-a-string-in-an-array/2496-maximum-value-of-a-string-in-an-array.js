/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let ans = 0;
    for(const str of strs){
        let val = parseStr(str);
        ans = Math.max(val, ans);
    }
    
    function parseStr(st){
        let val = 0;
        let mul = 1;
        for(let i = st.length - 1 ; i >= 0 ; i--){
            if(st[i] >= '0' && st[i] <= '9'){
                val += mul * parseInt(st[i]);
                mul *= 10;
            }else{
                return st.length;
            }
        }
        return val;
    }
    
    return ans;
};