/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let ans = 0;
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[0].length ; j++){
            ans += grid[i][j]
        }
    }
    const v = new Array(grid.length).fill(0).map(_ => new Array(grid[0].length).fill(0));
    for(let i = 0 ; i < grid.length ; i++){
        if(!v[i][0] && grid[i][0]){
            dfs(i, 0)
        }
        if(!v[i][grid[0].length-1] && grid[i][grid[0].length-1]){
            dfs(i, grid[0].length-1)
        }
    }
    
    for(let i = 0 ; i < grid[0].length ; i++){
        if(!v[0][i] && grid[0][i]){
            dfs(0, i)
        }
        
        if(!v[grid.length-1][i] && grid[grid.length-1][i]){
            dfs(grid.length-1, i)
        }
    }
    
    return ans
    
    
    function dfs(i, j){
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || v[i][j] || !grid[i][j]) return;
        v[i][j] = 1;
        dfs(i+1, j);
        dfs(i-1, j);
        dfs(i, j+1);
        dfs(i, j-1);
        ans--;
    }
};