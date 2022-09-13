/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let low = 0, high = arr.length - 1, mid = 0, found = false;
    const ans = [];
    while(low < high){
        mid = Math.floor((high+low)/2);
        if(arr[mid] === x){
            found = true;
            ans.push(arr[mid]);
            findCloser(mid-1, mid+1);
            break;
        }
        if(arr[mid] < x && x < arr[mid + 1]){
            found = true;
            findCloser(mid, mid + 1);
            break;
        }
        if(arr[mid - 1] < x && x < arr[mid]){
            found = true;
            findCloser(mid-1, mid);
            break;
        }
        if(x < arr[mid]){
            high = mid;
        }else{
            low = mid + 1;
        }
    }
    
    if(!found){
        findCloser(low, low + 1);
    }
    
    function findCloser(left, right){
        if(ans.length === k) return;
        if(left < 0){
            ans.push(arr[right]);
            findCloser(left, right + 1);
        }else if(right === arr.length){
            ans.unshift(arr[left]);
            findCloser(left - 1, right);
        }else{
            if(x-arr[left] <= arr[right] - x){
                ans.unshift(arr[left]);
                findCloser(left - 1, right);
            }else{
                ans.push(arr[right]);
                findCloser(left, right + 1);
            }
        }
    }
    
    return ans;
};