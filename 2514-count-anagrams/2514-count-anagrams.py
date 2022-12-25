class Solution:
    def countAnagrams(self, s: str) -> int:
        
        a, mod = 1, 10**9+7
        
        for w in s.split():
            cnt = Counter(w)
            #print(cnt, cnt.total())
            n = factorial(cnt.total())   # [1] total number of permutations 
            for _, c in cnt.items():     # [2] correct for permutations 
                n //= factorial(c)       #     of same letters
            a *= n                       # [3] update the number of anagrams
        
        return a % mod