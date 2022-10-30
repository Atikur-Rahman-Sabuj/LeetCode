/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    const level = new Array(100001).fill(0), depth = new Array(100001).fill(0), d1 = new Array(100001).fill(0), d2 = new Array(100001).fill(0);
    traverse(root);
    
    const ans = [];
    for(const q of queries){
        const l = level[q];
        ans.push(l + (d1[l] === depth[q] ? d2[l] : d1[l]) - 1);
    }
    return ans;
    
    function traverse( n, l = 0) {
        if (n === null)
            return 0;
        level[n.val] = l;
        depth[n.val] = 1 + Math.max(traverse(n.left, l + 1), traverse(n.right, l + 1));   
        if (d1[l] < depth[n.val]) {
            d2[l] = d1[l];
            d1[l] = depth[n.val];
        } 
        else if (d2[l] < depth[n.val])
            d2[l] = depth[n.val];
        return depth[n.val];
    };
};