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
var middleNode = function(head) {
    let length = 0
    let tmpHead = head
    while(tmpHead.next){
        length++
        tmpHead = tmpHead.next
    }
     
    let middle = Math.ceil(length/2)
    tmpHead = head
    while(middle > 0){
        tmpHead = tmpHead.next
        middle--
    }
    
    return tmpHead 
};