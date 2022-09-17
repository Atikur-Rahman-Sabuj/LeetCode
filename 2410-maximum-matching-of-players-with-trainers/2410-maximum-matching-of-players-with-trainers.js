/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=>a-b);
    trainers.sort((a,b)=>a-b);
    let ans = 0, pl = players.length , tl = trainers.length, ti = 0;
    for(let i = 0; i < pl ; i++){
        while(players[i] > trainers[ti] && ti < tl){
            ti++;
        }
        if(ti === tl) break;
        ans++;
        ti++;
    }
    return ans;
};