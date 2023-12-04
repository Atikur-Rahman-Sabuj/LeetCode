/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let ans = "";
    let prevDig = "", digCount = 0;
    for(const dig of num){
        if(dig === prevDig){
            digCount++;;
        }else{
            if(digCount >= 3 && prevDig > ans){
                ans = prevDig;
            }
            digCount = 1;
            prevDig = dig;
        }
    }
    if(digCount >= 3 && prevDig > ans){
        ans = prevDig;
    }
    return ans+ans+ans;
    
};