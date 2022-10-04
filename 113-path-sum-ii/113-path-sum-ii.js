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
  let allPaths = [];
  const dfs = (node,sum,path)=>{
    if(!node) return 
    const newSum = sum+node.val
    path.push(node.val)
    if(newSum === targetSum && !node.left && !node.right) {
      allPaths.push([...path])
      path.pop()
      return
    }
    
    dfs(node.left,newSum,path) 
    dfs(node.right,newSum,path)
    path.pop()
  }

  dfs(root,0,[])
  return allPaths;
};