function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const m = new Map();
    const st = [];
    for(let i = nums2.length - 1 ; i >= 0 ; i--){
        while(st.length > 0 && st[st.length - 1] <= nums2[i])
            st.pop();
        if(st.length){
            m.set(nums2[i], st[st.length - 1])
        }else{
            m.set(nums2[i], -1);
        }
        st.push(nums2[i])
    }
    for(let i = 0 ; i < nums1.length ; i++){
        nums1[i] = m.get(nums1[i]);
    }
    
    return nums1;
};