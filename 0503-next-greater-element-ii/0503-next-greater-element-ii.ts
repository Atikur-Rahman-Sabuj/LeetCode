function nextGreaterElements(nums: number[]): number[] {
    const ans = [];
    const st = [];
    for(let i = nums.length - 1 ; i >= 0 ; i--){
        while(st.length > 0 && st[st.length - 1] <= nums[nums.length - 1])
            st.pop();
        st.push(nums[i])
    }
    for(let i = nums.length - 1 ; i >= 0 ; i--){
        while(st.length > 0 && st[st.length - 1] <= nums[i])
            st.pop();
        if(st.length){
            ans[i] = st[st.length - 1];
        }else{
            ans[i] = -1;
        }
        st.push(nums[i])
    }
    
    return ans;
};