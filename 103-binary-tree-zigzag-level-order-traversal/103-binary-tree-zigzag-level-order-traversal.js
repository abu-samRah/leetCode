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
var zigzagLevelOrder = function(root) {
    const ans = []
    const queue = [root]
    if(!root) return ans
    
    let currLen = queue.length , i=0
    let fromLeft = true
    let ordering = []
    while(i<currLen){
        const curr = queue.shift()
        ordering.push(curr.val)
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
        
        i++
        
        if(i >= currLen){
            i = 0
            currLen = queue.length
            
             if(fromLeft){
                ans.push(ordering)
                fromLeft = false
            }else{
                ans.push(ordering.reverse())
                fromLeft = true
            }
        
            ordering=[]
        }
    }
    
    return ans
};