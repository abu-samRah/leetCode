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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  if(!root) return result
    
  const queue = [root]
  let ordering = []

  let i = 0
  let currLen = queue.length

  while(i<currLen){
    const front = queue.shift()
    ordering.push(front.val)

    if(front.left) queue.push(front.left)
    if(front.right) queue.push(front.right)

    i++
    if(i>=currLen){
      i = 0
      currLen = queue.length
      result.push(ordering)
      ordering = []
    }
  }
  
  return result;
};