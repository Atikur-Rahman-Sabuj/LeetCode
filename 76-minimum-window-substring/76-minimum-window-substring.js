/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    const sm = new Array(82).fill(0);
    const tm = new Array(82).fill(0);
    if(t.length>s.length) return "";
    for(const c of t){
        let i = c.charCodeAt(0) - 'A'.charCodeAt(0);
        tm[i]++;
    }
    let start = 0, minStart = -1, minEnd = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    
    for(let i = 0; i < t.length - 1 ; i++){
        let index = s[i].charCodeAt(0) - 'A'.charCodeAt(0);
        sm[index]++;
    }
    
    for(let i = t.length - 1 ; i < s.length; i++){
        
        let index = s[i].charCodeAt(0) - 'A'.charCodeAt(0);
        sm[index]++;
        
        while(checkValid(tm, sm)){
            if(i-start+1 < ans){
                ans = i-start+1;
                minStart = start;
            }
            //console.log(start, i)
            let temp = s[start].charCodeAt(0) - 'A'.charCodeAt(0);
            sm[temp]--;
            start++;
        }
    }
    return minStart === -1?"":s.substring(minStart, minStart+ans);

    
};

function checkValid(arr1, arr2){
    for(let i = 0 ; i < 82 ; i++){
        if(arr1[i] !== 0 && arr1[i] > arr2[i]){
            return false;
        }
    }
    return true;
}