/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numberMap = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    
    let temp = [];
    const ans = [];
    if(digits === "") return [];
    findCombination(0);
    function findCombination(index){
        if(index === digits.length){
            ans.push(temp.join(""));
        }else{
            for(let i = 0 ; i < numberMap[digits[index]].length ; i++){
                temp.push(numberMap[digits[index]][i])
                findCombination(index + 1)
                temp.pop();
            }
        }
    }
    return ans;
};