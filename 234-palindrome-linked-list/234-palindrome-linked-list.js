/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head
    let prev = null
    let temp = null
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    
    while(slow){
        temp = slow.next
        slow.next = prev
        prev = slow 
        slow = temp
    }
    
    let tail = prev
    
    
    while(tail && head){
        if(tail.val !== head.val) return false
        tail = tail.next
        head = head.next
    }
    
    
    return true
};
