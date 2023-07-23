/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var allPossibleFBT = function(n) {
    const memo = new Map();
    const createFBT = (N = n) => {
        if (N % 2 === 0) return [];
        if (N === 1) return [new TreeNode(0)];
        if (memo.has(N)) return memo.get(N);
        const result = [];

        for (let index = 1; index < N; index += 2) {
            const left = createFBT(index);
            const right = createFBT(N - index - 1);
            for (const a of left) {
                for (const b of right) {
                    const node = new TreeNode(0, a, b);
                    result.push(node);
                }
            }
        }
        memo.set(N, result);
        return result;
    };

    return createFBT();
};