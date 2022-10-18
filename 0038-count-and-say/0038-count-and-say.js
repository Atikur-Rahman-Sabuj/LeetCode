/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return "1";
    let ans ="1"
    for(let i = 2 ; i <= n ; i++){
        ans = say(ans);
    }
    return ans;
    
    function say(s){
        let res = "";
        let prev = "";
        let count = 0;
        for(let i = 0 ; i < s.length ; i++){
            if(s[i] === prev){
                count++;
            }else{
                if(count > 0){
                    res += count+""+prev;
                }
                count = 1;
                prev = s[i];
            }
        }
        res += count + "" + prev;
        return res;
    }
};