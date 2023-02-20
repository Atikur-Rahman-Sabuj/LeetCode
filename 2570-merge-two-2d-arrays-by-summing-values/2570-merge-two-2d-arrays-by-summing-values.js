/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    const ans = [];
    while((i < nums1.length) || (j < nums2.length)){
        //console.log(i, j)
        if(i === nums1.length){
            ans.push(nums2[j]); 
            j++; continue;
        }
        if(j === nums2.length){
            ans.push(nums1[i]); 
            i++; continue;
        }
        if(nums1[i][0] === nums2[j][0]){
            ans.push([nums1[i][0], nums1[i][1] + nums2[j][1]])
            i++; j++;
        }else if(nums1[i][0]  <  nums2[j][0]){
            ans.push(nums1[i]);
            i++
        }else{
            ans.push(nums2[j]);
            j++
        }
        //console.log(i,j, i < nums1.lenght, j < nums2.length)
    }
    return ans;
};