/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    for(let i = 1 ; i < points.length ; i++){
        ans += distance(points[i], points[i-1]);
    }
    return ans;
};

function distance(a, b){
    const disX = Math.abs(a[0] - b[0]);
    const disY = Math.abs(a[1] - b[1]);
    let dis = Math.max(disX, disY);
    return dis;
}