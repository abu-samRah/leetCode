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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const search = (root,val) =>{
        if(!root) return
        if(root.val === val)return root
        return val > root.val ? search(root.right,val) : search(root.left,val)
    }
    const res = search(root, val)
    return res ?? null
};