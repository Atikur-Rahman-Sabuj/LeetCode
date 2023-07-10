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
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    let depth = 1;
    const st = [root];
    while(true){
        let stL = st.length;
        for(let i = 0 ; i < stL ; i++){
            let tempNode = st.shift();
            if(!tempNode.left && !tempNode.right)
                return depth;
            if(tempNode.left)
                st.push(tempNode.left);
            if(tempNode.right)
                st.push(tempNode.right);
        }
        depth++;
    }
};