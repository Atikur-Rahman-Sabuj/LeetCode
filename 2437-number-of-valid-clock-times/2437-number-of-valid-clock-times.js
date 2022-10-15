/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let ans = 1;
    if(time[3] === "?"){
        ans = ans * 6;
    }
    if(time[4] === "?"){
        ans = ans * 10;
    }
    if(time[0] === "?" && time[1] === "?"){
        ans = ans * 24;
    }
    else if(time[0] === "?"){
        if(time[1] > "3"){
            ans = ans * 2;
        }else{
            ans = ans * 3;
        }
    }else if(time[1] === "?"){
        if(time[0] === "2"){
            ans = ans * 4
        }else{
            ans = ans * 10;
        }
    }
    return ans;
    
};