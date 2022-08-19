/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    const n = nums.length;
    
    const frequency = new Array(2004).fill(0);
    const result = new Array(2004).fill(0);
    for(const num of nums){
        frequency[num+1000]++;
    }
    //console.log(frequency);
    let i = 0;
    while(i <= 2000){
        //console.log(result);
        if(frequency[i] < 1 ){
            i++;
        }else{
            if(result[i] > 0){
                result[i]--;
                frequency[i]--;
                result[i+1]++;
            }else if(frequency[i+1] > 0 && frequency[i+2] > 0){
                frequency[i]--;
                frequency[i+1]--;
                frequency[i+2]--;
                result[i+3]++;
            }else{
                return false;
            }
        }
        
    }
    return true;
    
};