/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    let ans = new Array(m);
    for(let i = 0 ; i < m ; i++){
        ans[i] = new Array(n).fill(0);
    }
    for(let i = 0 ; i < m ; i++){
        traverse(i, 0, 0, 0, true, 1);
        traverse(i, n-1, 0, 0, true, 2);
    }
    for(let i = 1 ; i < n ; i++){
        traverse(0 , i, 0, 0, true, 1);
        traverse(m-1, i-1, 0, 0, true, 2);
    }
    
    function traverse(i , j, srcI, srcJ, out, val){
        if(i<0 || j<0 || i>=m || j>=n) return;
        if(ans[i][j] === val || ans[i][j] === 3) return;
        if(out || heights[srcI][srcJ] <= heights[i][j]){
            ans[i][j] += val;
            traverse(i-1, j, i, j, false, val);
            traverse(i+1, j, i, j, false, val);
            traverse(i, j-1, i, j, false, val);
            traverse(i, j+1, i, j, false, val);
        }
    }
    const out = [];
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(ans[i][j]===3){
                out.push([i,j]);
            }
        }
    }
    return out;
};