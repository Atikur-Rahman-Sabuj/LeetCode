class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1: return nums[0]
        if n == 2: return max(nums[0], nums[1])
        dp1, dp2 = [0]*(n+1), [0]*(n+1)
        dp1[0] = 0
        dp1[1] = 0
        dp2[0] = 0
        dp2[1] = nums[0]
        for i in range(2, n+1):
            dp2[i] = max(dp2[i-1], dp2[i-2]+nums[i-1])
            dp1[i] = max(dp1[i-1], dp1[i-2]+nums[i-1])
        return max(dp1[n], dp2[n-1])

        
        
        
        
        
        
        
    # if (nums.length === 1) {
    #   return nums[0];
    # }
    # const dp1 = [0, nums[0]];
    # const dp2 = [0, 0];
    # for (let i = 2; i <= nums.length; i++) {
    #   if (i === nums.length) {
    #      dp2[i] = Math.max(dp2[i - 2] + nums[i - 1], dp2[i - 1]);
    #   } else {
    #      dp2[i] = Math.max(dp2[i - 2] + nums[i - 1], dp2[i - 1]);
    #      dp1[i] = Math.max(dp1[i - 2] + nums[i - 1], dp1[i - 1]);
    #   }
    # }
    # return Math.max(dp1[nums.length - 1], dp2[nums.length]);
        