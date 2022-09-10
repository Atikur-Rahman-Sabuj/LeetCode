/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[0] - b[0]);
    //console.log(points)
    let ans = 1;
    let prevX = points[0];
    for(let i = 1 ; i < points.length ; i++){
        if(points[i][0] > prevX[1]){
            prevX = points[i]
            ans++;
        }else{
            prevX[0] = Math.max(prevX[0], points[i][0])
            prevX[1] = Math.min(prevX[1], points[i][1])
        }
        //console.log(ans, prevX)
    }
    return ans;
};