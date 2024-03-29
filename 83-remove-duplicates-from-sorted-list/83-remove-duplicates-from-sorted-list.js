/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return head
    let curr = head
    let start = head.next
    
    while(start){
        if(start.val !== curr.val){
            curr.next = start
            curr = curr.next
        }
        
        start = start.next
        
    }
    curr.next = null
    return head
};