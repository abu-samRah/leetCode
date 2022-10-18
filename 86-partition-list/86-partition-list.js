/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let beforeStart = null
    let beforeEnd = null
    let afterStart = null
    let afterEnd = null
    
    let start = head
    
    while(start){
        const next = start.next
        start.next = null
        
        if(start.val < x){
            if(!beforeStart){
                beforeStart = new ListNode(start.val)
                beforeEnd = beforeStart
            }else{
                beforeEnd.next = new ListNode(start.val)
                beforeEnd = beforeEnd.next
            }
        }else{
            if(!afterStart){
                afterStart = new ListNode(start.val)
                afterEnd = afterStart
            }else{
                afterEnd.next = new ListNode(start.val)
                afterEnd = afterEnd.next
            }
        }
        
        start = next
    }
    
    if(!beforeStart) return afterStart
    
    beforeEnd.next = afterStart
    
    return beforeStart
    
};