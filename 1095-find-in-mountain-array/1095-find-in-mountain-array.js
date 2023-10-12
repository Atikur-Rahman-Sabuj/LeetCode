/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    const len =  mountainArr.length();
    let low = 0, high = len - 1, mid = 0;
    while(true){
        mid = Math.floor((low+high)/2);
        const t = mountainArr.get(mid);
        const left = mid == 0? -1 : mountainArr.get(mid-1);
        const right = mid == len-1?1000000001 : mountainArr.get(mid+1);
        if(t > left && t > right){
            break;
        }
        if(t > left){
            low = mid+1;
        }else{
            high = mid;
        }
    }
    low = 0;
    high = mid;
    while(low < high){
        const m = Math.floor((low+high)/2);
        const v = mountainArr.get(m);
        if(v === target) return m;
        if(v > target){
            high = m;
        }else{
            low = m+1;
        }
    }
    if(mountainArr.get(low) == target) return low;
    low = mid; high = len-1;
    while(low < high){
        const m = Math.floor((low+high)/2);
        const v = mountainArr.get(m);
        if(v === target) return m;
        if(v > target){
            low = m + 1;
        }else{
            high = m;
        }
    }
    if(mountainArr.get(low) == target) return low;
    return -1;
};