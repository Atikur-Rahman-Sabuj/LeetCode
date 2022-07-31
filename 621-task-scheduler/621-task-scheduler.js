/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let values = new Array(26).fill(0);
    let total = tasks.length;
    let maxValue = 0;
    let maxCounter = 0;
    for(task of tasks){
        let index = task.charCodeAt(0) - 'A'.charCodeAt(0);
        values[index]++;
        if(values[index] === maxValue){
            maxCounter++;
        }
        else if(values[index] > maxValue){
            maxValue = values[index];
            maxCounter = 1;
        }
    }
    
    let totalSlots = ((maxValue - 1) * (n + 1)) + maxCounter;
    return Math.max(totalSlots, total);
    
};