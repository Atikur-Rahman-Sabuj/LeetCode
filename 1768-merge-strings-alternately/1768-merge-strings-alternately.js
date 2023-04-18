/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const l1 = word1.length, l2 = word2.length
    let i = 0, j = 0;
    let ans = "";
    while(i < l1 || j < l2){
        if(i < l1){
            ans += word1[i];
            i++;
        }
        if(j < l2){
            ans += word2[j];
            j++;
        }
    }
    return ans;
};