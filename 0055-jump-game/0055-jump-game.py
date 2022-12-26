class Solution:
    def canJump(self, nums: List[int]) -> bool:
        m, r = 1, [False]*len(nums)
        for index, item in enumerate(nums):
            #print(index, item)
            m = max(m-1, item)
            r[index] = True
            if(m == 0): break
        return r[len(nums)-1] == True
            
        