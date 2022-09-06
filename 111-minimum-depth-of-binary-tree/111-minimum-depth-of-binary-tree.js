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
var minDepth = function(root) {
    
    const queue = [root]
    let ans = 1
    if(!root) return 0
    
    let currLen = queue.length , i=0

    while(i<currLen){
        const front = queue.shift()
        
        if(!front.left && !front.right) return ans
        
        if(front.left) queue.push(front.left)
        if(front.right) queue.push(front.right)
        
        i++
        
        if(i >= currLen){
            i = 0
            currLen = queue.length
            ans+=1
        }
    }
    
    return ans
};