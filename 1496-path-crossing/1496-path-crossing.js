/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const dir = {
        N: [0, 1],
        E: [1, 0],
        S: [0, -1],
        W: [-1, 0]
    };
    const visited = new Set();
    let currentPoint = [0, 0];
    visited.add(currentPoint[0]+"-"+currentPoint[1]);
    for(const p of path){
        currentPoint = [currentPoint[0] + dir[p][0], currentPoint[1] + dir[p][1]];
        const setKey = currentPoint[0]+"-"+currentPoint[1];
        if(visited.has(setKey)){
            return true
        }
        visited.add(setKey);
    }
    return false;
};