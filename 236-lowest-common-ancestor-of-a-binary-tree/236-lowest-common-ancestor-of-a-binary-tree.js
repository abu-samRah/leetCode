/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


var lowestCommonAncestor = function(root, p, q) {
  const dfs = (node) => {
    if (!node) {
      return null;
    }
  
    if (node === p || node === q) {
      return node 
    }
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return node              // p is in one side and q is in the other
  }
  
  return dfs(root);
}