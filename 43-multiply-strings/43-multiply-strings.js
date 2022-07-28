/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return "0";
    let res = new Array(num1.length + num2.length).fill(0)
    for(let i = num1.length - 1 ; i >= 0 ; i--){
        for(let j = num2.length - 1 ; j >= 0 ; j--){
            res[i+j+1] += parseInt(num1[i]) * parseInt(num2[j]);
            res[i+j] += Math.floor(res[i+j+1]/10);
            res[i+j+1] = res[i+j+1]%10;
        }
        //console.log(res)
    }
    
    let result = "";
    let started = false;
    for(let i of res){
        if(!started && i !== 0){
            started = true;
        }
        if(started){
            result += i;
        }
        
    }
    return result;
    
};