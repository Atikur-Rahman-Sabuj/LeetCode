/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    const W = [];
    words.forEach((word,i)=>{W.push([word, i])});
    W.sort((a,b) => a[0] > b[0] ? 1 : -1);
    const map = new Map();
    const ans = new Array(words.length).fill(0);
    for(let i = 0 ; i < W.length; i++){
        for(let j = 1 ; j <= W[i][0].length ; j++){
            let s = W[i][0].substring(0, j);
            if(!map.has(s)){
                let end = i+1;
                while(end < W.length && W[end][0].startsWith(s)){
                    end++;
                }
                map.set(s, end - i);
            }
            ans[W[i][1]] += map.get(s)
        }
    }
    return ans;
};