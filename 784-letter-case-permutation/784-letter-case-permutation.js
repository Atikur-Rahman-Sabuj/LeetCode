/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const n = s.length;
    const sArr = s.split("");
    const ans = [];
    findPermutation(0);
    
    function findPermutation(index){
        //console.log(index)
        if(index === n){
            ans.push(sArr.join(""));
            return;
        }
        if(isNumber(sArr[index])){
                findPermutation(index + 1);
        }else{
            findPermutation(index + 1);
            sArr[index] = changeOrder(sArr[index]);
            findPermutation(index + 1);
        }
    }
    return ans;
};



function changeOrder(char){
    if(char < 'a') 
        return String.fromCharCode(char.charCodeAt(0) + 32);
    else 
        return String.fromCharCode(char.charCodeAt(0) - 32);
}

function isNumber(char){
    return char <= '9';
}