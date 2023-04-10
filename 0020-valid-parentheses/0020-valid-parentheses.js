/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp = [];
    for(const char of s){
        if(["(", "[", "{"].includes(char)){
            temp.push(char);
        }else{
            if(temp.length === 0) return false;
            let lc = temp.pop();
            if((char === ")" && lc !== "(") || (char === "}" && lc !== "{") || (char === "]" && lc !== "[")){
                return false;
            }
        }
    }
    if(temp.length > 0) return false;
    return true;
};