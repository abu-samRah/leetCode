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
var deepestLeavesSum = function(root) {
    const possible = []
    const inOrder = (node,depth) =>{
        if(node){
            if(!node.left&&!node.right){
                possible.push({depth,val:node.val})
                return
            }
            inOrder(node.left, depth +1)
            inOrder(node.right, depth +1)
        }
    }
    inOrder(root,0)
    const maxDepth = possible.reduce((acc,curr) => Math.max(acc,curr.depth),-1)
    return possible.reduce((acc,curr) => {
        if(curr.depth!==maxDepth){
            return acc
        }else{
            return acc + curr.val
        }
    },0)
    
};