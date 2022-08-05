/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    let pre = new Array(numCourses);
    let aft = new Array(numCourses).fill(0);
    
    for(let i = 0 ; i < numCourses ; i++){
        pre[i] = [];
    }
    
    for(const p of prerequisites){
        pre[p[1]].push(p[0]);
        aft[p[0]]++;
    }
    
    let ans = [];
    let temp = [];
    
    for(let i = 0 ; i < numCourses ; i++){
        if(aft[i] === 0){
            ans.push(i);
            temp.push(i);
        }
    }

    while(temp.length > 0){
        const a = temp.pop();
        for(const i of pre[a]){
            aft[i]--;
            if(aft[i] === 0){
                ans.push(i);
                temp.push(i);
            }
        }
    }
    
    return ans.length === numCourses ? ans: [];
    
};