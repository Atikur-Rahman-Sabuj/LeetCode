/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 0;
    let subS = [];
    for(const char of s){
        if(subS.includes(char)){
            count++;
            subS = [char];
        }else{
            subS.push(char);
        }
    }
    if(subS.length > 0) 
        count++;

    return count;
};