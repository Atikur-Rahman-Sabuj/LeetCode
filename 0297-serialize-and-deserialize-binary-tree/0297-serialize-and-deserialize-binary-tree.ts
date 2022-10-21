/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if(root === null) return "";
    const s = [];
    let index = 0;
    traverse(root);
    function traverse(node){
        if(node === null) {
            index++;
            return;
        }
        s[index++] = node.val;
        traverse(node.left);
        traverse(node.right);
    }
    return s.join(",");
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if(data.length === 0) return null;
    const s = data.split(",");
    let index = 0
    const root = new TreeNode(parseInt(s[index++]));
    traverse(root);
    function traverse(node){
        if(s[index] !== "" && s[index] !== undefined){
            node.left = new TreeNode(parseInt(s[index++]));
            traverse(node.left);
        }else{
            index++;
        }
        if(s[index] !== "" && s[index] !== undefined){
            node.right = new TreeNode(parseInt(s[index++]));
            traverse(node.right);
        }else{
            index++;
        }
    }
    return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */