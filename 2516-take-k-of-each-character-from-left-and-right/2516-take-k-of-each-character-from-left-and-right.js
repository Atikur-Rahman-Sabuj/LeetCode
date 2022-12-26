/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    //Sliding window
    let freq={},extraFreq={};
    if(k===0){
        return 0;
    }
    for(let i=0;i<s.length;i++){
        let c = s[i];
        if(freq[c]===undefined){
            freq[c] = 1;
        }else{
            freq[c]++;
        }
    }
    if(freq['a']===undefined || freq['a']<k || freq['b']===undefined || freq['b']<k || freq['c']===undefined || freq['c']<k){
        return -1;
    }
    for(let c in freq){
        extraFreq[c] = freq[c]-k;
    }
    let left=0,windowFreq={},maxWindowSize=0;
    for(let right=0;right<s.length;right++){
        // do logic here to add arr[right] to curr
        addCharInWindow(windowFreq,s[right]);
        while(isValid(windowFreq)===false){//Keep looping if the window remains invalid
            // remove arr[left] from curr
            removeCharInWindow(windowFreq,s[left]); 
            left++;
        }
        //Now window is valid, update the answer where
        maxWindowSize = Math.max(maxWindowSize,right-left+1);
    }
    
    return s.length-maxWindowSize;
    
    function addCharInWindow(windowFreq,c){
        if(windowFreq[c]===undefined){
                windowFreq[c] = 1;
        }else{
            windowFreq[c]++;
        } 
    }
    function removeCharInWindow(windowFreq,c){
        windowFreq[c]--;
    }
    function isValid(windowFreq){
        for(let c in extraFreq){
            if(windowFreq[c]!==undefined && windowFreq[c]>extraFreq[c]){
                return false;
            }
        }
        return true;
    }
};