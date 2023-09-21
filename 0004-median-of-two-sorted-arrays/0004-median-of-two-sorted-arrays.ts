function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
   const merged = mergeTwoSortedArrays(nums1, nums2);
   const length = merged.length;
   if (length % 2 === 0) {
      return (merged[length / 2] + merged[length / 2 - 1]) / 2;
   }
   return merged[Math.floor(length / 2)];
}

function mergeTwoSortedArrays(nums1: number[], nums2: number[]): number[] {
   const result = [];
   let i = 0;
   let j = 0;
   while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
         result.push(nums1[i]);
         i++;
      } else {
         result.push(nums2[j]);
         j++;
      }
   }
   while (i < nums1.length) {
      result.push(nums1[i]);
      i++;
   }
   while (j < nums2.length) {
      result.push(nums2[j]);
      j++;
   }
   return result;
}
