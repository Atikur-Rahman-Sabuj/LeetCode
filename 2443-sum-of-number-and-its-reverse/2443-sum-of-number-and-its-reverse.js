/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    const m = new Map();
    for(let i = Math.floor(num/10); i <= num; i++){
        
        if(!m.has(i)){
            let rev = reverse(i);
            if(i+rev === num) return true;
            m.set(i, true);
            m.set(rev, true);
        }
            
            
    }
    return false;
    
    function reverse(num){
        let res = 0;
        while(num > 0){
            res = (res*10) + (num % 10);
            num = Math.floor(num / 10);
        }
        return res;
    }
};