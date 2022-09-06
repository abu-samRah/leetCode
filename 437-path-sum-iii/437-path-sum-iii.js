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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let ans = 0
    const dfs = (node, sum, path) =>{
       
        if(!node) return 0
        path.push(node.val)
        let pathSum = 0;
        
         for (let i = path.length - 1; i >= 0; i--) {
            pathSum += path[i];
            if (pathSum === sum) {
              ans += 1;
            }
         }
       
        dfs(node.left  ,sum  ,[...path]) 
        dfs(node.right ,sum ,[...path])
        //path.pop()
       
    }
    
    dfs(root,targetSum,[])
    return ans
};