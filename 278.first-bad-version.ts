/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
   return function (n: number): number {
      let result = -1;
      function find(start: number, end: number) {
         const m = Math.floor((start + end) / 2);
         if (isBadVersion(m) && (!isBadVersion(m - 1) || m === 0)) {
            result = m;
            return;
         }
         if (start >= end) return;
         if (isBadVersion(m)) {
            find(start, m - 1);
         } else {
            find(m + 1, end);
         }
      }
      find(0, n);
      return result;
   };
};
// @lc code=end
