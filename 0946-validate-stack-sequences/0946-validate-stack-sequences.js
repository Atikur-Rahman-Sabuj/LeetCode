/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let j = 0;
    for(let i = 0 ; i< pushed.length ; i++){
        stack.push(pushed[i]);
        while(stack.length > 0 && popped[j] === stack[stack.length-1]){
            stack.pop()
            j++;
        }
    }
    while(stack.length > 0){
        if(stack.pop() !== popped[j]) return false;
        j++;
    }
    return true;
};