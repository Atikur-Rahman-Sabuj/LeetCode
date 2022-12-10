class Solution {
public:
    long long minimumTotalCost(vector<int>& nums1, vector<int>& nums2) {
        
        const int n=nums1.size();
        long long int ans=0;
        map<int,int> freq;
        int maxFrequency=0,maxFrequencyValue=0,toSwap = 0;
        
        for(int i=0;i<n;i++){
            if(nums1[i]==nums2[i]){
                freq[nums1[i]]++;
                if(freq[nums1[i]]>maxFrequency) maxFrequencyValue=nums1[i];
                maxFrequency=max(maxFrequency,freq[nums1[i]]);
                toSwap++;
                ans+=i;
            }
        }
        
        for(int i=0;i<n;i++){
            if(maxFrequency > toSwap/2 and nums1[i]!=nums2[i] and nums1[i]!=maxFrequencyValue and nums2[i]!=maxFrequencyValue){
                ans+=i;
                toSwap++;
            }
        }
        
        if(maxFrequency > toSwap/2) return -1;
        
        return ans;
    }
};