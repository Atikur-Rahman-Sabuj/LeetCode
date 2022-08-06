/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    let wt = [];
    let days = 1;
    for(task of tasks){
        if(wt[task]===undefined || wt[task] < days){
            days++; 
        }else{
            days += wt[task] - days + 1;
        }
        wt[task] = days + space;
    }
    return days - 1;
};