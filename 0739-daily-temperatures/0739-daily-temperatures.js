/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length, stack = [], ans = [];
    for(let i = n-1 ; i >= 0 ; i--){
        let temp = temperatures[i];
        while(stack.length > 0 && temperatures[stack[stack.length-1]] <= temp){
            stack.pop();
        }
        if(stack.length  === 0){
            ans[i] = 0;
        }else{
            ans[i] = stack[stack.length-1] - i;
        }
        stack.push(i);
    }
    return ans;
};