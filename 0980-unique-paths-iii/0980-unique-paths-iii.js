/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const m = grid.length, n = grid[0].length;
    let ans = 0;
    let obsCount = 0;
    let start = [];
    let end = [];
    for(let i = 0 ; i < m ; i++){
        for(let j = 0; j < n ; j++){
            if(grid[i][j] === -1){
                obsCount++;
            }
            else if(grid[i][j] === 1){
                start = [i, j];
            }
            else if(grid[i][j] === 2){
                end = [i, j];
            }
        }
    }
    const visitableCell = (m*n) - obsCount - 1; 
    find(start[0], start[1], []);
    
    function find(i, j, arr){
        if(i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === -1){
            return;
        }
        
        let key = gk(i,j);
        if(arr.includes(key)) return;
        
        if(i === end[0] && j === end[1]){
            if(arr.length === visitableCell) ans++
            return;
        }
        arr.push(key)
        find(i+1, j, arr)
        find(i-1, j, arr)
        find(i, j+1, arr)
        find(i, j-1, arr)
        arr.pop(key);
    }
    return ans;
    
};



function gk (i, j){
    return i+"-"+j;
}