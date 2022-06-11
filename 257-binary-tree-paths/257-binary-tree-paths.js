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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = []
    
    const discoverPaths = (node, path)=>{
        
    if(!node) return null
        
    const currPath = path ? `${path}->${node.val}` : `${node.val}`
    
    if(!node.left && !node.right) {
        res.push(currPath)
        return null
    }
        
      discoverPaths(node.left , currPath)
      discoverPaths(node.right,currPath)
    }
    
    discoverPaths(root,'')
    
    return res
};

