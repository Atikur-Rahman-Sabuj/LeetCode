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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    const nMap = new Map();
    function traverse(node, parentVal){
        if(node === null) return null;
        const left = traverse(node.left, node.val);
        const right = traverse(node.right, node.val);
        const connections = [];
        if(parentVal !== null) connections.push(parentVal);
        if(left !== null) connections.push(left);
        if(right !== null) connections.push(right);
        nMap.set(node.val, connections);
        return node.val;
    }
    traverse(root, null);
    const visited = new Map();;
    visited.set(start, 0);
    let ans = 0;
    const q = [[start,0]];
    while(q.length > 0){
        const p = q.pop();
        ans = Math.max(ans, p[1]);
        const arr = nMap.get(p[0]);
        for(let i = 0 ; i < arr.length ; i++){
            if(!visited.has(arr[i])){
                visited.set(arr[i], 0);
                q.push([arr[i], p[1]+1]);
            }
        }
    }
    return ans;
};