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
  if(!root) return []
  const res = [root.val]; 
  const queue = [root];
  let i = 0, currLen =  queue.length
  while (i<currLen) {
     const front = queue.shift()
     
     if(front.left) queue.push(front.left)
     if(front.right) queue.push(front.right)
     
     i++
     if(i=== currLen){
         i = 0
         currLen = queue.length
         queue.length && res.push(queue[queue.length-1].val)
     } 
  }

  return res;
};
