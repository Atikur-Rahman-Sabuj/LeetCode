/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    const nums = num.toString().split("").sort((a,b)=>a-b);
    let num1 = 0, num2 = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(i & 1){
            num1 = num1*10 + parseInt(nums[i])
        }else{
            num2 = num2*10 + parseInt(nums[i])
        }
    }
    return num1 + num2
};