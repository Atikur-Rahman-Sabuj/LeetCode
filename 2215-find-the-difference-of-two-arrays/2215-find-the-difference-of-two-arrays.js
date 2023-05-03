/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const m = new Map();
    const ans = [ [], []];
    for(let i = 0 ; i < nums1.length ; i++){
        m.set(nums1[i], i);
    }
    for(const num of nums2){
        if(m.has(num)){
            m.set(num, -1);
        }else{
            m.set(num, -1);
            ans[1].push(num);
        }
    }
    m.forEach((key, val)=>{
        if(key != -1){
            ans[0].push(val)
        }
    })
    return ans;
};