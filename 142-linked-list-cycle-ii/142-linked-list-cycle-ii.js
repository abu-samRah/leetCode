/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    let cycleLen = 0
    
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            cycleLen =  getLinkedListCycleLength(slow)
            break
        }
    }
    
    return getStartOfLinkedListCycle(cycleLen,head)
};

const getLinkedListCycleLength = (slow) =>{
    let curr = slow.next
    let count = 1
    while(curr!==slow) {
        count++
        curr = curr.next
    }
    return count
}

const getStartOfLinkedListCycle = (cycleLen,head) =>{
    if(!cycleLen) return null
    
    let first = head
    let second = head
    
    let count = cycleLen
    
    while(count){
        second = second.next
        count--
    }
    
    while(first!==second){
        first = first.next
        second = second.next
    }
    
    return first
}