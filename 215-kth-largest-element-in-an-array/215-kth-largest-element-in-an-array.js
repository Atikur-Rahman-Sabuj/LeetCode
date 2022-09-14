/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
        pivot = nums[Math.floor(Math.random()*nums.length)]
        const left =  [] 
        const mid  =  []
        const right = []
        nums.forEach(num=>{
            if(num < pivot) right.push(num);
            else if(num > pivot) left.push(num);
            else mid.push(num);
        })
        let L = left.length;
        let M = mid.length;
        
        if (k <= L)
            return findKthLargest(left, k)
        else if(k > (M + L))
            return findKthLargest(right, k - L - M)
        else
            return mid[0]
};