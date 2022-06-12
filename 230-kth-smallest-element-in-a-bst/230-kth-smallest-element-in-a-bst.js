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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let count = 0
    let target = null
    const dfs = (node) =>{
        if(!node) return null
        dfs(node.left)
        count++
        if(count === k) {
        target = node.val
        return 
        }
        dfs(node.right)
        
    }
     dfs(root)
   return target
};