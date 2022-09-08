function summaryRanges(nums: number[]): string[] {
    if(nums.length === 0) return []
    let ans = [];
    let rs = nums[0], re = nums[0];
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] === (re + 1)){
            re++;
        }else{
            if(rs === re){
                ans.push(rs.toString());
            }else{
                ans.push(rs.toString()+"->"+re.toString());
            }
            rs = nums[i]
            re = nums[i]
        }
    }
    if(rs === re){
        ans.push(rs.toString());
    }else{
        ans.push(rs.toString()+"->"+re.toString());
    }
    return ans;
};