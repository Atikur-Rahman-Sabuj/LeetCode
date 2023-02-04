/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isPossibleToCutPath = function(grid) {
    if( !dfs(0, 0) ) return true;
    grid[0][0]=1; //reset for 2nd dfs() as got updated above
    return !dfs(0, 0)
    
    function dfs(i, j) {
        if(i+1 == grid.length && j+1 == grid[0].length) return true;
        if(i+1 < grid.length && grid[i+1][j] == 1){ 
            grid[i][j] = 0;
            if(dfs(i+1, j) ) return true;
        }
        if(j+1 < grid[0].length && grid[i][j+1] == 1){ 
            grid[i][j] = 0;
            return dfs(i, j+1);
        }
        return false;
    }
};
