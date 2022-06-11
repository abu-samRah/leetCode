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
var inorderTraversal = function(root) {
    const arr = []
    const inOrder = (node) =>{
        if(node){
            inOrder(node.left)
            arr.push(node.val)
            inOrder(node.right)
        }
    }
    inOrder(root)
    return arr
};