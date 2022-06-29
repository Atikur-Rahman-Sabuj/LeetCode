/*
 * @lc app=leetcode id=406 lang=typescript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
   people.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
   const result: number[][] = Array(people.length);
   for (const _people of people) {
      let count = 0;
      let i = 0;
      while (count < _people[1]) {
         if (result[i] === undefined) count++;
         i++;
      }
      while (result[i] !== undefined) i++;
      result[i] = _people;
   }
   return result;
}
// @lc code=end
