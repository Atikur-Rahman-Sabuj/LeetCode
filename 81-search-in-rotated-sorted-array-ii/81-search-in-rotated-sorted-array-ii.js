/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    function search(left, right){
        while(left <= right){
            let mid = Math.floor((left+right)/2);

            if(nums[mid] === target) return true;

            if(nums[left] < nums[mid]){
                if(nums[left] <= target && target<nums[mid]){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }else if(nums[mid] < nums[right]){
                if(nums[mid] < target && target <= nums[right]){
                    left = mid + 1;
                }else{
                    right = mid - 1;
                }
            }else {
                return search(left, mid-1) || search(mid+1, right);
            }
        }
        return false;
    }

    return search(l, r);
};