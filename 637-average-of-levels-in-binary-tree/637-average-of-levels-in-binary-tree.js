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
var averageOfLevels = function(root) {
   const ans = []
    const queue = [root]
    let sum = 0
    if(!root) return ans
    
    let currLen = queue.length , i=0

    while(i<currLen){
        const curr = queue.shift()
        sum += curr.val
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
        
        i++
        
        if(i >= currLen){
            i = 0
            ans.push(sum/currLen)
            currLen = queue.length
            sum=0
        }
    }
    
    return ans
};