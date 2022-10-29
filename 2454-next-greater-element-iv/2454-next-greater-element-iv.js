/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function(nums) {
    const mpq = new MinPriorityQueue({priority: a=> a[1]});
    const lpq = new MinPriorityQueue({priority: a=> a[1]});
    for(let i = 0 ; i < nums.length ; i++){
        while(lpq.size() > 0 && lpq.front().element[1] < nums[i]){
            let j = lpq.dequeue().element[0];
            nums[j] = nums[i];
        }
        while(mpq.size() > 0 && mpq.front().element[1] < nums[i]){
            const el = mpq.dequeue().element;
            lpq.enqueue(el)
        }
        mpq.enqueue([i, nums[i]]);
    }
    while(lpq.size() > 0){
        nums[lpq.dequeue().element[0]] = -1;
    }
    while(mpq.size() > 0){
        nums[mpq.dequeue().element[0]] = -1;
    }
    return nums;
};