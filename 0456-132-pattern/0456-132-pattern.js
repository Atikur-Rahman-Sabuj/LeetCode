/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
   let st = [];
    const n = nums.length;
    let first = nums[0];
    for(let num of nums){
        while(st.length>0 && st[st.length-1][0]<=num){
            st.pop();
        }

        if(st.length>0 && st[st.length-1][1]<num){
            return true;
        }
        st.push([num,first]);
        first = Math.min(first,num);
    }
    return false;
};