/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let arr = new Array(100005).fill(0);
    
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i]%2 === 0){
            arr[nums[i]]++;
        }
    }
    
    let fr = 0, frI = -1;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > fr){
            frI = i;
            fr = arr[i];
        }
    }
    return frI;
};