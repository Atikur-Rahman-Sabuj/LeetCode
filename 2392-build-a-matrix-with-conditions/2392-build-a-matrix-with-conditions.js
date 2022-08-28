/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    let pre = new Array(k+1);
    let aft = new Array(k+1).fill(0);
    
    let prec = new Array(k+1);
    let aftc = new Array(k+1).fill(0);
    
    for(let i = 1 ; i <= k ; i++){
        pre[i] = [];
        prec[i] = []
    }
    
    for(const p of rowConditions){
        pre[p[0]].push(p[1]);
        aft[p[1]]++;
    }
    
    for(const p of colConditions){
        prec[p[0]].push(p[1]);
        aftc[p[1]]++;
    }
    
    let ans = [];
    let temp = [];
    
    let ansc = [];
    let tempc = [];
    
    for(let i = 1 ; i <= k ; i++){
        if(aft[i] === 0){
            ans.push(i);
            temp.push(i);
        }
        
        if(aftc[i] === 0){
            ansc.push(i);
            tempc.push(i);
        }
    }

    while(temp.length > 0){
        const a = temp.pop();
        for(const i of pre[a]){
            aft[i]--;
            if(aft[i] === 0){
                ans.push(i);
                temp.push(i);
            }
        }
    }
    
    
    while(tempc.length > 0){
        const a = tempc.pop();
        for(const i of prec[a]){
            aftc[i]--;
            if(aftc[i] === 0){
                ansc.push(i);
                tempc.push(i);
            }
        }
    }
    
    if(ans.length < k || ansc.length < k) return [];
    
    let out = new Array(k).fill(0);
    for(let i = 0 ; i < k ; i++){
        out[i] = new Array(k).fill(0);
    }

    let t = new Array(k+1).fill(0);

    for(let i = 0 ; i < k ; i++){
        t[ansc[i]] = i;
    }
    
    for(let i = 0 ; i < k ; i++){
        out[i][t[ans[i]]] = ans[i];
    }

    return out;
    
};