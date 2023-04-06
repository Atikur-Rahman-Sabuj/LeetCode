/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
     const v = new Array(grid.length).fill(null).map(_ => new Array(grid[0].length).fill(0));
    
    let ans = 0;
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[0].length ; j++){
            if(!grid[i][j] && !v[i][j]){
                if(dfs(grid, v, i, j)){
                    ans++;
                }
            }
            
        }
    }
    return ans;
};

function dfs(grid, v,  i, j, log){
    if(log){
        console.log(i, j, grid[i][j], v[i][j])
    }
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length){
        return false;
    }
    if(grid[i][j] || v[i][j]) return true
    v[i][j] = 1;
    let a =  dfs(grid,v, i + 1, j, log) 
    let b = dfs(grid,v, i, j + 1, log)
    let c = dfs(grid,v, i - 1, j, log)
    let d = dfs(grid,v, i, j - 1, log)
    return a & b & c & d
}