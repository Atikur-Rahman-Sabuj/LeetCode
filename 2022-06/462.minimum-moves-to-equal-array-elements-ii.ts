/*
 * @lc app=leetcode id=462 lang=typescript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
//Wrong answer
// function minMoves2(nums: number[]): number {
//    nums.sort();
//    const median = nums[Math.floor(nums.length / 2)];
//    let ans = 0;
//    for (const num of nums) {
//       ans += Math.abs(num - median);
//    }
//    return ans;
// }
// @lc code=end
//Accepted
function minMoves2(nums: number[]): number {
   nums.sort((a, b) => a - b);
   let ans = 0,
      median = nums[~~(nums.length / 2)];
   for (let i = 0; i < nums.length; i++) ans += Math.abs(median - nums[i]);
   return ans;
}

const input: number[] = [53, 32, 542, 23, -23, 47, 22];
console.log(minMoves2(input));
console.log(minMoves3(input));
