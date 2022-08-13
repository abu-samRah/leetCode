/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const map = {}
    let tmp = head
    let i=0
    for(; tmp;i++){
        map[i] = tmp
        tmp = tmp.next
    }
    const nodeToDelete = i - n 
    
    if(nodeToDelete > 0) 
        map[nodeToDelete - 1].next = map[nodeToDelete].next
    
    return nodeToDelete > 0 ? head : head.next
}; 