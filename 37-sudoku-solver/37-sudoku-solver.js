/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rows = [], cols = [], sec = [];
    for(let i = 0 ; i < 9 ; i++){
        rows[i] = new Map();
        cols[i] = new Map();
        sec[i] = new Map();
    }
    
    for(let i = 0 ; i < 9 ; i++){
        for(let j = 0 ; j < 9 ; j++){
            if(board[i][j] !== "."){
                rows[i].set(board[i][j], i);
                cols[j].set(board[i][j], j);
                sec[(section(i,j))].set(board[i][j], i);
            }
        }
    }
    let found = false;
    find(0,0);
    function find(i, j){
        if(i === 9){
            found = true;
            return;
        }
        if(board[i][j] === "."){
            for(let v = 1 ; v <= 9 ; v++){
                if(!rows[i].has("" + v) && !cols[j].has("" + v) && !sec[section(i,j)].has("" + v)){
                    //set
                    board[i][j] = "" + v;
                    rows[i].set("" + v, i);
                    cols[j].set("" + v, j);
                    sec[(section(i,j))].set("" + v, i);
                    //call
                    let jj = j + 1;
                    if(jj === 9){
                        find(i+1, 0);
                    }else{
                        find(i, jj);
                    }
                    if(found) return;
                    //remove
                    board[i][j] = ".";
                    rows[i].delete("" + v);
                    cols[j].delete("" + v);
                    sec[(section(i,j))].delete("" + v);
                }
            }
        }else{
            let jj = j + 1;
            if(jj === 9){
                find(i+1, 0);
            }else{
                find(i, jj);
            }
            if(found) return;
        }
    }
    
    function section(i, j){
        let ii = Math.floor(i/3);
        let jj = Math.floor(j/3);
        return (ii + jj*3);
    }
};