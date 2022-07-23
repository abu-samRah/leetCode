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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = []; // result array 
  const queue = [root];
  let currLen = queue.length, i =0
  if(!root) return []
  while (i<currLen) {
    const curr = queue.shift()
    if(curr.left)  queue.push(curr.left)
    if(curr.right) queue.push(curr.right)
    i++
      
    if(i === currLen) res.push(curr.val)
      
    if(i>=currLen){
        i = 0
        currLen = queue.length
    }
      
  }

  return res;
};
