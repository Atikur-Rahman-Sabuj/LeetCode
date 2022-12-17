/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const st = [];
    const operators = ["+", "-", "*", "/"];
    for(const token of tokens){
        if(operators.includes(token)){
            // if operator execute and push result to stack
            let temp = eval(st.pop(), st.pop(), token);
            st.push(temp);
        }else{
            // if number push to stack
            st.push(parseInt(token));
        }
    }
    return st.pop();
};

function eval(par1, par2, operator){
    switch(operator){
        case "+" : return par2 + par1
        case "-" : return par2 - par1
        case "*" : return par2 * par1
        case "/" :{
            let temp = par2 / par1
            // truncate towards zero
            if(temp > 0){
                return Math.floor(temp)
            }else{
                return Math.ceil(temp)
            }
        } 
    }
}