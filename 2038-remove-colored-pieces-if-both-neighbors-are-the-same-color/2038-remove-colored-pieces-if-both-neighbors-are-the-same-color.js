/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let count  = 0, prev = "";
    let moveA = 0, moveB = 0;
    for(let i = 0 ; i <= colors.length ; i++){
        if(colors[i] === prev){
            count++;
        }else{
            if(count > 2){
                if(prev === 'A'){
                    moveA += count - 2;
                }
                if(prev === 'B'){
                    moveB += count - 2;
                }
            }
            count = 1;
            prev = colors[i];
        }
    }
    return moveA > moveB;
};