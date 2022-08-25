/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const n = word.length;
    const p = board.length;
    const q = board[0].length;
    let found = false;
    
    for(let i = 0 ; i < p ; i++){
        for(let j = 0 ; j < q ; j++){
            if(board[i][j] === word[0]){
                const im = new Map();
                findMatch(i, j, 0, im);
                if(found) return true;
            }
        }
    }
    
    function findMatch(i, j, k, im){
        if(i < 0 || j < 0 || i >= p || j >= q) return;
        const iS = i+""+j;
        if(!im.has(iS) && k === n - 1 && board[i][j] === word[k]){
            found = true;
            return;
        }
        if(!im.has(iS) && board[i][j] === word[k]){
            //im.set(iS, 1);
            const nm = new Map(im);
            nm.set(iS, 1);
            //console.log(i, j, k, nm)
            findMatch(i+1, j, k+1, nm);
            findMatch(i-1, j, k+1, nm);
            findMatch(i, j+1, k+1, nm);
            findMatch(i, j-1, k+1, nm);
        }
    }
    
    return false;
    
};

