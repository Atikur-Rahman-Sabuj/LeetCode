/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let ans = 0;
    while(left < right){
        // console.log(right, left, height[left], height[right])
        // console.log((right - left) * Math.min(height[left], height[right]))
        ans = Math.max(ans, (right - left) * Math.min(height[left], height[right]) );
        if(height[right] < height[left]) right--;
        else left ++;
    }
    return ans;
};