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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const findParentAndDepth = (node,value,depth=0,parent) =>{
        if(!node) return false
        if(node.val === value) return [depth,parent]
        return findParentAndDepth(node.left,value,depth+1,node) || findParentAndDepth(node.right,value,depth+1,node) 
    }
    
    const [xDepth, xParent] = findParentAndDepth(root, x);
  const [yDepth, yParent] = findParentAndDepth(root, y);
  return xDepth === yDepth && xParent !== yParent;
};