/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let low = 0, high = arr.length - 1, mid= 0;
    while(low < high){
        mid = Math.floor((low+high)/2);
        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return mid;
        if(arr[mid] > arr[mid-1]) low = mid + 1;
        else high = mid;
    }
    return low;
};