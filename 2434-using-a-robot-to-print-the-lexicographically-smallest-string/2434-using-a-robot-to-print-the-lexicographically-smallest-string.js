/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    let p = new Array(26);
    let visited = new Array(s.length).fill(0);
    for(let i = 0 ; i < 26 ; i++){
        p[i] = [];
    }
    for(let i = 0 ; i < s.length ; i++){
        p[s[i].charCodeAt(0) - 'a'.charCodeAt(0)].push(i);
    }
    
    let ans = [], last = -1;
    for(let i = 0 ; i < 26 ; i++){
        let j = 0;
        for( ; j < p[i].length ; j++){
            if(p[i][j] > last){
                ans.push(s[p[i][j]]);
                visited[p[i][j]] = 1;
                last = p[i][j];
            }
        }
        
        let temp = last - 1;
        while(temp >= 0){
            //console.log(i, temp, last)
            if(!visited[temp]){
                if(cc(s[temp]) <= i+1 ){
                    ans.push(s[temp]);
                    visited[temp] = 1;
                }else{
                    break;
                }
            }
            temp--;
        }
    }
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if(!visited[i]){
            ans.push(s[i]);
        }
    }
    //console.log(ans)
    return ans.join("")
        
    function cc(c){
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    
};