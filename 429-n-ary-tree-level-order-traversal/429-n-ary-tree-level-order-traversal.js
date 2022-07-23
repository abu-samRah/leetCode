/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ans = []
    const queue = [root]
    if(!root) return ans
    let currLen = queue.length , i=0
    let ordering = []
    while(i<currLen){
        const curr = queue.shift()
        ordering.push(curr.val)
        for(let i =0; i<curr.children.length; i++ )
           queue.push(curr.children[i])
        i++
        
        if(i >= currLen){
            i = 0
            currLen = queue.length
            ans.push(ordering)
            ordering=[]
        }
    }
    
    return ans
};