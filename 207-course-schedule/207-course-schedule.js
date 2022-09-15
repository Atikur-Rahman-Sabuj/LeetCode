/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const rm = new Map();
    const prCount = new Array(numCourses).fill(0);
    for(const pre of prerequisites){
        let temp = rm.get(pre[1]);
        temp? temp.push(pre[0]) :rm.set(pre[1], [pre[0]]);
        prCount[pre[0]]++;
    }
    const qu = [];
    prCount.forEach((cv, i)=>{
        if(!cv) qu.push(i);
    })
    //console.log(rm)
    const visited = new Map();
    while(qu.length > 0){
        let temp = qu.shift();
        visited.set(temp, 1);
        let tms = rm.get(temp);
        tms = tms??[];
        for(let i = 0 ; i < tms.length ; i++){
            prCount[tms[i]]--;
            if(prCount[tms[i]] < 1 && !visited.has(tms[i])){
                qu.push(tms[i]);
            }
        }
    }
    //console.log(visited)
    return visited.size === numCourses;
};