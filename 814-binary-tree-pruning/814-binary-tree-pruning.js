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
 * @return {TreeNode}
 */
const pruneTree = function(root) {
 root.left = root.left && pruneTree(root.left);
 root.right = root.right && pruneTree(root.right);
 if(root.val === 0 && !root.right && !root.left)
   return null
 else
   return root;
}