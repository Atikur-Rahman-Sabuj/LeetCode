/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    const ans = [];
        
    for(const w of dictionary){
        for(let i = 0 ; i < queries.length ; i++){
            if(ans[i] !== true){
                let diff = 0;
                for(let j = 0 ; j < w.length ; j++){
                    diff += w[j] === queries[i][j]?0:1;
                }
                if(diff <= 2){
                    ans[i] = true;
                }
            }
        }
    }
    
    return queries.filter((q,i)=>ans[i]);
    
    
    
    function cc(c){
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
};