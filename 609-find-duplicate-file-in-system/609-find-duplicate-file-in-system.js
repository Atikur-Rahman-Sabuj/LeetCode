/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const m = new Map();
    for(const path of paths){
        const df = path.split(" ");
        for(let i = 1 ; i < df.length ; i++){
            const ff = df[i].split("(");
            const file = ff[1].split(")")[0];
            if(m.has(file)){
                m.get(file).push(df[0]+"/"+ff[0]);
            }else{
                m.set(file, [df[0]+"/"+ff[0]]);
            }
        }
    }
    const ans = [];
    m.forEach((value)=>{
        if(value.length > 1){
            ans.push(value);
        }
    })
    return ans;
};