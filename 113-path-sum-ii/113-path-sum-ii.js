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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const ans = []
    const dfs = (node, sum, path) =>{
       
        if(!node) return 
        path.push(node.val)
        if(node.val ===  sum && !node.left && !node.right) ans.push([...path]) 
        else{
            dfs(node.left  ,sum  - node.val ,[...path]) 
            dfs(node.right ,sum  - node.val ,[...path])
        }
       
         //path.pop()
    }
    
    dfs(root,targetSum,[])
    return ans
};