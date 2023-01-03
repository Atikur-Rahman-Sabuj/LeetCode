function minDeletionSize(strs: string[]): number {
    const n = strs.length, sl = strs[0].length
    let ans = 0;
    
    for(let j = 0 ; j < sl ; j++){
        for(let i = 1 ; i < n ; i++){
            if(strs[i-1][j] > strs[i][j]){
                ans++;
                break;
            }
        }
    }
    return ans;
};