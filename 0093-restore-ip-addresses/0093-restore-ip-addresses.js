/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length < 4 || s.length > 12) return [];
    const b = [[],[],[],[]];
    const ans = [];
    find(0, 0);
    return ans;
    
    function find(i, k){
        if(i === 3 && b[i].length > 0 && k === s.length){
            pushAns();
        }
        if(k >= s.length) return;
        
        b[i].push(s[k]);
        if(isValid(b[i], i, k + 1)){
            find(i, k+1);
        }
        b[i].pop();
        
        if(i === 3 || b[i].length === 0) return;
        
        let ni = i+1
        b[ni].push(s[k]);
        if(isValid(b[ni], ni, k + 1)){
            find(ni, k+1);
        }
        b[ni].pop();
        
        
    }
    
    function pushAns(){
        ans.push(b.map((el) => el.join("")).join("."));
    }
    
    function isValid(arr, i, k){
        let left = s.length - k;
        let min = 3 - i;
        let max = min * 3 + (3 - arr.length)
        if(left < min || left > max) return false;
        
        
        if(arr.length > 3 || (arr.length > 1 && arr[0] === "0")) return false;
        let it = parseInt(arr.join(""))
        return it <= 255;
    }
};