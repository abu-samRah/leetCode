/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const queue = [root]
    if(!root) return root
    let currLen = queue.length , i=0
    let ordering = []
    while(i<currLen){
        const curr = queue.shift()
        ordering.push(curr)
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
        
        i++
        
        if(i >= currLen){
            i = 0
            currLen = queue.length
            for(let i=0;i<ordering.length -1;i++)
                ordering[i].next = ordering[i+1]
            
            ordering=[]
        }
    }
    
return root
};