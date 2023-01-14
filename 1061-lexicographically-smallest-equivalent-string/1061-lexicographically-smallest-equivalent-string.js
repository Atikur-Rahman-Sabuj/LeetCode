/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const m = new Map();
    for(let i = 0 ; i < s1.length ; i++){
        if(m.has(s1[i])){
            m.get(s1[i]).push(s2[i])
        }else{
            m.set(s1[i], [s2[i]])
        }
        
        if(m.has(s2[i])){
            m.get(s2[i]).push(s1[i])
        }else{
            m.set(s2[i], [s1[i]])
        }
    }
    
    const ans = [];
    const visited = new Map();
    const p = new Map();
    for(const char of baseStr){
        if(p.has(char)){
            ans.push(p.get(char))
        }else{
            let a = find(char);
            p.set(char, a);
            ans.push(a);
            visited.forEach((val, key)=>{
                p.set(key, a);
            })
            visited.clear();
        }
    }
    return ans.join("");
    
    function find(c){
        if(p.has(c)) return p.get(c)
        if(visited.has(c)) return c;
        visited.set(c, 1);
        let char = c;
        for(const tc of m.get(c) || []){
           let f = find(tc);
            if(char > f){
                char  = f;
            }
        }
        return char;
    }
};