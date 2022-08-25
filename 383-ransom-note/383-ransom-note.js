/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const arr = new Array(26).fill(0);
    
    for(const char of magazine){
        arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    //console.log(arr)
    
    for(const char of ransomNote){
        if(arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0)
            return false;
        else
            arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    
    return true;
};