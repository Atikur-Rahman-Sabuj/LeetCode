/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let queue = [];
    let temp = [];
    const operators = ["+", "-", "*", "/"];
    //first parse the string into array of number and operators
    for(const char of s){
        if(char === " " || operators.includes(char)){
            let number = temp.length > 0 ? parseInt(temp.join("")):null;
            temp = [];
            if(number !== null) queue.push(number);
            if(char !== " "){
                queue.push(char);
            }
        }else{
            temp.push(char);
        }
    }
    let number = temp.length > 0 ? parseInt(temp.join("")):null;
    temp = [];
    if(number !== null) queue.push(number);
    
    //console.log(queue)
    //do calculation for division and multiplication
    for(let i = 0; i < queue.length ; i++){
        if(queue[i] === "/"){
            let val = Math.floor(temp.pop()/queue[i+1])
            temp.push(val);
            i++;
        }else if(queue[i] === "*"){
            let val = temp.pop() * queue[i+1];
            temp.push(val);
            i++;
        }else{
            temp.push(queue[i]);
        }
        //console.log(temp)
    }
    //console.log(temp);
    //do calculation for summation and substraction
    let res = temp[0];
    for(let i = 1 ; i < temp.length ; i++){
        if(temp[i] === "+"){
            res += temp[i+1];
            i++;
        }else if(temp[i] === "-"){
            res -= temp[i+1];
            i++;
        }
    }
    return res;
};