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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root === null) return [];
    const map = new Map();
    
    function traverseTree(node, level){
        if(node === null) return;
        if(map.has(level)){
            const temp = map.get(level);
            temp[0] += node.val;
            temp[1] += 1;
        }else{
            map.set(level, [node.val, 1]);
        }
        traverseTree(node.left, level+1);
        traverseTree(node.right, level+1);
    }
    
    traverseTree(root, 0);
    const ans = [];
    for(let i = 0 ; map.has(i) ; i++){
        const temp = map.get(i);
        ans.push(temp[0]/temp[1]);
    }
    return ans;
    
};