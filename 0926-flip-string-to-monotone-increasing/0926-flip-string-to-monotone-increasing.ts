function minFlipsMonoIncr(s: string): number {
    const zeroes = new Array(s.length + 1).fill(0)
    
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if(s[i] === '0'){
            zeroes[i] = zeroes[i+1] + 1
        }else{
            zeroes[i] = zeroes[i+1]
        }
    }
    
    let ans = Infinity
    let count = 0;
    
    for(let i = s.indexOf('1') ; i < s.length ; i++){
        if(s[i] === '1'){
            ans = Math.min(ans, count + zeroes[i])
            count++;
        }
    }
    return Math.min(ans, count);
};