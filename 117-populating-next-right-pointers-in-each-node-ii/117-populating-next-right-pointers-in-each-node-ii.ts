/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    const queue = [root]
    if(!root) return root
    let currLen = queue.length , i=0
    let ordering = []
    let prev = null
    while(i<currLen){
        const curr = queue.shift()
        if(prev) prev.next = curr
        prev = curr
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
        
        i++
        
        if(i >= currLen){
            i = 0
            currLen = queue.length
            prev = null
        }
    }
    
return root
};