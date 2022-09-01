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
var goodNodes = function(root) {
    let count = 0
    const dfs = (node,prev) =>{
        if(!node) return
        if(node.val>=prev) count++
        dfs(node.left,Math.max(node.val,prev))
        dfs(node.right,Math.max(node.val,prev))
    }
    
    dfs(root,-Infinity)
    
    return count
};

/*
[9,null,3,6]

          9
           \
            3 
           /  
          6     
      
*/