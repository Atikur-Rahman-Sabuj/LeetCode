/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const m = new Map();
    for(const [start, dest] of paths){
        m.set(start, dest);
    }
    let dest = paths[0][1];
    while(m.has(dest)){
        dest = m.get(dest);
    }
    return dest;
};