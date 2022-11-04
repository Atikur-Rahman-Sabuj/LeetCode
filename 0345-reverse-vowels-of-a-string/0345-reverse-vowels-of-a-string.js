/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const ans = s.split("");
    let i = 0, j = ans.length - 1;
    while(i < j){
        while(i < j){
            if(vowels.includes(ans[i])){
                break;
            }
            i++;
        }
        
        while(i < j){
            if(vowels.includes(ans[j])){
                break;
            }
            j--;
        }
        
        if(i < j){
            let temp = ans[j];
            ans[j] = ans[i];
            ans[i] = temp;
            i++;
            j--;
        }
    }
    return ans.join("")
    
};