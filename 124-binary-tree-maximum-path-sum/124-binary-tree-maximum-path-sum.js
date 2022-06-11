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
var maxPathSum = function(root) {
    let res = root.val
    
    const dfs = (node) =>{
        if(!node) return 0
        
        let leftSum = dfs(node.left)
        let rightSum = dfs(node.right)
        
        leftSum  = Math.max(leftSum,0)
        rightSum = Math.max(rightSum,0)
        
        res = Math.max((node.val + leftSum + rightSum) , res)
        
        return node.val + Math.max(leftSum,rightSum)
    }
    
    dfs(root)
    return res
};