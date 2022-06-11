/*
 * @lc app=leetcode id=1003 lang=typescript
 *
 * [1003] Check If Word Is Valid After Substitutions
 */

// @lc code=start
function isValid(s: string): boolean {
   const stack: string[] = [];
   let l1, l2;
   for (let i = 0; i < s.length; i++) {
      if (s[i] === "c") {
         l1 = stack.pop();
         l2 = stack.pop();
         if (l1 !== "b" || l2 !== "a") {
            return false;
         }
      } else {
         stack.push(s[i]);
      }
   }
   return stack.length === 0;
}
// @lc code=end
