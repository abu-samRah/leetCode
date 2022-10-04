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
    let sum = root.val
    
    const dfs = (node) =>{
        if(!node) return 0
        
        const left =  Math.max(dfs(node.left),0)
        const right = Math.max(dfs(node.right),0)
        
        sum = Math.max(sum, right+left+node.val)
        
        return node.val + Math.max(left,right)
    }
    
    dfs(root)
    return sum
};