/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    properties.sort((a,b)=>b[0]-a[0]);
    let groups = [[properties[0]]];
    for(let i = 1 ; i<properties.length; i++){
        if(properties[i][0] === properties[i-1][0]){
            groups[groups.length-1].push(properties[i])
        }else{
            groups.push([properties[i]]);
        }
    }
    
    let weakCount = 0;
    
    const maxAttack = properties[0][0];
    let maxDefence = properties[0][1];
    
    for(let i = 0; i < groups[0].length; i++){
        maxDefence = Math.max(maxDefence, groups[0][i][1]);
    }
    
    for(let i = 1; i < groups.length ; i++){
        let runningMax = maxDefence;
        for(let j = 0 ; j< groups[i].length ; j++){
            runningMax = Math.max(runningMax, groups[i][j][1]);
            if(groups[i][j][1] < maxDefence) weakCount++
        }
        maxDefence = runningMax;

    }
    return weakCount;
};