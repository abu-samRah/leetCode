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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const dfs = (node,sum)=>{
        if(!node) return false
        const newSum = sum+node.val
        if(newSum === targetSum && !node.left && !node.right) return true
        return dfs(node.left,newSum) || dfs(node.right,newSum)
  }

  return dfs(root,0)
    
};