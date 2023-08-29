/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    const y = [customers[0]==="Y"?1:0], n = customers.length
    for(let i = 1 ; i < n ; i++){
        if(customers[i]==="Y"){
            y[i] = y[i-1] + 1;
        }else{
            y[i] = y[i-1];
        }
    }
    //console.log(y)
    let ans = 0, minP = y[n-1];
    for(let i = 0 ; i < n ; i++){
        let p = i + 1 - y[i] + y[n-1] - y[i];
        //console.log(p)
        if(p < minP){
            minP = p
            ans = i+1;
        }
    }
    return ans;
};