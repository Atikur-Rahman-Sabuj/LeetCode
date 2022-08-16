function longestCommonPrefix(strs: string[]): string {
    let foundIndex = 0;
    while(true){
        const a = strs[0][foundIndex];
        if(a === undefined) break;
        let hasAll = true
        for(const str of strs){
            if(str[foundIndex] !== a){
                hasAll = false;
                break;
            }
        }
        if(!hasAll) break;
        foundIndex++;
        //console.log(foundIndex)
    }
    return strs[0].substring(0, foundIndex)
};