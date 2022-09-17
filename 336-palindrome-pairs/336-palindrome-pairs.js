/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const ans = [];
    let left = "", right = ""
    const m = new Map();
    for(let i = 0 ; i < words.length ; i++){
        m.set(words[i].split("").reverse().join(""), i);
    }
    
    if(m.has("")){
        for(let i = 0 ; i < words.length ; i++){
            if(m.get("") !== i && isPalindrome(words[i])){
                ans.push([m.get(""), i]);
            }
        }
    }

    
    for(let i = 0 ; i < words.length ; i++){
        for(let j = 0 ; j < words[i].length ; j++){
            left = words[i].substring(0, j);
            right = words[i].substring(j);
            if(m.has(left) && i !== m.get(left) && isPalindrome(right)){
                ans.push([i, m.get(left)]);
            }
            if(m.has(right) && i !== m.get(right) && isPalindrome(left)){
                ans.push([m.get(right), i]);
            }
        }
    }
    
    

    
    return ans;
    
    
    
    
    function isPalindrome(string){
        let i = 0 , j = string.length - 1;
        while(i < j){
            if(string[i] !== string[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
};