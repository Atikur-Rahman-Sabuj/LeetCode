/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let ans = [];
    let sCount = 0;
    //loop in reverse order keep count of the stars
    //Only take a character when stars count is zero
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if(s[i] === "*"){
            sCount++;
        }else{
            if(sCount > 0) sCount--;
            else {
                ans.push(s[i]);
            }
        }
        
    }
    //reverse the array
    ans.reverse();
    //join to make a string and return
    return ans.join("");
};